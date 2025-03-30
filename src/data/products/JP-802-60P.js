// Basic Information
export const basicInfo = {
  id: 'JP-802-60P',
  name: 'JP-802-60P',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  seriesId: 'JP-802',
  shortDescription: 'Medium-Long Stroke Industrial Linear Damper',
  description: 'The JP-802-60P offers a balanced 60mm stroke length in a 10.5mm diameter design. This P-type variant provides optimal damping control for medium-long range applications, bridging the gap between standard and extended stroke lengths.',
  image: '/images/products/JP-802-60P.jpg'
}

// Technical Specifications
export const specifications = {
  strokeRange: {
    value: '60mm',
    isCustomizable: false,
    category: 'Medium-long stroke'
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
      features: 'Optimized for medium-long stroke'
    },
    oil: 'Silicone Oil'
  },
  serviceLife: {
    value: '50,000 cycles',
    testingProof: true
  },
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment',
  applications: ['Medium-long range control', 'Industrial machinery', 'Automated equipment']
}

// Product Features
export const features = [
  {
    id: 'balanced-stroke',
    content: 'Optimized 60mm stroke length for medium-long range applications'
  },
  {
    id: 'stability',
    content: 'Enhanced stability design for consistent performance'
  },
  {
    id: 'material',
    content: 'Premium stainless iron construction with specialized POM piston rod'
  },
  {
    id: 'durability',
    content: 'Proven 50,000 cycle service life with reliable operation'
  },
  {
    id: 'versatility',
    content: 'Adaptable to various medium-long stroke applications'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'optimal-stroke',
    title: 'Optimal Stroke Length',
    description: 'Features a balanced 60mm stroke length, perfect for medium-long range motion control.'
  },
  {
    id: 'balanced-design',
    title: 'Balanced Performance',
    description: 'Optimized 10.5mm diameter design provides excellent stability and control.'
  },
  {
    id: 'adaptability',
    title: 'Application Adaptability',
    description: 'Versatile performance suitable for various industrial applications.'
  }
]

// Applications
export const applications = [
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    description: 'Ideal for machinery requiring medium-long range motion control.'
  },
  {
    id: 'automation',
    title: 'Automation Systems',
    description: 'Perfect for automated systems with balanced stroke requirements.'
  },
  {
    id: 'equipment',
    title: 'General Equipment',
    description: 'Suitable for equipment needing reliable medium-long range damping.'
  }
]

// Related Products
export const relatedProducts = [
  {
    id: 'JP-802-69P',
    name: 'JP-802-69P',
    description: 'Longer stroke variant for extended range needs',
    link: '/products/JP-802-69P'
  },
  {
    id: 'JP-802-49P',
    name: 'JP-802-49P',
    description: 'Shorter stroke P-type option',
    link: '/products/JP-802-49P'
  }
]

// Product Background Information
export const background = {
  development: 'The JP-802-60P was developed to provide a balanced solution for medium-long stroke applications. The 60mm stroke length combined with a 10.5mm diameter was carefully engineered to offer optimal performance in diverse industrial settings.',
  achievement: 'Successfully created a versatile medium-long stroke damper that delivers consistent performance across its entire stroke range. The development focused on achieving an ideal balance between stroke length and damping characteristics.',
  status: 'Currently implemented across various industrial applications, demonstrating excellent reliability in medium-long stroke scenarios. Field performance data confirms consistent operation and durability.',
  marketInsight: 'The medium-long stroke damper market shows steady growth with increasing demands for versatile motion control solutions. The JP-802-60P effectively addresses this market segment with its balanced performance characteristics.'
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
    variant: 'Medium-long stroke P-type',
    seriesLink: '/products/JP-802'
  }
}