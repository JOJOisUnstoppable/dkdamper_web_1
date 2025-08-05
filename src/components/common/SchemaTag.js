'use client';

import { useEffect } from 'react';

/**
 * 通用 Schema 标签组件
 * @param {Object} data - Schema 结构化数据对象
 */
export default function SchemaTag({ data }) {
  useEffect(() => {
    // 动态创建 script 标签并插入到 head 中
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    // 组件卸载时移除 script 标签
    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
}