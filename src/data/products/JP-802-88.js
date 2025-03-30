// Basic Information
export const basicInfo = {
  id: 'JP-802-88',
  name: 'JP-802-88',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  seriesId: 'JP-802',
  shortDescription: 'Extra-Long Stroke Industrial Linear Damper',
  description: 'The JP-802-88 features an exceptional 88mm stroke length in a compact 8.4mm diameter design. This model is specifically engineered for applications requiring extra-long motion control with reliable damping characteristics.',
  image: '/images/products/JP-802-88.jpg'
}

// Technical Specifications
export const specifications = {
  strokeRange: {
    value: '88mm',
    isCustomizable: false,
    category: 'Extra-long stroke'
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
      features: 'Extra-long stroke stability'
    },
    oil: 'Silicone Oil'
  },
  serviceLife: {
    value: '50,000 cycles',
    testingProof: true
  },
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment',
  applications: ['Extra-long range control', 'Specialized machinery', 'Extended motion applications']
}

// Product Features
export const features = [
  {
    id: 'extra-long-stroke',
    content: 'Exceptional 88mm stroke length for maximum range applications'
  },
  {
    id: 'compact-design',
    content: 'Compact 8.4mm diameter optimized for space-efficient installation'
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
    content: 'Adaptable to various extra-long stroke applications'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'maximum-stroke',
    title: 'Maximum Stroke Length',
    description: 'Features an exceptional 88mm stroke length for extended range applications.'
  },
  {
    id: 'space-efficiency',
    title: 'Space-Efficient Design',
    description: 'Compact 8.4mm diameter maximizes installation flexibility.'
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
    id: 'extended-range',
    title: 'Extended Range Applications',
    description: 'Perfect for applications requiring maximum motion control range.'
  },
  {
    id: 'specialized',
    title: 'Specialized Machinery',
    description: 'Ideal for machinery requiring extra-long stroke capabilities.'
  },
  {
    id: 'compact',
    title: 'Space-Constrained Equipment',
    description: 'Suitable for applications requiring long stroke in limited space.'
  }
]

// Related Products
export const relatedProducts = [
  {
    id: 'JP-802-115',
    name: 'JP-802-115',
    description: 'Alternative model with different specifications',
    link: '/products/JP-802-115'
  },
  {
    id: 'JP-802-82P',
    name: 'JP-802-82P',
    description: 'P-type variant with shorter stroke',
    link: '/products/JP-802-82P'
  }
]

// Product Background Information
export const background = {
  development: 'The JP-802-88 was developed to meet the growing demand for extra-long stroke capabilities in a compact design. The combination of an 88mm stroke length with an 8.4mm diameter represents a significant achievement in space-efficient motion control.',
  achievement: 'Successfully implemented the longest stroke length in a compact diameter while maintaining consistent damping performance throughout the entire stroke range. The development process focused on optimizing stability and control over extended distances.',
  status: 'Currently serving in various specialized applications requiring maximum stroke length in limited space. Field performance data confirms reliable operation and consistent damping characteristics.',
  marketInsight: 'The market shows increasing demand for compact dampers with extended stroke capabilities. The JP-802-88 effectively addresses this need by providing maximum stroke length while maintaining a space-efficient design.'
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
    variant: 'Extra-long stroke compact design',
    seriesLink: '/products/JP-802'
  }
}