const fs = require('fs');
const path = require('path');
const servicesPath = path.resolve('src/data/services.ts');
const locationsPath = path.resolve('src/data/locationContent.ts');
const publicPath = path.resolve('public');
const domain = 'https://srinvisiblegrillschennai.in';

const locationText = fs.readFileSync(locationsPath, 'utf-8');
const locationSlugs = [...locationText.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);
const serviceText = fs.readFileSync(servicesPath, 'utf-8');
const lines = serviceText.split(/\r?\n/);
let currentCategory = null;
const serviceUrls = [];
for (const line of lines) {
  const catMatch = line.match(/^\s{2}slug:\s*["']([^"']+)["']/);
  if (catMatch) {
    currentCategory = catMatch[1];
    continue;
  }
  const serviceMatch = line.match(/^\s{6}slug:\s*["']([^"']+)["']/);
  if (serviceMatch && currentCategory) {
    serviceUrls.push({ category: currentCategory, slug: serviceMatch[1] });
  }
}

const urls = new Set(['/','/about','/contact','/privacy-policy']);
for (const slug of locationSlugs) {
  urls.add(slug === 'chennai' ? '/invisible-grills-chennai' : `/invisible-grills-${slug}`);
}
for (const { category, slug } of serviceUrls) {
  urls.add(`/services/${category}/${slug}`);
}
const sitemapXml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
for (const url of [...urls].sort()) {
  sitemapXml.push('  <url>');
  sitemapXml.push(`    <loc>${domain}${url}</loc>`);
  sitemapXml.push('    <changefreq>weekly</changefreq>');
  sitemapXml.push('    <priority>0.8</priority>');
  sitemapXml.push('  </url>');
}
sitemapXml.push('</urlset>');
if (!fs.existsSync(publicPath)) fs.mkdirSync(publicPath, { recursive: true });
fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), sitemapXml.join('\n') + '\n', 'utf-8');

const robotsPath = path.join(publicPath, 'robots.txt');
let robots = '';
if (fs.existsSync(robotsPath)) robots = fs.readFileSync(robotsPath, 'utf-8');
if (!robots.includes('Sitemap:')) {
  robots = robots.trim();
  robots += (robots.length ? '\n\n' : '') + `Sitemap: ${domain}/sitemap.xml`;
  if (!robots.endsWith('\n')) robots += '\n';
  fs.writeFileSync(robotsPath, robots, 'utf-8');
}
console.log('Created public/sitemap.xml with', urls.size, 'URLs');
console.log('Updated public/robots.txt with sitemap reference');
