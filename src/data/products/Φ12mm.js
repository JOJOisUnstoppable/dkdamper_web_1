// Basic Information
export const basicInfo = {
  id: 'Φ12mm',
  name: 'Max Linear Damper Φ12mm',
  category: 'Heavy-duty Linear Dampers',
  categoryId: 'Φ12mm',
  seriesId: 'Φ12mm',
  shortDescription: 'Heavy-duty linear hydraulic dampers with customizable features',
  description: 'Heavy-duty linear hydraulic dampers with customizable stroke and damping direction. Features one-way damping with spring return, ideal for high-force applications.',
  image: '/images/products/products_4.jpg'
}

// Technical Specifications
export const specifications = {
  specs: {
    "Force Range": "0-2400N",
    "Stroke Length": "10-200mm",
    "Temperature": "-20°C to 85°C",
    "Material": "Heavy-duty steel"
  },
  serviceLife: {
    value: '200,000 cycles',
    testingProof: true
  }
}

// Product Features
export const features = [
  {
    id: 'heavy-duty',
    content: 'Heavy-duty construction for demanding applications'
  },
  {
    id: 'customizable',
    content: 'Customizable stroke and damping characteristics'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'power',
    title: 'Maximum Force Output',
    description: 'Superior damping force for heavy-duty applications'
  },
  {
    id: 'adaptability',
    title: 'Customizable Solutions',
    description: 'Adaptable to various high-force requirements'
  }
]

// Export Complete Product Data
export const productData = {
  ...basicInfo,
  specs: specifications,
  features,
  advantages
}