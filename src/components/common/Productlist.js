// src/components/ProductList.js
import React from 'react';
import Image from 'next/image';

const ProductList = ({ sectionTitle, introText, categoryInfos, productInfos }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">{sectionTitle}</h2>
        <p className="text-xl text-gray-600 text-center mb-8 max-w-[1200px] mx-auto">
          {introText}
        </p>
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px]">
            {categoryInfos.map((category, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-800">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
          We offer a variety of linear dampers, from mini Φ6mm to Φ12mm, meeting the needs of different industries and application scenarios. Each product is meticulously designed and rigorously tested to ensure excellent performance and reliability.
        </p>
        <div className="space-y-8">
          {productInfos.map((product, index) => (
            <div key={index} 
              className="bg-white rounded-xl overflow-hidden transition-all shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-400"
            >
              <div className="h-48 relative text-left">
                <Image
                  src={product.image}
                  alt={product.model}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <div className="text-2xl font-bold text-gray-800">{product.id}</div>
                  <h3 className="font-bold text-xl mt-2">{product.model}</h3>
                </div>
                <div>
                  <p className="text-gray-600 line-clamp-3">{product.description}</p>
                </div>
                <div>
                  <div className="mb-2 text-sm font-medium">Force Range</div>
                  {/* 这里可以继续完善规格展示 */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;