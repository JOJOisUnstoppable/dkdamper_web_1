import Image from 'next/image'
import Link from 'next/link'

export default function Products() {
  return (
    <div className="bg-white">
      {/* Part 1: Hero Section */}
      <section className="relative py-32 bg-white">
        {/* 添加渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10" />
        <div className="max-w-[1200px] mx-auto px-4 relative">  {/* 添加 relative 确保内容在遮罩上层 */}
          <div className="ml-20">
            <h1 className="text-7xl font-bold mb-6">Linear Damper</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mb-8" />
          </div>
        </div>
      </section>



      {/* Part 2: What is and How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="max-w-[1200px] mx-auto space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-center mb-6">What is Linear Damper</h2>
              <div className="text-left">
                <p className="text-xl text-gray-600">
                  Linear dampers are essential components used to control motion by providing resistance 
                  through the compression of hydraulic oil and the flow through orifices. They are widely 
                  applied in various industries for buffering and decelerating movements, ensuring smooth 
                  and controlled operations.
                </p>
                <p className="text-xl text-gray-600 mt-4">
                Linear dampers, in simple terms, are a type of device used to control the speed of moving objects, 
                allowing them to decelerate gradually and avoid sudden stops or impacts. You can see their applications
                in many places, such as cabinet doors that close slowly and gently, and car trunks that don't slam shut; 
                these likely use linear dampers.
                </p>
                <p className="text-xl text-gray-600 mt-4">
                  Understanding the mechanics and types of linear dampers can help you choose the right 
                  one for your needs. Let's explore how they function and the different categories available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: Product List) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Product Series</h2>
          
          {/* 文字介绍 */}
          <p className="text-xl text-gray-600 text-center mb-8 max-w-[1200px] mx-auto">
            Linear dampers are devices designed to control the speed of mechanical systems and reduce vibration, ensuring smooth and safe operation. They serve as safety and functional elements for speed reduction and mass braking, and are not intended for impact, collision, or limit damping.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px]">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Mini Linear Dampers</h3>
                <p className="text-gray-600">Compact and lightweight in structure, ideal for applications with limited space. Commonly used in small mechanical equipment and consumer electronics.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Gas Spring Dampers</h3>
                <p className="text-gray-600">Combining the functions of gas springs and dampers. Suitable for applications that require both support and motion control, such as car trunks or industrial machine doors.</p>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
            We offer a variety of linear dampers, from mini Φ6mm to heavy-duty Φ12mm, meeting the needs of different industries and application scenarios. Each product is meticulously designed and rigorously tested to ensure excellent performance and reliability.
          </p>
          
          <div className="space-y-8">
            {[
              {
                id: 'Φ6mm',
                model: "Mini Linear Damper Φ6mm",
                description: "Mini linear hydraulic dampers with one-way damping, featuring automatic spring return and re-arm mechanism. Ideal for precision control in compact applications.",
                image: "/images/products/products_1.jpg",
                specs: {
                  "Force Range": "0-100N",
                  "Stroke Length": "10-50mm",
                  "Temperature": "-10°C to 60°C",
                  "Material": "Precision steel"
                }
              },
              {
                id: 'Φ8mm',
                model: "Linear Damper Φ8mm",
                description: "Linear hydraulic dampers with one-way damping, automatic spring return and re-arm functionality. Perfect balance of size and performance.",
                image: "/images/products/products_2.jpg",
                specs: {
                  "Force Range": "0-350N",
                  "Stroke Length": "10-100mm",
                  "Temperature": "-10°C to 70°C",
                  "Material": "High-grade steel"
                }
              },
              {
                id: 'Φ10mm',
                model: "Linear Damper Φ10mm",
                description: "Standard linear hydraulic dampers with one-way damping and spring return. Offers reliable performance for medium-duty applications.",
                image: "/images/products/products_3.jpg",
                specs: {
                  "Force Range": "0-870N",
                  "Stroke Length": "20-150mm",
                  "Temperature": "-20°C to 80°C",
                  "Material": "Industrial steel"
                }
              },
              {
                id: 'Φ12mm',
                model: "Max Linear Damper Φ12mm",
                description: "Heavy-duty linear hydraulic dampers with customizable stroke and damping direction. Features one-way damping with spring return, ideal for high-force applications.",
                image: "/images/products/products_4.jpg",
                specs: {
                  "Force Range": "0-2400N",
                  "Stroke Length": "10-200mm",
                  "Temperature": "-20°C to 85°C",
                  "Material": "Heavy-duty steel"
                }
              }
            ].map((product, index) => (
              <div key={index} 
                className="flex items-stretch gap-6 bg-white rounded-xl overflow-hidden hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl border border-gray-100"
              >
                {/* 产品图片 */}
                <div className="w-80 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* 产品信息区域 */}
                <div className="flex-grow p-6 flex items-center gap-8">
                  {/* 型号和规格 */}
                  <div className="w-64 flex-shrink-0">
                    <div className="text-3xl font-bold text-gray-800">{product.id}</div>
                    <div className="mt-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full inline-block text-sm">
                      {product.specs["Material"]}
                    </div>
                  </div>
                  
                  {/* 描述 */}
                  <div className="flex-grow">
                    <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                  
                  {/* 力矩标尺 */}
                  <div className="w-56 flex-shrink-0">
                    <div className="mb-2 text-sm font-medium">Force Range</div>
                    <div className="h-6 bg-gray-200 rounded-lg overflow-hidden relative">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-700"
                        style={{
                          width: `${(parseInt(product.specs["Force Range"].split("-")[1]) / 3000) * 100}%`
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                        {product.specs["Force Range"]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 查看所有产品按钮 */}
          <div className="mt-16 flex justify-center gap-8">
            <Link href="/products/categories" className="px-10 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center text-lg font-medium shadow-md hover:shadow-lg">
              <span>View All Products</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="/catalog" className="px-10 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center text-lg font-medium shadow-md hover:shadow-lg">
              <span>Downlown catelog</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>


        </div>
      </section>
      {/* Part 4: How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">How Does a Linear Damper Work?</h2>
          <div className="text-left">
            <p className="text-xl text-gray-600">
              Linear dampers operate by converting kinetic energy into thermal energy through hydraulic 
              resistance. When a force acts on the piston rod, it pushes the piston, compressing the 
              hydraulic oil inside. This oil is then forced through specially designed orifices, 
              creating resistance that slows down or cushions the movement.
            </p>
          </div>
        </div>
      </section>




      {/* 视频展示部分 */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          
          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="aspect-video relative">
                <video
                  src="/videos/How_damper_works.mp4"
                  controls
                  autoPlay
                  loop
                  muted
                  poster="/images/products/video-poster.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Part 5: Consideration when buying */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Consideration when buying linear damper</h2>
          
          {/* 概述部分 */}
          <p className="text-xl text-gray-600 text-left max-w-[1200px] mx-auto">
            A linear damper primarily works through hydraulic resistance to control motion. When an external force acts, 
            it's transmitted via the piston rod to the piston inside a cylinder filled with hydraulic oil. The piston 
            has small openings called orifices. As the piston moves, it compresses the hydraulic oil, forcing it to 
            flow through these restricted orifices.
          </p>

          {/* 正文部分：左文右图 */}
          <div className="grid grid-cols-2 gap-16 items-start mb-16">
            {/* 左侧文字内容 */}
            <div className="space-y-12">
              {/* Piston and Piston Rod */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Piston and Piston Rod</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  When an external force acts on a linear damper, this force will first be transmitted to the piston rod. 
                  The piston rod is a crucial component connecting the external object and the inside of the damper. 
                  Following this, the piston rod will push the piston connected to it to move inside the damper's cylinder, 
                  and the piston is typically a specially designed part with orifices on it.
                </p>
              </div>

              {/* Hydraulic Oil */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Hydraulic Oil</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Linear dampers control motion by using fluid resistance. When force is applied, a piston moves within 
                  a cylinder filled with hydraulic oil. The oil is forced through small openings (orifices). This 
                  restricted flow creates a resistance force that opposes the motion, providing the damping effect.
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  The viscosity of the hydraulic oil is important because it affects the level of resistance. Different 
                  types of linear dampers, classified by overflow type (single or multi-hole) and thrust direction 
                  (push-in, pull-out, two-way), all rely on this principle of hydraulic oil creating resistance.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  In essence, hydraulic oil is the medium through which motion is resisted and energy is absorbed in a 
                  linear damper. The quality and type of hydraulic oil used can significantly impact the damper's 
                  performance and longevity.
                </p>
              </div>

              {/* Orifices */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Orifices</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                 Orifices are crucial in linear dampers because they are the primary means of controlling the damping force. 
                 They are small, precisely sized openings in the piston of the damper. As the piston moves, it forces 
                 hydraulic oil to flow through these orifices.
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  The size and design of the orifices directly regulate the rate at which the hydraulic oil can flow. 
                  Smaller orifices restrict the oil flow more, resulting in higher resistance and a greater damping force, 
                  thus slowing down the motion more significantly. Conversely, larger orifices allow for easier oil flow, 
                  leading to less resistance and a smaller damping force.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Therefore, orifices determine the damping coefficient of the linear damper, which is a critical 
                  specification when selecting a damper for a particular application. Different orifice designs can 
                  provide various damping characteristics to meet specific requirements.
                </p>
              </div>
            </div>

            {/* 右侧图片 */}
            <div className="relative h-[1200px] sticky top-8">
              <Image
                src="/images/products/Linear_damper_part.png"
                alt="Damper Components"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* 结语部分 - 修改样式 */}
          <p className="text-xl text-gray-600 text-left max-w-[1200px]">
            A linear damper primarily works through hydraulic resistance to control motion. When an external force acts, 
            it's transmitted via the piston rod to the piston inside a cylinder filled with hydraulic oil. The piston has 
            small openings called orifices. As the piston moves, it compresses the hydraulic oil, forcing it to flow through 
            these restricted orifices.
          </p>
          <p className="text-xl text-gray-600 text-left max-w-[1200px]">
          Understanding these core components and their interactions is crucial when selecting a linear damper 
          for your specific application. Each component plays a vital role in the damper's performance and longevity.
          </p>
        </div>
      </section>

      {/* Part 5: Types of Linear Dampers */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Types of Linear Dampers Based on Orifice Design
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
            Linear dampers can be categorized based on the design of their orifices, 
            which directly influence their damping characteristics.
          </p>

          <div className="space-y-20">
            {/* Single vs Multiple Orifices */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-8">Single Orifice vs. Multiple Orifices</h3>
              <div className="flex items-center justify-between">
                {/* Single Orifice Card */}
                <div className="w-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-[300px]">
                    <Image
                      src="/images/dampers/single-orifice.jpg"
                      alt="Single Orifice"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl font-bold mb-4 text-center">Single Orifice</h4>
                    <p className="text-gray-600 text-center">
                      Provides a consistent damping force, ideal for applications requiring uniform deceleration.
                    </p>
                  </div>
                </div>

                {/* VS Text */}
                <div className="text-7xl font-bold text-gray-800">
                  VS
                </div>

                {/* Multiple Orifices Card */}
                <div className="w-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-[300px]">
                    <Image
                      src="/images/dampers/multiple-orifice.jpg"
                      alt="Multiple Orifices"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl font-bold mb-4 text-center">Multiple Orifices</h4>
                    <p className="text-gray-600 text-center">
                      Allows for variable damping forces, suitable for more complex motion control needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direction of Force */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-8">
                Direction of Force: Push-in, Pull-out, and Two-way Dampers
              </h3>
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="relative h-[300px]">
                  <Image
                    src="/images/dampers/force-direction.jpg"
                    alt="Force Direction Types"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    The direction in which the damping force is applied can vary, making linear dampers 
                    versatile for different applications.
                  </p>
                  {[
                    {
                      title: "Push-in Dampers",
                      desc: "These dampers exert force when the piston is pushed into the cylinder, commonly used in closing mechanisms."
                    },
                    {
                      title: "Pull-out Dampers",
                      desc: "Here, the damping force is applied when the piston is pulled out of the cylinder, often found in opening mechanisms."
                    },
                    {
                      title: "Two-way Dampers",
                      desc: "These dampers provide resistance in both directions, making them suitable for applications requiring control in both opening and closing motions."
                    }
                  ].map((item, index) => (
                    <div key={index}>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 6: Selection Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Determining the Right Linear Damper for Your Application
          </h2>
          
          <div className="space-y-16">
            {/* Operating Environment */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-8">Consider the Operating Environment</h3>
              {/* Temperature Range Table */}
              <div className="max-w-5xl mx-auto mb-8">
                <h4 className="text-xl font-bold mb-4">Typical Operating Temperature Ranges for Linear Dampers:</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Model</th>
                        {[10, 20, 30, 40, 50, 60, 70, 80, 85, 90, 100, 110, 120].map((temp) => (
                          <th key={temp} className="border px-2 py-2 text-center">{temp}°C</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: "PR-L202(Φ10mm)",
                          temps: [false, true, true, true, true, true, true, true, true, true, true, true, true]
                        },
                        {
                          name: "PR-L208(Φ10mm)",
                          temps: [false, true, true, true, true, true, false, false, false, false, false, false, false]
                        },
                        {
                          name: "PR-L223(Φ8mm)",
                          temps: [false, true, true, true, true, true, false, false, false, false, false, false, false]
                        },
                        {
                          name: "PR-L241(Φ12mm)",
                          temps: [true, true, true, true, true, true, true, true, true, false, false, false, false]
                        },
                        {
                          name: "JP-CA10(Φ10mm) - Dynamic",
                          temps: [true, true, true, true, true, false, false, false, false, false, false, false, false]
                        },
                        {
                          name: "JP-CA10(Φ10mm) - Static",
                          temps: [false, true, true, true, true, true, true, true, false, false, false, false, false]
                        },
                        {
                          name: "JP-CA1210(Φ12mm)",
                          temps: [false, false, false, true, true, true, true, true, false, false, false, false, false]
                        },
                        {
                          name: "JP-CU038(Φ10mm) - Dynamic",
                          temps: [false, true, true, true, true, true, false, false, false, false, false, false, false]
                        },
                        {
                          name: "JP-CU038(Φ10mm) - Static",
                          temps: [false, true, true, true, true, true, true, true, false, false, false, false, false]
                        },
                        {
                          name: "JP-801 Series",
                          temps: [false, true, true, true, true, true, false, false, false, false, false, false, false]
                        },
                        {
                          name: "JP-802 Series",
                          temps: [false, true, true, true, true, true, false, false, false, false, false, false, false]
                        },
                        {
                          name: "JP-803 Series",
                          temps: [false, true, true, true, true, true, false, false, false, false, false, false, false]
                        },
                        {
                          name: "JP-804 Series",
                          temps: [false, true, true, true, true, true, false, false, false, false, false, false, false]
                        }
                      ].map((model, index) => (
                        <tr key={index}>
                          <td className="border px-4 py-2">{model.name}</td>
                          {model.temps.map((isSupported, idx) => (
                            <td key={idx} className="border px-2 py-2 text-center">
                              <span className={isSupported ? "text-green-500" : "text-red-500"}>
                                {isSupported ? "✔" : "✖"}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="max-w-[1200px] mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Temperature range is a critical factor in selecting a linear damper. Most standard dampers 
                  operate efficiently between -20°C to 60°C. However, specialized models like the PR-L202 
                  can handle temperatures up to 120°C, while medical-grade dampers like JP-CA10 are optimized 
                  for more moderate temperature ranges of 10℃-50℃ during operation.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed mt-4">
                  Consider not just the operating temperature but also storage conditions. Some models, 
                  such as the JP-CU038, have different temperature tolerances for dynamic operation 
                  (20℃-60℃) versus static storage (20°C - 80°C).
                </p>
              </div>
            </div>

            {/* Force and Stroke */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-8">Evaluate the Required Force and Stroke</h3>
              <div className="max-w-[1200px] mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed">
                  The force range and stroke length are fundamental parameters that determine a damper's 
                  performance. Force range indicates the resistance the damper can provide, typically 
                  measured in Newtons (N). Different applications require different force ranges - from 
                  light-duty applications needing 50-300N to heavy industrial uses requiring up to 3000N.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed mt-4">
                  Stroke length, measured in millimeters, determines the distance over which the damper 
                  can effectively operate. This can range from compact 30mm strokes for small applications 
                  to extended 600mm strokes for larger machinery.
                </p>
              </div>
            </div>

            {/* Material and Construction */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-8">Material and Construction</h3>
              <div className="max-w-[1200px] mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Material selection significantly impacts a damper's durability and application suitability. 
                  Medical applications typically require medical-grade stainless steel for its corrosion 
                  resistance and sterility. Industrial applications might use carbon steel or high-strength 
                  steel for durability.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed mt-4">
                  The construction quality, including the head and shell materials (often POM), and the 
                  piston rod material (typically stainless steel), determines the damper's reliability 
                  in harsh environments and its overall service life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Technical Support?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Our engineering team can help you select the right damper for your application and provide customized solutions.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Contact Our Engineers
          </button>
        </div>
      </section>
    </div>
  )
}