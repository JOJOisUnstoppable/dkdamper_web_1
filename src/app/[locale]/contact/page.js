// dkdamper_web_1/src/app/contact/page.js
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { getDictionary } from '@/lib/i18n/getDictionary';
import ContactusSection from '@/components/common/ContactusSection';
import { 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react'

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

export default async function ContactPage({ params }) {

  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  // 获取字典数据
  const dict = await getDictionary(locale);
  const contact = dict.contact;

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
              {contact.hero.title}
            </h2>
            <p 
              className="text-xl mb-8 text-blue-100"
              variants={fadeInUp}
            >
              {contact.hero.description}
            </p>
            <div
              className="flex flex-wrap justify-center gap-4 mb-12"
              variants={fadeInUp}
            >
              <Badge variant="secondary" className="px-4 py-2 text-lg bg-white/20 text-white border-white/30">
                <Phone className="w-5 h-5 mr-2" />
                {contact.hero.contactInfo.phone}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg bg-white/20 text-white border-white/30">
                <Mail className="w-5 h-5 mr-2" />
                {contact.hero.contactInfo.email}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg bg-white/20 text-white border-white/30">
                <MapPin className="w-5 h-5 mr-2" />
                {contact.hero.contactInfo.address}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactusSection
        contactUsTitle={contact.contactSection.contactUsTitle}
        getInTouchTitle={contact.contactSection.getInTouchTitle}
        addressTitle={contact.contactSection.addressTitle}
        addressDesc={contact.contactSection.addressDesc}
        emailTitle={contact.contactSection.emailTitle}
        emailDesc={contact.contactSection.emailDesc}
        phoneTitle={contact.contactSection.phoneTitle}
        phoneDesc={contact.contactSection.phoneDesc}
        workingHoursTitle={contact.contactSection.workingHoursTitle}
        workingHoursDescWeekday={contact.contactSection.workingHoursDescWeekday}
        workingHoursDescSaturday={contact.contactSection.workingHoursDescSaturday}
        sendMessageTitle={contact.contactSection.sendMessageTitle}
      />
    </div>
  )
}