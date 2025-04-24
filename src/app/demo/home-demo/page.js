import Image from 'next/image'
import Link from 'next/link'

export default function DemoHome() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[85vh] relative flex items-center bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg-new.jpg"
            alt="DK Motion Control"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              DK Motion – Precision Linear Dampers for Smoother, Safer Motion Control
            </h1>
            <p className="text-2xl text-white mb-8">
              <strong>Ever calculated the hidden costs of poor damping?</strong> Uncontrolled vibrations and impacts waste energy, increase wear, and compromise safety in 73% of industrial equipment.
            </p>
            <p className="text-xl text-white/80">
              We design high-performance linear dampers that turn chaotic motion into seamless precision—developed, tested, and delivered globally from our ISO-certified factories.
            </p>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-48 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Engineers Trust DK Motion</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/plug-and-play.jpg"
                  alt="Plug and play solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Plug-and-play solutions</h3>
              <p className="text-gray-600">Reduce prototyping time by 30% with our off-the-shelf speed limiters and dampers, rigorously tested for 1M+ cycles.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/force-curves.jpg"
                  alt="Customizable force curves"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Customizable force curves</h3>
              <p className="text-gray-600">Fine-tune damping profiles for applications from agricultural machinery to medical beds.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/certified.jpg"
                  alt="Certified reliability"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Certified reliability</h3>
              <p className="text-gray-600">Meet DIN/ISO standards without trade-offs in environmental compliance (RoHS, REACH).</p>
            </div>
          </div>
          <div className="mt-12 p-6 bg-primary/5 rounded-lg">
            <p className="text-lg italic text-center mb-2">
              "ITW's dampers solved our excavator arm oscillation issue in 2 weeks—no retrofitting needed."
            </p>
            <p className="text-right text-gray-600">– Leading Heavy Equipment OEM</p>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-72 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-24">Your Application, Optimized</h2>
          
          {/* 第一行：Faster Sourcing */}
          <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto mb-32">
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/images/faster-sourcing.jpg"
                  alt="Faster Sourcing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🔹</div>
                <div>
                  <div>
                      <h3 className="text-2xl font-bold mb-4">Faster sourcing</h3>
                      <p className="text-gray-600 mb-4">500+ standard SKUs + custom development in as few as 5 days.</p>
                      <p className="text-gray-600">Our extensive inventory and rapid prototyping capabilities mean you'll never have to compromise between speed and quality. Through strategic partnerships with premium logistics providers, we ensure cost-effective and reliable delivery with industry-leading transit times.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第二行：Lower Lifetime Cost */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 max-w-6xl mx-auto mb-32">
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/images/lifetime-cost.jpg"
                  alt="Lower Lifetime Cost"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🔹</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Lower lifetime cost</h3>
                  <p className="text-gray-600 mb-4">Corrosion-resistant materials cut replacement rates by 60%.</p>
                  <p className="text-gray-600">Our dampers are engineered for longevity, featuring marine-grade stainless steel and advanced seal technology. This translates to fewer replacements, reduced maintenance costs, and maximum uptime for your equipment.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 第三行：End-to-end Support */}
          <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/images/support.jpg"
                  alt="End-to-end Support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🔹</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">End-to-end support</h3>
                  <p className="text-gray-600 mb-4">Our engineers partner with you from CAD specs to final QC.</p>
                  <p className="text-gray-600">Experience seamless collaboration with our dedicated engineering team. We provide comprehensive technical documentation, custom testing reports, and lifetime technical support to ensure your application's success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-72 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Limited Offer: Free Technical Audit</h2>
          <p className="text-xl mb-8">
            Get a 15-minute consultation with our motion control specialists + 3D model samples of our best-selling linear dampers.
            <span className="block mt-2 text-white/80">(Only 10 slots/month available)</span>
          </p>
          <Link 
            href="#" 
            className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-colors"
          >
            Claim Your Free Audit Now
          </Link>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-48 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Proven in Motion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">VIDEO DEMO</h3>
              <p className="text-gray-600">See how our SPD™ dampers stabilize robotic arms in Tesla's assembly lines.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">CASE STUDY</h3>
              <p className="text-gray-600">Reducing noise in hospital beds by 22dB with SPEC® speed limiters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-48 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Need a Quote Today?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">📞 Procurement teams</h3>
              <p>Bulk pricing & logistics support in 1 email.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">✏️ Designers</h3>
              <p>Request free CAD files for your next prototype.</p>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <Link 
              href="#" 
              className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              Email Us Now
            </Link>
            <Link 
              href="#" 
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Live Chat
            </Link>
          </div>
          <p className="mt-4 text-white/60">Avg. response time: 28 mins</p>
        </div>
      </section>
    </div>
  )
}