
// 合并所有产品数据
const productsData = {

}

// 根据产品ID获取产品数据
export const getProductDataById = (id) => {
  console.log('Fetching product:', id)
  return productsData[id]
}

// 统一的产品获取函数
export const getProductById = (id) => {
  console.log('Fetching product:', id)
  return productsData[id] || null
}

export const getAllProducts = () => Object.values(productsData)
export const getProductsByCategory = (categoryId) => 
  Object.values(productsData).filter(product => product.categoryId === categoryId)

export default productsData