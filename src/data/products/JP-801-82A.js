// Basic Information
export const basicInfo = {
  id: 'JP-801-82A',
  name: 'JP-801-82A',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  seriesId: 'JP-801',
  shortDescription: 'Medium Stroke Industrial Linear Damper',
  description: 'The JP-801-82A offers a balanced 38.5mm stroke length in a 10.5mm diameter design, providing optimal damping control for medium-range motion applications. This A-type variant is specifically engineered for applications requiring precise medium-stroke control.',
  image: '/images/products/JP-801-82A.jpg'
}

// Technical Specifications
export const specifications = {
  strokeRange: {
    value: '38.5mm',
    isCustomizable: false,
    category: 'Medium stroke'
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
      features: 'Optimized for medium stroke'
    },
    oil: 'Silicone Oil'
  },
  serviceLife: {
    value: '50,000 cycles',
    testingProof: true
  },
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment',
  applications: ['General industrial equipment', 'Medium-range motion control', 'Precision machinery']
}

// Product Features
export const features = [
  {
    id: 'balanced-stroke',
    content: 'Optimized 38.5mm stroke length for medium-range applications'
  },
  {
    id: 'control',
    content: 'Enhanced damping control characteristics for A-type variant'
  },
  {
    id: 'material',
    content: 'Durable stainless iron shell with precision POM piston rod'
  },
  {
    id: 'durability',
    content: 'Reliable 50,000 cycle service life with consistent performance'
  },
  {
    id: 'versatility',
    content: 'Ideal for various medium-stroke industrial applications'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'optimal-range',
    title: 'Optimal Stroke Range',
    description: 'Features a balanced 38.5mm stroke length, perfect for medium-range motion control requirements.'
  },
  {
    id: 'a-type',
    title: 'A-Type Performance',
    description: 'Specialized A-type variant offering unique damping characteristics for precise control.'
  },
  {
    id: 'efficiency',
    title: 'Operational Efficiency',
    description: 'Optimized design for reliable performance in medium-stroke applications.'
  }
]

// Applications
export const applications = [
  {
    id: 'general-industry',
    title: 'General Industrial Equipment',
    description: 'Ideal for common industrial applications requiring medium-range motion control.'
  },
  {
    id: 'precision',
    title: 'Precision Machinery',
    description: 'Perfect for precision equipment where controlled medium-stroke movement is essential.'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Equipment',
    description: 'Suitable for manufacturing processes requiring reliable medium-range damping.'
  }
]

// Related Products
export const relatedProducts = [
  {
    id: 'JP-801-82P',
    name: 'JP-801-82P',
    description: 'P-type variant with extended stroke length',
    link: '/products/JP-801-82P'
  },
  {
    id: 'JP-801-77A',
    name: 'JP-801-77A',
    description: 'Alternative A-type with different specifications',
    link: '/products/JP-801-77A'
  }
]

// Product Background Information
export const background = {
  development: 'The JP-801-82A was engineered as a medium-stroke A-type variant to provide balanced performance in standard industrial applications. The development focused on achieving optimal control characteristics with a 38.5mm stroke length while maintaining the reliable 10.5mm diameter platform.',
  achievement: 'Successfully developed a versatile medium-stroke damper that combines precise control with excellent stability. The A-type design provides enhanced damping characteristics particularly suited for precision industrial equipment.',
  status: 'Widely implemented across various industrial sectors, particularly in applications requiring precise medium-range motion control. Performance data consistently shows high reliability and user satisfaction.',
  marketInsight: 'Medium-stroke dampers continue to be the backbone of industrial motion control solutions. The JP-801-82A meets this demand with its optimal balance of stroke length and control precision, making it a preferred choice for general industrial applications.'
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
    series: 'JP-801',
    variant: 'Medium stroke A-type',
    seriesLink: '/products/JP-801'
  }
}