'use client'

import { useState, useEffect } from 'react'
import { Shield, Award, CheckCircle, Globe, ChevronRight } from 'lucide-react'

export default function CertificationsApprovals() {
  const [scrollY, setScrollY] = useState(0)
  const [activeCert, setActiveCert] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const certifications = [
    {
      id: 1,
      name: 'UK CAA Part 21J',
      short: 'UK CAA',
      type: 'Design Authority',
      icon: Shield,
      region: 'UK'
    },
    {
      id: 2,
      name: 'EASA Part 21J',
      short: 'EASA',
      type: 'Design Authority',
      icon: Shield,
      region: 'EU'
    },
    {
      id: 3,
      name: 'Part 21G',
      short: 'Part 21G',
      type: 'Production Authority',
      icon: Award,
      region: 'Global'
    },
    {
      id: 4,
      name: 'Part 145',
      short: 'Part 145',
      type: 'Maintenance Authority',
      icon: CheckCircle,
      region: 'Global'
    },
    {
      id: 5,
      name: 'FAA Approved',
      short: 'FAA',
      type: 'Federal Authority',
      icon: Globe,
      region: 'US'
    }
  ]

  const stats = [
    { number: '25+', label: 'Years' },
    { number: '500+', label: 'Projects' },
    { number: '50+', label: 'Clients' },
    { number: '99.8%', label: 'Success' }
  ]

  const activeCertification = certifications[activeCert]
  const IconComponent = activeCertification.icon

  return (
    <section className="relative overflow-hidden bg-white min-h-screen">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2940&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: `translateY(${scrollY * -0.2}px) scale(1.1)`
          }}
        />
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-7xl text-cdp-charcoal mb-6">
              Certified
              <span className="text-cdp-accent-gold italic"> Excellence</span>
            </h2>
            <div className="w-20 h-1 bg-cdp-accent-gold mx-auto"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            {/* Left: Certification Cards */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {certifications.map((cert, index) => {
                  const CertIcon = cert.icon
                  const isActive = activeCert === index
                  
                  return (
                    <div
                      key={cert.id}
                      className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 transform ${
                        isActive
                          ? 'bg-cdp-accent-gold text-white shadow-lg scale-105'
                          : 'bg-white/70 backdrop-blur-sm hover:bg-white/90 border border-gray-200 hover:shadow-md'
                      }`}
                      onClick={() => setActiveCert(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl ${
                            isActive ? 'bg-white/20' : 'bg-cdp-accent-gold/10'
                          }`}>
                            <CertIcon 
                              size={24} 
                              className={isActive ? 'text-white' : 'text-cdp-accent-gold'} 
                            />
                          </div>
                          <div>
                            <h3 className={`font-semibold text-lg ${
                              isActive ? 'text-white' : 'text-cdp-charcoal'
                            }`}>
                              {cert.short}
                            </h3>
                            <p className={`text-sm ${
                              isActive ? 'text-white/80' : 'text-gray-600'
                            }`}>
                              {cert.type}
                            </p>
                          </div>
                        </div>
                        <ChevronRight 
                          className={`transition-transform duration-300 ${
                            isActive ? 'rotate-90 text-white' : 'text-gray-400'
                          }`} 
                          size={20} 
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right: Display Panel */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-cdp-primary-blue to-cdp-charcoal rounded-3xl p-10 text-white relative overflow-hidden">
                
                {/* Background Decorations */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cdp-accent-gold rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 border-2 border-cdp-accent-gold rounded-full transform -translate-x-12 translate-y-12"></div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="p-4 bg-cdp-accent-gold/20 rounded-2xl">
                      <IconComponent size={32} className="text-cdp-accent-gold" />
                    </div>
                    <div>
                      <span className="inline-block bg-cdp-accent-gold/20 text-cdp-accent-gold px-4 py-2 rounded-full text-sm font-medium mb-3">
                        {activeCertification.region}
                      </span>
                      <h3 className="font-serif text-3xl text-white">
                        {activeCertification.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-xl text-white/90 mb-10">
                    {activeCertification.type}
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="font-serif text-3xl font-bold text-cdp-accent-gold mb-2">
                          {stat.number}
                        </div>
                        <div className="text-white/80 text-sm">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center space-x-4 bg-cdp-accent-gold/10 px-8 py-4 rounded-full border border-cdp-accent-gold/20">
              <div className="w-3 h-3 bg-cdp-accent-gold rounded-full animate-pulse"></div>
              <span className="text-cdp-charcoal font-medium">
                Regulatory Excellence Guaranteed
              </span>
              <div className="w-3 h-3 bg-cdp-accent-gold rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
