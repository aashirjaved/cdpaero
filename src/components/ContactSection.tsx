'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const contactInfo = [
  {
    icon: '📍',
    title: 'Global Headquarters',
    details: ['Camden Design & Production Ltd.', 'Aviation House, Gatwick', 'West Sussex, RH6 0NP, UK'],
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: '📞',
    title: 'Contact Information',
    details: ['+44 (0) 1293 123 456', 'info@cdpaero.com', 'support@cdpaero.com'],
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: '🕒',
    title: 'Operating Hours',
    details: ['Monday - Friday: 8:00 - 18:00 GMT', 'Emergency AOG: 24/7', 'Weekend Support Available'],
    gradient: 'from-amber-500 to-orange-500'
  }
]

const serviceOptions = [
  'Global Services',
  'Design Services',
  'Certification',
  'Production',
  'AOG Support',
  'Modifications',
  'Avionics',
  'End of Lease',
  'Other'
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6 font-montserrat">
            Get in{' '}
            <span className="bg-gradient-to-r from-accent-gold to-yellow-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your aviation project? Contact our expert team for 
            consultation, quotes, and comprehensive aviation solutions worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-xl text-white">{info.icon}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-primary-blue mb-3 font-montserrat">
                    {info.title}
                  </h3>
                  
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-medium-gray">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-lg"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🚨</span>
                <h3 className="text-lg font-bold font-montserrat">Emergency AOG</h3>
              </div>
              <p className="mb-2">24/7 Emergency Support</p>
              <p className="font-bold text-xl">+44 (0) 7911 AOG-911</p>
              <p className="text-red-100 text-sm mt-2">
                Immediate response for Aircraft on Ground situations
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-primary-blue mb-6 font-montserrat">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-primary-blue mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-primary-blue mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none"
                      placeholder="Enter your email address"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <label htmlFor="company" className="block text-sm font-semibold text-primary-blue mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none"
                      placeholder="Company name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label htmlFor="service" className="block text-sm font-semibold text-primary-blue mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-primary-blue mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none resize-none"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-primary-blue to-charcoal text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-700 hover:to-slate-700 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    className="flex-1 border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-blue font-semibold py-3 px-8 rounded-xl transition-all duration-300"
                  >
                    Request Quote
                  </button>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-sm text-medium-gray text-center"
                >
                  By submitting this form, you agree to our Privacy Policy and Terms of Service. 
                  We typically respond within 2-4 hours during business hours.
                </motion.p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary-blue mb-6 font-montserrat text-center">
              Find Us Worldwide
            </h3>
            <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center">
              <p className="text-medium-gray">Interactive Map Coming Soon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
