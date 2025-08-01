'use client'

import { Shield, Award, CheckCircle, Globe } from 'lucide-react'

export default function CertificationsApprovals() {
  const certifications = [
    {
      name: 'UK CAA Part 21J',
      description: 'Design Organisation Approval',
      icon: <Shield className="text-cdp-accent-gold" size={24} />,
      region: 'United Kingdom'
    },
    {
      name: 'EASA Part 21J',
      description: 'Design Organisation Approval',
      icon: <Shield className="text-cdp-accent-gold" size={24} />,
      region: 'European Union'
    },
    {
      name: 'Part 21G',
      description: 'Production Organisation Approval',
      icon: <Award className="text-cdp-accent-gold" size={24} />,
      region: 'International'
    },
    {
      name: 'Part 145',
      description: 'Maintenance Organisation Approval',
      icon: <CheckCircle className="text-cdp-accent-gold" size={24} />,
      region: 'Global'
    },
    {
      name: 'FAA Approved',
      description: 'Federal Aviation Administration',
      icon: <Globe className="text-cdp-accent-gold" size={24} />,
      region: 'United States'
    }
  ]

  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Global Clients' },
    { number: '99.8%', label: 'Success Rate' }
  ]

  return (
    <section className="py-20 bg-cdp-primary-blue text-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading text-white mb-6">
              Certifications & Approvals
            </h2>
            <div className="w-24 h-1 bg-cdp-accent-gold mx-auto mb-8"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Trusted by regulatory authorities worldwide with comprehensive certifications
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="group text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 border border-white/20">
                  <div className="flex items-center justify-center w-16 h-16 bg-cdp-accent-gold/20 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-white/80 mb-3">
                    {cert.description}
                  </p>
                  <span className="inline-block bg-cdp-accent-gold/20 text-cdp-accent-gold px-3 py-1 rounded-full text-xs font-medium">
                    {cert.region}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="font-montserrat text-4xl font-bold text-cdp-accent-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white/80 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Message */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-cdp-accent-gold/20 to-cdp-accent-gold/10 rounded-2xl p-8 border border-cdp-accent-gold/30">
              <h3 className="font-montserrat text-2xl font-semibold mb-4 text-cdp-accent-gold">
                Regulatory Excellence You Can Trust
              </h3>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Our comprehensive certifications ensure that every project meets the highest 
                international standards for safety, quality, and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
