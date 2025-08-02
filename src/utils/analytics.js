// 修改 src/utils/analytics.js
export const trackUserBehavior = (action, data) => {
  try {
    const event = {
      action,
      data,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.pathname : '',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : ''
    }
    
    // 原有本地存储逻辑
    const events = JSON.parse(localStorage.getItem('user_events') || '[]')
    events.push(event)
    localStorage.setItem('user_events', JSON.stringify(events))
    
    // 添加 Google Analytics 事件追踪
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        ...data,
        page_path: event.url,
        timestamp: event.timestamp
      })
    }

    console.log('Track event:', event)
  } catch (error) {
    console.error('Track event failed:', error)
  }
}