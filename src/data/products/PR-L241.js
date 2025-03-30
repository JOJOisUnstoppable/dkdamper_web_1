// 基础信息
export const basicInfo = {
  id: 'PR-L241',
  name: 'PR-L241',
  category: 'Industrial Equipment Series',
  categoryId: 'industrial',
  shortDescription: 'High-force Aluminum Industrial Damper',
  description: 'The PR-L241 is a powerful industrial damper offering an impressive force range from 200N to 1200N. Featuring aluminum alloy construction with oxidized silver finish and SUS304 piston rod, it provides exceptional damping control for heavy-duty industrial applications.',
  image: '/images/products/PR-L241.jpg'
}

// 技术规格
export const specifications = {
  strokeRange: {
    value: '10mm',
    isCustomizable: false
  },
  dampingForce: {
    value: '200N-1200N',
    isAdjustable: true
  },
  operatingTemperature: '10°C - 85°C',
  material: 'Aluminum alloy / Oxidized silver',
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
    id: 'force',
    content: 'High damping force range from 200N to 1200N'
  },
  {
    id: 'material',
    content: 'Lightweight aluminum alloy construction with oxidized silver finish'
  },
  {
    id: 'rod',
    content: 'Durable SUS304 piston rod for reliable operation'
  },
  {
    id: 'speed',
    content: 'Optimized performance at 13mm/s test speed'
  },
  {
    id: 'precision',
    content: 'Precise 10mm stroke length for accurate motion control'
  },
  {
    id: 'temperature',
    content: 'Wide operating temperature range from 10°C to 85°C'
  }
]

// 产品优势
export const advantages = [
  {
    id: 'force-range',
    title: 'Superior Force Range',
    description: 'Features an impressive damping force range from 200N to 1200N, suitable for heavy-duty industrial applications.'
  },
  {
    id: 'construction',
    title: 'Lightweight Construction',
    description: 'Built with aluminum alloy and oxidized silver finish, combining durability with weight efficiency.'
  },
  {
    id: 'temperature',
    title: 'Temperature Adaptability',
    description: 'Operates efficiently across a wide temperature range from 10°C to 85°C, suitable for various industrial environments.'
  },
  {
    id: 'reliability',
    title: 'Proven Durability',
    description: 'Validated through 50,000 cycle testing with consistent performance at 13mm/s test speed.'
  }
]

// 应用领域
export const applications = [
  {
    id: 'heavy-machinery',
    title: 'Heavy Industrial Machinery',
    description: 'Ideal for heavy machinery requiring high force damping and reliable motion control.'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Equipment',
    description: 'Applied in manufacturing processes where high damping forces are essential.'
  },
  {
    id: 'automation',
    title: 'Industrial Automation',
    description: 'Used in automated systems requiring precise control of heavy components.'
  },
  {
    id: 'processing',
    title: 'Processing Equipment',
    description: 'Integrated into processing equipment where robust motion control is crucial.'
  }
]

// 应用案例
export const cases = [
  {
    id: 'heavy-equipment',
    title: 'Heavy Industrial Equipment',
    description: 'Successfully implemented in heavy industrial equipment where the high force range of 200N-1200N provides optimal motion control for large components.',
    image: '/images/cases/industrial-7.jpg'
  },
  {
    id: 'manufacturing-line',
    title: 'Manufacturing Production Line',
    description: 'Integrated into manufacturing production lines where the aluminum construction provides lightweight yet durable performance for continuous operation.',
    image: '/images/cases/industrial-8.jpg'
  }
]

// 产品背景
export const background = {
  development: `The PR-L241 was developed to meet the demanding requirements of heavy-duty industrial applications where high damping forces are essential. Our research identified a growing need for dampers that could handle substantial loads while maintaining precise control.`,
  
  achievement: `Through innovative design and material selection, we created a damper that delivers impressive force range from 200N to 1200N while maintaining a relatively lightweight construction using aluminum alloy with oxidized silver finish.`,
  
  status: `The PR-L241 has established itself as a reliable solution for heavy-duty industrial applications. Its proven performance through 50,000 cycle testing and wide operating temperature range make it a preferred choice for demanding industrial environments.`,

  marketInsight: `The industrial sector's increasing demand for high-force damping solutions continues to drive the adoption of the PR-L241, particularly in applications where both force capacity and temperature adaptability are crucial.`
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