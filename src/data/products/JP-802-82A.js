// Basic Information
export const basicInfo = {
  id: 'JP-802-82A',
  name: 'JP-802-82A',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  seriesId: 'JP-802',
  shortDescription: 'Long Stroke A-Type Industrial Linear Damper',
  description: 'The JP-802-82A features an extended 82mm stroke length in a 10.5mm diameter design. This A-type variant delivers specialized damping characteristics for applications requiring precise control over longer distances.',
  image: '/images/products/JP-802-82A.jpg'
}

// Technical Specifications
export const specifications = {
  strokeRange: {
    value: '82mm',
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
      features: 'Enhanced A-type characteristics'
    },
    oil: 'Silicone Oil'
  },
  serviceLife: {
    value: '50,000 cycles',
    testingProof: true
  },
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment',
  applications: ['Precision long-stroke control', 'Advanced industrial equipment', 'Specialized machinery']
}

// Product Features
export const features = [
  {
    id: 'long-stroke',
    content: 'Extended 82mm stroke length with A-type damping characteristics'
  },
  {
    id: 'precision',
    content: 'Enhanced control precision throughout the stroke range'
  },
  {
    id: 'material',
    content: 'Premium stainless iron construction with specialized POM piston rod'
  },
  {
    id: 'durability',
    content: 'Proven 50,000 cycle service life with consistent A-type performance'
  },
  {
    id: 'versatility',
    content: 'Adaptable to various precision-focused applications'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'a-type-control',
    title: 'A-Type Performance',
    description: 'Specialized damping characteristics optimized for precise motion control.'
  },
  {
    id: 'extended-stroke',
    title: 'Extended Range',
    description: 'Long 82mm stroke length combined with precise A-type control.'
  },
  {
    id: 'reliability',
    title: 'Proven Reliability',
    description: 'Engineered for 50,000 cycles with consistent A-type damping characteristics.'
  }
]

// Applications
export const applications = [
  {
    id: 'precision',
    title: 'Precision Equipment',
    description: 'Ideal for equipment requiring precise control over extended distances.'
  },
  {
    id: 'specialized',
    title: 'Specialized Machinery',
    description: 'Perfect for machinery needing specific A-type damping characteristics.'
  },
  {
    id: 'advanced',
    title: 'Advanced Applications',
    description: 'Suitable for advanced industrial applications requiring precise motion control.'
  }
]

// Related Products
export const relatedProducts = [
  {
    id: 'JP-802-82P',
    name: 'JP-802-82P',
    description: 'P-type variant with same stroke length',
    link: '/products/JP-802-82P'
  },
  {
    id: 'JP-802-49A',
    name: 'JP-802-49A',
    description: 'Shorter stroke A-type option',
    link: '/products/JP-802-49A'
  }
]

// Product Background Information
export const background = {
  development: 'The JP-802-82A was developed to meet specialized requirements for precise control in long-stroke applications. The combination of A-type damping characteristics with an 82mm stroke length provides unique control capabilities.',
  achievement: 'Successfully integrated A-type damping characteristics into a long-stroke design while maintaining precise control throughout the entire stroke range. The development process focused on optimizing damping performance for specialized applications.',
  status: 'Currently deployed in various precision-focused industrial applications, demonstrating excellent control characteristics. Field performance data confirms reliable operation in demanding environments.',
  marketInsight: 'There is growing demand for specialized long-stroke damping solutions. The JP-802-82A addresses this market need by combining extended stroke length with precise A-type control characteristics.'
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
    variant: 'Long stroke A-type',
    seriesLink: '/products/JP-802'
  }
}