// Basic Information
export const basicInfo = {
  id: 'JP-801',
  name: 'JP-801 Series',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  shortDescription: 'Versatile Industrial Linear Damper Series',
  description: 'The JP-801 series offers a comprehensive range of industrial dampers with various specifications to meet different application needs. Featuring stainless iron construction and POM piston rod, this series provides reliable damping solutions with stroke lengths from 12mm to 78mm.',
  image: '/images/products/JP-801.jpg'
}

// Series Models Specifications
export const seriesModels = [
  {
    model: 'JP-801-108P',
    diameter: '9.8mm',
    stroke: '52.5mm',
    specialFeatures: 'Long stroke design'
  },
  {
    model: 'JP-801-82P',
    diameter: '10.5mm',
    stroke: '78mm',
    specialFeatures: 'Maximum stroke length in series'
  },
  {
    model: 'JP-801-82A',
    diameter: '10.5mm',
    stroke: '38.5mm',
    specialFeatures: 'Medium stroke variant'
  },
  {
    model: 'JP-801-77A',
    diameter: '10.2mm',
    stroke: '45mm',
    specialFeatures: 'Balanced performance'
  },
  {
    model: 'JP-801-50A',
    diameter: '10mm',
    stroke: '12-16mm',
    specialFeatures: 'Adjustable short stroke'
  },
  {
    model: 'JP-801-M01',
    diameter: '12mm',
    stroke: '22mm',
    specialFeatures: 'Largest diameter in series'
  }
]

// Common Technical Specifications
export const specifications = {
  operatingTemperature: '20°C - 60°C',
  material: {
    shell: 'Stainless iron',
    pistonRod: 'POM',
    oil: 'Silicone Oil'
  },
  serviceLife: {
    value: '50,000 cycles',
    testingProof: true
  },
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment'
}

// Product Features
export const features = [
  {
    id: 'versatility',
    content: 'Multiple models with stroke lengths from 12mm to 78mm'
  },
  {
    id: 'material',
    content: 'Durable stainless iron construction with POM piston rod'
  },
  {
    id: 'temperature',
    content: 'Stable performance in 20°C - 60°C operating range'
  },
  {
    id: 'durability',
    content: 'Proven reliability with 50,000 cycle service life'
  },
  {
    id: 'oil',
    content: 'High-quality silicone oil for consistent damping'
  },
  {
    id: 'diameter',
    content: 'Various diameter options from 9.8mm to 12mm'
  }
]

// Product Advantages
export const advantages = [
  {
    id: 'range',
    title: 'Comprehensive Range',
    description: 'Offers multiple models with different specifications to meet various application requirements.'
  },
  {
    id: 'construction',
    title: 'Reliable Construction',
    description: 'Built with stainless iron shell and POM piston rod for durability and smooth operation.'
  },
  {
    id: 'flexibility',
    title: 'Application Flexibility',
    description: 'Wide range of stroke lengths and diameters allows for precise selection based on specific needs.'
  },
  {
    id: 'performance',
    title: 'Consistent Performance',
    description: 'All models feature 50,000 cycle service life and stable operation across temperature range.'
  }
]

// Applications
export const applications = [
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    description: 'Various models suitable for different types of industrial equipment.'
  },
  {
    id: 'automation',
    title: 'Automation Systems',
    description: 'Adaptable to various automation requirements with different stroke lengths.'
  },
  {
    id: 'equipment',
    title: 'Manufacturing Equipment',
    description: 'Multiple specifications for different manufacturing applications.'
  },
  {
    id: 'custom',
    title: 'Custom Solutions',
    description: 'Wide range of options allows for precise matching to specific requirements.'
  }
]

// Product Background
export const background = {
  development: `The JP-801 series was developed to provide a comprehensive range of damping solutions for various industrial applications. Each model in the series is optimized for specific use cases while maintaining common core features.`,
  
  achievement: `Through careful engineering and design optimization, we created a series of dampers that offers stroke lengths from 12mm to 78mm and diameters from 9.8mm to 12mm, while maintaining consistent quality and reliability across all models.`,
  
  status: `The JP-801 series has established itself as a versatile solution for industrial applications, with each model providing specific advantages for different use cases while maintaining the core benefits of the series.`,

  marketInsight: `The industrial sector's diverse requirements for damping solutions continue to drive the demand for comprehensive product series like JP-801, where different specifications can meet various application needs.`
}

// Export Complete Product Data
export const productData = {
  ...basicInfo,
  models: seriesModels,
  specs: specifications,
  features: features,
  advantages: advantages,
  applications: applications,
  background: background,
  origin: background.development
}

// Case Studies
export const cases = [
  {
    id: 'long-stroke',
    title: 'Long Stroke Applications',
    description: 'Our long stroke variants (JP-801-108P and JP-801-82P) excel in applications requiring extended motion control, with stroke lengths from 52.5mm to 78mm.',
    image: '/images/cases/industrial-11.jpg',
    relatedProducts: [
      {
        model: 'JP-801-108P',
        link: '/products/JP-801-108P',
        highlight: 'Optimal for precision long-stroke applications'
      },
      {
        model: 'JP-801-82P',
        link: '/products/JP-801-82P',
        highlight: 'Maximum stroke length for extensive motion control'
      }
    ]
  },
  {
    id: 'medium-stroke',
    title: 'Medium Stroke Solutions',
    description: 'Medium stroke models (JP-801-82A and JP-801-77A) provide balanced performance for general industrial applications.',
    image: '/images/cases/industrial-12.jpg',
    relatedProducts: [
      {
        model: 'JP-801-82A',
        link: '/products/JP-801-82A',
        highlight: 'Versatile medium stroke performance'
      },
      {
        model: 'JP-801-77A',
        link: '/products/JP-801-77A',
        highlight: 'Balanced medium range damping'
      }
    ]
  },
  {
    id: 'short-stroke',
    title: 'Precision Short Stroke Control',
    description: 'Short stroke variants (JP-801-50A and JP-801-M01) are designed for precise control in compact spaces.',
    image: '/images/cases/industrial-13.jpg',
    relatedProducts: [
      {
        model: 'JP-801-50A',
        link: '/products/JP-801-50A',
        highlight: 'Adjustable short stroke precision'
      },
      {
        model: 'JP-801-M01',
        link: '/products/JP-801-M01',
        highlight: 'Larger diameter short stroke specialist'
      }
    ]
  }
]