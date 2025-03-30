// 基础信息
export const basicInfo = {
  id: 'JP-803-92A',
  name: 'JP-803-92A',
  category: 'Industrial Series',
  categoryId: 'industrial',
  shortDescription: 'Industrial Linear Damper (Φ9.5mm)',
  description: 'JP-803-92A is a high-performance industrial linear damper with an 83.5mm stroke length, designed for applications requiring extended stroke range. Features durable stainless iron construction and POM piston rod.',
  image: '/images/products/JP-803-92A.jpg'
}

// 技术规格
export const specifications = {
  model: 'JP-803-92A (Φ9.5mm)',
  stroke: '83.5mm',
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
    content: '83.5mm 长行程设计，满足较大范围的运动控制需求'
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
    id: 'extendedStroke',
    title: '长行程设计',
    description: '83.5mm 的行程长度满足大范围运动控制需求，提供出色的缓冲效果。'
  },
  {
    id: 'reliability',
    title: '可靠耐用',
    description: '不锈钢外壳和 POM 活塞杆的组合确保产品在工业环境中的长期可靠性。'
  }
]

// 应用领域
export const applications = [
  {
    id: 'industrialEquipment',
    title: '工业设备',
    description: '适用于需要较长行程控制的工业设备和机械。'
  },
  {
    id: 'automationSystems',
    title: '自动化系统',
    description: '为自动化系统提供精确的长行程运动控制解决方案。'
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