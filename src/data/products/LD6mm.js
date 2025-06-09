// Basic Information
export const basicInfo = {
  id: 'LD6mm',
  name: 'Mini Linear Damper Φ6mm',
  category: 'Mini Linear Dampers',
  categoryId: 'LD6mm',
  seriesId: 'LD6mm',
  shortDescription: 'Mini linear hydraulic dampers with one-way damping',
  description: 'Mini linear hydraulic dampers with one-way damping, featuring automatic spring return and re-arm mechanism. Ideal for precision control in compact applications.',
  image: '/images/products/products_1.jpg'
}

// Technical Specifications
export const specifications = {
  specs: {
    "Force Range": "0-100N",
    "Stroke Length": "10-50mm",
    "Temperature": "-10°C to 60°C",
    "Material": "Precision steel"
  },
  serviceLife: {
    value: '100,000 cycles',
    testingProof: true
  }
}

// Product Features
export const features = [
  {
    id: 'compact',
    content: 'Compact and lightweight design for limited space applications'
  },
  {
    id: 'precision',
    content: 'High-precision damping control'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'size',
    title: 'Compact Size',
    description: 'Ultra-compact 6mm diameter design for minimal space requirements'
  },
  {
    id: 'performance',
    title: 'Reliable Performance',
    description: 'Consistent damping force and smooth operation'
  }
]

// Export Complete Product Data
export const productData = {
  ...basicInfo,
  specs: specifications,
  features,
  advantages
}