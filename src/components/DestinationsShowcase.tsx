'use client'

import { useState, useEffect } from 'react'
import { Plane, Settings, Award, Wrench } from 'lucide-react'

const aviationSolutions = [
  {
    id: 1,
    name: "AIRCRAFT DESIGN",
    category: "Innovation",
    image: "/aircraft-1.avif",
    parallaxImage: "https://images.unsplash.com/photo-1569045124816-bf0f58bb3736?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200&q=80",
    service: "Complete Design Solutions",
    description: "From conceptual design to detailed engineering, we create aircraft that push the boundaries of performance, efficiency, and luxury. Our design philosophy merges cutting-edge aerodynamics with uncompromising elegance.",
    capabilities: ["Aerodynamic Optimization", "Structural Analysis", "Systems Integration"],
    expertise: "Airbus, Boeing, Bombardier",
    projects: "500+ Completed",
    icon: <Plane className="text-cdp-accent-gold" size={32} />
  },
  {
    id: 2,
    name: "CERTIFICATION",
    category: "Compliance", 
    image: "/aircraft-2.webp",
    parallaxImage: "https://images.unsplash.com/photo-1583100440430-7c6db4021e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200&q=80",
    service: "Regulatory Excellence",
    description: "Navigate complex aviation regulations with confidence. Our certification experts ensure your aircraft meets all international standards while maintaining the highest levels of safety and performance.",
    capabilities: ["EASA Compliance", "FAA Certification", "Transport Canada"],
    expertise: "All Aircraft Types",
    projects: "300+ Certified",
    icon: <Award className="text-cdp-accent-gold" size={32} />
  },
  {
    id: 3,
    name: "MODIFICATIONS",
    category: "Enhancement",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80",
    parallaxImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200&q=80",
    service: "Transformation Specialists",
    description: "Transform existing aircraft with cutting-edge modifications that enhance performance, luxury, and operational efficiency. Every modification is meticulously engineered for perfection.",
    capabilities: ["Interior Customization", "Avionics Upgrades", "Performance Enhancements"],
    expertise: "Commercial & Private",
    projects: "200+ Modified",
    icon: <Settings className="text-cdp-accent-gold" size={32} />
  }
]

export default function DestinationsShowcase() {
  const [activeSolution, setActiveSolution] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative py-32 bg-gradient-to-b from-cdp-charcoal via-black to-cdp-charcoal text-white overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('${aviationSolutions[activeSolution].parallaxImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Animated geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-cdp-accent-gold/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-cdp-accent-gold/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-cdp-accent-gold text-sm tracking-[0.3em] font-medium uppercase">
                Our Aviation Solutions
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
              Crafting Excellence<br />
              <span className="text-cdp-accent-gold">In The Skies</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cdp-accent-gold to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Where engineering precision meets artistic vision, creating aircraft solutions 
              that redefine the boundaries of aviation excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Solution Navigation Cards */}
            <div className="lg:col-span-4 space-y-6">
              {aviationSolutions.map((solution, index) => (
                <div
                  key={solution.id}
                  className={`group cursor-pointer transition-all duration-500 ${
                    activeSolution === index
                      ? 'transform scale-105'
                      : 'hover:transform hover:scale-102'
                  }`}
                  onClick={() => setActiveSolution(index)}
                >
                  <div className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-500 ${
                    activeSolution === index
                      ? 'bg-gradient-to-br from-cdp-accent-gold/20 to-cdp-accent-gold/5 border border-cdp-accent-gold/30'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}>
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeSolution === index 
                          ? 'bg-cdp-accent-gold/20' 
                          : 'bg-white/10 group-hover:bg-white/20'
                      }`}>
                        {solution.icon}
                      </div>
                      <span className={`text-xs tracking-widest uppercase font-medium transition-colors duration-300 ${
                        activeSolution === index ? 'text-cdp-accent-gold' : 'text-gray-400'
                      }`}>
                        {solution.category}
                      </span>
                    </div>

                    {/* Title and Service */}
                    <h3 className={`font-serif text-2xl mb-3 transition-colors duration-300 ${
                      activeSolution === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {solution.name}
                    </h3>
                    <p className={`text-sm font-medium mb-4 transition-colors duration-300 ${
                      activeSolution === index ? 'text-cdp-accent-gold' : 'text-gray-400'
                    }`}>
                      {solution.service}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{solution.expertise}</span>
                      <span className={`font-medium transition-colors duration-300 ${
                        activeSolution === index ? 'text-cdp-accent-gold' : 'text-gray-300'
                      }`}>
                        {solution.projects}
                      </span>
                    </div>

                    {/* Active indicator */}
                    {activeSolution === index && (
                      <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-cdp-accent-gold to-transparent rounded-full"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Active Solution Details */}
            <div className="lg:col-span-8">
              <div className="relative">
                {/* Main Image with Artistic Overlay */}
                <div className="relative overflow-hidden rounded-3xl mb-8 group">
                  <div className="aspect-[16/10] relative">
                    <img
                      src={aviationSolutions[activeSolution].image}
                      alt={aviationSolutions[activeSolution].name}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Artistic overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cdp-primary-blue/30 via-transparent to-cdp-accent-gold/20"></div>
                    
                    {/* Floating geometric elements */}
                    <div className="absolute top-8 right-8 w-24 h-24 border-2 border-cdp-accent-gold/40 rounded-full animate-spin-slow"></div>
                    <div className="absolute bottom-8 left-8 w-16 h-16 bg-cdp-accent-gold/20 backdrop-blur-sm rounded-xl rotate-45"></div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="font-serif text-4xl text-white mb-3">
                      {aviationSolutions[activeSolution].name}
                    </h3>
                    <p className="text-cdp-accent-gold font-medium text-lg">
                      {aviationSolutions[activeSolution].service}
                    </p>
                  </div>
                </div>

                {/* Description and Details */}
                <div className="space-y-8">
                  <p className="text-xl leading-relaxed text-gray-300">
                    {aviationSolutions[activeSolution].description}
                  </p>

                  {/* Capabilities Grid */}
                  <div>
                    <h4 className="font-serif text-2xl text-cdp-accent-gold mb-6">Core Capabilities</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {aviationSolutions[activeSolution].capabilities.map((capability, index) => (
                        <div key={index} className="group relative">
                          <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cdp-accent-gold/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                            <p className="text-sm text-center font-medium group-hover:text-cdp-accent-gold transition-colors duration-300">
                              {capability}
                            </p>
                            <div className="absolute inset-0 bg-gradient-to-br from-cdp-accent-gold/0 to-cdp-accent-gold/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="flex items-center space-x-6 pt-8">
                    <button className="cdp-button px-8 py-4 text-lg">
                      Explore {aviationSolutions[activeSolution].name}
                    </button>
                    <button className="cdp-button-outline px-8 py-4 text-lg">
                      View Portfolio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cdp-charcoal to-transparent"></div>
    </section>
  )
}
