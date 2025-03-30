// Basic Information
export const basicInfo = {
  id: 'JP-803-92A',
  name: 'JP-803-92A',
  category: 'Industrial Series',
  categoryId: 'industrial',
  shortDescription: 'Industrial Linear Damper (Φ9.5mm)',
  description: 'JP-803-92A is a CE-certified industrial linear damper with an 83.5mm stroke length, engineered to meet European industrial standards. This precision-engineered damper features stainless iron construction and POM piston rod, delivering reliable performance for European manufacturing applications.',
  image: '/images/products/JP-803-92A.jpg'
}

// Technical Specifications
export const specifications = {
  model: 'JP-803-92A (Φ9.5mm)',
  stroke: '83.5mm',
  dynamicWorkingTemperature: '20℃-60℃',
  shellMaterial: 'Stainless iron',
  pistonRod: 'POM',
  oil: 'Silicone Oil',
  lifeCycles: '50,000',
  compliance: 'CE Certified'
}

// Product Features
export const features = [
  {
    id: 'material',
    content: 'EU-standard stainless iron shell and POM piston rod construction'
  },
  {
    id: 'performance',
    content: 'Precision-engineered 83.5mm stroke for extended motion control'
  },
  {
    id: 'durability',
    content: 'EN ISO certified 50,000 cycles service life guarantee'
  },
  {
    id: 'temperature',
    content: 'European climate-adapted operating temperature range of 20℃-60℃'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'extendedStroke',
    title: 'Extended Range Control',
    description: '83.5mm stroke length provides comprehensive motion control for European industrial applications.'
  },
  {
    id: 'reliability',
    title: 'European Standard Compliance',
    description: 'CE-certified construction ensures reliable performance in EU industrial environments.'
  }
]

// Applications
export const applications = [
  {
    id: 'industrialEquipment',
    title: 'European Industrial Equipment',
    description: 'Optimized for European industrial machinery requiring extended stroke control.'
  },
  {
    id: 'automationSystems',
    title: 'EU Manufacturing Systems',
    description: 'Provides precise long-stroke motion control for European automation systems.'
  }
]

// Product Background
export const background = {
  development: `JP-803-92A was developed specifically for the European market's demand for extended-stroke damping solutions. The development process followed strict EU industrial standards, focusing on achieving optimal performance with an 83.5mm stroke length while maintaining CE compliance.`,
  
  achievement: `Through extensive collaboration with European industrial partners, JP-803-92A has achieved full CE certification and successfully integrated extended stroke capabilities with precision control. The product meets all relevant European safety and quality standards while delivering exceptional damping characteristics.`,
  
  status: `Currently, JP-803-92A serves as a preferred solution in various European industrial applications, particularly in manufacturing systems requiring longer stroke control. Its CE-certified performance and reliability have established it as a trusted choice in the European market.`,

  marketInsight: `As European manufacturing continues to advance towards more sophisticated automation systems, the demand for precise, long-stroke motion control components grows steadily. JP-803-92A's combination of extended stroke length and certified reliability positions it ideally to meet European industrial requirements.`
}

// Export Product Data
export const productData = {
  ...basicInfo,
  specs: specifications,
  features: features,
  advantages: advantages,
  applications: applications,
  background: background,
  origin: background.development
}