'use client'

import { useEffect, useState } from 'react'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import map component to avoid SSR issues
const MapComponent = dynamic(() => import('./MapComponent'), { 
  ssr: false,
  loading: () => (
    <div className="h-[500px] bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cdp-accent-gold mx-auto mb-4"></div>
        <p className="text-cdp-charcoal">Loading interactive map...</p>
      </div>
    </div>
  )
})

export default function GlobalPresence() {
  const regions = [
    {
      name: 'United Kingdom',
      description: 'Headquarters & Main Operations',
      coordinates: [51.505, -0.09], // London coordinates
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
      coordinates: [50.1109, 8.6821], // Frankfurt coordinates
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
      coordinates: [25.2048, 55.2708], // Dubai coordinates
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
      coordinates: [1.3521, 103.8198], // Singapore coordinates
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
      coordinates: [25.7617, -80.1918], // Miami coordinates
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

          {/* Interactive World Map Section */}
          <div className="relative bg-gradient-to-br from-cdp-primary-blue/5 to-white rounded-3xl shadow-2xl p-8 mb-12 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgba(0,73,144,0.1) 2px, transparent 2px),
                  radial-gradient(circle at 75% 75%, rgba(0,73,144,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px, 25px 25px'
              }} />
            </div>

            {/* Map Container */}
            <div className="relative h-[500px] bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl overflow-hidden border border-gray-200">
              {/* Embedded Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000000!2d0!3d30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzAwLjAiTiAwwrAwMCcwMC4wIkU!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Overlay with office markers */}
              <div className="absolute inset-0 pointer-events-none">
                {regions.map((region, index) => {
                  // Convert lat/lng to approximate positions for overlay
                  const getPosition = (lat: number, lng: number) => {
                    // Simple projection for display purposes
                    const x = ((lng + 180) / 360) * 100
                    const y = ((90 - lat) / 180) * 100
                    return { x: `${Math.max(5, Math.min(95, x))}%`, y: `${Math.max(5, Math.min(95, y))}%` }
                  }
                  
                  const position = getPosition(region.coordinates[0], region.coordinates[1])
                  
                  return (
                    <div
                      key={index}
                      className="absolute group cursor-pointer pointer-events-auto z-20"
                      style={{ 
                        left: position.x, 
                        top: position.y,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {/* Marker with ripple effect */}
                      <div className="relative">
                        {/* Ripple animation */}
                        <div className="absolute inset-0 w-8 h-8 bg-cdp-accent-gold/30 rounded-full animate-ping"></div>
                        <div className="absolute inset-0 w-6 h-6 bg-cdp-accent-gold/50 rounded-full animate-pulse"></div>
                        
                        {/* Main marker */}
                        <div className="relative w-4 h-4 bg-gradient-to-br from-cdp-accent-gold to-yellow-600 rounded-full border-2 border-white shadow-lg group-hover:scale-150 transition-all duration-300 z-10">
                          <div className="absolute inset-0 w-full h-full bg-white/30 rounded-full"></div>
                        </div>
                        
                        {/* Enhanced Tooltip */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl rounded-xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 w-80 border border-gray-100">
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100"></div>
                          
                          <div className="flex items-center mb-3">
                            <div className="w-3 h-3 bg-cdp-accent-gold rounded-full mr-3"></div>
                            <h3 className="font-serif text-lg font-semibold text-cdp-primary-blue">
                              {region.name}
                            </h3>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-4 font-medium">
                            {region.description}
                          </p>
                          
                          <div className="grid grid-cols-2 gap-3 text-xs text-cdp-charcoal">
                            <div className="flex items-center bg-gray-50 p-2 rounded-lg">
                              <MapPin size={14} className="mr-2 text-cdp-accent-gold flex-shrink-0" />
                              <span className="font-medium">{region.details.office}</span>
                            </div>
                            <div className="flex items-center bg-gray-50 p-2 rounded-lg">
                              <Clock size={14} className="mr-2 text-cdp-accent-gold flex-shrink-0" />
                              <span className="font-medium">{region.details.timezone}</span>
                            </div>
                            <div className="flex items-center bg-gray-50 p-2 rounded-lg">
                              <Phone size={14} className="mr-2 text-cdp-accent-gold flex-shrink-0" />
                              <span className="font-mono text-xs">{region.details.contact}</span>
                            </div>
                            <div className="flex items-center bg-gray-50 p-2 rounded-lg">
                              <Mail size={14} className="mr-2 text-cdp-accent-gold flex-shrink-0" />
                              <span className="font-mono text-xs">{region.details.email}</span>
                            </div>
                          </div>
                          
                          <button className="w-full mt-4 bg-cdp-accent-gold hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
                            Contact {region.name} Office
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <h4 className="font-semibold text-cdp-primary-blue mb-2 text-sm">Legend</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cdp-accent-gold rounded-full mr-2"></div>
                    <span>CDP AERO Offices</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-0.5 bg-cdp-accent-gold mr-2 opacity-70"></div>
                    <span>Global Network</span>
                  </div>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="grid grid-cols-3 gap-4 text-center text-xs">
                  <div>
                    <div className="font-bold text-cdp-accent-gold text-lg">5</div>
                    <div className="text-gray-600">Continents</div>
                  </div>
                  <div>
                    <div className="font-bold text-cdp-accent-gold text-lg">24/7</div>
                    <div className="text-gray-600">Support</div>
                  </div>
                  <div>
                    <div className="font-bold text-cdp-accent-gold text-lg">50+</div>
                    <div className="text-gray-600">Countries</div>
                  </div>
                </div>
              </div>
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
