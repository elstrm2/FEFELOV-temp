const fs = require('node:fs');

const ru = JSON.parse(fs.readFileSync('./locales/ru.json', 'utf8'));
const en = JSON.parse(fs.readFileSync('./locales/en.json', 'utf8'));

function getKeys(obj, prefix = '') {
  let keys = [];
  for (const k in obj) {
    const newKey = prefix ? `${prefix}.${k}` : k;
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      keys = keys.concat(getKeys(obj[k], newKey));
    } else {
      keys.push(newKey);
    }
  }
  return keys;
}

const ruKeys = new Set(getKeys(ru));
const enKeys = new Set(getKeys(en));

let issues = false;

const onlyRu = Array.from(ruKeys)
  .filter((k) => !enKeys.has(k))
  .sort();
const onlyEn = Array.from(enKeys)
  .filter((k) => !ruKeys.has(k))
  .sort();

if (onlyRu.length > 0) {
  issues = true;
  console.log('Keys ONLY in ru.json:');
  for (const k of onlyRu) console.log(`  - ${k}`);
  console.log('');
}

if (onlyEn.length > 0) {
  issues = true;
  console.log('Keys ONLY in en.json:');
  for (const k of onlyEn) console.log(`  - ${k}`);
  console.log('');
}

if (!issues) {
  console.log('OK');
}
