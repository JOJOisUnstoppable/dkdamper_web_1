import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">关于我们</h1>
          <p className="text-xl">专注于为企业提供创新的B2B解决方案</p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">公司简介</h2>
              <p className="text-gray-600 mb-4">
                我们是一家专注于B2B领域的科技公司，致力于为企业提供创新、高效的解决方案。
                通过持续的技术创新和深入的行业理解，我们帮助客户实现数字化转型，提升运营效率。
              </p>
              <p className="text-gray-600 mb-4">
                成立至今，我们已经服务超过100家企业客户，涵盖制造、物流、零售等多个行业，
                并持续获得客户的信任与好评。
              </p>
            </div>
            <div className="w-full md:w-1/2 h-80 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">核心价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">核心团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.position}</p>
                <p className="text-sm text-gray-500">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">加入我们，共创未来</h2>
          <p className="text-xl mb-8">期待与您的合作</p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
          >
            联系我们
          </Link>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    icon: '💡',
    title: '创新驱动',
    description: '持续创新，引领行业技术发展'
  },
  {
    icon: '🤝',
    title: '客户至上',
    description: '以客户需求为导向，提供优质服务'
  },
  {
    icon: '🎯',
    title: '专业专注',
    description: '深耕B2B领域，提供专业解决方案'
  }
]

const team = [
  {
    name: '张三',
    position: '首席执行官',
    description: '拥有15年B2B行业经验'
  },
  {
    name: '李四',
    position: '技术总监',
    description: '专注企业数字化转型'
  },
  {
    name: '王五',
    position: '产品总监',
    description: '深耕产品设计10年'
  },
  {
    name: '赵六',
    position: '市场总监',
    description: '擅长企业市场战略'
  }
]