// Basic Information
export const basicInfo = {
  id: 'JP-802-115',
  name: 'JP-802-115',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  seriesId: 'JP-802',
  shortDescription: 'Compact Industrial Linear Damper',
  description: 'The JP-802-115 features a balanced 50mm stroke length in a compact 8.4mm diameter design. This model delivers reliable damping performance in a space-efficient package.',
  image: '/images/products/JP-802-115.jpg'
}

// Technical Specifications
export const specifications = {
  strokeRange: {
    value: '50mm',
    isCustomizable: false,
    category: 'Standard stroke'
  },
  diameter: {
    value: '8.4mm',
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
      features: 'Optimized for compact design'
    },
    oil: 'Silicone Oil'
  },
  serviceLife: {
    value: '50,000 cycles',
    testingProof: true
  },
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment',
  applications: ['Compact equipment', 'Space-efficient machinery', 'General industrial use']
}

// Product Features
export const features = [
  {
    id: 'compact-design',
    content: 'Space-efficient 8.4mm diameter design'
  },
  {
    id: 'balanced-stroke',
    content: 'Optimized 50mm stroke length for versatile applications'
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
    id: 'versatility',
    content: 'Adaptable to various space-constrained applications'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'space-efficiency',
    title: 'Space-Efficient Design',
    description: 'Compact 8.4mm diameter maximizes installation flexibility.'
  },
  {
    id: 'balanced-performance',
    title: 'Balanced Performance',
    description: 'Optimal 50mm stroke length for common industrial applications.'
  },
  {
    id: 'reliability',
    title: 'Proven Reliability',
    description: 'Engineered for 50,000 cycles with consistent performance.'
  }
]

// Applications
export const applications = [
  {
    id: 'compact',
    title: 'Compact Equipment',
    description: 'Perfect for applications with limited installation space.'
  },
  {
    id: 'general',
    title: 'General Industry',
    description: 'Suitable for various industrial applications requiring compact design.'
  },
  {
    id: 'specialized',
    title: 'Specialized Machinery',
    description: 'Ideal for machinery with specific space constraints.'
  }
]

// Related Products
export const relatedProducts = [
  {
    id: 'JP-802-88',
    name: 'JP-802-88',
    description: 'Longer stroke variant with same diameter',
    link: '/products/JP-802-88'
  },
  {
    id: 'JP-802-82P',
    name: 'JP-802-82P',
    description: 'Alternative P-type option',
    link: '/products/JP-802-82P'
  }
]

// Product Background Information
export const background = {
  development: 'The JP-802-115 was developed to provide reliable damping performance in a compact package. The combination of a 50mm stroke length with an 8.4mm diameter offers an optimal solution for space-constrained applications.',
  achievement: 'Successfully implemented a balanced design that maintains consistent performance while maximizing space efficiency. The development process focused on optimizing the damping characteristics within the compact form factor.',
  status: 'Currently serving in various industrial applications where space efficiency is crucial. Field performance data confirms reliable operation in compact installations.',
  marketInsight: 'The market shows steady demand for compact damping solutions. The JP-802-115 effectively addresses this need by providing reliable performance in a space-efficient design.'
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
    variant: 'Compact balanced design',
    seriesLink: '/products/JP-802'
  }
}