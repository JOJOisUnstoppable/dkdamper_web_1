export const categories = [
  {
    id: 'Φ6mm',
    name: 'Φ6mm Series',
    description: 'Φ6mm Mini Linear Damper', // 从 page.js 中的 model 字段获取
    products: ['Φ6mm']
  },
  {
    id: 'Φ8mm',
    name: 'Φ8mm Series',
    description: 'Φ8mm Linear Damper', // 从 page.js 中的 model 字段获取
    products: ['Φ8mm']
  },
  {
    id: 'Φ10mm',
    name: 'Φ10mm Series',
    description: 'Φ10mm Linear Damper', // 从 page.js 中的 model 字段获取
    products: ['Φ10mm']
  },
  {
    id: 'Φ12mm',
    name: 'Φ12mm Series',
    description: 'Φ12mm Max Linear Damper', // 从 page.js 中的 model 字段获取
    products: ['Φ12mm']
  }
];

// 按系列分组的产品
export const productSeries = {
  'Φ6mm': {
    name: 'Φ6mm Series',
    products: ['Φ6mm']
  },
  'Φ8mm': {
    name: 'Φ8mm Series',
    products: ['Φ8mm']
  },
  'Φ10mm': {
    name: 'Φ10mm Series',
    products: ['Φ10mm']
  },
  'Φ12mm': {
    name: 'Φ12mm Series',
    products: ['Φ12mm']
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