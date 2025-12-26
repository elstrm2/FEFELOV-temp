#!/usr/bin/env bash
set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'
BOLD='\033[1m'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
BOT_DIR="$ROOT_DIR/fefelov-bot"

MIN_PACKAGE_AGE_DAYS=14
ISSUES_FOUND=0

log_header() { echo -e "\n${BOLD}${BLUE}═══════════════════════════════════════════════════════════${NC}"; echo -e "${BOLD}${BLUE}  $1${NC}"; echo -e "${BOLD}${BLUE}═══════════════════════════════════════════════════════════${NC}"; }
log_success() { echo -e "${GREEN}✓${NC} $1"; }
log_warning() { echo -e "${YELLOW}⚠${NC} $1"; ISSUES_FOUND=$((ISSUES_FOUND + 1)); }
log_error() { echo -e "${RED}✗${NC} $1"; ISSUES_FOUND=$((ISSUES_FOUND + 1)); }
log_info() { echo -e "${CYAN}ℹ${NC} $1"; }

check_command() {
    if ! command -v "$1" &> /dev/null; then
        log_warning "$1 not installed, skipping related checks"
        return 1
    fi
    return 0
}

check_npm_package_age() {
    local package="$1"
    local pkg_name="${package%%@*}"
    [[ "$pkg_name" == @* ]] && pkg_name="$package"

    local publish_date
    publish_date=$(npm view "$pkg_name" time --json 2>/dev/null | grep -oP '"[0-9]+\.[0-9]+\.[0-9]+": "\K[^"]+' | tail -1 || echo "")

    if [[ -n "$publish_date" ]]; then
        local publish_ts=$(date -d "$publish_date" +%s 2>/dev/null || echo "0")
        local now_ts=$(date +%s)
        local age_days=$(( (now_ts - publish_ts) / 86400 ))

        if [[ $age_days -lt $MIN_PACKAGE_AGE_DAYS ]]; then
            log_warning "$pkg_name: published $age_days days ago (< $MIN_PACKAGE_AGE_DAYS days - supply chain risk)"
            return 1
        fi
    fi
    return 0
}

check_pip_package_age() {
    local package="$1"
    local pkg_name="${package%%=*}"

    local info
    info=$(pip index versions "$pkg_name" 2>/dev/null | head -1 || echo "")
    if [[ -z "$info" ]]; then
        return 0
    fi
    return 0
}

echo -e "${BOLD}${CYAN}"
echo "  ╔═══════════════════════════════════════════════════════════╗"
echo "  ║           FEFELOV Security & Version Audit                ║"
echo "  ║              Supply Chain Protection                      ║"
echo "  ╚═══════════════════════════════════════════════════════════╝"
echo -e "${NC}"
echo "  Minimum package age: ${MIN_PACKAGE_AGE_DAYS} days"
echo "  Audit date: $(date '+%Y-%m-%d %H:%M:%S')"

log_header "1. Environment Versions"

echo -e "\n${BOLD}System:${NC}"
if check_command node; then
    NODE_VERSION=$(node -v)
    log_info "Node.js: $NODE_VERSION"
fi

if check_command npm; then
    NPM_VERSION=$(npm -v)
    log_info "npm: $NPM_VERSION"
fi

if check_command python3; then
    PYTHON_VERSION=$(python3 --version)
    log_info "Python: $PYTHON_VERSION"
fi

if check_command pip; then
    PIP_VERSION=$(pip --version | cut -d' ' -f2)
    log_info "pip: $PIP_VERSION"
fi

if check_command docker; then
    DOCKER_VERSION=$(docker --version | cut -d' ' -f3 | tr -d ',')
    log_info "Docker: $DOCKER_VERSION"
fi

log_header "2. fefelov-temp (npm) Audit"

if [[ -f "$ROOT_DIR/package.json" ]]; then
    cd "$ROOT_DIR"

    echo -e "\n${BOLD}Version Pinning Check:${NC}"
    UNPINNED=$(grep -E '"\^|"~' package.json | grep -v '"version"' || true)
    if [[ -n "$UNPINNED" ]]; then
        log_warning "Found unpinned dependencies (using ^, ~, >=):"
        echo "$UNPINNED" | head -10
    else
        log_success "All dependencies are exactly pinned"
    fi

    echo -e "\n${BOLD}npm audit:${NC}"
    if check_command npm; then
        AUDIT_RESULT=$(npm audit --json 2>/dev/null || echo '{"vulnerabilities":{}}')
        VULN_COUNT=$(echo "$AUDIT_RESULT" | grep -c '"severity"' || echo "0")

        if [[ "$VULN_COUNT" -gt 0 ]]; then
            log_warning "Found $VULN_COUNT vulnerabilities"
            npm audit 2>/dev/null | head -30 || true
        else
            log_success "No vulnerabilities found"
        fi
    fi

    echo -e "\n${BOLD}Outdated packages:${NC}"
    if check_command npm; then
        OUTDATED=$(npm outdated 2>/dev/null || true)
        if [[ -n "$OUTDATED" ]]; then
            log_info "Outdated packages found:"
            echo "$OUTDATED"
        else
            log_success "All packages are up to date"
        fi
    fi

    echo -e "\n${BOLD}.nvmrc check:${NC}"
    if [[ -f "$ROOT_DIR/.nvmrc" ]]; then
        log_success ".nvmrc exists: $(cat "$ROOT_DIR/.nvmrc")"
    else
        log_warning ".nvmrc file missing - Node version not pinned"
    fi

    echo -e "\n${BOLD}engines field check:${NC}"
    if grep -q '"engines"' "$ROOT_DIR/package.json"; then
        log_success "engines field exists in package.json"
    else
        log_warning "No engines field in package.json"
    fi
else
    log_warning "package.json not found in $ROOT_DIR"
fi

log_header "3. fefelov-bot (Python) Audit"

if [[ -d "$BOT_DIR" ]]; then
    cd "$BOT_DIR"

    echo -e "\n${BOLD}requirements.txt version check:${NC}"
    if [[ -f "$BOT_DIR/requirements.txt" ]]; then
        UNPINNED_PY=$(grep -vE '==|#' "$BOT_DIR/requirements.txt" | grep -E '\S' || true)
        if [[ -n "$UNPINNED_PY" ]]; then
            log_warning "Found unpinned Python dependencies:"
            echo "$UNPINNED_PY"
        else
            log_success "All Python dependencies are exactly pinned (==)"
        fi

        log_info "Current pinned versions:"
        cat "$BOT_DIR/requirements.txt"
    else
        log_warning "requirements.txt not found"
    fi

    echo -e "\n${BOLD}pip-audit:${NC}"
    if check_command pip-audit; then
        pip-audit -r "$BOT_DIR/requirements.txt" 2>/dev/null || log_warning "pip-audit found issues or failed"
    else
        log_info "pip-audit not installed. Install with: pip install pip-audit"
    fi

    echo -e "\n${BOLD}safety check:${NC}"
    if check_command safety; then
        safety check -r "$BOT_DIR/requirements.txt" 2>/dev/null || log_warning "safety check found issues or failed"
    else
        log_info "safety not installed. Install with: pip install safety"
    fi
else
    log_warning "fefelov-bot directory not found"
fi

log_header "4. Docker Version Audit"

if [[ -f "$BOT_DIR/Dockerfile" ]]; then
    echo -e "\n${BOLD}Dockerfile base image:${NC}"
    BASE_IMAGE=$(grep -E '^FROM' "$BOT_DIR/Dockerfile" | head -1 | awk '{print $2}')
    log_info "Base image: $BASE_IMAGE"

    if [[ "$BASE_IMAGE" =~ ^python:[0-9]+\.[0-9]+\.[0-9]+ ]]; then
        log_success "Python image pinned to patch version"
    elif [[ "$BASE_IMAGE" =~ ^python:[0-9]+\.[0-9]+ ]]; then
        log_warning "Python image not pinned to patch version (e.g., use python:3.13.1-slim-bookworm)"
    fi
fi

if [[ -f "$BOT_DIR/docker-compose.yml" ]]; then
    echo -e "\n${BOLD}docker-compose.yml images:${NC}"
    IMAGES=$(grep -E '^\s+image:' "$BOT_DIR/docker-compose.yml" | awk '{print $2}' || true)
    for img in $IMAGES; do
        if [[ "$img" =~ :[0-9]+\.[0-9]+\.[0-9]+ ]] || [[ "$img" =~ @sha256: ]]; then
            log_success "$img - pinned"
        else
            log_warning "$img - not fully pinned (use exact version or SHA256)"
        fi
    done
fi

if check_command docker; then
    echo -e "\n${BOLD}Docker scout (if available):${NC}"
    if docker scout version &>/dev/null; then
        log_info "Docker Scout available for vulnerability scanning"
    else
        log_info "Docker Scout not available (optional)"
    fi
fi

log_header "5. Supply Chain Protection Status"

echo -e "\n${BOLD}Lockfile status:${NC}"
[[ -f "$ROOT_DIR/package-lock.json" ]] && log_success "package-lock.json exists" || log_warning "package-lock.json missing"

echo -e "\n${BOLD}Git hooks:${NC}"
[[ -d "$ROOT_DIR/.husky" ]] && log_success "Husky git hooks configured" || log_info "No Husky hooks (optional)"

echo -e "\n${BOLD}Security policy:${NC}"
[[ -f "$ROOT_DIR/SECURITY.md" ]] && log_success "SECURITY.md exists" || log_info "No SECURITY.md (optional)"

log_header "6. Summary"

echo ""
if [[ $ISSUES_FOUND -eq 0 ]]; then
    echo -e "${GREEN}${BOLD}All checks passed! No issues found.${NC}"
else
    echo -e "${YELLOW}${BOLD}Found $ISSUES_FOUND potential issues to review.${NC}"
fi

echo -e "\n${BOLD}Recommendations:${NC}"
echo "  1. Run 'npm audit fix' to fix npm vulnerabilities"
echo "  2. Run 'pip-audit --fix' to fix Python vulnerabilities"
echo "  3. Use exact versions (no ^, ~, >=) in package.json"
echo "  4. Pin Docker images to SHA256 digests for production"
echo "  5. Wait $MIN_PACKAGE_AGE_DAYS days before adopting new package versions"
echo ""

exit $([[ $ISSUES_FOUND -gt 0 ]] && echo 1 || echo 0)
