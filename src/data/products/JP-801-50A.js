// Basic Information
export const basicInfo = {
  id: 'JP-801-50A',
  name: 'JP-801-50A',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  seriesId: 'JP-801',
  shortDescription: 'Adjustable Short Stroke Industrial Damper',
  description: 'The JP-801-50A features an adjustable short stroke range of 12-16mm in a 10mm diameter design. This A-type variant is specifically engineered for precise control in compact spaces, offering flexibility through its adjustable stroke length.',
  image: '/images/products/JP-801-50A.jpg'
}

// Technical Specifications
export const specifications = {
  strokeRange: {
    value: '12-16mm',
    isCustomizable: true,
    category: 'Adjustable short stroke'
  },
  diameter: {
    value: '10mm',
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
      features: 'Optimized for short stroke adjustment'
    },
    oil: 'Silicone Oil'
  },
  serviceLife: {
    value: '50,000 cycles',
    testingProof: true
  },
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Adjustable stroke range',
  applications: ['Precision equipment', 'Compact machinery', 'Space-limited applications']
}

// Product Features
export const features = [
  {
    id: 'adjustable-stroke',
    content: 'Flexible stroke adjustment between 12-16mm for application-specific tuning'
  },
  {
    id: 'compact',
    content: 'Space-efficient 10mm diameter design for confined installations'
  },
  {
    id: 'precision',
    content: 'High-precision damping control in short-stroke applications'
  },
  {
    id: 'material',
    content: 'Premium stainless iron construction with specialized POM piston rod'
  },
  {
    id: 'durability',
    content: 'Reliable 50,000 cycle service life with consistent performance'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'flexibility',
    title: 'Adjustable Range',
    description: 'Unique adjustable stroke length from 12-16mm allows fine-tuning for specific applications.'
  },
  {
    id: 'space-efficient',
    title: 'Space Efficiency',
    description: 'Compact 10mm diameter design ideal for installations with limited space.'
  },
  {
    id: 'precise-control',
    title: 'Precise Control',
    description: 'A-type variant optimized for accurate damping in short-stroke applications.'
  }
]

// Applications
export const applications = [
  {
    id: 'precision',
    title: 'Precision Equipment',
    description: 'Perfect for precision machinery requiring adjustable short-stroke control.'
  },
  {
    id: 'compact',
    title: 'Compact Machinery',
    description: 'Ideal for equipment with space constraints requiring precise damping.'
  },
  {
    id: 'specialized',
    title: 'Specialized Applications',
    description: 'Suitable for applications requiring customizable short-stroke damping.'
  }
]

// Related Products
export const relatedProducts = [
  {
    id: 'JP-801-77A',
    name: 'JP-801-77A',
    description: 'Medium stroke A-type variant',
    link: '/products/JP-801-77A'
  },
  {
    id: 'JP-801-M01',
    name: 'JP-801-M01',
    description: 'Alternative short stroke option',
    link: '/products/JP-801-M01'
  }
]

// Product Background Information
export const background = {
  development: 'The JP-801-50A was conceived to address the growing demand for adjustable short-stroke damping solutions. The innovative design featuring an adjustable stroke range of 12-16mm in a compact 10mm diameter was developed through extensive research into precision control requirements.',
  achievement: 'Successfully developed an adjustable short-stroke damper that maintains precise control throughout its variable stroke range. The design overcame significant challenges in achieving consistent performance across different stroke settings.',
  status: 'Currently implemented in various precision equipment and compact machinery applications. Field data demonstrates excellent adaptability and reliable performance across different stroke settings.',
  marketInsight: 'The demand for customizable short-stroke damping solutions continues to grow in specialized industrial applications. The JP-801-50A meets this market need with its unique adjustable stroke feature, particularly valuable in precision manufacturing and compact automation systems.'
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
    variant: 'Adjustable short stroke A-type',
    seriesLink: '/products/JP-801'
  }
}