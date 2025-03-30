// Basic Information
export const basicInfo = {
  id: 'JP-803-117P',
  name: 'JP-803-117P',
  category: 'Industrial Series',
  categoryId: 'industrial',
  shortDescription: 'Industrial Linear Damper (Φ9mm)',
  description: 'JP-803-117P is a precision-engineered industrial linear damper featuring a 53mm stroke length, specifically designed to meet European industrial standards. This CE-compliant damper combines stainless iron construction with POM piston rod for reliable performance in European industrial applications.',
  image: '/images/products/JP-803-117P.jpg'
}

// Technical Specifications
export const specifications = {
  model: 'JP-803-117P (Φ9mm)',
  stroke: '53mm',
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
    content: 'European standard-compliant stainless iron shell and POM piston rod construction'
  },
  {
    id: 'performance',
    content: 'Precision-engineered 53mm stroke design for optimal motion control'
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
    id: 'precision',
    title: 'European Precision',
    description: 'Engineered to meet strict European industrial standards with precise motion control capabilities.'
  },
  {
    id: 'reliability',
    title: 'Certified Reliability',
    description: 'CE-compliant construction ensures consistent performance in European industrial environments.'
  }
]

// Applications
export const applications = [
  {
    id: 'europeanMachinery',
    title: 'European Industrial Machinery',
    description: 'Optimized for European-standard industrial equipment and machinery applications.'
  },
  {
    id: 'automationSystems',
    title: 'EU Automation Systems',
    description: 'Provides reliable motion control solutions for European automation systems.'
  }
]

// Product Background
export const background = {
  development: `JP-803-117P was developed in response to European industry demands for precise motion control solutions. The development process adhered to strict EU industrial standards, focusing on achieving optimal damping performance within a Φ9mm format while maintaining a 53mm stroke length.`,
  
  achievement: `Through collaboration with European industrial partners, JP-803-117P achieved CE certification and successfully integrated precision engineering with reliable performance. The product meets all relevant European safety and quality standards while delivering consistent damping characteristics.`,
  
  status: `Currently, JP-803-117P serves as a trusted solution across various European industrial applications, particularly in precision machinery and automation systems. Its CE-certified performance and reliability have established it as a preferred choice in the European market.`,

  marketInsight: `With Europe's increasing focus on precision manufacturing and automated systems, the demand for high-quality motion control components continues to grow. JP-803-117P's combination of precision engineering and certified reliability positions it perfectly to meet European market requirements.`
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