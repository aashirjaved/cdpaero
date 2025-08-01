'use client'

import { MapPin, Clock, Phone, Mail } from 'lucide-react'

export default function GlobalPresence() {
  const regions = [
    {
      name: 'United Kingdom',
      description: 'Headquarters & Main Operations',
      coordinates: { x: '50%', y: '45%' },
      details: {
        office: 'Cambridge, UK',
        timezone: 'GMT+0',
        contact: '+44 (0) 1234 567890',
        email: 'uk@cdpaero.com'
      }
    },
    {
      name: 'Europe',
      description: 'Regional Support Hub',
      coordinates: { x: '55%', y: '40%' },
      details: {
        office: 'Frankfurt, Germany',
        timezone: 'GMT+1',
        contact: '+49 (0) 69 123 456',
        email: 'europe@cdpaero.com'
      }
    },
    {
      name: 'MENA',
      description: 'Middle East & North Africa',
      coordinates: { x: '60%', y: '55%' },
      details: {
        office: 'Dubai, UAE',
        timezone: 'GMT+4',
        contact: '+971 4 123 4567',
        email: 'mena@cdpaero.com'
      }
    },
    {
      name: 'Asia',
      description: 'Asia-Pacific Operations',
      coordinates: { x: '75%', y: '50%' },
      details: {
        office: 'Singapore',
        timezone: 'GMT+8',
        contact: '+65 6123 4567',
        email: 'asia@cdpaero.com'
      }
    },
    {
      name: 'USA',
      description: 'North American Operations',
      coordinates: { x: '25%', y: '45%' },
      details: {
        office: 'Miami, FL',
        timezone: 'GMT-5',
        contact: '+1 (305) 123-4567',
        email: 'usa@cdpaero.com'
      }
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-cdp-light-gray to-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading text-cdp-primary-blue mb-6">
              Global Presence
            </h2>
            <div className="w-24 h-1 bg-cdp-accent-gold mx-auto mb-8"></div>
            <p className="text-xl text-cdp-charcoal max-w-3xl mx-auto leading-relaxed">
              Seamless support across time zones for international clients
            </p>
          </div>

          {/* World Map Section */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 mb-12">
            <div className="relative h-96 bg-gradient-to-br from-cdp-subtle-blue to-cdp-light-gray rounded-xl overflow-hidden">
              {/* Simplified world map background */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 1000 500" className="w-full h-full">
                  <path 
                    d="M150,200 Q200,150 300,180 T500,200 T700,180 Q800,160 850,200 L850,350 Q800,320 700,340 T500,350 T300,340 Q200,360 150,350 Z" 
                    fill="currentColor" 
                    className="text-cdp-primary-blue"
                  />
                </svg>
              </div>

              {/* Location Markers */}
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="absolute group cursor-pointer"
                  style={{ 
                    left: region.coordinates.x, 
                    top: region.coordinates.y,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Marker */}
                  <div className="relative">
                    <div className="w-4 h-4 bg-cdp-accent-gold rounded-full border-2 border-white shadow-lg animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 w-64">
                      <h3 className="font-montserrat font-semibold text-cdp-primary-blue mb-2">
                        {region.name}
                      </h3>
                      <p className="text-sm text-cdp-medium-gray mb-3">
                        {region.description}
                      </p>
                      <div className="space-y-2 text-xs text-cdp-charcoal">
                        <div className="flex items-center">
                          <MapPin size={12} className="mr-2 text-cdp-accent-gold" />
                          {region.details.office}
                        </div>
                        <div className="flex items-center">
                          <Clock size={12} className="mr-2 text-cdp-accent-gold" />
                          {region.details.timezone}
                        </div>
                        <div className="flex items-center">
                          <Phone size={12} className="mr-2 text-cdp-accent-gold" />
                          {region.details.contact}
                        </div>
                        <div className="flex items-center">
                          <Mail size={12} className="mr-2 text-cdp-accent-gold" />
                          {region.details.email}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Offices Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {regions.map((region, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-cdp-light-gray group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-cdp-accent-gold/10 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-cdp-accent-gold" size={24} />
                </div>
                <h3 className="font-montserrat font-semibold text-cdp-primary-blue mb-2">
                  {region.name}
                </h3>
                <p className="text-sm text-cdp-medium-gray mb-4">
                  {region.description}
                </p>
                <div className="space-y-2 text-xs text-cdp-charcoal">
                  <div className="flex items-center">
                    <Clock size={12} className="mr-2 text-cdp-accent-gold" />
                    {region.details.timezone}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={12} className="mr-2 text-cdp-accent-gold" />
                    {region.details.office}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 24/7 Support Banner */}
          <div className="mt-16 bg-hero-gradient rounded-2xl p-8 text-white text-center">
            <h3 className="font-montserrat text-2xl font-semibold mb-4">
              24/7 Global Support Network
            </h3>
            <p className="text-lg mb-6 opacity-90">
              No matter where you are in the world, our expert team is ready to assist you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cdp-accent-gold hover:bg-cdp-dark-gold text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 tracking-wide">
                Contact Nearest Office
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-cdp-primary-blue font-medium px-8 py-3 rounded-lg transition-all duration-300 tracking-wide">
                Emergency Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
