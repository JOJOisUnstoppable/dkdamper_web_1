import Image from 'next/image'

export default function Products() {
  return (
    <div className="min-h-screen">
      {/* Products Hero Section */}
      <section className="relative py-36 bg-gray-50"> {/* 将 py-24 改为 py-36 增加上下内边距 */}
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8">Our Products</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Explore our comprehensive range of gas springs and dampers, engineered for precision and reliability across various industries.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                model: "JP-CA1210",
                subtitle: "Medical Equipment Gas Spring",
                description: "High-performance gas spring specifically designed for medical equipment applications. Features precise force control and smooth operation.",
                image: "/images/products/JP-CA1210.jpg"
              },
              {
                model: "PR-L202",
                subtitle: "Industrial Linear Damper",
                description: "Precision-engineered linear damper for industrial applications, offering superior damping performance and durability.",
                image: "/images/products/PR-L202.jpg"
              },
              {
                model: "PR-L208",
                subtitle: "Heavy-Duty Gas Spring",
                description: "Robust gas spring designed for commercial vehicles and heavy machinery, providing reliable support and motion control.",
                image: "/images/products/PR-L208.jpg"
              },
              {
                model: "PR-L223",
                subtitle: "Multi-Purpose Damper",
                description: "Versatile damper solution suitable for various applications, combining adjustable damping with compact design.",
                image: "/images/products/PR-L223.jpg"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={product.image}
                    alt={product.model}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{product.model}</h2>
                  <h3 className="text-lg text-gray-600 mb-4">{product.subtitle}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Solutions?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Our engineering team can develop customized gas springs and dampers to meet your specific requirements.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Contact Our Engineers
          </button>
        </div>
      </section>
    </div>
  )
}