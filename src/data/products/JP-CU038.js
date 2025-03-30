// Basic Information
export const basicInfo = {
  id: 'JP-CU038',
  name: 'JP-CU038',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  shortDescription: 'Specialized Industrial Linear Damper',
  description: 'The JP-CU038 is a specialized industrial damper featuring advanced Silicone Oil 25# with electro nickelling and SUS316 treatment. Designed for precise industrial applications, it offers reliable performance with SUS201 piston rod construction and optimized damping characteristics.',
  image: '/images/products/JP-CU038.jpg'
}

// Technical Specifications
export const specifications = {
  strokeRange: {
    value: '14mm',
    isCustomizable: false
  },
  staticStorageTemperature: '20°C - 80°C',
  operatingTemperature: '20°C - 60°C',
  oil: 'Silicone Oil 25#/Electro nickelling/SUS316',
  serviceLife: {
    value: '50,000 cycles',
    testingProof: true
  },
  pistonRod: 'SUS201',
  testSpeed: '13mm/s',
  diameter: '10mm',
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment'
}

// Product Features
export const features = [
  {
    id: 'oil',
    content: 'Advanced Silicone Oil 25# with electro nickelling and SUS316 treatment'
  },
  {
    id: 'material',
    content: 'High-quality SUS201 piston rod construction'
  },
  {
    id: 'speed',
    content: 'Optimized performance at 13mm/s test speed'
  },
  {
    id: 'temperature',
    content: 'Wide temperature range operation from 20°C to 60°C'
  },
  {
    id: 'stroke',
    content: 'Precise 14mm stroke length for accurate motion control'
  },
  {
    id: 'durability',
    content: 'Proven reliability with 50,000 cycle service life'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'oil-system',
    title: 'Advanced Oil System',
    description: 'Features specialized Silicone Oil 25# with electro nickelling and SUS316 treatment for superior damping performance.'
  },
  {
    id: 'construction',
    title: 'Reliable Construction',
    description: 'Built with SUS201 piston rod, ensuring excellent durability and consistent performance.'
  },
  {
    id: 'temperature',
    title: 'Temperature Stability',
    description: 'Maintains reliable operation across a wide temperature range, with storage capability from 20°C to 80°C.'
  },
  {
    id: 'precision',
    title: 'Precise Control',
    description: 'Delivers accurate motion control with optimized 13mm/s test speed and 14mm stroke length.'
  }
]

// Applications
export const applications = [
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    description: 'Ideal for precision industrial machinery requiring reliable damping control.'
  },
  {
    id: 'automation',
    title: 'Automation Equipment',
    description: 'Perfect for automated systems where consistent performance is essential.'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Equipment',
    description: 'Used in manufacturing processes requiring precise motion control.'
  },
  {
    id: 'processing',
    title: 'Processing Equipment',
    description: 'Suitable for processing equipment where reliable damping is crucial.'
  }
]

// Case Studies
export const cases = [
  {
    id: 'precision-machinery',
    title: 'Precision Machinery Integration',
    description: 'Successfully implemented in precision machinery where the advanced oil system provides optimal damping control.',
    image: '/images/cases/industrial-9.jpg'
  },
  {
    id: 'automation-system',
    title: 'Automation System Application',
    description: 'Integrated into automation systems where the reliable performance and precise control ensure consistent operation.',
    image: '/images/cases/industrial-10.jpg'
  }
]

// Product Background
export const background = {
  development: `The JP-CU038 was developed to meet specific industrial requirements where advanced oil treatment and precise motion control are essential. Our research focused on creating a damper with specialized oil characteristics and reliable construction.`,
  
  achievement: `Through innovative engineering and material selection, we created a damper featuring Silicone Oil 25# with electro nickelling and SUS316 treatment, combined with a durable SUS201 piston rod for consistent performance.`,
  
  status: `The JP-CU038 has established itself as a reliable solution for industrial applications, with its specialized oil system and proven durability through 50,000 cycle testing making it a preferred choice for precision machinery.`,

  marketInsight: `The industrial sector's increasing demand for precise motion control and reliable performance continues to drive the adoption of the JP-CU038, particularly in applications where specialized damping characteristics are crucial.`
}

// Export Complete Product Data
export const productData = {
  ...basicInfo,
  specs: specifications,
  features: features,
  advantages: advantages,
  applications: applications,
  cases: cases,
  background: background,
  origin: background.development
}