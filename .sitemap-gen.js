const fs = require('fs');
const path = require('path');
const servicePath = path.join('src', 'data', 'services.ts');
const locationPath = path.join('src', 'data', 'locationContent.ts');
const serviceSource = fs.readFileSync(servicePath, 'utf8');
const locationSource = fs.readFileSync(locationPath, 'utf8');
const urls = new Set(['/','/about','/contact','/privacy-policy']);
let currentCategory = null;
serviceSource.split(/\r?\n/).forEach((line) => {
  const trimmed = line.trim();
  const catMatch = trimmed.match(/^slug:\s*"([^"]+)"\s*,?$/);
  if (!catMatch) return;
  const indent = line.search(/\S/);
  if (indent === 2) {
    currentCategory = catMatch[1];
  } else if (indent === 4 && currentCategory) {
    urls.add(`/services/${currentCategory}/${catMatch[1]}`);
  }
});
const locationRegex = /slug:\s*"([^"]+)"/g;
let match;
while ((match = locationRegex.exec(locationSource)) !== null) {
  const slug = match[1];
  urls.add(slug === 'chennai' ? '/invisible-grills-chennai' : `/invisible-grills-${slug}`);
}
const xml = ['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
[...urls].sort().forEach((url) => {
  xml.push('  <url>');
  xml.push(`    <loc>https://srinvisiblegrillschennai.in${url}</loc>`);
  xml.push('    <changefreq>weekly</changefreq>');
  xml.push('    <priority>0.8</priority>');
  xml.push('  </url>');
});
xml.push('</urlset>');
fs.writeFileSync(path.join('public', 'sitemap.xml'), xml.join('\n') + '\n', 'utf8');
let robots = fs.readFileSync(path.join('public', 'robots.txt'), 'utf8');
if (!robots.includes('Sitemap:')) {
  robots = robots.trim() + '\n\nSitemap: https://srinvisiblegrillschennai.in/sitemap.xml\n';
  fs.writeFileSync(path.join('public', 'robots.txt'), robots, 'utf8');
}
console.log('Wrote public/sitemap.xml with', urls.size, 'URLs');
