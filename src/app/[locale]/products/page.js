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
import SchemaTag from '@/components/common/SchemaTag';
import { generateProductListSchema } from '@/lib/schemaHelpers';
import { getDictionary } from '@/lib/i18n/getDictionary';

// 动态生成 metadata
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dict = await getDictionary(locale);
  const products = dict.products;
  
  return {
    title: products.meta.title,
    description: products.meta.description,
    keywords: products.meta.keywords,
    alternates: {
      canonical: products.meta.canonical
    }
  };
}

export default async function Products({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  // 获取字典数据
  const dict = await getDictionary(locale);
  const products = dict.products;
  
  // 生成 Schema 数据
  const productListSchema = generateProductListSchema({
    baseUrl: products.schema.baseUrl,
    listName: products.schema.listName,
    description: products.schema.description
  });
  
  return (
    <div className="bg-white">
      <SchemaTag data={productListSchema} />
      
      {/* 传递 HeroSection 数据 */}
      <HeroSection 
        title={products.HeroSecion.title}
        description1={products.HeroSecion.description1}
        description2={products.HeroSecion.description2}
      />
      
      {/* 传递 WhatIsLinearDamper 数据 */}
      <WhatIsLinearDamper 
        section={products.whatIsLinearDamper.section}
        whyChoose={products.whatIsLinearDamper.whyChoose}
        table={products.whatIsLinearDamper.table}
      />
      
      {/* 传递 ProductSeries 数据 */}
      <ProductSeries 
        section={products.productSeries.section}
        table={products.productSeries.table}
        products={products.productSeries.products}
      />
      
      {/* 传递 HowLinearDamperWorks 数据 */}
      <HowLinearDamperWorks 
        section={products.howLinearDamperWorks.section}
      />
      
      {/* 传递 LinearDamperTypes 数据 */}
      <LinearDamperTypes 
        section={products.linearDamperTypes.section}
        types={products.linearDamperTypes.types}
      />
      
      {/* 传递 TechnicalSpecifications 数据 */}
      <TechnicalSpecifications 
        section={products.technicalSpecifications}
        specifications={products.technicalSpecifications}
      />
      
      {/* 传递 InstallationUsageGuidelines 数据 */}
      <InstallationUsageGuidelines 
        section={products.installationUsageGuidelines}
        guidelines={products.installationUsageGuidelines}
      />
      
      {/* 传递 FrequentlyAskedQuestions 数据 */}
      <FrequentlyAskedQuestions 
        section={products.frequentlyAskedQuestions}
        questions={products.frequentlyAskedQuestions}
      />
      
      {/* 传递 ApplicationsAndIndustries 数据 */}
      <ApplicationsAndIndustries 
        section={products.applicationsAndIndustries}
        applications={products.applicationsAndIndustries}
        industries={products.applicationsAndIndustries}
      />
      
      {/* 传递 NeedExpertGuidance 数据 */}
      <NeedExpertGuidance 
        section={products.needExpertGuidance}
      />
    </div>
  )
}