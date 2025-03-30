// 基础信息
export const basicInfo = {
  id: 'PR-L202',
  name: 'PR-L202',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  shortDescription: 'High-temperature Resistant Industrial Damper',
  description: 'The PR-L202 is a high-performance damper designed for industrial applications requiring high-temperature resistance. With its robust SUS304 construction and wide force range of 120N-410N, it provides reliable damping control in demanding industrial environments. The damper features excellent thermal stability, operating efficiently at temperatures up to 120°C.',
  image: '/images/products/PR-L202.jpg'
}

// 技术规格
export const specifications = {
  strokeRange: {
    value: '14-17mm',
    isCustomizable: true
  },
  dampingForce: {
    value: '120N-410N',
    isAdjustable: true
  },
  operatingTemperature: '20°C - 120°C',
  material: 'SUS304 Stainless Steel',
  oil: 'Silicone Oil',
  serviceLife: {
    value: '100,000 cycles',
    testingProof: true
  },
  pistonRod: 'SUS201',
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment'
}

// 产品特性
export const features = [
  {
    id: 'temperature',
    content: 'High-temperature resistance up to 120°C for demanding environments'
  },
  {
    id: 'force',
    content: 'Wide damping force range from 120N to 410N with adjustable control'
  },
  {
    id: 'material',
    content: 'Premium SUS304 construction with SUS201 piston rod'
  },
  {
    id: 'durability',
    content: 'Extended service life of 100,000 cycles'
  },
  {
    id: 'oil',
    content: 'High-performance silicone oil for consistent damping characteristics'
  },
  {
    id: 'stroke',
    content: 'Customizable stroke range of 14-17mm'
  }
]

// 产品优势
export const advantages = [
  {
    id: 'thermal',
    title: 'Superior Thermal Performance',
    description: 'Engineered to maintain stable performance at temperatures up to 120°C, making it ideal for high-temperature industrial applications.'
  },
  {
    id: 'force-control',
    title: 'Precise Force Control',
    description: 'Offers wide damping force range from 120N to 410N with stepless adjustment capability for precise motion control.'
  },
  {
    id: 'construction',
    title: 'Robust Construction',
    description: 'Built with premium SUS304 housing and SUS201 piston rod, ensuring exceptional durability and corrosion resistance.'
  },
  {
    id: 'versatility',
    title: 'Application Versatility',
    description: 'Customizable stroke range and multiple mounting options make it adaptable to various industrial equipment requirements.'
  }
]

// 应用领域
export const applications = [
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    description: 'Used in high-temperature industrial machinery for precise motion control and equipment protection.'
  },
  {
    id: 'automation',
    title: 'Automation Equipment',
    description: 'Applied in automated production lines where consistent performance in elevated temperatures is crucial.'
  },
  {
    id: 'processing',
    title: 'Processing Equipment',
    description: 'Integrated into processing equipment operating in high-temperature environments.'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Systems',
    description: 'Employed in manufacturing systems requiring reliable motion control in demanding conditions.'
  }
]

// 应用案例
export const cases = [
  {
    id: 'steel-processing',
    title: 'Steel Processing Equipment',
    description: 'Successfully implemented in steel processing equipment operating at elevated temperatures, providing stable damping control for critical components while maintaining performance integrity in the high-temperature environment.',
    image: '/images/cases/industrial-1.jpg'
  },
  {
    id: 'automation-line',
    title: 'Automated Production Line',
    description: 'Integrated into high-speed automated production lines where the damper\'s precise force control and high-temperature resistance ensure smooth operation and equipment protection.',
    image: '/images/cases/industrial-2.jpg'
  }
]

// 产品背景
export const background = {
  development: `The PR-L202 industrial damper was developed to address the growing demand for high-temperature resistant motion control solutions in industrial applications. Our research identified a critical need for dampers capable of maintaining consistent performance in elevated temperature environments while providing precise force control.`,
  
  achievement: `Through innovative design and material selection, we successfully created a damper that combines high-temperature resistance up to 120°C with a wide damping force range of 120N-410N. The use of premium SUS304 and SUS201 materials, coupled with high-performance silicone oil, ensures exceptional durability and consistent damping characteristics even in challenging conditions.`,
  
  status: `The PR-L202 has become a preferred choice for industrial applications requiring reliable motion control in high-temperature environments. Its proven performance and durability, validated through 100,000 cycle testing, have established it as a benchmark in industrial damping solutions.`,

  marketInsight: `The industrial sector's increasing focus on equipment reliability and precision control in high-temperature environments continues to drive demand for specialized damping solutions. The PR-L202's combination of thermal resistance, precise force control, and robust construction positions it uniquely in this growing market segment.`
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