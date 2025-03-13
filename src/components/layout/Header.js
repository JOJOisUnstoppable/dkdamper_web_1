'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Company Name
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/products" className="hover:text-secondary">产品</Link>
            <Link href="/industry" className="hover:text-secondary">行业解决方案</Link>
            <Link href="/blog" className="hover:text-secondary">博客</Link>
            <Link href="/about" className="hover:text-secondary">关于我们</Link>
            <Link href="/contact" className="hover:text-secondary">联系我们</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}