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
            <Link href="/products" className="hover:text-secondary transition-colors">Products</Link>
            <Link href="/industry" className="hover:text-secondary transition-colors">Industry Solutions</Link>
            <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-secondary transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <Link href="/products" className="hover:text-secondary transition-colors">Products</Link>
                <Link href="/industry" className="hover:text-secondary transition-colors">Industry Solutions</Link>
                <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
                <Link href="/about" className="hover:text-secondary transition-colors">About Us</Link>
                <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
              </div>
            </div>
          )}
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
                <Link href="/products" className="hover:text-secondary transition-colors">Products</Link>
                <Link href="/industry" className="hover:text-secondary transition-colors">Industry Solutions</Link>
                <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
                <Link href="/about" className="hover:text-secondary transition-colors">About Us</Link>
                <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}