import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Banner Section - Full Screen */}
      <section className="h-screen relative flex items-center">
        <Image
          src="/images/hero-bg.jpg.png"
          alt="DK Industrial"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-8">
              Who Are We?
            </h1>
            <p className="text-xl text-white mb-6">
              At DK, we specialize in the development, design, and delivery of gas springs and dampers. With a strong presence across continents including the Americas, Asia, Europe, and Africa, we have established ourselves as a trusted partner in the industry. Our commitment to quality and custom solutions has enabled us to serve a diverse client base, from medical equipment manufacturers to commercial vehicle producers.
            </p>
            <p className="text-lg text-white/80">
              Our expertise in creating tailored solutions ensures that each client's specific needs are met with precision and efficiency. Explore how we can assist in your next project.
            </p>
          </div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Product Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                model: "JP-CA1210",
                description: "High-performance gas spring, ideal for medical equipment",
                image: "/images/products/JP-CA1210.jpg"
              },
              {
                model: "PR-L202",
                description: "Precision linear damper, perfect for industrial applications",
                image: "/images/products/PR-L202.jpg"
              },
              {
                model: "PR-L208",
                description: "Heavy-duty gas spring, designed for commercial vehicles",
                image: "/images/products/PR-L208.jpg"
              },
              {
                model: "PR-L223",
                description: "Multi-functional damper, suitable for various applications",
                image: "/images/products/PR-L223.jpg"
              },
              {
                model: "Other Models",
                description: "Customized solutions to meet specific requirements",
                image: "/images/products/custom-models.jpg"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Link href={`/products/${product.model}`}>
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={product.image}
                      alt={product.model}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{product.model}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <span className="mt-4 px-6 py-2 inline-block bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                      Learn More
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* 添加产品系列链接 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <Link href="/products/categories?category=medical" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Medical Series</h3>
              <p className="text-gray-600 mb-4">Precision dampers for medical equipment and healthcare applications</p>
              <span className="text-primary">12+ Models →</span>
            </Link>
            <Link href="/products/categories?category=industrial" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Industrial Series</h3>
              <p className="text-gray-600 mb-4">Heavy-duty dampers for industrial machinery and equipment</p>
              <span className="text-primary">20+ Models →</span>
            </Link>
            <Link href="/products/categories?category=automotive" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Automotive Series</h3>
              <p className="text-gray-600 mb-4">Specialized dampers for automotive and transportation</p>
              <span className="text-primary">15+ Models →</span>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/products/categories" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All Products
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section - Full Screen */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Customization at Its Core
          </h2>
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-24">
            Our custom linear dampers are designed to meet the unique requirements of various industries. From intricate medical devices to heavy-duty commercial vehicles, our products are built to perform.
          </p>
          <div className="space-y-32">
            {[
              {
                step: "Step 1",
                title: "Requirement Confirmation",
                description: "We start by understanding your specific needs",
                image: "/images/process-1.jpg",
                isReverse: false
              },
              {
                step: "Step 2",
                title: "Design",
                description: "Our engineering team drafts a design that aligns with your requirements",
                image: "/images/process-2.jpg",
                isReverse: true
              },
              {
                step: "Step 3",
                title: "Prototyping",
                description: "We create a prototype for approval",
                image: "/images/process-3.jpg",
                isReverse: false
              },
              {
                step: "Step 4",
                title: "Mass Production",
                description: "Once approved, we move to full-scale production",
                image: "/images/process-4.jpg",
                isReverse: true
              }
            ].map((process, index) => (
              <div key={index} 
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  process.isReverse ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-1/2 relative">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={process.image}
                      alt={process.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="text-6xl font-bold text-gray-200 mb-4">{process.step}</div>
                  <h3 className="text-2xl font-bold mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Full Screen */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Medical Device Industry",
                description: "Our dampers are used in sophisticated medical equipment, providing reliable motion control",
                image: "/images/case-medical.jpg"
              },
              {
                title: "Commercial Vehicle Sector",
                description: "Custom dampers designed for durability and performance in demanding conditions",
                image: "/images/case-vehicle.jpg"
              }
            ].map((case_, index) => (
              <div key={index} className="text-center">
                <div className="aspect-[16/9] relative mb-6">
                  <Image
                    src={case_.image}
                    alt={case_.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{case_.title}</h3>
                <p className="text-gray-600 max-w-lg mx-auto">{case_.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Full Screen */}
      <section className="h-screen flex items-center bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-12">
            {[
              {
                title: "Transparent Trade Terms",
                description: "We offer flexible trade terms to suit your logistics needs. Choose from FOB, CFR, or DDP options based on your convenience. Our collaboration with freight forwarding companies ensures smooth and efficient delivery.",
                image: "/images/trade.jpg"
              },
              {
                title: "Quality You Can Trust",
                description: "Our commitment to quality is unwavering. We are proudly ISO 9001 certified, a testament to our manufacturing excellence.",
                image: "/images/quality.jpg"
              },
              {
                title: "Efficient Business and Engineering Response",
                description: "We prioritize your technical queries and urgent requirements. Our dedicated technical support team is just a click away for any immediate assistance.",
                image: "/images/support.jpg"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 mb-6">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Full Screen */}
      <section className="h-screen flex items-center bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Customer Testimonials</h2>
          <div className="grid grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "John Smith",
                company: "Medical Systems Inc.",
                content: "DK's gas springs have significantly improved the reliability of our medical equipment. Their technical support is outstanding.",
                image: "/images/testimonial-1.jpg"
              },
              {
                name: "Sarah Johnson",
                company: "Vehicle Solutions Ltd.",
                content: "The custom dampers from DK perfectly meet our specific requirements. Their attention to detail and quality is impressive.",
                image: "/images/testimonial-2.jpg"
              },
              {
                name: "Michael Chen",
                company: "Global Manufacturing Co.",
                content: "Working with DK has been a game-changer for our production line. Their products are consistently high-quality.",
                image: "/images/testimonial-3.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600">
            Join the ranks of satisfied clients like Genie and Stryker, who trust DK for their damper needs. Our customer feedback section features testimonials from prestigious partners.
          </p>
        </div>
      </section>

      {/* Technical Support Section - Full Screen */}
      <section className="h-screen relative flex items-center">
        <Image
          src="/images/technical-bg.jpg"
          alt="Technical Support"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-16">Technical Support</h2>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Technical Consultation</h3>
                <p>Access our technical consultation service for expert advice on your projects.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Urgent Replacement Needs</h3>
                <p>For urgent replacement parts, connect directly with our technical team via our emergency contact channel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section - Full Screen */}
      <section className="h-screen flex items-center bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Industry Applications</h2>
          <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Discover the versatility of our linear dampers across various sectors. From furniture to home appliances, our products enhance functionality and durability.
          </p>
          <div className="grid grid-cols-2 gap-12 mb-12">
            {[
              {
                title: "Furniture",
                description: "Innovative damper solutions for smooth operation in chairs and tables",
                image: "/images/furniture-app.jpg"
              },
              {
                title: "Home Appliances",
                description: "Dampers that ensure the longevity and efficiency of household appliances",
                image: "/images/appliance-app.jpg"
              }
            ].map((app, index) => (
              <div key={index} className="text-center">
                <div className="relative h-80 mb-6">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600">
            Each application is supported by detailed video and graphic explanations to help you understand the value DK brings to your industry.
          </p>
        </div>
      </section>

      {/* Contact Form Section - Full Screen */}
      <section className="h-screen flex items-center bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="6"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
