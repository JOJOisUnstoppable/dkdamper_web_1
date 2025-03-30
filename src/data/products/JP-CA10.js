// Basic Information
export const basicInfo = {
  id: 'JP-CA10',
  name: 'JP-CA10',
  category: 'Medical Equipment Series',
  categoryId: 'medical',
  shortDescription: 'Precision Medical Linear Damper',
  description: 'The JP-CA10 is a precision-engineered linear damper with a force range of 100N-300N, specifically designed for medical equipment applications. Featuring POM construction and SUS304 piston rod, it delivers reliable performance with a 15-year service lifetime.',
  image: '/images/products/JP-CA10.jpg'
}

// Technical Specifications
export const specifications = {
  strokeRange: {
    value: '10mm',
    isCustomizable: false
  },
  dampingForce: {
    value: '100N-300N',
    isAdjustable: true
  },
  staticStorageTemperature: '20°C - 80°C',
  operatingTemperature: '10°C - 50°C',
  maxFeedSpeed: '0.5m/sec',
  serviceLife: {
    value: '50,000 cycles',
    testingProof: true
  },
  lifetime: '15 years',
  headMaterial: 'POM',
  bodyMaterial: 'Plastic',
  rodMaterial: 'Stainless Steel',
  shellMaterial: 'POM',
  pistonRod: 'SUS304',
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment'
}

// Product Features
export const features = [
  {
    id: 'force',
    content: 'Precise damping force range from 100N to 300N'
  },
  {
    id: 'speed',
    content: 'High-speed operation capability up to 0.5m/sec'
  },
  {
    id: 'materials',
    content: 'Medical-grade POM construction with SUS304 piston rod'
  },
  {
    id: 'durability',
    content: 'Extended lifetime of 15 years with 50,000 cycle durability'
  },
  {
    id: 'temperature',
    content: 'Wide temperature range operation from 10°C to 50°C'
  },
  {
    id: 'stroke',
    content: 'Precise 10mm stroke length for accurate motion control'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'reliability',
    title: 'Long-term Reliability',
    description: 'Engineered for an impressive 15-year service life with proven durability through 50,000 cycle testing.'
  },
  {
    id: 'performance',
    title: 'High-Speed Performance',
    description: 'Capable of handling high-speed operations up to 0.5m/sec while maintaining precise damping control.'
  },
  {
    id: 'construction',
    title: 'Medical-Grade Construction',
    description: 'Built with medical-grade POM materials and SUS304 piston rod for reliable operation in medical environments.'
  },
  {
    id: 'versatility',
    title: 'Temperature Adaptability',
    description: 'Operates effectively across a wide temperature range, with static storage capability from 20°C to 80°C.'
  }
]

// Applications
export const applications = [
  {
    id: 'medical-equipment',
    title: 'Medical Equipment',
    description: 'Ideal for various medical devices requiring precise motion control and reliable long-term performance.'
  },
  {
    id: 'diagnostic',
    title: 'Diagnostic Equipment',
    description: 'Applied in diagnostic equipment where consistent damping and durability are essential.'
  },
  {
    id: 'laboratory',
    title: 'Laboratory Equipment',
    description: 'Used in laboratory instruments requiring precise movement control and long service life.'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Devices',
    description: 'Integrated into healthcare devices where reliable operation and medical-grade materials are crucial.'
  }
]

// Case Studies
export const cases = [
  {
    id: 'medical-device',
    title: 'Medical Device Integration',
    description: 'Successfully implemented in medical devices where the 10mm stroke and precise force control provide optimal motion management.',
    image: '/images/cases/medical-3.jpg'
  },
  {
    id: 'lab-equipment',
    title: 'Laboratory Equipment Application',
    description: 'Integrated into laboratory equipment where the high-speed capability and long service life ensure reliable operation.',
    image: '/images/cases/medical-4.jpg'
  }
]

// Product Background
export const background = {
  development: `The JP-CA10 was developed to meet the specific needs of medical equipment manufacturers requiring precise motion control with long-term reliability. Our research identified a growing demand for dampers with medical-grade materials and extended service life.`,
  
  achievement: `Through advanced engineering and material selection, we created a damper that delivers consistent performance with a force range of 100N-300N and high-speed capability of 0.5m/sec, while maintaining a 15-year service life.`,
  
  status: `The JP-CA10 has established itself as a reliable solution for medical equipment applications, with its proven durability through 50,000 cycle testing and medical-grade construction making it a preferred choice for healthcare equipment manufacturers.`,

  marketInsight: `The medical equipment sector's increasing focus on long-term reliability and precise motion control continues to drive the adoption of the JP-CA10, particularly in applications where consistent performance and medical-grade materials are essential.`
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