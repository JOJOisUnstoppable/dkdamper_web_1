'use client'
import React from 'react'
import { motion } from 'framer-motion'
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <motion.section 
        className="relative pt-40 pb-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2 
              className="text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              26 Years of Professional Manufacturing Experience
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              variants={fadeInUp}
            >
              Committed to providing high-quality linear damper products and solutions for global customers
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              variants={fadeInUp}
            >
              <Badge variant="secondary" className="px-4 py-2 text-lg bg-white/20 text-white border-white/30">
                <Award className="w-5 h-5 mr-2" />
                ISO Quality Certification
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg bg-white/20 text-white border-white/30">
                <Factory className="w-5 h-5 mr-2" />
                Monthly Capacity: 100K Units
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg bg-white/20 text-white border-white/30">
                <Users className="w-5 h-5 mr-2" />
                46 Supplier Partners
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">About DK Machinery</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 26 years of extensive experience in damper manufacturing, DK Machinery is dedicated to providing customers with high-quality linear damper products and solutions.
              Adhering to a customer-first principle, we have established long-term, stable cooperative relationships with global clients through continuous technological innovation and strict quality control.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Professional Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    26 years of specialization in linear damper manufacturing, accumulating rich industry experience and technical expertise
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Strict quality control system ensuring excellence at every stage from raw materials to finished products
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Collaborative Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Cultivated 46 supplier partners, establishing a comprehensive industrial ecosystem
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section 
        id="products" 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Product Center</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our linear damper products feature excellent technical parameters and reliable performance
            </p>
          </motion.div>

          {/* Product Images */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image 
                  src="/images/about/linear_damper_product_1.png"
                  alt="Linear Damper Product 1" 
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">Standard Linear Damper</h4>
                  <p className="text-gray-600">Suitable for conventional applications like drawers and cabinet doors</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image 
                  src="/images/about/linear_damper_product_2.png"
                  alt="Linear Damper Product 2" 
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">Heavy-Duty Linear Damper</h4>
                  <p className="text-gray-600">High load capacity, ideal for industrial equipment applications</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image 
                  src="/images/about/linear_damper_product_3.jpg"
                  alt="Linear Damper Product 3" 
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">Custom Linear Damper</h4>
                  <p className="text-gray-600">Tailored to customer requirements for specialized applications</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Technical Specifications */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Specifications</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h5 className="font-semibold text-gray-900">Thrust Range</h5>
                <p className="text-blue-600 font-bold">300N - 2300N</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Settings className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h5 className="font-semibold text-gray-900">Stroke Standard</h5>
                <p className="text-green-600 font-bold">7-10mm</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Factory className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h5 className="font-semibold text-gray-900">Monthly Capacity</h5>
                <p className="text-purple-600 font-bold">100K Units</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Star className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h5 className="font-semibold text-gray-900">Accessory Combinations</h5>
                <p className="text-orange-600 font-bold">2000+ Types</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Production & Testing Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Production & Testing</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced production lines and strict testing standards ensure product quality
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Production Images */}
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <Image 
                  src="/images/about/production_line_1.png"
                  alt="Production Line 1" 
                  width={600}
                  height={400}
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
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
              </motion.div>
            </motion.div>

            {/* Production Features */}
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Factory className="w-6 h-6 mr-2 text-blue-600" />
                      Automated Production Line
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Advanced automated production equipment ensures product consistency and maximizes efficiency.
                      23 strict processes, each with precise time-cost calculation.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-6 h-6 mr-2 text-green-600" />
                      Quality Testing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Lab testing reaches millions of cycles, with mass-produced products guaranteed for 200,000 cycles.
                      Testing standard: 5-6 cycles/minute, completing 100,000 cycle verification in 7 days.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-6 h-6 mr-2 text-purple-600" />
                      Customization Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Supports non-standard customization with 2000+ accessory combinations to meet diverse needs.
                      For extreme conditions like ultra-low temperatures, -40℃ materials ensure product performance.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quality Assurance Section */}
      <motion.section 
        id="quality" 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strict quality assurance system and transparent cost analysis ensure customer benefits
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Image 
                src="/images/about/damper_testing_1.jpg"
                alt="Damper Testing" 
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sample Testing Process</h4>
                  <p className="text-gray-600">
                    Before formal orders, we require customer samples for material composition verification to ensure product compliance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Transparent Cost Analysis</h4>
                  <p className="text-gray-600">
                    We offer competitive prices for major clients with transparent material cost breakdowns.
                    Using seamless golden tubes with brighter surface plating.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Three-Step Verification</h4>
                  <p className="text-gray-600">
                    For any concerns about pricing or quality: sample comparison, on-site disassembly, and time-cost verification.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quality Stats */}
          <motion.div 
            className="grid md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">26 Years</div>
                  <p className="text-gray-600">Industry Experience</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">200K Cycles</div>
                  <p className="text-gray-600">Testing Guarantee</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">23 Steps</div>
                  <p className="text-gray-600">Strict Processes</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">46 Partners</div>
                  <p className="text-gray-600">Collaborators</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20 bg-blue-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-4">Contact Us</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact us to learn more about our products or discuss cooperation opportunities
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <div className="bg-white/10 rounded-lg p-8 hover:bg-white/20 transition-colors duration-300">
                <Phone className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h4 className="text-xl font-semibold mb-2">Phone</h4>
                <p className="text-blue-100">400-123-4567</p>
                <p className="text-blue-100">0755-12345678</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white/10 rounded-lg p-8 hover:bg-white/20 transition-colors duration-300">
                <Mail className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h4 className="text-xl font-semibold mb-2">Email</h4>
                <p className="text-blue-100">info@lineardamper.com</p>
                <p className="text-blue-100">sales@lineardamper.com</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white/10 rounded-lg p-8 hover:bg-white/20 transition-colors duration-300">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h4 className="text-xl font-semibold mb-2">Address</h4>
                <p className="text-blue-100">Nanshan District, Shenzhen</p>
                <p className="text-blue-100">Science Park, Guangdong, China</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
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
              Contact Now
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
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
                <h4 className="text-xl font-bold">DK Machinery Linear Dampers</h4>
                <p className="text-sm text-gray-400">Professional Linear Damper Manufacturer</p>
              </div>
            </div>
            <Separator className="my-6 bg-gray-700" />
            <p className="text-gray-400">
              © 2024 DK Machinery Co., Ltd. All Rights Reserved. | 26 Years Manufacturing Experience | Quality Assurance | Integrity Service
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}