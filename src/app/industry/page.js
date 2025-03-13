export default function IndustryPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">行业解决方案</h1>
          <p className="text-xl">为不同行业提供专业的解决方案</p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 text-primary">{solution.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">需要定制解决方案？</h2>
          <p className="text-gray-600 mb-8">我们的专家团队随时为您提供专业建议</p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            联系我们
          </button>
        </div>
      </section>
    </div>
  )
}

const solutions = [
  {
    title: "制造业解决方案",
    description: "为制造企业提供智能化、数字化转型解决方案",
    icon: "🏭",
    features: [
      "生产线自动化",
      "质量控制系统",
      "库存管理优化",
      "设备预测性维护"
    ]
  },
  {
    title: "物流运输解决方案",
    description: "优化物流运输效率，提升配送准确性",
    icon: "🚛",
    features: [
      "实时车辆追踪",
      "智能路线规划",
      "仓储管理系统",
      "配送优化方案"
    ]
  },
  {
    title: "零售行业解决方案",
    description: "助力零售企业提升运营效率和客户体验",
    icon: "🏪",
    features: [
      "会员管理系统",
      "库存智能预测",
      "全渠道销售整合",
      "客户数据分析"
    ]
  },
  {
    title: "医疗健康解决方案",
    description: "为医疗机构提供智能化管理和服务解决方案",
    icon: "🏥",
    features: [
      "患者信息管理",
      "远程医疗系统",
      "医疗设备监控",
      "药品管理系统"
    ]
  }
]