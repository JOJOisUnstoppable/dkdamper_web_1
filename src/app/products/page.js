'use client'
import SearchBar from '@/components/products/SearchBar'

export default function ProductsPage() {
  const handleSearch = (term) => {
    console.log('搜索:', term)
  }

  return (
    <div className="min-h-screen py-20">
      {/* 搜索栏 */}
      <section className="container mx-auto px-4 mb-8">
        <SearchBar onSearch={handleSearch} />
      </section>

      {/* 分类筛选 */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-primary text-white rounded-lg">全部</button>
            <button className="px-4 py-2 bg-white hover:bg-gray-100 rounded-lg">分类一</button>
            <button className="px-4 py-2 bg-white hover:bg-gray-100 rounded-lg">分类二</button>
            <button className="px-4 py-2 bg-white hover:bg-gray-100 rounded-lg">分类三</button>
          </div>
        </div>
      </section>

      {/* 产品列表 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 8, 9].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">产品名称</h3>
                  <p className="text-gray-600 text-sm mb-4">产品描述信息...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">¥ 999</span>
                    <button className="text-sm px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                      了解详情
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 分页 */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-100">上一页</button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg">1</button>
            <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-100">2</button>
            <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-100">3</button>
            <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-100">下一页</button>
          </div>
        </div>
      </section>
    </div>
  )
}