'use client'

import { Users, Globe, Award, Wrench } from 'lucide-react'

export default function CompanyIntroduction() {
  const keyPoints = [
    {
      icon: <Globe className="text-cdp-accent-gold" size={24} />,
      title: "Global Expertise",
      description: "Airbus, Boeing, Embraer, Bombardier, Gulfstream, Augusta expertise worldwide"
    },
    {
      icon: <Users className="text-cdp-accent-gold" size={24} />,
      title: "Skilled Team",
      description: "Highly skilled engineers and designers with decades of aviation experience"
    },
    {
      icon: <Award className="text-cdp-accent-gold" size={24} />,
      title: "Industry Leaders",
      description: "Trusted by airlines, leasing companies, MROs, and HNWI globally"
    },
    {
      icon: <Wrench className="text-cdp-accent-gold" size={24} />,
      title: "Complete Solutions",
      description: "From design to certification, modifications to repairs - we do it all"
    }
  ]

  return (
    <section id="company-intro" className="py-20 bg-cdp-light-gray">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading text-cdp-primary-blue mb-6">
              Welcome to Camber Design & Production
            </h2>
            <div className="w-24 h-1 bg-cdp-accent-gold mx-auto mb-8"></div>
            <p className="text-xl text-cdp-charcoal max-w-3xl mx-auto leading-relaxed">
              Where creativity and precision come together
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image/Video */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Aircraft Manufacturing Facility"
                  className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-cdp-accent-gold text-white px-4 py-2 text-sm font-medium tracking-wider rounded-lg">
                    DESIGN & PRODUCTION EXCELLENCE
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <p className="text-lg leading-relaxed text-cdp-charcoal">
                CDP AERO is a world-class Design and Production Organization specializing in design, 
                certification engineering, modifications, and repairs for fixed-wing aircraft and rotorcraft.
              </p>
              
              <p className="text-lg leading-relaxed text-cdp-charcoal">
                Our comprehensive expertise spans across the aviation industry's most prestigious manufacturers, 
                ensuring that every project meets the highest standards of safety, quality, and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cdp-button">
                  Explore Our Services
                </button>
                <button className="cdp-button-outline">
                  View Projects
                </button>
              </div>
            </div>
          </div>

          {/* Key Points Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-cdp-subtle-blue rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="font-montserrat text-lg font-semibold text-cdp-primary-blue mb-3">
                  {point.title}
                </h3>
                <p className="text-cdp-medium-gray leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
