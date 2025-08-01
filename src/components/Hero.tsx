'use client'

import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToContent = () => {
    const nextSection = document.getElementById('company-intro')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source
            src="https://f-list.at/wp-content/uploads/2024/10/Global-6500-1.mp4"
            type="video/mp4"
          />
          {/* Fallback video sources */}
          <source
            src="https://aviationservicesgroup.it/wp-content/uploads/2024/11/AS-HP_05-slow_compr.mp4"
            type="video/mp4"
          />
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eed8f8a27e2b5f3d3c1f3e78b8c7b1e8a8f8f&profile_id=164"
            type="video/mp4"
          />
          {/* Fallback image */}
          <img
            src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Aircraft Manufacturing Excellence"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Enhanced dimming overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cdp-primary-blue/50 via-black/30 to-cdp-charcoal/70" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="hero-text mb-6 animate-fade-in">
            Elevating Aviation<br />
            Excellence Worldwide
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl font-light mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            World-class aircraft design, certification engineering, and interior solutions 
            for commercial and private aviation
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <button className="cdp-button text-base px-10 py-4">
              Our Services
            </button>
            <button className="cdp-button-outline text-base px-10 py-4">
              Get Started
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <button
            onClick={scrollToContent}
            className="text-white hover:text-cdp-accent-gold transition-colors duration-300 animate-bounce"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm tracking-wider whitespace-nowrap">Discover Our Excellence</span>
              <ChevronDown size={24} />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
