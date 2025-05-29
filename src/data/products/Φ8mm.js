// Basic Information
export const basicInfo = {
  id: 'Φ8mm',
  name: 'Linear Damper Φ8mm',
  category: 'Standard Linear Dampers',
  categoryId: 'Φ8mm',
  seriesId: 'Φ8mm',
  shortDescription: 'Linear hydraulic dampers with one-way damping',
  description: 'Linear hydraulic dampers with one-way damping, automatic spring return and re-arm functionality. Perfect balance of size and performance.',
  image: '/images/products/products_2.jpg'
}

// Technical Specifications
export const specifications = {
  specs: {
    "Force Range": "0-350N",
    "Stroke Length": "10-100mm",
    "Temperature": "-10°C to 70°C",
    "Material": "High-grade steel"
  },
  serviceLife: {
    value: '100,000 cycles',
    testingProof: true
  }
}

// Product Features
export const features = [
  {
    id: 'versatile',
    content: 'Versatile design suitable for various applications'
  },
  {
    id: 'balanced',
    content: 'Balanced performance between size and force output'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'performance',
    title: 'Optimal Performance',
    description: 'Perfect balance between size and damping force'
  },
  {
    id: 'durability',
    title: 'Enhanced Durability',
    description: 'High-grade steel construction for extended service life'
  }
]

// Export Complete Product Data
export const productData = {
  ...basicInfo,
  specs: specifications,
  features,
  advantages
}