// Basic Information
export const basicInfo = {
  id: 'JP-803',
  name: 'JP-803 Series',
  category: 'Industrial Series',
  categoryId: 'industrial',
  shortDescription: 'CE-Certified Industrial Linear Damper Series',
  description: 'The JP-803 series offers a comprehensive range of CE-certified industrial linear dampers, specifically engineered for European manufacturing standards. With stroke lengths from 53mm to 100mm, these precision dampers feature high-quality stainless iron construction and POM piston rods, delivering reliable damping solutions for diverse European industrial applications.',
  image: '/images/products/JP-803.jpg'
}

// Technical Specifications
export const specifications = {
  diameter: 'Φ9mm - Φ9.6mm',
  strokeRange: '53mm - 100mm',
  dynamicWorkingTemperature: '20℃-60℃',
  commonFeatures: {
    shellMaterial: 'Stainless iron',
    pistonRod: 'POM',
    oil: 'Silicone Oil',
    lifeCycles: '50,000',
    certification: 'CE Certified'
  }
}

// Product Features
export const features = [
  {
    id: 'versatility',
    content: 'Multiple stroke options (53mm-100mm) meeting diverse European industrial requirements'
  },
  {
    id: 'material',
    content: 'EU-standard stainless iron shell and POM piston rod construction'
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
    id: 'options',
    title: 'Comprehensive Range',
    description: 'Multiple models available to meet various European industrial requirements and applications.'
  },
  {
    id: 'quality',
    title: 'European Standard Compliance',
    description: 'CE-certified construction and materials ensuring reliable performance in EU industrial environments.'
  }
]

// Applications
export const applications = [
  {
    id: 'industrial',
    title: 'European Industrial Equipment',
    description: 'Optimized for various European industrial machinery and equipment applications.'
  },
  {
    id: 'automation',
    title: 'EU Manufacturing Systems',
    description: 'Provides reliable motion control solutions for European automation and manufacturing systems.'
  }
]

// Series Products
export const seriesProducts = [
  'JP-803-140P',
  'JP-803-92P',
  'JP-803-117P',
  'JP-803-92A'
]

// Product Background
export const background = {
  development: `The JP-803 series was developed specifically to meet European industrial standards for motion control applications. The development process focused on creating a versatile range of CE-certified dampers with varying stroke lengths, while maintaining consistent quality and performance across all models.`,
  
  achievement: `Through extensive collaboration with European industrial partners and rigorous certification processes, the JP-803 series has achieved full CE compliance and successfully integrated precision engineering with reliable performance. Each model in the series meets or exceeds relevant EU safety and quality standards.`,
  
  status: `Currently, the JP-803 series serves as a preferred solution across various European industrial applications, with its different models meeting specific needs in the EU market. The series' CE-certified performance and reliability have established it as a trusted choice in European manufacturing.`,

  marketInsight: `As European industry continues to advance towards more sophisticated automation and manufacturing processes, the demand for certified, reliable motion control solutions grows steadily. The JP-803 series' combination of different stroke lengths, consistent quality, and EU compliance positions it ideally to meet evolving European market requirements.`
}

// Export Product Data
export const productData = {
  ...basicInfo,
  specs: specifications,
  features: features,
  advantages: advantages,
  applications: applications,
  seriesProducts: seriesProducts,
  background: background,
  origin: background.development
}