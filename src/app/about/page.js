import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="prose max-w-none">
          <p className="text-xl mb-8">
            We are committed to providing innovative B2B solutions and professional services 
            to help enterprises achieve digital transformation and sustainable development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p>
                To empower enterprises with cutting-edge technology solutions and drive 
                business growth through digital innovation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p>
                To become the leading provider of enterprise digital solutions and create 
                lasting value for our clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <ul className="list-disc list-inside">
                <li>Innovation First</li>
                <li>Client Success</li>
                <li>Professional Excellence</li>
                <li>Continuous Growth</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-2">Professional Team</h3>
              <p>
                Our team consists of industry experts and technical professionals with 
                rich experience in enterprise solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Advanced Technology</h3>
              <p>
                We stay at the forefront of technology to provide clients with the most 
                innovative solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Quality Service</h3>
              <p>
                We are committed to providing high-quality services and comprehensive 
                technical support.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Industry Experience</h3>
              <p>
                Rich industry experience helps us better understand and meet client needs.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            For business inquiries or partnership opportunities, please contact us:
          </p>
          <ul className="list-none space-y-2">
            <li>Email: contact@example.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Business Street, City, Country</li>
          </ul>
        </div>
      </div>
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