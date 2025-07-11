'use client'
import Image from 'next/image'
import Link from 'next/link'
// home banner hero
const BannerSection = ({
  title,
  description,
  imageSrc,
  imageAlt
}) => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-500 to-indigo-700 text-white pt-40 pb-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg text-center transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              /*href="/catalog"*/
              className="bg-transparent hover:bg-white/20 border-2 border-white py-3 px-8 rounded-lg text-center transition-colors"
            >
              Download Catalog
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={630}
            height={480}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default BannerSection