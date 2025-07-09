// TechnicalSection.js
'use client'
import Image from 'next/image'

const TechnicalSection = ({
  technicalSupportBg,
  technicalSupportBgAlt,
  technicalSupportTitle,
  technicalConsultationTitle,
  technicalConsultationDesc,
  urgentReplacementTitle,
  urgentReplacementDesc
}) => {
  return (
    <>
      {/* Technical Support Section - Full Screen */}
      <section className="h-screen relative flex items-center">
        <div className="absolute inset-0">
          <Image
            src={technicalSupportBg}
            alt={technicalSupportBgAlt}
            fill
            priority
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-16">{technicalSupportTitle}</h2>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">{technicalConsultationTitle}</h3>
                <p>{technicalConsultationDesc}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{urgentReplacementTitle}</h3>
                <p>{urgentReplacementDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TechnicalSection