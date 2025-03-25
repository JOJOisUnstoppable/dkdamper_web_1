import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Leading Manufacturer of Disk Dampers
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            With over 20 years of experience, we specialize in high-quality disk dampers for industrial applications, providing reliable solutions for flow control and pressure regulation.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100">
            Explore Products
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                ISO 9001:2015 certified manufacturing process ensuring highest product quality and reliability.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored disk damper solutions meeting specific industry requirements and applications.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Global Support</h3>
              <p className="text-gray-600">
                Worldwide technical support and after-sales service network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product cards will be added here */}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <h3 className="font-bold mb-2">Power Generation</h3>
              <p className="text-gray-600">Thermal and renewable power plants</p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-bold mb-2">Chemical Processing</h3>
              <p className="text-gray-600">Chemical and petrochemical plants</p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-bold mb-2">Steel Manufacturing</h3>
              <p className="text-gray-600">Steel mills and metal processing</p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-bold mb-2">Cement Production</h3>
              <p className="text-gray-600">Cement plants and material handling</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
