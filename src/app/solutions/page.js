export default function SolutionsPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Industry Solutions</h1>
          <p className="text-xl">Tailored Solutions for Different Industries</p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div key={solution.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="list-disc list-inside text-gray-600">
                    {solution.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const solutions = [
  {
    id: 1,
    title: 'Manufacturing Solutions',
    description: 'Providing comprehensive smart manufacturing solutions for digital transformation of production processes...',
    features: [
      'Production Planning Optimization',
      'Equipment Management & Predictive Maintenance',
      'Quality Control & Traceability',
      'Inventory Optimization'
    ]
  },
  {
    id: 2,
    title: 'Retail Solutions',
    description: 'Help retail businesses build omni-channel operations to enhance customer experience and operational efficiency...',
    features: [
      'Omni-channel Inventory Management',
      'Membership Management & Precision Marketing',
      'POS System Integration',
      'Supply Chain Optimization'
    ]
  }
  // ... more solutions
]