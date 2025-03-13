export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">页面正在开发中...</p>
        <a href="/" className="text-primary hover:text-secondary">
          返回首页 →
        </a>
      </div>
    </div>
  )
}