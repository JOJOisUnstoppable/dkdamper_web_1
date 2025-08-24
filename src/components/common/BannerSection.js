'use client'
import Image from 'next/image'
import Link from 'next/link'
// home banner hero
const BannerSection = ({
  title,
  description1,
  description2,
  description3,
  description4,
  imageSrc,
  imageAlt,
  button1,
  button2
}) => {
  return (
    <section className="w-full bg-[#1A365D] text-white pt-40 pb-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="text-xl mb-4">
            {description1}
          </p>
          <h1 className="text-4xl md:text-4xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl mb-8">
            {description2}
          </p>
          <p className="text-xl mb-8">
            {description3}
          </p>
          <p className="text-xl mb-8">
            {description4}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg text-center transition-colors"
            >
              {button1}
            </Link>
            <Link
              href="/contact"
              /*href="/catalog"*/
              className="bg-transparent hover:bg-white/20 border-2 border-white py-3 px-8 rounded-lg text-center transition-colors"
            >
              {button2}
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