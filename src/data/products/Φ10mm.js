// Basic Information
export const basicInfo = {
  id: 'Φ10mm',
  name: 'Linear Damper Φ10mm',
  category: 'Standard Linear Dampers',
  categoryId: 'Φ10mm',
  seriesId: 'Φ10mm',
  shortDescription: 'Standard linear hydraulic dampers with one-way damping',
  description: 'Standard linear hydraulic dampers with one-way damping and spring return. Offers reliable performance for medium-duty applications.',
  image: '/images/products/products_3.jpg'
}

// Technical Specifications
export const specifications = {
  specs: {
    "Force Range": "0-870N",
    "Stroke Length": "20-150mm",
    "Temperature": "-20°C to 80°C",
    "Material": "Industrial steel"
  },
  serviceLife: {
    value: '150,000 cycles',
    testingProof: true
  }
}

// Product Features
export const features = [
  {
    id: 'reliable',
    content: 'Reliable performance for medium-duty applications'
  },
  {
    id: 'industrial',
    content: 'Industrial-grade construction and durability'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'force',
    title: 'High Force Capacity',
    description: 'Substantial damping force for medium-duty applications'
  },
  {
    id: 'versatility',
    title: 'Wide Application Range',
    description: 'Suitable for various industrial applications'
  }
]

// Export Complete Product Data
export const productData = {
  ...basicInfo,
  specs: specifications,
  features,
  advantages
}