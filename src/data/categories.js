export const categories = [
  { id: 'all', name: 'All Products' },
  { 
    id: 'medical', 
    name: 'Medical Equipment Series',
    description: 'High-precision dampers for medical equipment applications',
    products: ['JP-CA1210', 'JP-CA10', 'JP-CU038']
  },
  { 
    id: 'industrial', 
    name: 'Industrial Series',
    description: 'Professional dampers for industrial applications',
    products: [
      // JP-801 Series
      'JP-801-108P', 'JP-801-82P', 'JP-801-82A', 
      'JP-801-77A', 'JP-801-50A', 'JP-801-M01',
      // JP-802 Series
      'JP-802-69P', 'JP-802-82P', 'JP-802-60P',
      'JP-802-82A', 'JP-802-49P', 'JP-802-49A',
      'JP-802-88', 'JP-802-115',
      // JP-803 Series
      'JP-803-140P', 'JP-803-92P', 'JP-803-117P', 'JP-803-92A'
    ]
  },
  { 
    id: 'professional', 
    name: 'Professional Series',
    description: 'High-performance dampers for specialized applications',
    products: ['PR-L202', 'PR-L208', 'PR-L223', 'PR-L241']
  }
]

// 按系列分组的产品
export const productSeries = {
  'JP-801': {
    name: 'JP-801 Series',
    products: ['JP-801-108P', 'JP-801-82P', 'JP-801-82A', 'JP-801-77A', 'JP-801-50A', 'JP-801-M01']
  },
  'JP-802': {
    name: 'JP-802 Series',
    products: ['JP-802-69P', 'JP-802-82P', 'JP-802-60P', 'JP-802-82A', 'JP-802-49P', 'JP-802-49A', 'JP-802-88', 'JP-802-115']
  },
  'JP-803': {
    name: 'JP-803 Series',
    products: ['JP-803-140P', 'JP-803-92P', 'JP-803-117P', 'JP-803-92A']
  },
  'Medical': {
    name: 'Medical Series',
    products: ['JP-CA1210', 'JP-CA10', 'JP-CU038']
  },
  'Professional': {
    name: 'Professional Series',
    products: ['PR-L202', 'PR-L208', 'PR-L223', 'PR-L241']
  }
}

// 获取产品所属的系列
export const getProductSeries = (productId) => {
  for (const [series, data] of Object.entries(productSeries)) {
    if (data.products.includes(productId)) {
      return series
    }
  }
  return null
}

// 获取特定系列的所有产品
export const getSeriesProducts = (seriesId) => {
  return productSeries[seriesId]?.products || []
}