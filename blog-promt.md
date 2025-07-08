trash-can页面模板开发提示词:
1. 核心目标
创建一个响应式技术文章模板，通过 Contentlayer 解析 MDX 文件（如 trash-can.md），展示液压线性阻尼器的技术细节。需实现：
- 完整呈现技术参数：工作原理/类型对比/应用场景
- 交互式目录导航 + 锚点定位
- 自定义 MDX 组件支持
- 移动端优先的响应式设计
- SEO 优化（Schema.org 结构化数据）

2. 页面结构规范
    HEADER
    └─ 标题 (Hydraulic Linear Damper)
    └─ 元数据栏 [日期/作者/标签]
    └─ 摘要文本 (斜体灰色背景)

    MAIN LAYOUT (桌面端: 3:7 分栏)
    ├── LEFT COLUMN (目录区)
    │   ├─ 固定位置滚动
    │   ├─ 根据 H2/H3 自动生成目录
    │   └─ 当前章节高亮 (滚动监听)
    │
    └── RIGHT COLUMN (内容区)
        ├─ 技术解析区块
        │   ├─ 工作原理图 (带标注)
        │   ├─ 动画占位符 (Lottie 集成)
        │   └─ 对比表格 ($100 vs $60)
        │
        ├─ 应用案例展示
        │   ├─ 网格布局 (4列桌面/2列移动)
        │   └─ 悬停显示应用说明
        │
        └─ FAQ 折叠面板
            ├─ 默认折叠状态
            └─ 平滑展开动画

    FOOTER
    ├─ 资源链接 (带 ↗ 图标)
    ├─ 联系卡片 (邮箱/电话)
    └─ About Us (居中显示)


3. MDX 组件处理规范
    MDX 元素	转换规则	样式要求
    %[label](url)	→ LottiePlayer	带标题的动画容器
    ![alt](url)	→ Next/Image	16:9 比例 + 圆角
    表格	→ ScrollContainer	条纹行 + 悬停高亮
    ### H3标题	→ 带锚点图标	30px 上边距
    FAQ 区块	→ Accordion	手风琴折叠组件


4. 关键交互实现要求(具体代码example)

 4.1 目录导航系统
 // 自动生成目录
    const tocItems = doc.headings.map(h => ({
    id: h.id,
    text: h.text,
    level: h.level,
    active: currentSection === h.id // 滚动监听
    }))

    // 滚动定位修正 (避免标题被导航栏遮挡)
    <a href={`#${id}`} onClick={(e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    })
    setCurrentSection(id) // 更新当前激活章节
    }}>

4.2 阻尼器 3D 可视化
    // 动态加载 Three.js 组件
        import dynamic from 'next/dynamic'
        const DamperModel = dynamic(() => import('@/components/DamperModel'), {
        ssr: false,
        loading: () => <Placeholder />
        })
4.3 产品力值计算器
    // 交互式表单
    <form>
    <Input label="盖板重量 (g)" type="number" />
    <Slider label="开启角度" min={0} max={90} />
    <Output>推荐阻尼器: 20N 液压型</Output>
    </form>
4.4 SEO 增强
    // 结构化数据
    {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "name": "液压线性阻尼器技术解析",
    "author": { "@type": "Person", "name": "John Doe" }
    }

5. 性能优化指令
    5.1 **图片处理**
   - 所有图片使用 `next/image`
   - 占位图: `placeholder="blur" blurDataURL={base64}`
   - 尺寸: `width={800} height={450}`

    5.2. **组件懒加载**
    - 表格行数 >5 时启用虚拟滚动
    - 非首屏动画动态导入

    5.3. **缓存策略**
    ```ts
    // next.config.js
    experimental: {
        scrollRestoration: true,
        staleTimes: { dynamic: 60 }
    }


6. 响应式断点规范**
    | **组件** | **桌面端 (≥768px)** | **移动端 (<768px)** |
    |----------|----------------------|---------------------|
    | 目录导航 | 固定左侧栏 | 汉堡菜单 + 下拉抽屉 |
    | 图片网格 | 4 列 | 2 列 + 滑动容器 |
    | 表格 | 完整显示 | 水平滚动容器 |
    | 元数据栏 | 水平布局 | 垂直堆叠 |

    ```css
    /* 移动端目录示例 */
    @media (max-width: 768px) {
    .toc-container {
        position: fixed;
        top: 0;
        left: -100%;
        transition: transform 0.3s ease;
    }
    .toc-active {
        transform: translateX(100%);
    }
    }

7.总体要点：
    结构化布局规范 - 明确每个区域的组成和行为
    组件级转换规则 - 定义 MDX 到 UI 的精确映射
    性能量化指标 - 给出可测量的优化标准
    响应式断点规范 - 提供多端实现方案
    安全防护策略 - 内置内容安全机制