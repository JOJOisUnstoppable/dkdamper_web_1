export const categories = [

];

// 按系列分组的产品
export const productSeries = {
 
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