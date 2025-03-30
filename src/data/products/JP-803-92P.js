// 基础信息
export const basicInfo = {
  id: 'JP-803-92P',
  name: 'JP-803-92P',
  category: 'Industrial Series',
  categoryId: 'industrial',
  shortDescription: 'Industrial Linear Damper (Φ9.6mm)',
  description: 'JP-803-92P is a robust industrial linear damper with a 100mm stroke length, designed for applications requiring longer stroke range. Features stainless iron construction and POM piston rod for reliable performance.',
  image: '/images/products/JP-803-92P.jpg'
}

// 技术规格
export const specifications = {
  model: 'JP-803-92P (Φ9.6mm)',
  stroke: '100mm',
  dynamicWorkingTemperature: '20℃-60℃',
  shellMaterial: 'Stainless iron',
  pistonRod: 'POM',
  oil: 'Silicone Oil',
  lifeCycles: '50,000'
}

// 产品特性
export const features = [
  {
    id: 'material',
    content: '采用不锈钢外壳和 POM 活塞杆的高品质结构'
  },
  {
    id: 'performance',
    content: '100mm 超长行程设计，满足更大范围的运动控制需求'
  },
  {
    id: 'durability',
    content: '50,000 次的使用寿命保证'
  },
  {
    id: 'temperature',
    content: '适应 20℃-60℃ 的工作温度范围'
  }
]

// 产品优势
export const advantages = [
  {
    id: 'longStroke',
    title: '超长行程',
    description: '100mm 的行程长度满足大行程应用需求，提供更大的运动控制范围。'
  },
  {
    id: 'stability',
    title: '稳定性能',
    description: '不锈钢外壳和 POM 活塞杆的组合确保长期稳定的阻尼效果。'
  }
]

// 应用领域
export const applications = [
  {
    id: 'heavyMachinery',
    title: '重型机械',
    description: '适用于需要较大行程控制的重型机械设备。'
  },
  {
    id: 'industrialAutomation',
    title: '工业自动化',
    description: '为大型自动化设备提供精确的运动控制解决方案。'
  }
]

// 导出完整产品数据
export const productData = {
  ...basicInfo,
  specs: specifications,
  features: features,
  advantages: advantages,
  applications: applications
}