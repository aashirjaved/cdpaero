'use client'

import { useState } from 'react'
import { 
  Plane, 
  Settings, 
  Shield, 
  Factory, 
  Zap, 
  Wrench,
  FileText,
  Clock,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export default function ServicesOverview() {
  const [activeService, setActiveService] = useState(0)

  const mainServices = [
    {
      id: 'global-services',
      icon: <Plane className="text-cdp-accent-gold" size={32} />,
      title: 'Global Services',
      description: 'Comprehensive aviation support with 24/7 AOG response and worldwide coverage',
      features: ['24/7 Emergency Response', 'Global Coverage', 'Expert Technicians', 'Rapid Deployment'],
      subServices: [
        { name: 'AOG Support', description: 'Emergency aircraft support and rapid response', icon: <Clock size={20} /> },
        { name: 'Modifications', description: 'Aircraft customization and upgrades', icon: <Settings size={20} /> },
        { name: 'Zero Pax LOPA', description: 'Passenger-to-cargo conversion layouts', icon: <Plane size={20} /> },
        { name: 'Avionics', description: 'Electronic systems integration and updates', icon: <Zap size={20} /> },
        { name: 'Structures', description: 'Structural repairs and modifications', icon: <Wrench size={20} /> },
        { name: 'End of Lease', description: 'Aircraft return and transition services', icon: <CheckCircle size={20} /> },
        { name: 'Stress & Fatigue', description: 'Structural analysis and testing', icon: <Shield size={20} /> },
        { name: 'Tech Pub', description: 'Technical documentation and publications', icon: <FileText size={20} /> },
      ]
    },
    {
      id: 'design',
      icon: <Settings className="text-cdp-accent-gold" size={32} />,
      title: 'Design',
      description: 'Aircraft interior design and engineering solutions with custom modifications',
      features: ['Custom Interior Design', 'Engineering Solutions', 'CAD Modeling', '3D Visualization'],
      subServices: []
    },
    {
      id: 'certification',
      icon: <Shield className="text-cdp-accent-gold" size={32} />,
      title: 'Certification',
      description: 'Regulatory compliance, airworthiness certification, and documentation support',
      features: ['EASA/FAA Compliance', 'Airworthiness Certification', 'Documentation', 'Regulatory Support'],
      subServices: []
    },
    {
      id: 'production',
      icon: <Factory className="text-cdp-accent-gold" size={32} />,
      title: 'Production',
      description: 'Manufacturing capabilities with quality assurance and delivery excellence',
      features: ['Advanced Manufacturing', 'Quality Assurance', 'Timely Delivery', 'Material Excellence'],
      subServices: []
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading text-cdp-primary-blue mb-6">
              Our Aviation Solutions
            </h2>
            <div className="w-24 h-1 bg-cdp-accent-gold mx-auto mb-8"></div>
            <p className="text-xl text-cdp-charcoal max-w-3xl mx-auto leading-relaxed">
              Comprehensive services spanning design, certification, production, and global support
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <div
                key={service.id}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeService === index ? 'transform -translate-y-2' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  activeService === index 
                    ? 'border-cdp-accent-gold shadow-2xl' 
                    : 'border-transparent hover:border-cdp-accent-gold/30'
                }`}>
                  <div className="flex items-center justify-center w-16 h-16 bg-cdp-subtle-blue rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="font-montserrat text-xl font-semibold text-cdp-primary-blue mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-cdp-medium-gray leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-cdp-charcoal">
                        <CheckCircle size={16} className="text-cdp-success-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="flex items-center text-cdp-accent-gold font-medium group-hover:gap-2 transition-all duration-300">
                    Learn More
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Sub-Services for Active Service */}
          {mainServices[activeService].subServices.length > 0 && (
            <div className="bg-gradient-to-br from-cdp-subtle-blue to-white rounded-2xl p-8">
              <h3 className="font-montserrat text-2xl font-semibold text-cdp-primary-blue mb-8 text-center">
                {mainServices[activeService].title} - Detailed Services
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mainServices[activeService].subServices.map((subService, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-cdp-accent-gold/10 rounded-lg mr-3">
                        {subService.icon}
                      </div>
                      <h4 className="font-montserrat font-semibold text-cdp-primary-blue">
                        {subService.name}
                      </h4>
                    </div>
                    <p className="text-sm text-cdp-medium-gray leading-relaxed">
                      {subService.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-hero-gradient rounded-2xl p-8 text-white">
              <h3 className="font-montserrat text-2xl font-semibold mb-4">
                Ready to Elevate Your Aviation Project?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Let our experts guide you through your next aviation challenge
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cdp-accent-gold hover:bg-cdp-dark-gold text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 tracking-wide">
                  Get Consultation
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-cdp-primary-blue font-medium px-8 py-3 rounded-lg transition-all duration-300 tracking-wide">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
