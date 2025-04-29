'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Banner Section - Full Screen */}
      <section className="relative flex items-center overflow-hidden h-[650px]">
        {/* 背景视频 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover object-[center_30%] scale-150"
        >
          <source src="videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* 渐变遮罩 - 上下渐变 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold text-white mb-8">
                Who Are We?
              </h1>
              <p className="text-xl text-white mb-6">
               With over a decade of experience in the linear damper industry, we have long been a trusted partner for domestic manufacturers and international traders in China, specializing in supplying a wide range of customized linear dampers. As we have accumulated extensive technical expertise over the years, we are now ready to step onto the global stage. We aim to deliver our value directly to customers worldwide, cutting out unnecessary middle links. Let our professionalism speak for itself. This is a conversation between engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Product Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {[
              {
                model: "Mini Linear Damper",
                description: "More compact design, ideal for space-limited applications. Available in standard diameters of 6mm, 8mm, 10mm, and 12mm, with customization options for diameter, length, and stroke.",
                image: "/images/home/Mini_Linear_Damper_home_products.jpg"
              },
              {
                model: "Gas Spring Damper & Damper",
                description: "Combining the functions of a gas spring and a damper, these devices are designed for applications that require both support and controlled motion. ",
                image: "/images/home/Gas_Spring_home_products.jpg"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Link href={`/products/${product.model}`}>
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={product.image}
                      alt={product.model}
                      fill
                      className="object-contain"
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
        </div>
      </section>

      {/* Process Section - Full Screen */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
           We engineer precision linear dampers through four key phases:
          </h2>
          {/* 使用网格布局展示所有卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
            {[
              {
                step: "Step 1",
                title: "Requirement Confirmation",
                description: "Our engineers analyze your application needs, including load capacity (5-500N standard), stroke length, and environmental factors. We provide force-deflection curves and 3D models for approval.",
                image: "/images/home/step1.jpg"
              },
              {
                step: "Step 2",
                title: "Shaft Design & DFM",
                description: "Custom shafts are machined from case-hardened steel (HRC 45-50) with optional coatings. Our in-house tooling allows ±0.01mm tolerances for smooth operation.",
                image: "/images/home/step2.jpg"
              },
              {
                step: "Step 3",
                title: "Evalation Testing",
                description: "Prototype for functional test  We supply test reports and CAD files for your verification.T0~1 sample,  following test requirement from customer. Gas spring damper undergo at least 50,000+ cycle & mini linear damper 100,000 times endurance tests with force deviation under ±5%.",
                image: "/images/home/step3.jpg"
              },
              {
                step: "Step 4",
                title: "Mass Production",
                description: "  ISO-certified manufacturing delivers batches from 100pcs with PPAP documentation. Global   logistics ensure on-time delivery to 30+ countries.",
                image: "/images/home/step4.jpg"
              }
            ].map((process, index) => (
              <div key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={process.image}
                    alt={process.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl font-bold text-gray-200 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Full Screen */}
      <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/industrial_robot_bg.jpg"
            alt="Industrial background"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* 左侧 - 技术部分 */}
            <div>
              <h2 className="text-4xl font-bold mb-8">Technologies</h2>
              <p className="text-lg mb-12">
                With Linear damper from our company, you create smooth-running, safe and high-quality product experiences. Get to know our range of motion control solutions and discover the right solution specifically for your industry.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  {
                    title: "Electric motion control solutions",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                      </svg>
                    )
                  },
                  {
                    title: "Mechanical motion control solutions",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    )
                  },
                  {
                    title: "Innovations",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>
                    )
                  }
                ].map((tech, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      {tech.icon}
                    </div>
                    <p className="text-sm">{tech.title}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 右侧 - 行业与应用部分 */}
            <div>
              <h2 className="text-4xl font-bold mb-8">Industries & Applications</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Automotive industry",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                    )
                  },
                  {
                    title: "Commercial vehicles",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                      </svg>
                    )
                  },
                  {
                    title: "Aerospace, Navy, Railways",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                      </svg>
                    )
                  },
                  {
                    title: "Energy and construction",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                      </svg>
                    )
                  },
                  {
                    title: "Mechanical engineering and automation",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                      </svg>
                    )
                  },
                  {
                    title: "Health, leisure and furniture",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                      </svg>
                    )
                  }
                ].map((industry, index) => (
                  <div key={index} className="bg-blue-800 p-6 rounded-lg text-center hover:bg-blue-700 transition-colors">
                    <div className="flex justify-center mb-4">
                      {industry.icon}
                    </div>
                    <p className="text-sm">{industry.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Full Screen */}
      <section className="h-screen flex items-center bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-3 gap-12">
            {[
              {
                title: "Transparent Trade Terms",
                description: "We offer flexible trade terms to suit your logistics needs. Choose from FOB, CFR, or DDP options based on your convenience. Our collaboration with freight forwarding companies ensures smooth and efficient delivery.",
                image: "/images/home/trade.png"
              },
              {
                title: "Quality You Can Trust",
                description: "Our commitment to quality is unwavering. We are proudly ISO 9001 certified, a testament to our manufacturing excellence.",
                image: "/images/home/quality.png"
              },
              {
                title: "Efficient Business and Engineering Response",
                description: "We prioritize your technical queries and urgent requirements. Our dedicated technical support team is just a click away for any immediate assistance.",
                image: "/images/home/support.png"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 mb-6">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain rounded-lg"
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
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/Linear_Damper_manufacturing.mp4" type="video/mp4" />
        </video>
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
