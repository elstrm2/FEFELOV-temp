import fs from 'node:fs';

const ru = JSON.parse(fs.readFileSync('./locales/ru.json', 'utf8'));
const zh = JSON.parse(fs.readFileSync('./locales/zh.json', 'utf8'));

const getKeys = (obj, prefix = '') => {
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
  return keys.sort();
};

const ruKeys = new Set(getKeys(ru));
const zhKeys = new Set(getKeys(zh));

const onlyRu = [...ruKeys].filter((k) => !zhKeys.has(k));
const onlyZh = [...zhKeys].filter((k) => !ruKeys.has(k));

if (onlyRu.length === 0 && onlyZh.length === 0) {
  console.log('OK');
} else {
  if (onlyRu.length > 0) {
    console.log('КЛЮЧИ ТОЛЬКО В ru.json:');
    for (const k of onlyRu) console.log(`  - ${k}`);
    console.log('');
  }
  if (onlyZh.length > 0) {
    console.log('КЛЮЧИ ТОЛЬКО В zh.json:');
    for (const k of onlyZh) console.log(`  - ${k}`);
  }
}
