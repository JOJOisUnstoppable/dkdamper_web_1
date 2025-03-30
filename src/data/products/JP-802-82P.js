// Basic Information
export const basicInfo = {
  id: 'JP-802-82P',
  name: 'JP-802-82P',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  seriesId: 'JP-802',
  shortDescription: 'Maximum Stroke Industrial Linear Damper',
  description: 'The JP-802-82P features the longest stroke length (82mm) in the JP-802 series with a 10.5mm diameter design. This P-type variant is specifically engineered for applications requiring maximum motion control range with precise damping characteristics.',
  image: '/images/products/JP-802-82P.jpg'
}

// Technical Specifications
export const specifications = {
  strokeRange: {
    value: '82mm',
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
      features: 'Maximum length stability'
    },
    oil: 'Silicone Oil'
  },
  serviceLife: {
    value: '50,000 cycles',
    testingProof: true
  },
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment',
  applications: ['Maximum range motion control', 'Extended-travel mechanisms', 'Industrial automation']
}

// Product Features
export const features = [
  {
    id: 'max-stroke',
    content: 'Industry-leading 82mm stroke length for maximum range of motion'
  },
  {
    id: 'stability',
    content: 'Advanced stability design for consistent performance over maximum stroke'
  },
  {
    id: 'material',
    content: 'Premium stainless iron construction with specialized POM piston rod'
  },
  {
    id: 'durability',
    content: 'Proven 50,000 cycle service life even with maximum stroke length'
  },
  {
    id: 'precision',
    content: 'Maintains precise damping control throughout the entire stroke range'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'maximum-stroke',
    title: 'Maximum Motion Range',
    description: 'Features the longest stroke (82mm) in the series, ideal for applications requiring maximum motion control.'
  },
  {
    id: 'enhanced-stability',
    title: 'Enhanced Stability',
    description: 'Specially designed for maintaining consistent damping performance over maximum stroke length.'
  },
  {
    id: 'versatility',
    title: 'Application Versatility',
    description: 'Suitable for a wide range of extended-travel applications while maintaining precise control.'
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
    id: 'automation',
    title: 'Industrial Automation',
    description: 'Ideal for automated systems with maximum range requirements.'
  },
  {
    id: 'machinery',
    title: 'Specialized Machinery',
    description: 'Suitable for machinery requiring precise control over maximum distances.'
  }
]

// Related Products
export const relatedProducts = [
  {
    id: 'JP-802-69P',
    name: 'JP-802-69P',
    description: 'Alternative long-stroke option with shorter range',
    link: '/products/JP-802-69P'
  },
  {
    id: 'JP-802-82A',
    name: 'JP-802-82A',
    description: 'A-type variant with same diameter',
    link: '/products/JP-802-82A'
  }
]

// Product Background Information
export const background = {
  development: 'The JP-802-82P was developed to address the demand for maximum-length stroke control in industrial applications. The combination of an 82mm stroke length with a 10.5mm diameter represents the pinnacle of extended range capability in the JP-802 series.',
  achievement: 'Successfully implemented the longest stroke length in the series while maintaining stability and precise control throughout the entire stroke range. The development process overcame significant challenges in maintaining consistent damping performance over maximum distances.',
  status: 'Currently serves as the flagship long-stroke model in various high-end industrial applications. Continuous monitoring shows exceptional reliability and consistent performance in demanding environments.',
  marketInsight: 'The industrial sector shows increasing demand for maximum-range motion control solutions. The JP-802-82P fills a crucial market niche where maximum stroke length is essential, particularly in advanced automation and specialized manufacturing processes.'
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
    variant: 'Maximum stroke P-type',
    seriesLink: '/products/JP-802'
  }
}