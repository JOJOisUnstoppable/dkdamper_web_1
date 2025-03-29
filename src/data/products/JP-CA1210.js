// 基础信息
export const basicInfo = {
  id: 'JP-CA1210',
  name: 'JP-CA1210',
  category: 'Medical Equipment Series',
  categoryId: 'medical',
  shortDescription: 'High-precision Medical Equipment Damper',
  description: 'The JP-CA1210 is a high-precision damper specifically designed for medical equipment, featuring medical-grade stainless steel construction with exceptional control precision and reliable performance. Its unique damping characteristics and precise force control make it particularly suitable for medical imaging equipment, surgical instruments, and other medical devices requiring high-precision motion control.',
  image: '/images/products/JP-CA1210.jpg'
}

// 技术规格
export const specifications = {
  strokeRange: {
    value: '10-50mm',
    isCustomizable: true
  },
  dampingForce: {
    value: '5-20N',
    isAdjustable: true
  },
  operatingTemperature: '0-50°C',
  material: 'Medical Grade 316L Stainless Steel',
  certifications: ['ISO 13485', 'CE Medical'],
  serviceLife: {
    value: 'Over 1 million cycles',
    testingProof: true
  },
  protectionGrade: 'IP54',
  mountingOptions: 'Multiple mounting methods available',
  adjustment: 'Stepless adjustment',
  specialTreatment: 'Antibacterial surface treatment'
}

// 产品特性
export const features = [
  {
    id: 'material',
    content: 'Medical-grade materials compliant with medical device standards'
  },
  {
    id: 'precision',
    content: 'High-precision motion control with ±0.1mm positioning accuracy'
  },
  {
    id: 'adjustment',
    content: 'Stepless damping force adjustment for various applications'
  },
  {
    id: 'noise',
    content: 'Low noise design with operation noise <45dB'
  },
  {
    id: 'durability',
    content: 'Long service life exceeding 1 million cycles'
  },
  {
    id: 'maintenance',
    content: 'Maintenance-free design with excellent sealing performance'
  },
  {
    id: 'mounting',
    content: 'Multiple mounting options for easy integration'
  }
]

// 产品优势
export const advantages = [
  {
    id: 'precision',
    title: 'Precise Control',
    description: 'Utilizing special damping medium and precision valve design to achieve ±0.1mm accurate control, meeting strict motion control requirements for medical equipment.'
  },
  {
    id: 'certification',
    title: 'Medical Certification',
    description: 'ISO 13485 medical device quality management system certified and CE medical certified, ensuring product quality meets medical device standards.'
  },
  {
    id: 'reliability',
    title: 'Reliable & Durable',
    description: 'Validated through over 1 million fatigue test cycles, using medical-grade materials to ensure long-term stable operation in medical environments.'
  },
  {
    id: 'integration',
    title: 'Easy Integration',
    description: 'Offering multiple mounting options and interface choices for easy integration with various medical equipment, supporting customization needs.'
  }
]

// 应用领域
export const applications = [
  {
    id: 'imaging',
    title: 'Medical Imaging Equipment',
    description: 'Applied in CT, MRI, and other medical imaging equipment for precise component motion control, ensuring smooth and accurate scanning processes.'
  },
  {
    id: 'surgical',
    title: 'Surgical Instruments',
    description: 'Used in surgical beds, robotic surgery systems, and other medical instruments for motion control, providing stable and reliable support.'
  },
  {
    id: 'laboratory',
    title: 'Laboratory Equipment',
    description: 'Applied in medical laboratory equipment sample handling systems, ensuring precise and reliable operations.'
  },
  {
    id: 'rehabilitation',
    title: 'Rehabilitation Equipment',
    description: 'Used in medical rehabilitation equipment for motion control, providing smooth and controllable training support.'
  }
]

// 应用案例
export const cases = [
  {
    id: 'ct-scanner',
    title: 'CT Scanner Application',
    description: 'Applied in a leading medical equipment manufacturer\'s latest CT scanner, providing precise motion control solutions. The equipment required motion control accuracy of ±0.1mm, which our JP-CA1210 perfectly met and passed over 100,000 stability tests.',
    image: '/images/cases/medical-1.jpg'
  },
  {
    id: 'surgical-robot',
    title: 'Surgical Robot Application',
    description: 'In the joint control system of minimally invasive surgical robots, JP-CA1210 provides precise motion damping control, ensuring surgical operation accuracy and safety. The product has demonstrated excellent performance and reliability in this application.',
    image: '/images/cases/medical-2.jpg'
  }
]

// 产品背景
export const background = {
  development: `The JP-CA1210 medical damper emerged from extensive research into precision motion control requirements in medical imaging equipment, where positioning accuracy of ±0.1mm is crucial. Our development focused on three key challenges: achieving medical-grade material compatibility with 316L stainless steel, maintaining precise damping force control within 5-20N range, and ensuring long-term reliability over 1 million cycles under strict medical environment conditions.`,
  
  achievement: `Our breakthrough came with the development of a proprietary damping medium and precision valve system that achieves consistent force control across the full 10-50mm stroke range. The integration of stepless adjustment technology allows fine-tuning of damping characteristics to match specific application requirements. The product's IP54 protection grade and antibacterial surface treatment ensure reliable operation in various medical environments, while maintaining operational noise below 45dB - a critical requirement for sensitive medical settings.`,
  
  status: `The JP-CA1210 has established itself as a benchmark in medical equipment motion control, evidenced by its ISO 13485 and CE Medical certifications. Its implementation in high-precision applications, from CT scanners requiring ±0.1mm positioning accuracy to surgical robots demanding precise force control between 5-20N, demonstrates its versatility and reliability. The product's success in maintaining consistent performance across its operating temperature range of 0-50°C has led to its adoption by leading medical equipment manufacturers globally.`,

  marketInsight: `The medical equipment industry's growing demand for precision motion control, particularly in advanced imaging and robotic surgery systems, has validated our focus on high-precision damping solutions. The JP-CA1210's combination of medical-grade materials, precise control capabilities, and proven reliability through over 1 million test cycles positions it uniquely in the market. Our continuous development program focuses on expanding the customization options beyond the current 10-50mm stroke range while maintaining the core performance characteristics that have made the product successful.`
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
  origin: background.development // 用于概览页面显示产品背景
}