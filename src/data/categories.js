export const categories = [
  {
    id: 'LD6mm',
    name: 'LD6mm Series',
    description: 'LD6mm Mini Linear Damper', // 从 page.js 中的 model 字段获取
    products: ['LD6mm']
  },
  {
    id: 'LD8mm',
    name: 'LD8mm Series',
    description: 'LD8mm Linear Damper', // 从 page.js 中的 model 字段获取
    products: ['LD8mm']
  },
  {
    id: 'LD10mm',
    name: 'LD10mm Series',
    description: 'LD10mm Linear Damper', // 从 page.js 中的 model 字段获取
    products: ['LD10mm']
  },
  {
    id: 'LD12mm',
    name: 'LD12mm Series',
    description: 'LD12mm Max Linear Damper', // 从 page.js 中的 model 字段获取
    products: ['LD12mm']
  }
];

// 按系列分组的产品
export const productSeries = {
  'LD6mm': {
    name: 'LD6mm Series',
    products: ['LD6mm']
  },
  'LD8mm': {
    name: 'LD8mm Series',
    products: ['LD8mm']
  },
  'LD10mm': {
    name: 'LD10mm Series',
    products: ['LD10mm']
  },
  'LD12mm': {
    name: 'LD12mm Series',
    products: ['LD12mm']
  }
};

// 获取产品所属的系列
export const getProductSeries = (productId) => {
  for (const [series, data] of Object.entries(productSeries)) {
    if (data.products.includes(productId)) {
      return series;
    }
  }
  return null;
};

// 获取特定系列的所有产品
export const getSeriesProducts = (seriesId) => {
  return productSeries[seriesId]?.products || [];
};