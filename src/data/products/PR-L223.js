// 基础信息
export const basicInfo = {
  id: 'PR-L223',
  name: 'PR-L223',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  shortDescription: 'Compact Industrial Linear Damper',
  description: 'The PR-L223 is a compact industrial damper with a diameter of 8mm, offering reliable damping force from 7N to 350N. Featuring SUS304 construction and precise control characteristics, it\'s ideal for smaller industrial equipment and precision machinery applications.',
  image: '/images/products/PR-L223.jpg'
}

// 技术规格
export const specifications = {
  strokeRange: {
    value: '12mm',
    isCustomizable: false
  },
  dampingForce: {
    value: '7N-350N',
    isAdjustable: true
  },
  operatingTemperature: '20°C - 60°C',
  material: 'SUS304',
  oil: 'Silicone Oil',
  serviceLife: {
    value: '50,000 cycles',
    testingProof: true
  },
  pistonRod: 'SUS304',
  testSpeed: '13mm/s',
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment'
}

// 产品特性
export const features = [
  {
    id: 'compact',
    content: 'Compact 8mm diameter design for space-constrained applications'
  },
  {
    id: 'force',
    content: 'Adjustable damping force from 7N to 350N'
  },
  {
    id: 'material',
    content: 'High-quality SUS304 construction for durability'
  },
  {
    id: 'speed',
    content: 'Optimized performance at 13mm/s test speed'
  },
  {
    id: 'precision',
    content: 'Precise 12mm stroke length for accurate motion control'
  },
  {
    id: 'oil',
    content: 'High-grade silicone oil for consistent damping performance'
  }
]

// 产品优势
export const advantages = [
  {
    id: 'size',
    title: 'Compact Design',
    description: 'With its 8mm diameter, the PR-L223 is perfect for applications where space is limited while maintaining robust performance.'
  },
  {
    id: 'force-range',
    title: 'Versatile Force Range',
    description: 'Offers adjustable damping force from 7N to 350N, suitable for various precision control requirements.'
  },
  {
    id: 'construction',
    title: 'Premium Construction',
    description: 'Built with SUS304 components, ensuring excellent durability and corrosion resistance.'
  },
  {
    id: 'performance',
    title: 'Reliable Performance',
    description: 'Delivers consistent damping characteristics at 13mm/s, validated through 50,000 cycle testing.'
  }
]

// 应用领域
export const applications = [
  {
    id: 'precision',
    title: 'Precision Machinery',
    description: 'Ideal for precision machinery requiring compact damping solutions with accurate motion control.'
  },
  {
    id: 'automation',
    title: 'Small Automation Equipment',
    description: 'Perfect for compact automation systems where space efficiency is crucial.'
  },
  {
    id: 'instruments',
    title: 'Industrial Instruments',
    description: 'Used in various industrial instruments requiring precise motion control in limited spaces.'
  },
  {
    id: 'equipment',
    title: 'Compact Industrial Equipment',
    description: 'Applied in small industrial equipment where size and performance are equally important.'
  }
]

// 应用案例
export const cases = [
  {
    id: 'precision-equipment',
    title: 'Precision Manufacturing Equipment',
    description: 'Successfully implemented in precision manufacturing equipment where the compact size and accurate damping control significantly improved production quality.',
    image: '/images/cases/industrial-5.jpg'
  },
  {
    id: 'compact-automation',
    title: 'Compact Automation System',
    description: 'Integrated into a space-efficient automation system where the 8mm diameter design and reliable performance provided optimal motion control in a confined space.',
    image: '/images/cases/industrial-6.jpg'
  }
]

// 产品背景
export const background = {
  development: `The PR-L223 was developed to meet the growing demand for compact yet powerful damping solutions in modern industrial applications. Our research identified a significant need for smaller dampers that don't compromise on performance.`,
  
  achievement: `Through innovative design and precision engineering, we successfully created a compact 8mm diameter damper that delivers adjustable force from 7N to 350N. The use of SUS304 materials ensures durability while maintaining the compact form factor.`,
  
  status: `The PR-L223 has established itself as a preferred choice for applications requiring compact damping solutions. Its proven reliability through 50,000 cycle testing and precise control characteristics make it ideal for modern industrial equipment.`,

  marketInsight: `The trend toward miniaturization in industrial equipment continues to drive demand for compact damping solutions. The PR-L223's combination of small size and reliable performance positions it perfectly in this growing market segment.`
}

// 导出完整产品数据
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