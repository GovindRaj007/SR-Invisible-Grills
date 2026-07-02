const fs = require('fs');
const path = require('path');
const domain = 'https://srinvisiblegrillschennai.in';
const servicesPath = path.resolve('src/data/services.ts');
const locationsPath = path.resolve('src/data/locationContent.ts');
const publicDir = path.resolve('public');
const servicesText = fs.readFileSync(servicesPath, 'utf-8');
const locationText = fs.readFileSync(locationsPath, 'utf-8');
const locationSlugs = [...locationText.matchAll(/slug:\s*['\"]([^'\"]+)['\"]/g)].map(m => m[1]);
const urls = new Set(['/', '/about', '/contact', '/privacy-policy']);
locationSlugs.forEach(slug => {
  urls.add(slug === 'chennai' ? '/invisible-grills-chennai' : `/invisible-grills-${slug}`);
});
let currentCategory = null;
servicesText.split(/\r?\n/).forEach(line => {
  const catMatch = line.match(/^\s{2}slug:\s*['\"]([^'\"]+)['\"]/);
  if (catMatch) currentCategory = catMatch[1];
  const serviceMatch = line.match(/^\s{6}slug:\s*['\"]([^'\"]+)['\"]/);
  if (serviceMatch && currentCategory) {
    urls.add(`/services/${currentCategory}/${serviceMatch[1]}`);
  }
});
const sitemap = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
[...urls].sort().forEach(url => {
  sitemap.push('  <url>');
  sitemap.push(`    <loc>${domain}${url}</loc>`);
  sitemap.push('    <changefreq>weekly</changefreq>');
  sitemap.push('    <priority>0.8</priority>');
  sitemap.push('  </url>');
});
sitemap.push('</urlset>');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap.join('\n') + '\n', 'utf-8');
const robotsPath = path.join(publicDir, 'robots.txt');
let robots = '';
if (fs.existsSync(robotsPath)) robots = fs.readFileSync(robotsPath, 'utf-8');
if (!robots.includes('Sitemap:')) {
  robots = robots.trim();
  robots += (robots.length ? '\n\n' : '') + `Sitemap: ${domain}/sitemap.xml`;
  if (!robots.endsWith('\n')) robots += '\n';
  fs.writeFileSync(robotsPath, robots, 'utf-8');
}
console.log('Generated public/sitemap.xml with', urls.size, 'URLs');
console.log('Ensured robots.txt contains sitemap reference');
