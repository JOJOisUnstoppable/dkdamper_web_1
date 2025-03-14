export const trackUserBehavior = (action, data) => {
  try {
    const event = {
      action,
      data,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.pathname : '',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : ''
    }
    
    // 存储到 localStorage 用于演示
    const events = JSON.parse(localStorage.getItem('user_events') || '[]')
    events.push(event)
    localStorage.setItem('user_events', JSON.stringify(events))
    
    // 这里可以添加实际的数据上报逻辑
    console.log('Track event:', event)
  } catch (error) {
    console.error('Track event failed:', error)
  }
}