// Basic Information
export const basicInfo = {
  id: 'JP-801-82P',
  name: 'JP-801-82P',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  seriesId: 'JP-801',
  shortDescription: 'Maximum Stroke Industrial Linear Damper',
  description: 'The JP-801-82P features the longest stroke length (78mm) in the JP-801 series with a 10.5mm diameter design. Engineered for applications requiring extensive motion control and precise damping over longer distances.',
  image: '/images/products/JP-801-82P.jpg'
}

// Technical Specifications
export const specifications = {
  strokeRange: {
    value: '78mm',
    isCustomizable: false,
    category: 'Maximum stroke length'
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
    id: 'max-stroke',
    content: 'Industry-leading 78mm stroke length for maximum range of motion'
  },
  {
    id: 'stability',
    content: 'Enhanced stability design for consistent performance over extended stroke'
  },
  {
    id: 'material',
    content: 'Durable stainless iron construction with specialized POM piston rod'
  },
  {
    id: 'durability',
    content: 'Proven 50,000 cycle service life even with extended stroke length'
  },
  {
    id: 'precision',
    content: 'Maintains precise damping control throughout the entire stroke range'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'stroke-length',
    title: 'Maximum Stroke Length',
    description: 'Features the longest stroke (78mm) in the JP-801 series, ideal for applications requiring extensive motion control.'
  },
  {
    id: 'enhanced-stability',
    title: 'Enhanced Stability',
    description: 'Specially designed for maintaining consistent damping performance over extended stroke length.'
  },
  {
    id: 'versatility',
    title: 'Application Versatility',
    description: 'Suitable for a wide range of long-travel applications while maintaining precise control.'
  }
]

// Applications
export const applications = [
  {
    id: 'long-travel',
    title: 'Long-Travel Mechanisms',
    description: 'Perfect for mechanisms requiring extensive linear motion control.'
  },
  {
    id: 'automation',
    title: 'Industrial Automation',
    description: 'Ideal for automated systems with extended range requirements.'
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
    id: 'JP-801-108P',
    name: 'JP-801-108P',
    description: 'Alternative long-stroke option with different diameter',
    link: '/products/JP-801-108P'
  },
  {
    id: 'JP-801-82A',
    name: 'JP-801-82A',
    description: 'Similar diameter with shorter stroke length',
    link: '/products/JP-801-82A'
  }
]

// Product Background Information
export const background = {
  development: 'The JP-801-82P was developed to address the growing demand for maximum-length stroke control in industrial applications. With its industry-leading 78mm stroke length and 10.5mm diameter, this model represents the pinnacle of long-stroke damper technology in the JP-801 series.',
  achievement: 'Successfully implemented the longest stroke length in the series while maintaining stability and precise control throughout the entire stroke range. The development process overcame significant challenges in maintaining consistent damping performance over extended distances.',
  status: 'Currently serves as the flagship long-stroke model in various high-end industrial applications. Continuous monitoring shows exceptional reliability and consistent performance in demanding environments.',
  marketInsight: 'The industrial sector shows increasing demand for extended-range motion control solutions. The JP-801-82P fills a crucial market niche where maximum stroke length is essential, particularly in advanced automation and specialized manufacturing processes.'
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
    variant: 'Maximum stroke P-type',
    seriesLink: '/products/JP-801'
  }
}