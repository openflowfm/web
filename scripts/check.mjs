import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';
const root = resolve(import.meta.dirname, '../dist');
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
assert.equal(ids.length, new Set(ids).size, 'Duplicate HTML ids');
for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  if (url.startsWith('#')) assert(ids.includes(url.slice(1)), `Missing anchor: ${url}`);
  else if (url.startsWith('./') && url !== './') await access(resolve(root, url));
  else if (/^https?:/.test(url)) assert.equal(new URL(url).protocol, 'https:');
}
assert(html.includes('<title>open[flow]'), 'Missing site title');
assert(!/https?:[^"\s]+\.(?:css|js|woff2?)/.test(html), 'Unexpected remote runtime asset');
const css = await readFile(resolve(root, 'styles.css'), 'utf8');
for (const [, url] of css.matchAll(/url\(['"]?(\.\/[^)'"]+)['"]?\)/g)) await access(resolve(root, url));
for (const [, script] of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) new Function(script);
console.log('Static site checks passed: local assets, section links, unique ids and metadata.');
