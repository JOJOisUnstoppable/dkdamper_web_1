// 基础信息
export const basicInfo = {
  id: 'JP-803-117P',
  name: 'JP-803-117P',
  category: 'Industrial Series',
  categoryId: 'industrial',
  shortDescription: 'Industrial Linear Damper (Φ9mm)',
  description: 'JP-803-117P is a precision industrial linear damper with a 53mm stroke length, offering reliable damping control for medium-range motion applications. Features durable stainless iron construction and POM piston rod.',
  image: '/images/products/JP-803-117P.jpg'
}

// 技术规格
export const specifications = {
  model: 'JP-803-117P (Φ9mm)',
  stroke: '53mm',
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
    content: '采用不锈钢外壳和 POM 活塞杆的优质组合'
  },
  {
    id: 'performance',
    content: '53mm 行程设计，适合中等行程应用场景'
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
    id: 'versatility',
    title: '通用性强',
    description: '53mm 的行程长度适用于多种工业应用场景，提供理想的缓冲效果。'
  },
  {
    id: 'reliability',
    title: '可靠耐用',
    description: '不锈钢外壳和 POM 活塞杆的组合确保产品的长期可靠性。'
  }
]

// 应用领域
export const applications = [
  {
    id: 'machinery',
    title: '工业机械',
    description: '适用于需要中等行程控制的工业机械设备。'
  },
  {
    id: 'automation',
    title: '自动化设备',
    description: '为自动化生产线提供稳定的运动控制解决方案。'
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