// Basic Information
export const basicInfo = {
  id: 'JP-803-92P',
  name: 'JP-803-92P',
  category: 'Industrial Series',
  categoryId: 'industrial',
  shortDescription: 'Industrial Linear Damper (Φ9.6mm)',
  description: 'JP-803-92P is a robust industrial linear damper with a 100mm stroke length, designed for applications requiring longer stroke range. Features stainless iron construction and POM piston rod for reliable performance.',
  image: '/images/products/JP-803-92P.jpg'
}

// Technical Specifications
export const specifications = {
  model: 'JP-803-92P (Φ9.6mm)',
  stroke: '100mm',
  dynamicWorkingTemperature: '20℃-60℃',
  shellMaterial: 'Stainless iron',
  pistonRod: 'POM',
  oil: 'Silicone Oil',
  lifeCycles: '50,000'
}

// Product Features
export const features = [
  {
    id: 'material',
    content: 'High-quality construction with stainless iron shell and POM piston rod'
  },
  {
    id: 'performance',
    content: '100mm extended stroke design for broader range of motion control'
  },
  {
    id: 'durability',
    content: 'Guaranteed service life of 50,000 cycles'
  },
  {
    id: 'temperature',
    content: 'Operating temperature range of 20℃-60℃'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'longStroke',
    title: 'Extended Stroke',
    description: '100mm stroke length meets long-range application requirements, providing greater motion control range.'
  },
  {
    id: 'stability',
    title: 'Stable Performance',
    description: 'Combination of stainless iron shell and POM piston rod ensures long-term stable damping effect.'
  }
]

// Applications
export const applications = [
  {
    id: 'heavyMachinery',
    title: 'Heavy Machinery',
    description: 'Suitable for heavy machinery equipment requiring extended stroke control.'
  },
  {
    id: 'industrialAutomation',
    title: 'Industrial Automation',
    description: 'Provides precise motion control solutions for large-scale automation equipment.'
  }
]

// Product Background
export const background = {
  development: `The development of JP-803-92P was driven by the demand for long-stroke dampers in industrial automation. The development process focused on achieving a 100mm extended stroke design within a compact Φ9.6mm diameter while maintaining stable damping performance.`,
  
  achievement: `Through innovative structural design and precision manufacturing processes, JP-803-92P successfully combines extended stroke with stable performance. The integration of stainless iron shell and POM piston rod ensures smooth operation throughout the entire stroke range.`,
  
  status: `Currently, JP-803-92P has become the preferred solution for long-stroke industrial applications, particularly in automation equipment requiring extended motion control. Its reliable performance and consistent quality have gained widespread market recognition.`,

  marketInsight: `As industrial automation equipment trends toward larger scales, the market demand for long-stroke dampers continues to grow. JP-803-92P maintains a significant market position with its 100mm extended stroke advantage and stable performance characteristics. We continue to optimize product performance to meet evolving market demands.`
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