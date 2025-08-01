'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '✨',
    title: 'Luxury & Comfort',
    description: 'Premium materials and craftsmanship that exceed industry standards, creating exceptional passenger experiences.',
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    icon: '🛡️',
    title: 'Durability & Efficiency',
    description: 'Engineered solutions that maximize aircraft lifecycle while optimizing operational efficiency and reducing costs.',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    icon: '✅',
    title: 'Certification Compliance',
    description: 'Full regulatory compliance across UK CAA, EASA, and FAA standards ensuring airworthiness and safety.',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: '💰',
    title: 'Cost Optimization',
    description: 'Strategic design and engineering approaches that deliver maximum value while minimizing total cost of ownership.',
    gradient: 'from-purple-500 to-violet-500'
  },
  {
    icon: '🎯',
    title: 'Expert Craftsmanship',
    description: 'Decades of combined experience in aviation design, manufacturing, and certification across all major platforms.',
    gradient: 'from-rose-500 to-pink-500'
  },
  {
    icon: '⚡',
    title: 'Rapid Response',
    description: '24/7 AOG support and rapid deployment capabilities ensuring minimal aircraft downtime worldwide.',
    gradient: 'from-cyan-500 to-blue-500'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function WhyChooseCDP() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6 font-montserrat">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-accent-gold to-yellow-500 bg-clip-text text-transparent">
              CDP AERO
            </span>
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Experience the difference that comes from partnering with industry leaders 
            committed to excellence, innovation, and uncompromising quality.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl text-white">{feature.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-primary-blue mb-4 font-montserrat group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-medium-gray leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-blue to-charcoal rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-montserrat">
              Ready to Elevate Your Aviation Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join the world&apos;s leading airlines and operators who trust CDP AERO for their most critical aviation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-gold hover:bg-yellow-500 text-primary-blue font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-blue font-semibold px-8 py-3 rounded-full transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
