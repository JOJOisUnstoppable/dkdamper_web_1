// Basic Information
export const basicInfo = {
  id: 'JP-801-108P',
  name: 'JP-801-108P',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  seriesId: 'JP-801',
  shortDescription: 'Long Stroke Precision Industrial Damper',
  description: 'The JP-801-108P is a specialized long-stroke damper featuring a 52.5mm stroke length in a compact 9.8mm diameter design. Ideal for applications requiring extended motion control with precise damping characteristics.',
  image: '/images/products/JP-801-108P.jpg'
}

// Technical Specifications
export const specifications = {
  strokeRange: {
    value: '52.5mm',
    isCustomizable: false,
    category: 'Long stroke'
  },
  diameter: {
    value: '9.8mm',
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
      features: 'Low friction, high wear resistance'
    },
    oil: 'Silicone Oil'
  },
  serviceLife: {
    value: '50,000 cycles',
    testingProof: true
  },
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment',
  applications: ['Automated production lines', 'Long-travel motion control', 'Extended reach mechanisms']
}

// Product Features
export const features = [
  {
    id: 'stroke',
    content: 'Extended 52.5mm stroke length for comprehensive motion control'
  },
  {
    id: 'precision',
    content: 'Compact 9.8mm diameter design maintaining precise damping control'
  },
  {
    id: 'material',
    content: 'Premium stainless iron shell with POM piston rod construction'
  },
  {
    id: 'durability',
    content: '50,000 cycle service life with consistent performance'
  },
  {
    id: 'versatility',
    content: 'Suitable for various long-stroke industrial applications'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'long-stroke',
    title: 'Extended Motion Control',
    description: 'Industry-leading 52.5mm stroke length provides comprehensive motion control capabilities.'
  },
  {
    id: 'compact',
    title: 'Compact Design',
    description: 'Efficient 9.8mm diameter design maximizes space utilization while maintaining performance.'
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
    title: 'Automation Systems',
    description: 'Perfect for automated systems requiring extended motion control.'
  },
  {
    id: 'production',
    title: 'Production Equipment',
    description: 'Ideal for production line equipment with long-travel requirements.'
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    description: 'Suitable for machinery requiring precise long-stroke damping.'
  }
]

// Related Products
export const relatedProducts = [
  {
    id: 'JP-801-82P',
    name: 'JP-801-82P',
    description: 'Alternative long-stroke option with 78mm stroke length',
    link: '/products/JP-801-82P'
  },
  {
    id: 'JP-801-82A',
    name: 'JP-801-82A',
    description: 'Medium stroke variant for different application needs',
    link: '/products/JP-801-82A'
  }
]

// Product Background Information
export const background = {
  development: 'Developed as a long-stroke variant in the JP-801 series, the JP-801-108P was engineered to meet the demands of industrial automation requiring precise motion control over extended distances. The 52.5mm stroke length combined with a compact 9.8mm diameter design represents the culmination of extensive research and market analysis.',
  achievement: 'Successfully achieved long-stroke control capabilities while maintaining a compact diameter, overcoming technical challenges in stability and performance consistency for long-stroke dampers.',
  status: 'Currently widely adopted in automated production lines and precision machinery, receiving high acclaim from users. Ongoing performance monitoring and user feedback demonstrate excellent performance across various applications.',
  marketInsight: 'With increasing demands in industrial automation, the need for precise long-stroke motion control continues to grow. The JP-801-108P maintains a significant market position due to its superior performance and reliability.'
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
    variant: 'Long stroke P-type',
    seriesLink: '/products/JP-801'
  }
}