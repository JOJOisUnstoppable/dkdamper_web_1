import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Professional B2B Solutions
          </h1>
          <p className="text-xl mb-8">
            Comprehensive Solutions for Your Enterprise
          </p>
          <Link href="/404" className="bg-white text-primary px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Learn More
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md group hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-600 mb-4">Brief product description</p>
                <Link 
                  href={`/products/${item}`} 
                  className="text-primary group-hover:text-secondary transition-colors inline-flex items-center"
                >
                  View Details 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/products" 
              className="inline-flex items-center text-primary hover:text-secondary transition-colors"
            >
              View More Products
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Industry Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-primary rounded-lg flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Solution Title</h3>
                  <p className="text-gray-600">
                    Detailed solution description, including key features and benefits.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-gray-600 mb-6">
                We are a leading B2B solutions provider, committed to delivering innovative 
                and efficient solutions for enterprises.
              </p>
              <Link href="/about" className="text-primary hover:text-secondary">
                Learn More →
              </Link>
            </div>
            <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* News/Blog Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Article Title</h3>
                <p className="text-gray-600 mb-4">Article excerpt content...</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">2024-01-01</span>
                  <Link href="/404" className="text-primary hover:text-secondary">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Inquiry Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Quick Inquiry</h2>
            <p className="text-gray-600 mb-8">Fill in the information below and we'll get back to you shortly</p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <textarea
                placeholder="Please briefly describe your needs..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
