'use client'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';
import BannerSection from '@/components/common/BannerSection';
import ProductShowcase from '@/components/common/ProductShowcase';
import ProcessSection from '@/components/common/ProcessSection';
import CaseStudiesSection from '@/components/common/CaseStudiesSection';
import FeaturesSection from '@/components/common/FeaturesSection';
import TechnicalSection from '@/components/common/TechnicalSection';
import ContactusSection from '@/components/common/ContactusSection';

// 定义技术和行业列表
const techList = [
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165-.397-.143-.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
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
]

const industryList = [
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
]

const features = [
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
];

export default function Home() {
  // products
  const products = [
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
  ];
  // process
  const processes = [
    {
      step: "Step 1",
      title: "Requirement Confirmation",
      description: "Our engineers analyze your application needs, including load capacity (5-2400N standard), stroke length, and environmental factors. We provide force-deflection curves and 3D models for approval.",
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
  ];

  return (
    <div className="min-h-screen">
      {/*meta*/}
      <Head>
          <title>Linear Damper Manufacturer | Precision Hydraulic Motion Control Solutions</title>
          <meta name="description" content="Professional manufacturer of linear dampers with over 10 years of experience. Offering customized Φ6mm to Φ12mm hydraulic dampers for automotive, aerospace, and industrial applications. Request a quote today." />
          <meta name="keywords" content="linear damper, hydraulic damper, gas spring damper, mini linear damper, custom damper, industrial damper, motion control" />
          {/* Canonical */}
          <link rel="canonical" href="https://www.lineardamper.com" />
        </Head>
      {/* BannerSection 组件 */}
      <BannerSection
        title="Linear Damper"
        description="With over a decade of experience in the linear damper industry, we have long been a trusted partner for domestic manufacturers and international traders in China, specializing in supplying a wide range of customized linear dampers. As we have accumulated extensive technical expertise over the years, we are now ready to step onto the global stage. We aim to deliver our value directly to customers worldwide, cutting out unnecessary middle links. Let our professionalism speak for itself. This is a conversation between engineers."
        imageSrc="/images/home/home_banner.jpg"
        imageAlt="Linear Damper Product"
      />

      {/* Products Showcase Section */}
      <ProductShowcase
        title="Our Product Series"
        products={products}
      />
      
      {/* Process Section - 使用新组件 */}
      <ProcessSection
        title="We engineer precision linear dampers through four key phases:"
        processes={processes}
      />

      {/* Case Studies Section */}
      <CaseStudiesSection
        backgroundImageSrc="/images/home/industrial_robot_bg.jpg"
        backgroundImageAlt="Industrial background"
        techTitle="Technologies"
        techDescription="With Linear damper from our company, you create smooth-running, safe and high-quality product experiences. Get to know our range of motion control solutions and discover the right solution specifically for your industry."
        techList={techList}
        industryTitle="Industries & Applications"
        industryList={industryList}
      />

      {/* Features Section */}
      <FeaturesSection features={features} />

      {/* Technical and Contact us Section */}


      <TechnicalSection
        technicalSupportBg="/images/home/technical_support_bg.png"
        technicalSupportBgAlt="Banner background"
        technicalSupportTitle="Technical Support"
        technicalConsultationTitle="Technical Consultation"
        technicalConsultationDesc="Access our technical consultation service for expert advice on your projects."
        urgentReplacementTitle="Urgent Replacement Needs"
        urgentReplacementDesc="For urgent replacement parts, connect directly with our technical team via our emergency contact channel."
      />

      <ContactusSection
        contactUsTitle="Contact Us"
        getInTouchTitle="Get in Touch"
        addressTitle="Address"
        addressDesc="Business Street, Ningbo, Zhejiang, China"
        emailTitle="Email"
        emailDesc="info@lineardamper.com"
        phoneTitle="Phone"
        phoneDesc="+86 233 421 663"
        workingHoursTitle="Working Hours"
        workingHoursDescWeekday="Monday - Friday: 9:00 AM - 6:00 PM"
        workingHoursDescSaturday="Saturday: 9:00 AM - 1:00 PM"
        sendMessageTitle="Send Us a Message"
      />
    </div>
  )
}
