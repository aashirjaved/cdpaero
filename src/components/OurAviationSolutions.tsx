'use client'
import { useState, useEffect } from 'react'
import { MapPin, Calendar, Users, Plane, Wrench, Award, ArrowRight } from 'lucide-react'

const aviationSolutions = [
  {
    id: 1,
    name: "COMMERCIAL AVIATION",
    category: "Airlines & Operators",
    heroImage: "https://content.presspage.com/uploads/2888/a4e615d0-68eb-4703-b9ee-2d16bad20e6f/1920_a350infra-d-aixi-1.jpg",
    overlayImage: "https://content.presspage.com/uploads/2888/a4e615d0-68eb-4703-b9ee-2d16bad20e6f/1920_a350infra-d-aixi-1.jpg",
    project: "A350 Premium Interior Certification",
    description: "Transform passenger experiences with luxury cabin modifications that exceed industry standards while maintaining perfect safety compliance.",
    capabilities: ["EASA/FAA Certification", "Cabin Design Excellence", "Weight Optimization", "Premium Materials"],
    timeframe: "6-12 months",
    capacity: "100-400 passengers",
    icon: <Plane className="text-cdp-accent-gold" size={32} />
  },
  {
    id: 2,
    name: "PRIVATE AVIATION", 
    category: "Ultra-Luxury Jets",
    heroImage: "https://www.js3global.com/wp-content/uploads/2021/05/iStock-1022905536.jpg",
    overlayImage: "https://media.istockphoto.com/id/155150766/photo/passenger-jet-airplane-flying-above-clouds.jpg",
    project: "Gulfstream G700 Bespoke Interior",
    description: "Create personalized flying sanctuaries that reflect individual style while delivering uncompromising comfort and cutting-edge technology.",
    capabilities: ["Bespoke Design", "Advanced Avionics", "Acoustic Engineering", "Luxury Finishes"],
    timeframe: "4-8 months", 
    capacity: "Up to 19 passengers",
    icon: <Award className="text-cdp-accent-gold" size={32} />
  },
  {
    id: 3,
    name: "ROTORCRAFT SOLUTIONS",
    category: "Helicopters & VTOL",
    heroImage: "https://www.priestmangoode.com/wp-content/uploads/2021/05/Airbus-Airspace_A330-Neo-CabinBC_Priestmangoode.jpg", 
    overlayImage: "https://www.js3global.com/wp-content/uploads/2021/05/iStock-1022905536.jpg",
    project: "AW139 Medical & Executive Config",
    description: "Engineer specialized rotorcraft solutions for medical emergencies, executive transport, and mission-critical operations with precision and reliability.",
    capabilities: ["Medical Equipment Integration", "Mission-Specific Design", "Weight Balance Optimization", "Emergency Systems"],
    timeframe: "3-6 months",
    capacity: "2-15 passengers",
    icon: <Wrench className="text-cdp-accent-gold" size={32} />
  }
]

export default function OurAviationSolutions() {
  const [activeSolution, setActiveSolution] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Clean Artistic Parallax Background with Your Aircraft Images */}
      <div className="absolute inset-0">
        {/* Primary Aircraft Image - Large, Centered Background */}
        <div 
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `url('/aircraft-2.webp')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: `translateY(${scrollY * -0.1}px) scale(1.2)`,
            filter: 'blur(1px)'
          }}
        />
        
        {/* Clean white overlay for readability */}
        <div className="absolute inset-0 bg-white/90"></div>
      </div>
      
      {/* Minimal Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Single elegant geometric accent */}
        <div 
          className="absolute top-32 right-24 w-24 h-24 border border-cdp-accent-gold/20 rotate-45"
          style={{ transform: `translateY(${scrollY * 0.05}px) rotate(${45 + scrollY * 0.05}deg)` }}
        />
        
        {/* Subtle circle accent */}
        <div 
          className="absolute bottom-32 left-24 w-16 h-16 bg-cdp-accent-gold/10 rounded-full"
          style={{ transform: `translateY(${scrollY * -0.03}px)` }}
        />
      </div>

      <div className="relative z-10 py-32">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            
            {/* Artistic Header */}
            <div className="text-center mb-20">
              <div className="relative inline-block">
                <h2 className="font-serif text-5xl md:text-7xl text-cdp-charcoal mb-6 leading-tight">
                  OUR AVIATION
                  <span className="block text-cdp-accent-gold italic">Solutions</span>
                </h2>
                <div className="absolute -top-4 -right-8 w-16 h-16 border-2 border-cdp-accent-gold/40 rotate-12"></div>
              </div>
              
              <div className="flex items-center justify-center space-x-8 mb-8">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-cdp-accent-gold"></div>
                <div className="w-3 h-3 bg-cdp-accent-gold rotate-45"></div>
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-cdp-accent-gold"></div>
              </div>
              
              <p className="text-xl text-cdp-charcoal/80 max-w-3xl mx-auto leading-relaxed">
                Where engineering artistry meets aviation excellence, crafting bespoke solutions 
                that redefine the boundaries of flight
              </p>
            </div>

            {/* Interactive Solutions Grid */}
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              
              {/* Solution Cards - Left Side */}
              <div className="lg:col-span-2 space-y-6">
                {aviationSolutions.map((solution, index) => (
                  <div
                    key={solution.id}
                    className={`group cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-700 transform hover:scale-105 ${
                      activeSolution === index
                        ? 'bg-gradient-to-br from-cdp-accent-gold to-cdp-accent-gold/80 text-white shadow-2xl shadow-cdp-accent-gold/30'
                        : 'bg-cdp-charcoal/95 backdrop-blur-sm hover:bg-cdp-charcoal text-white border border-cdp-charcoal/20'
                    }`}
                    onClick={() => setActiveSolution(index)}
                  >
                    {/* Card Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-current to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 border-2 border-current rounded-full transform -translate-x-4 translate-y-4"></div>
                    </div>
                    
                    <div className="relative p-8">
                      <div className="flex items-start justify-between mb-4">
                        {solution.icon}
                        <ArrowRight 
                          size={20} 
                          className={`transition-transform duration-300 ${
                            activeSolution === index ? 'translate-x-2' : 'group-hover:translate-x-1'
                          }`} 
                        />
                      </div>
                      
                      <h3 className="font-serif text-2xl mb-2 leading-tight">
                        {solution.name}
                      </h3>
                      
                      <p className={`text-sm mb-4 font-medium ${
                        activeSolution === index ? 'text-white/80' : 'text-gray-400'
                      }`}>
                        {solution.category}
                      </p>
                      
                      <p className={`text-base leading-relaxed ${
                        activeSolution === index ? 'text-white/90' : 'text-gray-300'
                      }`}>
                        {solution.project}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Visual Display - Right Side */}
              <div className="lg:col-span-3">
                <div className="sticky top-20">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    
                    {/* Hero Image with Parallax */}
                    <div className="relative h-96 lg:h-[500px]">
                      <img
                        src={aviationSolutions[activeSolution].heroImage}
                        alt={aviationSolutions[activeSolution].name}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out"
                        style={{
                          transform: `scale(1.1) translateY(${scrollY * 0.02}px)`
                        }}
                      />
                      
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cdp-primary-blue/20 to-transparent"></div>
                      
                      {/* Floating Overlay Image */}
                      <div 
                        className="absolute top-8 right-8 w-32 h-24 rounded-xl overflow-hidden shadow-xl border-2 border-white/20"
                        style={{
                          transform: `translateY(${scrollY * -0.01}px)`
                        }}
                      >
                        <img
                          src={aviationSolutions[activeSolution].overlayImage}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-0.5 bg-cdp-accent-gold"></div>
                        <span className="text-cdp-accent-gold font-medium tracking-wider text-sm">
                          {aviationSolutions[activeSolution].category}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-3xl lg:text-4xl mb-4 leading-tight">
                        {aviationSolutions[activeSolution].project}
                      </h3>
                      
                      <p className="text-lg leading-relaxed mb-6 text-gray-200">
                        {aviationSolutions[activeSolution].description}
                      </p>
                      
                      {/* Capabilities Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {aviationSolutions[activeSolution].capabilities.map((capability, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cdp-accent-gold rounded-full"></div>
                            <span className="text-sm text-gray-300">{capability}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Project Details */}
                      <div className="flex items-center space-x-8 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className="text-cdp-accent-gold" />
                          <span className="text-gray-300">{aviationSolutions[activeSolution].timeframe}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users size={16} className="text-cdp-accent-gold" />
                          <span className="text-gray-300">{aviationSolutions[activeSolution].capacity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Call to Action */}
                  <div className="mt-8 text-center">
                    <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-cdp-accent-gold to-cdp-accent-gold/80 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cdp-accent-gold/30 hover:scale-105">
                      <span>Explore {aviationSolutions[activeSolution].name}</span>
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
