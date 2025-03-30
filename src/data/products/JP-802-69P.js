// Basic Information
export const basicInfo = {
  id: 'JP-802-69P',
  name: 'JP-802-69P',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  seriesId: 'JP-802',
  shortDescription: 'Long Stroke Industrial Linear Damper',
  description: 'The JP-802-69P features a substantial 69mm stroke length in a 10.5mm diameter design. This P-type variant is engineered for applications requiring extended motion control with precise damping characteristics.',
  image: '/images/products/JP-802-69P.jpg'
}

// Technical Specifications
export const specifications = {
  strokeRange: {
    value: '69mm',
    isCustomizable: false,
    category: 'Long stroke'
  },
  diameter: {
    value: '10.5mm',
    tolerance: '±0.1mm'
  },
  operatingTemperature: '20°C - 60°C',
  materials: {
    shell: {
      material: 'Stainless iron',
      finish: 'Precision polished'
    },
    pistonRod: {
      material: 'POM',
      features: 'Extended length stability'
    },
    oil: 'Silicone Oil'
  },
  serviceLife: {
    value: '50,000 cycles',
    testingProof: true
  },
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment',
  applications: ['Extended range motion control', 'Long-travel mechanisms', 'Industrial automation']
}

// Product Features
export const features = [
  {
    id: 'long-stroke',
    content: 'Extended 69mm stroke length for comprehensive motion control'
  },
  {
    id: 'stability',
    content: 'Enhanced stability design for consistent performance over extended stroke'
  },
  {
    id: 'material',
    content: 'Premium stainless iron construction with specialized POM piston rod'
  },
  {
    id: 'durability',
    content: 'Proven 50,000 cycle service life with reliable operation'
  },
  {
    id: 'precision',
    content: 'Maintains precise damping control throughout the entire stroke range'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'extended-stroke',
    title: 'Extended Motion Range',
    description: 'Features a long 69mm stroke length, ideal for applications requiring extensive motion control.'
  },
  {
    id: 'balanced-design',
    title: 'Balanced Performance',
    description: 'Optimized 10.5mm diameter design provides excellent stability and control.'
  },
  {
    id: 'reliability',
    title: 'Proven Reliability',
    description: 'Engineered for 50,000 cycles with consistent damping characteristics.'
  }
]

// Applications
export const applications = [
  {
    id: 'automation',
    title: 'Industrial Automation',
    description: 'Perfect for automated systems requiring extended motion control.'
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    description: 'Ideal for machinery with long-travel damping requirements.'
  },
  {
    id: 'equipment',
    title: 'Specialized Equipment',
    description: 'Suitable for equipment requiring precise control over longer distances.'
  }
]

// Related Products
export const relatedProducts = [
  {
    id: 'JP-802-82P',
    name: 'JP-802-82P',
    description: 'Longer stroke variant with similar diameter',
    link: '/products/JP-802-82P'
  },
  {
    id: 'JP-802-60P',
    name: 'JP-802-60P',
    description: 'Alternative P-type with shorter stroke',
    link: '/products/JP-802-60P'
  }
]

// Product Background Information
export const background = {
  development: 'The JP-802-69P was developed to meet the growing demand for extended stroke control in industrial applications. The combination of a 69mm stroke length with a 10.5mm diameter represents an optimal balance of reach and stability.',
  achievement: 'Successfully implemented a long-stroke design while maintaining consistent damping performance throughout the entire stroke range. The development process focused on ensuring stability and precision in extended motion applications.',
  status: 'Currently deployed across various industrial automation systems, demonstrating excellent reliability in long-stroke applications. Field performance data confirms consistent operation and durability.',
  marketInsight: 'The market for long-stroke dampers continues to expand with increasing automation needs. The JP-802-69P addresses this demand with its extended stroke capabilities while maintaining precise control characteristics.'
}

// Export Complete Product Data
export const productData = {
  ...basicInfo,
  specs: specifications,
  features: features,
  advantages: advantages,
  applications: applications,
  relatedProducts: relatedProducts,
  background: background,
  seriesInfo: {
    series: 'JP-802',
    variant: 'Long stroke P-type',
    seriesLink: '/products/JP-802'
  }
}