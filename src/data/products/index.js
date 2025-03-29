import { productData as JP_CA1210 } from './JP-CA1210'

const productsData = {
  'JP-CA1210': JP_CA1210
}

export const getProductById = (id) => {
  console.log('Fetching product:', id) // 添加调试日志
  return productsData[id]
}

export const getAllProducts = () => Object.values(productsData)
export const getProductsByCategory = (categoryId) => 
  Object.values(productsData).filter(product => product.categoryId === categoryId)

export default productsData