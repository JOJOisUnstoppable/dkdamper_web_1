'use client'
import Image from 'next/image'
import Link from 'next/link'

const ProductShowcase = ({ title, products }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Link href={`/products`}>
              {/*<Link href={`/products/${product.model}`}>*/}
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
  )
}

export default ProductShowcase