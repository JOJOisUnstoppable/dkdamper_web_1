import { getAllProducts } from '@/data/products';
import { allPosts } from 'contentlayer/generated';

export async function GET(request) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lineardamper.com';
  
  try {
    // 获取所有产品
    const products = await getAllProducts();
    
    // 获取所有已发布的博客文章
    const publishedPosts = allPosts.filter(post => post.published !== false);
    
    // 定义所有URL
    const urls = [
      // 主要页面
      { url: '/', lastmod: new Date().toISOString(), priority: 1.0, changefreq: 'daily' },
      { url: '/about', lastmod: new Date().toISOString(), priority: 0.8, changefreq: 'weekly' },
      { url: '/contact', lastmod: new Date().toISOString(), priority: 0.8, changefreq: 'weekly' },
      { url: '/industry', lastmod: new Date().toISOString(), priority: 0.8, changefreq: 'weekly' },
      
      // 产品相关页面
      { url: '/products', lastmod: new Date().toISOString(), priority: 0.9, changefreq: 'daily' },
      { url: '/products/categories', lastmod: new Date().toISOString(), priority: 0.7, changefreq: 'weekly' },
      
      // 解决方案页面
      { url: '/solutions', lastmod: new Date().toISOString(), priority: 0.8, changefreq: 'weekly' },
      
      // 博客页面
      { url: '/blog', lastmod: new Date().toISOString(), priority: 0.8, changefreq: 'daily' },
      
      // 产品详情页面
      ...products.map(product => ({
        url: `/products/${product.id}`,
        lastmod: new Date().toISOString(),
        priority: 0.7,
        changefreq: 'weekly'
      })),
      
      // 博客文章页面
      ...publishedPosts.map(post => ({
        url: `/blog/${post.id}`,
        lastmod: new Date(post.date).toISOString(),
        priority: 0.6,
        changefreq: 'monthly'
      }))
    ];

    // 生成XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls.map(url => `<url><loc>${baseUrl}${url.url}</loc><lastmod>${url.lastmod}</lastmod><changefreq>${url.changefreq}</changefreq><priority>${url.priority}</priority></url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // 缓存1小时
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
}