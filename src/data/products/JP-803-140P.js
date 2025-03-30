// 基础信息
export const basicInfo = {
  id: 'JP-803-140P',
  name: 'JP-803-140P',
  category: 'Industrial Series',
  categoryId: 'industrial',
  shortDescription: 'Industrial Linear Damper (Φ9mm)',
  description: 'JP-803-140P is a high-performance industrial linear damper with a 60mm stroke length, featuring stainless iron construction and POM piston rod for reliable damping control in industrial applications.',
  image: '/images/products/JP-803-140P.jpg'
}

// 技术规格
export const specifications = {
  model: 'JP-803-140P (Φ9mm)',
  stroke: '60mm',
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
    content: '60mm 行程提供稳定的阻尼效果'
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
    id: 'reliability',
    title: '可靠耐用',
    description: '不锈钢外壳确保产品在工业环境中的耐用性，POM 活塞杆提供稳定的阻尼效果。'
  },
  {
    id: 'versatility',
    title: '应用广泛',
    description: '60mm 的行程长度适用于各种工业应用场景，提供优异的缓冲和减震效果。'
  }
]

// 应用领域
export const applications = [
  {
    id: 'machinery',
    title: '工业机械',
    description: '适用于各类工业机械的运动控制和缓冲系统。'
  },
  {
    id: 'automation',
    title: '自动化设备',
    description: '为自动化设备提供稳定的运动阻尼控制。'
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