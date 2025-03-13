'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function IndustryPage() {
  const [activeTab, setActiveTab] = useState('manufacturing')

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">行业解决方案</h1>
          <p className="text-xl">为不同行业提供专业的解决方案</p>
        </div>
      </section>

      {/* Industry Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  activeTab === industry.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {industry.icon} {industry.name}
              </button>
            ))}
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries
              .find((i) => i.id === activeTab)
              ?.solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <div className="w-8 h-8 text-primary">{solution.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 text-primary mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?solution=${solution.title}`}
                    className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    了解更多
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">成功案例</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{case_.title}</h3>
                  <p className="text-gray-600 mb-4">{case_.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{case_.industry}</span>
                    <Link
                      href={`/case-study/${case_.id}`}
                      className="text-primary hover:text-secondary"
                    >
                      查看详情 →
                    </Link>
                  </div>
                </div>
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
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            联系我们
          </Link>
        </div>
      </section>
    </div>
  )
}

const industries = [
  {
    id: 'manufacturing',
    name: '制造业',
    icon: '🏭',
    solutions: [
      {
        title: '智能制造解决方案',
        description: '通过数字化转型提升生产效率',
        icon: '⚙️',
        features: [
          '生产线自动化',
          '实时监控系统',
          '质量管理',
          '预测性维护'
        ]
      },
      {
        title: '供应链优化',
        description: '优化供应链管理，提升运营效率',
        icon: '🔄',
        features: [
          '库存管理',
          '供应商协同',
          '物流追踪',
          '成本控制'
        ]
      }
    ]
  },
  {
    id: 'logistics',
    name: '物流运输',
    icon: '🚛',
    solutions: [
      {
        title: '智能物流系统',
        description: '提供端到端的物流解决方案',
        icon: '📦',
        features: [
          '路线优化',
          '车队管理',
          '仓储管理',
          '配送追踪'
        ]
      },
      {
        title: '仓储自动化',
        description: '提升仓储效率和准确性',
        icon: '🏭',
        features: [
          '自动分拣',
          '库存管理',
          '订单处理',
          '实时监控'
        ]
      }
    ]
  },
  {
    id: 'retail',
    name: '零售行业',
    icon: '🏪',
    solutions: [
      {
        title: '全渠道零售',
        description: '整合线上线下销售渠道',
        icon: '🛍️',
        features: [
          '会员管理',
          '库存同步',
          '订单管理',
          '数据分析'
        ]
      },
      {
        title: '智能营销',
        description: '精准营销解决方案',
        icon: '📱',
        features: [
          '客户画像',
          '个性化推荐',
          '营销自动化',
          '效果分析'
        ]
      }
    ]
  }
]

const cases = [
  {
    id: 1,
    title: '某大型制造企业数字化转型',
    description: '通过实施智能制造解决方案，帮助客户提升生产效率30%',
    industry: '制造业'
  },
  {
    id: 2,
    title: '全国连锁零售企业系统升级',
    description: '助力客户实现全渠道销售，销售额提升50%',
    industry: '零售业'
  },
  {
    id: 3,
    title: '物流公司配送效率优化',
    description: '通过智能调度系统，配送效率提升40%',
    industry: '物流业'
  }
]