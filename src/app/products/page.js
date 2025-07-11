import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/products/HeroSection';
import WhatIsLinearDamper from '@/components/products/WhatIsLineardamper';
import ProductSeries from '@/components/products/ProductSeries';
import HowLinearDamperWorks from '@/components/products/HowLinearDamperWorks';
import LinearDamperTypes from '@/components/products/LinearDamperTypes';
import TechnicalSpecifications from '@/components/products/TechnicalSpecifications';
import InstallationUsageGuidelines from '@/components/products/InstallationUsageGuidelines';
import FrequentlyAskedQuestions from '@/components/products/FrequentlyAskedQuestions';
import ApplicationsAndIndustries from '@/components/products/ApplicationsAndIndustries';
import NeedExpertGuidance from '@/components/products/NeedExpertGuidance';

// 添加 metadata 导出
export const metadata = {
  title: 'Linear Dampers | High-Quality Hydraulic Motion Control Solutions',
  description: 'Discover our range of precision linear dampers for industrial and consumer applications. Control motion, reduce vibration, and ensure smooth operations with our hydraulic damping solutions.',
  keywords: 'linear damper, hydraulic damper, motion control, vibration reduction, industrial dampers, precision dampers, damping solutions',
  alternates: {
    canonical: 'https://www.lineardamper.com/products'
  }
}

export default function Products() {
  return (
    <div className="bg-white">
     {/* 包裹页面主要内容 
      <div className="container mx-auto px-4">*/}
        <HeroSection />
        <WhatIsLinearDamper />
        <ProductSeries />
        <HowLinearDamperWorks />
        <LinearDamperTypes />
        <TechnicalSpecifications />
        <InstallationUsageGuidelines />
        <FrequentlyAskedQuestions />
        <ApplicationsAndIndustries />
        <NeedExpertGuidance />
    </div>
  )
}