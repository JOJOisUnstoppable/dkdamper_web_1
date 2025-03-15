'use client'
import { createContext } from 'react'

export const ProductsContext = createContext([])

export function ProductsProvider({ children }) {
  const products = [
    {
      id: 1,
      slug: 'enterprise-erp',
      name: 'Enterprise ERP System',
      description: 'Comprehensive enterprise resource planning solution to help businesses achieve digital transformation.',
      category: 'erp',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800',
      ],
      specs: {
        'Scale': 'Medium to Large Enterprise',
        'Deployment': 'Private/Public Cloud',
        'License': 'Perpetual',
        'Architecture': 'Microservices'
      },
      features: [
        'Multi-module Integration',
        'Real-time Data Analysis',
        'Intelligent Decision Support'
      ],
      details: [
        {
          title: 'System Overview',
          content: 'A comprehensive enterprise resource planning solution that streamlines business operations.'
        }
      ]
    },
    // More products can be added here...
  ]

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}