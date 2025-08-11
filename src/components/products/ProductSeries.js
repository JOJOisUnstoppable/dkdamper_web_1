import React from 'react';
import Image from 'next/image';

const ProductSeries = ({ section, table, products }) => {
  return (
    <section className="bg-white p-12 rounded-lg shadow-xl my-16 mx-40">
      <h2 className="text-6xl font-bold text-[#2c3e50] border-b-4 border-[#3498db] pb-2 mb-8">
        {section.title}
      </h2>
      <div className="relative w-full max-w-4xl mx-auto block">
        <Image
          src="/images/products/LD_design_img.png"
          alt={section.imageAlt}
          width={1200}
          height={600}
        />
      </div>
      
      {/* 表格部分 */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-[#3498db] text-white">
              <th className="py-4 px-4 text-left border border-[#2980b9]">{table.headers.empty}</th>
              <th className="py-4 px-4 text-center border border-[#2980b9]">{table.headers.totalLength}</th>
              <th className="py-4 px-4 text-center border border-[#2980b9]">{table.headers.diameter}</th>
              <th className="py-4 px-4 text-center border border-[#2980b9]">{table.headers.cylinderLength}</th>
              <th className="py-4 px-4 text-center border border-[#2980b9]">{table.headers.usedStroke}</th>
              <th className="py-4 px-4 text-center border border-[#2980b9]">{table.headers.withWithoutCap}</th>
              <th className="py-4 px-4 text-center border border-[#2980b9]">{table.headers.withWithoutSpring}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="py-3 px-4 font-medium text-[#2c3e50] border border-gray-200">{table.exampleRow.model}</td>
              <td className="py-3 px-4 text-center border border-gray-200">{table.exampleRow.totalLengthValue}</td>
              <td className="py-3 px-4 text-center border border-gray-200">{table.exampleRow.diameterValue}</td>
              <td className="py-3 px-4 text-center border border-gray-200">{table.exampleRow.cylinderLengthValue}</td>
              <td className="py-3 px-4 text-center border border-gray-200">{table.exampleRow.usedStrokeValue}</td>
              <td className="py-3 px-4 text-center border border-gray-200">{table.exampleRow.withWithoutCapValue}</td>
              <td className="py-3 px-4 text-center border border-gray-200">{table.exampleRow.withWithoutSpringValue}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {/* Φ6mm 产品卡片 */}
        <div className="bg-gray-100 p-2 rounded-lg border-l-4 border-[#3498db] hover:transform hover:translate-y-[-5px] hover:shadow-xl transition-all">
          <h4 className="text-lg font-bold text-[#2c3e50] mb-4">
            {products.phi6mm.title}
          </h4>
          <p>
            {products.phi6mm.description}
          </p>
          <span className="bg-[#3498db] text-white px-4 py-2 rounded-full inline-block mt-4">
            {products.phi6mm.forceRange}
          </span>
          <div className="flex gap-2 mt-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              {products.phi6mm.material1}
            </span>
            <p className="mt-8 mx-1">
              {products.phi6mm.materialOr}
            </p>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              {products.phi6mm.material2}
            </span>
          </div>
          <p className="mt-4">
            <strong>{products.phi6mm.applicationsTitle}</strong> {products.phi6mm.applications}
          </p>
        </div>
        
        {/* Φ8mm 产品卡片 */}
        <div className="bg-gray-100 p-2 rounded-lg border-l-4 border-[#3498db] hover:transform hover:translate-y-[-5px] hover:shadow-xl transition-all">
          <h4 className="text-lg font-bold text-[#2c3e50] mb-4">
            {products.phi8mm.title}
          </h4>
          <p>
            {products.phi8mm.description}
          </p>
          <span className="bg-[#3498db] text-white px-4 py-2 rounded-full inline-block mt-4">
            {products.phi8mm.forceRange}
          </span>
          <div className="flex gap-2 mt-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              {products.phi8mm.material1}
            </span>
            <p className="mt-8 mx-1">
              {products.phi8mm.materialOr}
            </p>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              {products.phi8mm.material2}
            </span>
          </div>
          <p className="mt-4">
            <strong>{products.phi8mm.applicationsTitle}</strong> {products.phi8mm.applications}
          </p>
        </div>
        
        {/* Φ10mm 产品卡片 */}
        <div className="bg-gray-100 p-2 rounded-lg border-l-4 border-[#3498db] hover:transform hover:translate-y-[-5px] hover:shadow-xl transition-all">
          <h4 className="text-lg font-bold text-[#2c3e50] mb-4">
            {products.phi10mm.title}
          </h4>
          <p>
            {products.phi10mm.description}
          </p>
          <span className="bg-[#3498db] text-white px-4 py-2 rounded-full inline-block mt-4">
            {products.phi10mm.forceRange}
          </span>
          <div className="flex gap-0 mt-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              {products.phi10mm.material1}
            </span>
            <p className="mt-8 mx-1">
              {products.phi10mm.materialOr}
            </p>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              {products.phi10mm.material2}
            </span>
          </div>
          <p className="mt-4">
            <strong>{products.phi10mm.applicationsTitle}</strong> {products.phi10mm.applications}
          </p>
        </div>
        
        {/* Φ12mm 产品卡片 */}
        <div className="bg-gray-100 p-2 rounded-lg border-l-4 border-[#3498db] hover:transform hover:translate-y-[-5px] hover:shadow-xl transition-all">
          <h4 className="text-lg font-bold text-[#2c3e50] mb-4">
            {products.phi12mm.title}
          </h4>
          <p>
            {products.phi12mm.description}
          </p>
          <span className="bg-[#3498db] text-white px-4 py-2 rounded-full inline-block mt-4">
            {products.phi12mm.forceRange}
          </span>
          <div className="flex gap-2 mt-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              {products.phi12mm.material1}
            </span>
            <p className="mt-8 mx-1">
              {products.phi12mm.materialOr}
            </p>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              {products.phi12mm.material2}
            </span>
          </div>
          <p className="mt-4">
            <strong>{products.phi12mm.applicationsTitle}</strong> {products.phi12mm.applications}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductSeries;