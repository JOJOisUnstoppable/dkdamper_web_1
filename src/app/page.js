import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            专业的B2B解决方案
          </h1>
          <p className="text-xl">
            为您的企业提供全方位的解决方案
          </p>
        </div>
      </section>
    </div>
  )
}
