import { productData as JP_CA1210 } from './JP-CA1210'
import { productData as PR_L202 } from './PR-L202'
import { productData as PR_L208 } from './PR-L208'
import { productData as PR_L223 } from './PR-L223'
import { productData as PR_L241 } from './PR-L241'
import { productData as JP_CA10 } from './JP-CA10'

const productsData = {
  'JP-CA1210': JP_CA1210,
  'PR-L202': PR_L202,
  'PR-L208': PR_L208,
  'PR-L223': PR_L223,
  'PR-L241': PR_L241,
  'JP-CA10': JP_CA10
}

export const getProductById = (id) => {
  console.log('Fetching product:', id) // 添加调试日志
  return productsData[id]
}

export const getAllProducts = () => Object.values(productsData)
export const getProductsByCategory = (categoryId) => 
  Object.values(productsData).filter(product => product.categoryId === categoryId)

export default productsData