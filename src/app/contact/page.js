// dkdamper_web_1/src/app/contact/page.js
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import ContactusSection from '@/components/common/ContactusSection';

import { 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react'
import { useState } from 'react'

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑，例如发送邮件等
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
              Contact Us
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              variants={fadeInUp}
            >
              Have questions or need assistance? Reach out to our team.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              variants={fadeInUp}
            >
              <Badge variant="secondary" className="px-4 py-2 text-lg bg-white/20 text-white border-white/30">
                <Phone className="w-5 h-5 mr-2" />
                +1 (123) 456-7890
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg bg-white/20 text-white border-white/30">
                <Mail className="w-5 h-5 mr-2" />
                info@lineardamper.comm
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg bg-white/20 text-white border-white/30">
                <MapPin className="w-5 h-5 mr-2" />
                123 Business Street, City, Country
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <ContactusSection
        contactUsTitle="Contact Us"
        getInTouchTitle="Get in Touch"
        addressTitle="Address"
        addressDesc="Business Street, Ningbo, Zhejiang, China"
        emailTitle="Email"
        emailDesc="info@lineardamper.com"
        phoneTitle="Phone"
        phoneDesc="+86 233 421 663"
        workingHoursTitle="Working Hours"
        workingHoursDescWeekday="Monday - Friday: 9:00 AM - 6:00 PM"
        workingHoursDescSaturday="Saturday: 9:00 AM - 1:00 PM"
        sendMessageTitle="Send Us a Message"
      />
    </div>
  )
}