import Image from 'next/image'

export default function ProductsDemo() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-gray-900">
        <Image
          src="/images/products/hero-bg.jpg"
          alt="Products Banner"
          fill
          className="object-cover opacity-40"
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-6xl font-bold text-white mb-6">Gas Springs & Dampers</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Professional manufacturer of gas springs and dampers with over 20 years of experience
          </p>
        </div>
      </section>

      {/* Product Navigation */}
      <section className="sticky top-16 bg-white shadow-md z-20">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-8 no-scrollbar">
            {['Overview', 'Gas Springs', 'Dampers', 'Applications', 'Technical Data'].map((item) => (
              <button
                key={item}
                className="text-gray-600 hover:text-primary whitespace-nowrap font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                title: "Gas Springs",
                subtitle: "JP-CA Series",
                description: "High-quality gas springs for various applications",
                features: [
                  "Force range: 50N - 2500N",
                  "Stroke length: 20mm - 500mm",
                  "Customizable mounting options"
                ],
                image: "/images/products/gas-spring.jpg"
              },
              {
                title: "Linear Dampers",
                subtitle: "PR-L Series",
                description: "Professional damping solutions for controlled movement",
                features: [
                  "Adjustable damping force",
                  "Extended service life",
                  "Multiple size options"
                ],
                image: "/images/products/damper.jpg"
              }
            ].map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-6">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                <h3 className="text-xl text-primary mb-4">{category.subtitle}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-primary font-medium hover:underline">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Applications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Medical Equipment",
              "Automotive",
              "Industrial",
              "Furniture",
              "Machinery",
              "Transportation",
              "Aerospace",
              "Home Appliances"
            ].map((app, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Image
                    src={`/images/icons/${app.toLowerCase()}.png`}
                    alt={app}
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="font-medium">{app}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}