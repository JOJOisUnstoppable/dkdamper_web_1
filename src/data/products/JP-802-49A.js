// Basic Information
export const basicInfo = {
  id: 'JP-802-49A',
  name: 'JP-802-49A',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  seriesId: 'JP-802',
  shortDescription: 'Standard Stroke A-Type Industrial Linear Damper',
  description: 'The JP-802-49A features a standard 49mm stroke length in a 10.5mm diameter design. This A-type variant delivers specialized damping characteristics for applications requiring precise control in standard stroke ranges.',
  image: '/images/products/JP-802-49A.jpg'
}

// Technical Specifications
export const specifications = {
  strokeRange: {
    value: '49mm',
    isCustomizable: false,
    category: 'Standard stroke'
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
  applications: ['Precision equipment', 'Specialized machinery', 'Advanced motion control']
}

// Product Features
export const features = [
  {
    id: 'a-type',
    content: 'Specialized A-type damping characteristics for precise control'
  },
  {
    id: 'standard-stroke',
    content: 'Optimized 49mm stroke length for common applications'
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
    id: 'precision',
    content: 'Enhanced control precision for demanding applications'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'precise-control',
    title: 'Precise Control',
    description: 'A-type characteristics provide enhanced damping precision.'
  },
  {
    id: 'standard-range',
    title: 'Standard Range',
    description: 'Optimal 49mm stroke length for common industrial applications.'
  },
  {
    id: 'specialized-performance',
    title: 'Specialized Performance',
    description: 'Engineered for applications requiring precise motion control.'
  }
]

// Applications
export const applications = [
  {
    id: 'precision',
    title: 'Precision Equipment',
    description: 'Ideal for equipment requiring precise motion control.'
  },
  {
    id: 'specialized',
    title: 'Specialized Machinery',
    description: 'Perfect for machinery needing specific A-type damping characteristics.'
  },
  {
    id: 'advanced',
    title: 'Advanced Applications',
    description: 'Suitable for applications demanding precise control and reliability.'
  }
]

// Related Products
export const relatedProducts = [
  {
    id: 'JP-802-49P',
    name: 'JP-802-49P',
    description: 'P-type variant with same stroke length',
    link: '/products/JP-802-49P'
  },
  {
    id: 'JP-802-82A',
    name: 'JP-802-82A',
    description: 'Longer stroke A-type option',
    link: '/products/JP-802-82A'
  }
]

// Product Background Information
export const background = {
  development: 'The JP-802-49A was developed to provide precise control capabilities in standard stroke applications. The combination of A-type characteristics with a 49mm stroke length offers enhanced control in common industrial scenarios.',
  achievement: 'Successfully integrated A-type damping characteristics into a standard stroke design, providing precise control for specialized applications while maintaining the versatility of a common stroke length.',
  status: 'Currently serving in various precision-focused applications, demonstrating excellent control characteristics in standard stroke scenarios. Field data confirms reliable performance in demanding environments.',
  marketInsight: 'The market shows increasing demand for precise control in standard stroke applications. The JP-802-49A effectively addresses this need by combining A-type characteristics with a common stroke length.'
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
    variant: 'Standard stroke A-type',
    seriesLink: '/products/JP-802'
  }
}