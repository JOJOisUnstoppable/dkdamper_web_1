export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div>
            <h3 className="text-xl font-bold mb-4">公司名称</h3>
            <p className="text-gray-400">专业的B2B解决方案提供商</p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-400 hover:text-white">产品</a></li>
              <li><a href="/industry" className="text-gray-400 hover:text-white">行业解决方案</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white">博客</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">关于我们</a></li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-xl font-bold mb-4">联系我们</h3>
            <ul className="text-gray-400 space-y-2">
              <li>电话：+86 123 4567 8901</li>
              <li>邮箱：contact@company.com</li>
              <li>地址：公司地址信息</li>
            </ul>
          </div>

          {/* 社交媒体 */}
          <div>
            <h3 className="text-xl font-bold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 公司名称. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}