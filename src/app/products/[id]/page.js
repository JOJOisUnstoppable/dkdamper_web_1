export default function ProductDetail({ params }) {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Product Main Info */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Product Images */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 w-full h-96 rounded-lg mb-4"></div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-200 w-full h-24 rounded-lg cursor-pointer"></div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">产品名称</h1>
            <p className="text-gray-600 mb-6">产品简介描述，包含主要特点和优势。</p>
            
            {/* Product Specs */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">产品规格</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-600">规格：</span>
                  <span>标准型</span>
                </div>
                <div>
                  <span className="text-gray-600">型号：</span>
                  <span>ABC-123</span>
                </div>
                <div>
                  <span className="text-gray-600">材质：</span>
                  <span>高级材料</span>
                </div>
                <div>
                  <span className="text-gray-600">尺寸：</span>
                  <span>100x200cm</span>
                </div>
              </div>
            </div>

            {/* Inquiry Button */}
            <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90">
              立即询价
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">产品详情</h2>
          <div className="prose max-w-none">
            <p>详细的产品描述内容...</p>
            <ul>
              <li>产品特点 1</li>
              <li>产品特点 2</li>
              <li>产品特点 3</li>
            </ul>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">相关产品</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">相关产品名称</h3>
                  <p className="text-gray-600 text-sm">产品简介...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}