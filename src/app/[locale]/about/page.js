import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Factory,
  Settings,
  Award,
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Target,
  Zap
} from 'lucide-react'
import Image from 'next/image'
import { getDictionary } from '@/lib/i18n/getDictionary';


const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default async function AboutPage({ params }) {

  const resolvedParams = await params;
  const { locale } = resolvedParams;

  // 获取字典数据
  const dict = await getDictionary(locale);
  const about = dict.about;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section
        className="relative pt-40 pb-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <h2
              className="text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              {about.hero.title}
            </h2>
            <p
              className="text-xl mb-8 text-blue-100"
              variants={fadeInUp}
            >
              {about.hero.description}
            </p>
            <div
              className="flex flex-wrap justify-center gap-4 mb-12"
              variants={fadeInUp}
            >
              {about.hero.badges.map((badge, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-lg bg-white/20 text-white border-white/30">
                  {index === 0 && <Award className="w-5 h-5 mr-2" />}
                  {index === 1 && <Factory className="w-5 h-5 mr-2" />}
                  {index === 2 && <Users className="w-5 h-5 mr-2" />}
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">{about.aboutSection.title}</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {about.aboutSection.description}
            </p>
          </div>

          <div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {about.aboutSection.features.map((feature, index) => (
              <div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {index === 0 && <Target className="w-8 h-8 text-blue-600" />}
                      {index === 1 && <Shield className="w-8 h-8 text-green-600" />}
                      {index === 2 && <Users className="w-8 h-8 text-purple-600" />}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">{about.products.title}</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {about.products.description}
            </p>
          </div>

          {/* Product Images */}
          <div
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {about.products.productList.map((product, index) => (
              <div key={index} variants={fadeInUp} className="text-center">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={`/images/about/linear_damper_product_${index + 1}.${index === 2 ? 'jpg' : 'png'}`}
                    alt={product.name}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Specifications */}
          <div
            className="bg-white rounded-lg shadow-lg p-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">{about.products.technicalSpecifications.title}</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {about.products.technicalSpecifications.specs.map((spec, index) => (
                <div key={index} className={`text-center p-4 rounded-lg ${index === 0 ? 'bg-blue-50' :
                    index === 1 ? 'bg-green-50' :
                      index === 2 ? 'bg-purple-50' : 'bg-orange-50'
                  }`}>
                  {index === 0 && <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />}
                  {index === 1 && <Settings className="w-8 h-8 text-green-600 mx-auto mb-2" />}
                  {index === 2 && <Factory className="w-8 h-8 text-purple-600 mx-auto mb-2" />}
                  {index === 3 && <Star className="w-8 h-8 text-orange-600 mx-auto mb-2" />}
                  <h5 className="font-semibold text-gray-900">{spec.title}</h5>
                  <p className={`font-bold ${index === 0 ? 'text-blue-600' :
                      index === 1 ? 'text-green-600' :
                        index === 2 ? 'text-purple-600' : 'text-orange-600'
                    }`}>{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production & Testing Section */}
      <section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">{about.productionTesting.title}</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {about.productionTesting.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Production Images */}
            <div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div variants={fadeInUp}>
                <Image
                  src="/images/about/production_line_1.png"
                  alt="Production Line 1"
                  width={600}
                  height={400}
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/about/production_line_2.webp"
                  alt="Production Line 2"
                  width={300}
                  height={200}
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <Image
                  src="/images/about/production_line_3.png"
                  alt="Production Line 3"
                  width={300}
                  height={200}
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Production Features */}
            <div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {about.productionTesting.features.map((feature, index) => (
                <div key={index} variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        {index === 0 && <Factory className="w-6 h-6 mr-2 text-blue-600" />}
                        {index === 1 && <Shield className="w-6 h-6 mr-2 text-green-600" />}
                        {index === 2 && <Settings className="w-6 h-6 mr-2 text-purple-600" />}
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section
        id="quality"
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">{about.qualityAssurance.title}</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {about.qualityAssurance.description}
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div variants={fadeInUp}>
              <Image
                src="/images/about/damper_testing_1.jpg"
                alt="Damper Testing"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div variants={fadeInUp} className="space-y-6">
              {about.qualityAssurance.processes.map((process, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{process.title}</h4>
                    <p className="text-gray-600">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Stats */}
          <div
            className="grid md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {about.qualityAssurance.stats.map((stat, index) => (
              <div key={index} variants={fadeInUp}>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className={`text-3xl font-bold mb-2 ${index === 0 ? 'text-blue-600' :
                        index === 1 ? 'text-green-600' :
                          index === 2 ? 'text-purple-600' : 'text-orange-600'
                      }`}>{stat.value}</div>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-blue-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-4">{about.contact.title}</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {about.contact.description}
            </p>
          </div>

          <div
            className="grid md:grid-cols-3 gap-8 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {about.contact.contactInfo.map((info, index) => (
              <div key={index} variants={fadeInUp}>
                <div className="bg-white/10 rounded-lg p-8 hover:bg-white/20 transition-colors duration-300">
                  {info.type === 'Phone' && <Phone className="w-12 h-12 mx-auto mb-4 text-blue-200" />}
                  {info.type === 'Email' && <Mail className="w-12 h-12 mx-auto mb-4 text-blue-200" />}
                  {info.type === 'Address' && <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-200" />}
                  <h4 className="text-xl font-semibold mb-2">{info.type}</h4>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-blue-100">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className="text-center mt-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              {about.contact.buttonText}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-gray-900 text-white py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold">{about.footer.companyName}</h4>
                <p className="text-sm text-gray-400">{about.footer.companyTagline}</p>
              </div>
            </div>
            <Separator className="my-6 bg-gray-700" />
            <p className="text-gray-400">
              {about.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}