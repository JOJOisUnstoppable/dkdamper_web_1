// Basic Information
export const basicInfo = {
  id: 'JP-801-77A',
  name: 'JP-801-77A',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  seriesId: 'JP-801',
  shortDescription: 'Balanced Medium Stroke Industrial Damper',
  description: 'The JP-801-77A delivers a well-balanced 45mm stroke length in a compact 10.2mm diameter design. This A-type variant provides excellent damping control for medium-range applications where consistent performance is crucial.',
  image: '/images/products/JP-801-77A.jpg'
}

// Technical Specifications
export const specifications = {
  strokeRange: {
    value: '45mm',
    isCustomizable: false,
    category: 'Medium stroke'
  },
  diameter: {
    value: '10.2mm',
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
      features: 'Balanced performance design'
    },
    oil: 'Silicone Oil'
  },
  serviceLife: {
    value: '50,000 cycles',
    testingProof: true
  },
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment',
  applications: ['Industrial machinery', 'Medium-range control systems', 'Automated equipment']
}

// Product Features
export const features = [
  {
    id: 'balanced-design',
    content: 'Optimized 45mm stroke length for versatile medium-range applications'
  },
  {
    id: 'compact',
    content: 'Efficient 10.2mm diameter design for space-conscious installations'
  },
  {
    id: 'material',
    content: 'High-quality stainless iron construction with specialized POM piston rod'
  },
  {
    id: 'performance',
    content: 'Consistent damping performance throughout the stroke range'
  },
  {
    id: 'reliability',
    content: 'Proven 50,000 cycle service life with stable operation'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'versatile-stroke',
    title: 'Versatile Stroke Length',
    description: 'Features an optimal 45mm stroke length, suitable for a wide range of medium-stroke applications.'
  },
  {
    id: 'compact-design',
    title: 'Compact Efficiency',
    description: 'Streamlined 10.2mm diameter design maximizes installation flexibility.'
  },
  {
    id: 'balanced-performance',
    title: 'Balanced Performance',
    description: 'A-type variant offering ideal damping characteristics for medium-range motion control.'
  }
]

// Applications
export const applications = [
  {
    id: 'industrial',
    title: 'Industrial Machinery',
    description: 'Ideal for industrial equipment requiring reliable medium-range motion control.'
  },
  {
    id: 'automation',
    title: 'Automation Systems',
    description: 'Perfect for automated systems where consistent medium-stroke damping is essential.'
  },
  {
    id: 'equipment',
    title: 'General Equipment',
    description: 'Suitable for various equipment applications requiring balanced damping performance.'
  }
]

// Related Products
export const relatedProducts = [
  {
    id: 'JP-801-82A',
    name: 'JP-801-82A',
    description: 'Alternative A-type with different stroke length',
    link: '/products/JP-801-82A'
  },
  {
    id: 'JP-801-50A',
    name: 'JP-801-50A',
    description: 'Shorter stroke A-type variant',
    link: '/products/JP-801-50A'
  }
]

// Product Background Information
export const background = {
  development: 'The JP-801-77A was developed to meet the specific needs of industrial applications requiring a balanced medium-stroke solution. The 45mm stroke length combined with a 10.2mm diameter was carefully engineered to provide optimal performance in diverse industrial settings.',
  achievement: 'Successfully created a versatile medium-stroke damper that delivers consistent performance across its entire stroke range. The development process focused on achieving an ideal balance between stroke length and damping characteristics.',
  status: 'Currently deployed across a wide range of industrial applications, demonstrating excellent reliability and performance. Regular field performance assessments confirm its effectiveness in various operating conditions.',
  marketInsight: 'The medium-stroke damper market continues to expand with increasing automation needs. The JP-801-77A has established itself as a reliable solution for applications requiring precise medium-range motion control, particularly in automated manufacturing environments.'
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
    variant: 'Balanced medium stroke A-type',
    seriesLink: '/products/JP-801'
  }
}