// Basic Information
export const basicInfo = {
  id: 'LD10mm',
  name: 'Linear Damper Φ10mm',
  category: 'Standard Linear Dampers',
  categoryId: 'LD10mm',
  seriesId: 'LD10mm',
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

// Product Background
export const background = {
  development: "The LD10mm damper was engineered to bridge the gap between compact size and industrial-grade performance, targeting medium-duty applications.",
  achievement: "Our R&D team successfully developed a 10mm diameter damper capable of handling up to 870N of force while maintaining precise damping control.",
  status: "As our most versatile product, the LD10mm is widely used in manufacturing equipment, medical devices and automation systems.",
  marketInsight: "The increasing automation in factories and demand for reliable motion control continues to drive strong adoption of the LD10mm across multiple industries."
}

// Export Complete Product Data
export const productData = {
  ...basicInfo,
  specs: specifications,
  features,
  advantages,
  background
}