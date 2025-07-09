'use client'
import Image from 'next/image'

const ProcessSection = ({ title, processes }) => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
          {processes.map((process, index) => (
            <div
              key={index}
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
  )
}

export default ProcessSection