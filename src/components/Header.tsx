'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Search, User, Globe, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: 'Home', href: '#' },
    { 
      name: 'Global Services', 
      href: '#services',
      hasDropdown: true,
      subItems: [
        { name: 'AOG Support', href: '#aog' },
        { name: 'Modifications', href: '#modifications' },
        { name: 'Zero Pax LOPA', href: '#zero-pax' },
        { name: 'Avionics', href: '#avionics' },
        { name: 'Structures', href: '#structures' },
        { name: 'End of Lease', href: '#end-lease' },
        { name: 'Stress & Fatigue', href: '#stress-fatigue' },
        { name: 'Tech Pub', href: '#tech-pub' },
      ]
    },
    { name: 'Design', href: '#design' },
    { name: 'Certification', href: '#certification' },
    { name: 'Production', href: '#production' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              {isScrolled ? (
                // Logo image for white background (when scrolled)
                <img 
                  src="/logo.jpeg" 
                  alt="CDP AERO Logo" 
                  className="h-12 w-auto object-contain transition-all duration-300"
                />
              ) : (
                // Typography logo for transparent background (when not scrolled)
                <div className="transition-all duration-300">
                  <div className="text-white font-montserrat font-bold tracking-wider">
                    <span className="text-2xl">CDP</span>
                    <span className="text-xl ml-2 text-cdp-accent-gold">AERO</span>
                  </div>
                  <div className="text-white/80 text-xs font-montserrat font-light tracking-[0.2em] mt-0.5 uppercase">
                    Aviation Excellence
                  </div>
                </div>
              )}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`flex items-center text-sm font-medium tracking-wide transition-colors duration-200 hover:text-cdp-accent-gold ${
                    isScrolled ? 'text-cdp-primary-blue' : 'text-white'
                  }`}
                  onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={16} className="ml-1" />}
                </a>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div 
                    className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {item.subItems?.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-cdp-charcoal hover:text-cdp-accent-gold hover:bg-cdp-subtle-blue transition-colors duration-200 text-sm"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Contact CTA Button */}
            <button className={`hidden md:block font-medium px-6 py-2 rounded-lg transition-all duration-300 text-sm tracking-wide ${
              isScrolled 
                ? 'bg-cdp-accent-gold text-white hover:bg-cdp-dark-gold' 
                : 'bg-cdp-accent-gold/90 text-white hover:bg-cdp-accent-gold backdrop-blur-sm'
            }`}>
              Get Quote
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 transition-colors duration-200 ${
                isScrolled 
                  ? 'text-cdp-primary-blue hover:text-cdp-accent-gold' 
                  : 'text-white hover:text-cdp-accent-gold'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg rounded-lg mt-2 py-4 border border-cdp-light-gray">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-6 py-3 text-cdp-primary-blue hover:text-cdp-accent-gold hover:bg-cdp-subtle-blue transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
                {item.hasDropdown && item.subItems && (
                  <div className="pl-4 border-l-2 border-cdp-subtle-blue ml-6">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-6 py-2 text-cdp-medium-gray hover:text-cdp-accent-gold transition-colors duration-200 text-sm"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-6 pt-4">
              <button className="cdp-button w-full">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
