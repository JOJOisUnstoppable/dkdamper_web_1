// 基础信息
export const basicInfo = {
  id: 'PR-L208',
  name: 'PR-L208',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  shortDescription: 'High-force Industrial Linear Damper',
  description: 'The PR-L208 is a versatile industrial damper offering an exceptionally wide force range from 7N to 870N. Designed for industrial applications, it features a robust steel construction and precise damping control. With its high durability and reliable performance, it\'s ideal for various industrial machinery and automation equipment.',
  image: '/images/products/PR-L208.jpg'
}

// 技术规格
export const specifications = {
  strokeRange: {
    value: '14mm',
    isCustomizable: false
  },
  dampingForce: {
    value: '7N-870N',
    isAdjustable: true
  },
  operatingTemperature: '20°C - 60°C',
  material: 'Steel/Stainless Steel',
  oil: 'Silicone Oil',
  serviceLife: {
    value: '100,000 cycles',
    testingProof: true
  },
  pistonRod: 'SUS201',
  testSpeed: '13mm/s',
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment'
}

// 产品特性
export const features = [
  {
    id: 'force',
    content: 'Wide damping force range from 7N to 870N with adjustable control'
  },
  {
    id: 'material',
    content: 'Durable steel/stainless steel construction with SUS201 piston rod'
  },
  {
    id: 'speed',
    content: 'Optimized performance at 13mm/s test speed'
  },
  {
    id: 'durability',
    content: 'Extended service life of 100,000 cycles'
  },
  {
    id: 'oil',
    content: 'High-quality silicone oil for consistent damping characteristics'
  },
  {
    id: 'stroke',
    content: 'Precise 14mm stroke length for specific applications'
  }
]

// 产品优势
export const advantages = [
  {
    id: 'force-range',
    title: 'Extensive Force Range',
    description: 'Features an exceptionally wide damping force range from 7N to 870N, making it suitable for diverse industrial applications.'
  },
  {
    id: 'construction',
    title: 'Robust Construction',
    description: 'Built with high-quality steel/stainless steel housing and SUS201 piston rod for exceptional durability and reliability.'
  },
  {
    id: 'performance',
    title: 'Consistent Performance',
    description: 'Maintains stable damping characteristics at 13mm/s test speed, ensuring reliable operation in industrial settings.'
  },
  {
    id: 'reliability',
    title: 'Proven Reliability',
    description: 'Validated through 100,000 cycle testing, demonstrating exceptional durability and consistent performance.'
  }
]

// 应用领域
export const applications = [
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    description: 'Applied in various industrial machinery where precise motion control and high force damping are required.'
  },
  {
    id: 'automation',
    title: 'Automation Equipment',
    description: 'Used in automated production lines and machinery requiring reliable motion control.'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Equipment',
    description: 'Integrated into manufacturing equipment where consistent damping performance is essential.'
  },
  {
    id: 'assembly',
    title: 'Assembly Lines',
    description: 'Employed in assembly line equipment requiring precise motion control and reliable operation.'
  }
]

// 应用案例
export const cases = [
  {
    id: 'production-line',
    title: 'Automated Production Line',
    description: 'Successfully implemented in high-speed production lines where the wide force range enables precise control of different load conditions. The damper\'s consistent performance at 13mm/s has significantly improved production efficiency.',
    image: '/images/cases/industrial-3.jpg'
  },
  {
    id: 'assembly-equipment',
    title: 'Assembly Equipment Application',
    description: 'Integrated into precision assembly equipment where the adjustable force range from 7N to 870N provides flexible control for various assembly processes. The robust construction ensures reliable long-term operation.',
    image: '/images/cases/industrial-4.jpg'
  }
]

// 产品背景
export const background = {
  development: `The PR-L208 was developed to meet the diverse force requirements in industrial applications. Our research showed a growing need for dampers capable of handling a wide range of forces while maintaining precise control and reliability.`,
  
  achievement: `Through advanced engineering and material selection, we successfully created a damper with an impressive force range of 7N to 870N. The combination of steel/stainless steel construction and high-quality silicone oil ensures consistent performance at the optimal test speed of 13mm/s.`,
  
  status: `The PR-L208 has proven its versatility across various industrial applications. Its exceptional durability, demonstrated through 100,000 cycle testing, and wide force range have made it a preferred choice for industrial equipment manufacturers.`,

  marketInsight: `The industrial sector's demand for versatile damping solutions continues to grow. The PR-L208's wide force range and proven reliability position it perfectly to meet diverse industrial applications' requirements.`
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