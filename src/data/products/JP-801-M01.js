// Basic Information
export const basicInfo = {
  id: 'JP-801-M01',
  name: 'JP-801-M01',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  seriesId: 'JP-801',
  shortDescription: 'Large Diameter Short Stroke Industrial Damper',
  description: 'The JP-801-M01 combines a robust 12mm diameter with a precise 22mm stroke length, offering enhanced damping capacity in a short-stroke format. This specialized variant is designed for applications requiring higher damping forces in confined spaces.',
  image: '/images/products/JP-801-M01.jpg'
}

// Technical Specifications
export const specifications = {
  strokeRange: {
    value: '22mm',
    isCustomizable: false,
    category: 'Short stroke'
  },
  diameter: {
    value: '12mm',
    tolerance: '±0.1mm',
    feature: 'Largest in series'
  },
  operatingTemperature: '20°C - 60°C',
  materials: {
    shell: {
      material: 'Stainless iron',
      finish: 'Precision polished'
    },
    pistonRod: {
      material: 'POM',
      features: 'Enhanced damping capacity'
    },
    oil: 'Silicone Oil'
  },
  serviceLife: {
    value: '50,000 cycles',
    testingProof: true
  },
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment',
  applications: ['Heavy-duty equipment', 'High-force applications', 'Compact industrial machinery']
}

// Product Features
export const features = [
  {
    id: 'large-diameter',
    content: 'Maximum 12mm diameter design for enhanced damping capacity'
  },
  {
    id: 'short-stroke',
    content: 'Precise 22mm stroke length for controlled movement'
  },
  {
    id: 'robust-design',
    content: 'Reinforced construction for demanding applications'
  },
  {
    id: 'material',
    content: 'Heavy-duty stainless iron shell with specialized POM piston rod'
  },
  {
    id: 'reliability',
    content: 'Proven 50,000 cycle service life in high-stress conditions'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'enhanced-capacity',
    title: 'Enhanced Damping Capacity',
    description: 'Largest diameter in series provides superior damping force capabilities.'
  },
  {
    id: 'precise-control',
    title: 'Precise Movement Control',
    description: 'Optimized 22mm stroke length for accurate short-range motion control.'
  },
  {
    id: 'durability',
    title: 'Superior Durability',
    description: 'Robust design ensures reliable performance in demanding applications.'
  }
]

// Applications
export const applications = [
  {
    id: 'heavy-duty',
    title: 'Heavy-Duty Equipment',
    description: 'Ideal for equipment requiring enhanced damping force in limited space.'
  },
  {
    id: 'industrial',
    title: 'Industrial Machinery',
    description: 'Perfect for industrial applications demanding higher force capacity.'
  },
  {
    id: 'specialized',
    title: 'Specialized Systems',
    description: 'Suitable for systems requiring robust short-stroke damping control.'
  }
]

// Related Products
export const relatedProducts = [
  {
    id: 'JP-801-50A',
    name: 'JP-801-50A',
    description: 'Adjustable short stroke variant',
    link: '/products/JP-801-50A'
  },
  {
    id: 'JP-801-77A',
    name: 'JP-801-77A',
    description: 'Medium stroke option for different requirements',
    link: '/products/JP-801-77A'
  }
]

// Product Background Information
export const background = {
  development: 'The JP-801-M01 was developed to address specialized applications requiring enhanced damping force in a short-stroke format. The unique combination of a 12mm diameter (largest in series) with a 22mm stroke length was engineered to meet specific industrial requirements for high-force, compact damping solutions.',
  achievement: 'Successfully integrated the largest diameter design in the series while maintaining precise control characteristics. The development process optimized the balance between enhanced damping capacity and compact stroke length.',
  status: 'Currently serving in various heavy-duty industrial applications where enhanced damping force is critical. Performance monitoring confirms excellent reliability in high-stress environments.',
  marketInsight: 'There is a growing market demand for compact dampers with enhanced force capabilities. The JP-801-M01 effectively fills this niche, particularly in applications where space constraints meet high damping force requirements.'
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
    variant: 'Large diameter short stroke',
    seriesLink: '/products/JP-801'
  }
}