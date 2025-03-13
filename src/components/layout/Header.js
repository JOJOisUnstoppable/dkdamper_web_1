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
            <Link href="/products" className="hover:text-secondary transition-colors">产品</Link>
            <Link href="/industry" className="hover:text-secondary transition-colors">行业解决方案</Link>
            <Link href="/404" className="hover:text-secondary transition-colors">博客</Link>
            <Link href="/404" className="hover:text-secondary transition-colors">关于我们</Link>
            <Link href="/404" className="hover:text-secondary transition-colors">联系我们</Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/products" className="hover:text-secondary transition-colors">产品</Link>
              <Link href="/industry" className="hover:text-secondary transition-colors">行业解决方案</Link>
              <Link href="/404" className="hover:text-secondary transition-colors">博客</Link>
              <Link href="/404" className="hover:text-secondary transition-colors">关于我们</Link>
              <Link href="/404" className="hover:text-secondary transition-colors">联系我们</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}