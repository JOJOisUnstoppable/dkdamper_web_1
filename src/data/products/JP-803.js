// 基础信息
export const basicInfo = {
  id: 'JP-803',
  name: 'JP-803 Series',
  category: 'Industrial Series',
  categoryId: 'industrial',
  shortDescription: 'Industrial Linear Damper Series',
  description: 'JP-803 series offers a comprehensive range of industrial linear dampers with various stroke lengths from 53mm to 100mm. These dampers feature robust stainless iron construction and POM piston rods, providing reliable damping solutions for diverse industrial applications.',
  image: '/images/products/JP-803.jpg'
}

// 技术规格
export const specifications = {
  diameter: 'Φ9mm - Φ9.6mm',
  strokeRange: '53mm - 100mm',
  dynamicWorkingTemperature: '20℃-60℃',
  commonFeatures: {
    shellMaterial: 'Stainless iron',
    pistonRod: 'POM',
    oil: 'Silicone Oil',
    lifeCycles: '50,000'
  }
}

// 产品特性
export const features = [
  {
    id: 'versatility',
    content: '多种规格可选，满足不同行程需求（53mm-100mm）'
  },
  {
    id: 'material',
    content: '采用不锈钢外壳和 POM 活塞杆的高品质结构'
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
    id: 'options',
    title: '规格齐全',
    description: '提供多种型号选择，适应不同的行程需求和应用场景。'
  },
  {
    id: 'quality',
    title: '品质可靠',
    description: '采用优质材料和精密制造工艺，确保产品的稳定性和耐用性。'
  }
]

// 应用领域
export const applications = [
  {
    id: 'industrial',
    title: '工业设备',
    description: '适用于各类工业机械和设备的运动控制。'
  },
  {
    id: 'automation',
    title: '自动化系统',
    description: '为自动化生产线和设备提供可靠的运动阻尼解决方案。'
  }
]

// 系列产品
export const seriesProducts = [
  'JP-803-140P',
  'JP-803-92P',
  'JP-803-117P',
  'JP-803-92A'
]

// 导出完整产品数据
export const productData = {
  ...basicInfo,
  specs: specifications,
  features: features,
  advantages: advantages,
  applications: applications,
  seriesProducts: seriesProducts
}