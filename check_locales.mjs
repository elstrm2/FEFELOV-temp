import fs from 'node:fs';

const ru = JSON.parse(fs.readFileSync('./locales/ru.json', 'utf8'));
const zh = JSON.parse(fs.readFileSync('./locales/zh.json', 'utf8'));

function getKeys(obj, prefix = '') {
  const keys = [];
  for (const k in obj) {
    const fullKey = prefix ? `${prefix}.${k}` : k;
    const value = obj[k];
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      keys.push(...getKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

const ruKeys = new Set(getKeys(ru));
const zhKeys = new Set(getKeys(zh));

const onlyInRu = [...ruKeys].filter((k) => !zhKeys.has(k)).sort();
const onlyInZh = [...zhKeys].filter((k) => !ruKeys.has(k)).sort();

let hasIssues = false;

if (onlyInRu.length > 0) {
  hasIssues = true;
  console.log('КЛЮЧИ В ru.json БЕЗ zh.json:');
  for (const k of onlyInRu) console.log(`  - ${k}`);
  console.log('');
}

if (onlyInZh.length > 0) {
  hasIssues = true;
  console.log('КЛЮЧИ В zh.json БЕЗ ru.json:');
  for (const k of onlyInZh) console.log(`  - ${k}`);
  console.log('');
}

if (!hasIssues) {
  console.log('OK');
}
