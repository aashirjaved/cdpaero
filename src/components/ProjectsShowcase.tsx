'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Luxury Business Jet Interior',
    client: 'Private Aviation Client',
    category: 'Interior Design',
    description: 'Complete cabin transformation featuring bespoke seating, advanced IFE systems, and premium materials.',
    image: '/api/placeholder/600/400',
    tags: ['Business Aviation', 'Interior Design', 'Luxury'],
    results: ['25% weight reduction', 'Enhanced passenger comfort', 'EASA certified']
  },
  {
    id: 2,
    title: 'A320 Cabin Reconfiguration',
    client: 'Major European Airline',
    category: 'Modifications',
    description: 'Passenger-to-cargo conversion with optimized LOPA design for maximum freight capacity.',
    image: '/api/placeholder/600/400',
    tags: ['Commercial Aviation', 'Cargo Conversion', 'LOPA'],
    results: ['40% capacity increase', '6-week delivery', 'Cost optimized']
  },
  {
    id: 3,
    title: 'Avionics Upgrade Program',
    client: 'Regional Airline Group',
    category: 'Avionics',
    description: 'NextGen avionics installation across fleet of 12 aircraft with full certification support.',
    image: '/api/placeholder/600/400',
    tags: ['Avionics', 'Fleet Upgrade', 'Certification'],
    results: ['100% on-time delivery', 'FAA/EASA approved', 'Enhanced safety']
  },
  {
    id: 4,
    title: 'Emergency AOG Support',
    client: 'International Cargo Carrier',
    category: 'AOG Support',
    description: '24-hour emergency structural repair enabling aircraft return to service within critical timeframe.',
    image: '/api/placeholder/600/400',
    tags: ['AOG', 'Structural Repair', 'Emergency Response'],
    results: ['24-hour turnaround', 'Minimal downtime', 'Cost savings']
  },
  {
    id: 5,
    title: 'Helicopter Interior Refit',
    client: 'HNWI Client',
    category: 'Interior Design',
    description: 'Luxury helicopter cabin featuring custom leather seating and advanced entertainment systems.',
    image: '/api/placeholder/600/400',
    tags: ['Rotorcraft', 'Luxury', 'Custom Design'],
    results: ['Award-winning design', 'Weight optimized', 'Enhanced comfort']
  },
  {
    id: 6,
    title: 'End of Lease Transition',
    client: 'Aircraft Leasing Company',
    category: 'End of Lease',
    description: 'Complete aircraft restoration and documentation for lease return compliance.',
    image: '/api/placeholder/600/400',
    tags: ['Lease Return', 'Restoration', 'Compliance'],
    results: ['Full compliance', 'Value preservation', 'On-schedule delivery']
  }
]

const categories = ['All', 'Interior Design', 'Modifications', 'Avionics', 'AOG Support', 'End of Lease']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export default function ProjectsShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-0 w-96 h-96 bg-gradient-to-l from-blue-50 to-transparent rounded-full opacity-60"></div>
        <div className="absolute bottom-32 left-0 w-96 h-96 bg-gradient-to-r from-amber-50 to-transparent rounded-full opacity-60"></div>
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
            Featured{' '}
            <span className="bg-gradient-to-r from-accent-gold to-yellow-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Discover how we&apos;ve transformed aviation challenges into successful solutions 
            for clients worldwide, delivering excellence across every project.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-primary-blue text-white shadow-lg'
                  : 'bg-gray-100 text-medium-gray hover:bg-primary-blue hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-gold text-primary-blue px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-blue mb-2 font-montserrat group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-medium-gray text-sm mb-3">{project.client}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-50 text-primary-blue px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="space-y-1">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-2"></span>
                      {result}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-primary-blue font-semibold text-sm hover:text-accent-gold transition-colors flex items-center">
                    View Case Study
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
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
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-900 to-primary-blue rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-montserrat">
              Have a Project in Mind?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how CDP AERO can bring your aviation vision to life with our 
              expertise and proven track record of success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-gold hover:bg-yellow-500 text-primary-blue font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-blue font-semibold px-8 py-3 rounded-full transition-all duration-300">
                View All Projects
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
