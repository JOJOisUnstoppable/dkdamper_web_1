export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`p-6 pb-4 ${className}`}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>
      {children}
    </h3>
  )
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  )
}