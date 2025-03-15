import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company Name</h3>
            <p className="text-gray-400">Professional B2B Solutions Provider</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href="/404" className="text-gray-400 hover:text-white">Industry Solutions</Link></li>
              <li><Link href="/404" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="/404" className="text-gray-400 hover:text-white">About Us</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="/404" className="text-gray-400 hover:text-white">LinkedIn</Link>
              <Link href="/404" className="text-gray-400 hover:text-white">Twitter</Link>
              <Link href="/404" className="text-gray-400 hover:text-white">Facebook</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}