// Basic Information
export const basicInfo = {
  id: 'LD8mm',
  name: 'Linear Damper Φ8mm',
  category: 'Standard Linear Dampers',
  categoryId: 'LD8mm',
  seriesId: 'LD8mm',
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

// Product Background
export const background = {
  development: "The LD8mm damper was developed to meet the growing demand for compact yet powerful damping solutions in industrial automation.",
  achievement: "Through innovative engineering, we achieved a perfect balance between compact size (8mm diameter) and high damping force (up to 350N).",
  status: "The LD8mm has become our best-selling standard damper, widely adopted in packaging, medical and automation equipment.",
  marketInsight: "The trend towards miniaturization in industrial equipment continues to drive demand for compact high-performance dampers like the LD8mm."
}

// Export Complete Product Data
export const productData = {
  ...basicInfo,
  specs: specifications,
  features,
  advantages,
  background
}