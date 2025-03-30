// Basic Information
export const basicInfo = {
  id: 'JP-802-49P',
  name: 'JP-802-49P',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  seriesId: 'JP-802',
  shortDescription: 'Standard Stroke Industrial Linear Damper',
  description: 'The JP-802-49P features a standard 49mm stroke length in a 10.5mm diameter design. This P-type variant provides reliable damping control for common industrial applications requiring moderate stroke length.',
  image: '/images/products/JP-802-49P.jpg'
}

// Technical Specifications
export const specifications = {
  strokeRange: {
    value: '49mm',
    isCustomizable: false,
    category: 'Standard stroke'
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
      features: 'Standard P-type design'
    },
    oil: 'Silicone Oil'
  },
  serviceLife: {
    value: '50,000 cycles',
    testingProof: true
  },
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment',
  applications: ['General industrial use', 'Standard motion control', 'Common machinery']
}

// Product Features
export const features = [
  {
    id: 'standard-stroke',
    content: 'Reliable 49mm stroke length for common applications'
  },
  {
    id: 'stability',
    content: 'Consistent performance throughout the stroke range'
  },
  {
    id: 'material',
    content: 'Quality stainless iron construction with POM piston rod'
  },
  {
    id: 'durability',
    content: 'Proven 50,000 cycle service life with reliable operation'
  },
  {
    id: 'versatility',
    content: 'Suitable for various standard industrial applications'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'standard-performance',
    title: 'Standard Performance',
    description: 'Reliable 49mm stroke length suitable for common industrial applications.'
  },
  {
    id: 'consistent-control',
    title: 'Consistent Control',
    description: 'P-type damping characteristics provide stable performance.'
  },
  {
    id: 'wide-compatibility',
    title: 'Wide Compatibility',
    description: 'Versatile design suitable for various standard applications.'
  }
]

// Applications
export const applications = [
  {
    id: 'general',
    title: 'General Industry',
    description: 'Ideal for common industrial equipment and machinery.'
  },
  {
    id: 'standard',
    title: 'Standard Equipment',
    description: 'Perfect for standard motion control applications.'
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    description: 'Suitable for general machinery requiring reliable damping.'
  }
]

// Related Products
export const relatedProducts = [
  {
    id: 'JP-802-60P',
    name: 'JP-802-60P',
    description: 'Longer stroke P-type option',
    link: '/products/JP-802-60P'
  },
  {
    id: 'JP-802-49A',
    name: 'JP-802-49A',
    description: 'A-type variant with same stroke length',
    link: '/products/JP-802-49A'
  }
]

// Product Background Information
export const background = {
  development: 'The JP-802-49P was developed to address common industrial damping needs. The 49mm stroke length combined with a 10.5mm diameter provides a versatile solution for standard applications.',
  achievement: 'Successfully created a reliable standard stroke damper that delivers consistent performance. The development focused on optimizing P-type characteristics for common industrial uses.',
  status: 'Widely implemented across various industrial sectors, demonstrating excellent reliability in standard applications. Field data shows consistent performance and high durability.',
  marketInsight: 'Standard stroke dampers remain a core component of industrial motion control. The JP-802-49P effectively serves this fundamental market segment with reliable performance and versatile application potential.'
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
    variant: 'Standard stroke P-type',
    seriesLink: '/products/JP-802'
  }
}