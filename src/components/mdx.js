import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
  // 可以在这里添加自定义组件
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold mb-3">{children}</h2>
  ),
  p: ({ children }) => (
    <p className="mb-4 text-gray-600">{children}</p>
  ),
}

export function Mdx({ code }) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}