import Link from 'next/link'

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
              <li><Link href="/products" className="text-gray-400 hover:text-white">产品</Link></li>
              <li><Link href="/404" className="text-gray-400 hover:text-white">行业解决方案</Link></li>
              <li><Link href="/404" className="text-gray-400 hover:text-white">博客</Link></li>
              <li><Link href="/404" className="text-gray-400 hover:text-white">关于我们</Link></li>
            </ul>
          </div>

          {/* 社交媒体 */}
          <div>
            <h3 className="text-xl font-bold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              <Link href="/404" className="text-gray-400 hover:text-white">LinkedIn</Link>
              <Link href="/404" className="text-gray-400 hover:text-white">Twitter</Link>
              <Link href="/404" className="text-gray-400 hover:text-white">Facebook</Link>
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