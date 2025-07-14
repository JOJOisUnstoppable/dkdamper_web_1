import React from 'react';
import Image from 'next/image';

const ProductSeries = () => {
  return (
    <section className="bg-white p-12 rounded-lg shadow-xl my-16 mx-40">
      <h2 className="text-6xl font-bold text-[#2c3e50] border-b-4 border-[#3498db] pb-2 mb-8">
        Our Linear Damper Product Series
      </h2>
      <Image
        src="/images/products/LD_design_img.png"
        alt="Product Series"
        width={1200}
        height={600}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="bg-gray-100 p-2 rounded-lg border-l-4 border-[#3498db] hover:transform hover:translate-y-[-5px] hover:shadow-xl transition-all">
            <h4 className="text-lg font-bold text-[#2c3e50] mb-4">
              Φ6mm
            </h4>
            <p>
              Mini linear hydraulic dampers with one-way damping, featuring automatic spring return and re-arm mechanism. Ideal for precision control in compact applications.
            </p>
          <span className="bg-[#3498db] text-white px-4 py-2 rounded-full inline-block mt-4">
            Force Range: 0-100N
          </span>
          <div className="flex gap-2 mt-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              Precision Steel
            </span>
            <p className="mt-8 mx-1">
              Or
            </p>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              Stainless Steel
            </span>
          </div>
          <p className="mt-4">
            <strong>Applications:</strong> Precision instruments, small cabinet doors, electronic device covers
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded-lg border-l-4 border-[#3498db] hover:transform hover:translate-y-[-5px] hover:shadow-xl transition-all">
            <h4 className="text-lg font-bold text-[#2c3e50] mb-4">
              Φ8mm
            </h4>
            <p>
              Linear hydraulic dampers with one-way damping, automatic spring return and re-arm functionality. Perfect balance of size and performance.
            </p>
          <span className="bg-[#3498db] text-white px-4 py-2 rounded-full inline-block mt-4">
            Force Range: 0-350N
          </span>
          <div className="flex gap-2 mt-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              High-Grade Steel
            </span>
            <p className="mt-8  mx-1">
              Or
            </p>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              Stainless Steel
            </span>
          </div>
          <p className="mt-4">
            <strong>Applications:</strong> Medium-sized doors, automotive components, furniture hardware
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded-lg border-l-4 border-[#3498db] hover:transform hover:translate-y-[-5px] hover:shadow-xl transition-all">
          <h4 className="text-lg font-bold text-[#2c3e50] mb-4">
            Φ10mm
          </h4>
          <p>
            Standard linear hydraulic dampers with one-way damping and spring return. Offers reliable performance for medium-duty applications.
          </p>
          <span className="bg-[#3498db] text-white px-4 py-2 rounded-full inline-block mt-4">
            Force Range: 0-870N
          </span>
          <div className="flex gap-0 mt-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              Industrial Steel
            </span>
            <p className="mt-8  mx-1">
              Or
            </p>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              Stainless Steel
            </span>
          </div>
          <p className="mt-4">
            <strong>Applications:</strong> Industrial machinery, heavy furniture, automotive applications
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded-lg border-l-4 border-[#3498db] hover:transform hover:translate-y-[-5px] hover:shadow-xl transition-all">
          <h4 className="text-lg font-bold text-[#2c3e50] mb-4">
            Φ12mm
          </h4>
          <p>
            Heavy-duty linear hydraulic dampers with customizable stroke and damping direction. Features one-way damping with spring return, ideal for high-force applications.
          </p>
          <span className="bg-[#3498db] text-white px-4 py-2 rounded-full inline-block mt-4">
            Force Range: 0-2400N
          </span>
          <div className="flex gap-2 mt-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              Heavy-Duty Steel
            </span>
            <p className="mt-8  mx-1">
              Or
            </p>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              Stainless Steel
            </span>
          </div>
          <p className="mt-4">
            <strong>Applications:</strong> Heavy industrial equipment, large machinery, high-load systems
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductSeries;