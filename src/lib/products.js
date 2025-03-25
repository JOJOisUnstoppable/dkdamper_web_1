import { allProducts } from 'contentlayer/generated'

export function getProductById(id) {
  return allProducts.find(p => p.id === parseInt(id)) || null
}

export function getProductsByCategory(category) {
  return category === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === category)
}