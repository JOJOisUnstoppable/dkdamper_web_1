// Basic Information
export const basicInfo = {
  id: 'JP-803-140P',
  name: 'JP-803-140P',
  category: 'Industrial Series',
  categoryId: 'industrial',
  shortDescription: 'Industrial Linear Damper (Φ9mm)',
  description: 'JP-803-140P is a CE-certified industrial linear damper featuring a 60mm stroke length, specifically engineered to meet European industrial standards. This precision damper combines stainless iron construction with POM piston rod for reliable performance in European manufacturing environments.',
  image: '/images/products/JP-803-140P.jpg'
}

// Technical Specifications
export const specifications = {
  model: 'JP-803-140P (Φ9mm)',
  stroke: '60mm',
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
    content: 'Precision-engineered 60mm stroke for optimal motion control'
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
    id: 'reliability',
    title: 'European Standard Compliance',
    description: 'CE-certified construction ensures reliable performance in EU industrial environments.'
  },
  {
    id: 'versatility',
    title: 'Versatile Application',
    description: '60mm stroke length optimized for various European industrial applications.'
  }
]

// Applications
export const applications = [
  {
    id: 'machinery',
    title: 'European Industrial Machinery',
    description: 'Optimized for European-standard industrial equipment and machinery.'
  },
  {
    id: 'automation',
    title: 'EU Automation Systems',
    description: 'Provides reliable motion control for European automation systems.'
  }
]

// Product Background
export const background = {
  development: `JP-803-140P was developed to meet European industrial standards for precision motion control. The development process adhered to strict EU guidelines, focusing on achieving optimal damping performance within a Φ9mm format while maintaining a 60mm stroke length.`,
  
  achievement: `Through rigorous testing and certification processes, JP-803-140P achieved full CE compliance and successfully integrated European precision standards with reliable performance characteristics. The product meets all relevant EU safety and quality requirements.`,
  
  status: `Currently, JP-803-140P serves as a trusted solution across various European industrial applications. Its CE-certified performance and reliability have established it as a preferred choice in the European market.`,

  marketInsight: `With Europe's growing emphasis on precision manufacturing and automation, the demand for certified motion control components continues to rise. JP-803-140P's combination of precision engineering and EU compliance positions it perfectly for European industrial applications.`
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