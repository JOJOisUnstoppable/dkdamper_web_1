import { getAllProducts } from '@/data/products';

export async function GET() {
  const products = await getAllProducts();
  
  const urls = [
    { url: '/', lastmod: new Date().toISOString(), priority: 1.0 },
    { url: '/products', lastmod: new Date().toISOString(), priority: 0.8 },
    ...products.map(product => ({
      url: `/products/${product.id}`,
      lastmod: new Date().toISOString(),
      priority: 0.7
    }))
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(url => `
        <url>
          <loc>https://yourdomain.com${url.url}</loc>
          <lastmod>${url.lastmod}</lastmod>
          <priority>${url.priority}</priority>
        </url>
      `).join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}