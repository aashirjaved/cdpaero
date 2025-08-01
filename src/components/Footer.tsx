'use client'

import { useState } from 'react'
import { Instagram, Youtube, Linkedin, Facebook, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [title, setTitle] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', { title, firstName, lastName, email })
  }

  return (
    <footer className="bg-cdp-charcoal text-white">
      {/* Main Footer Content */}
      <div className="section-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Contact Us */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl text-cdp-accent-gold mb-4">CONTACT US</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-cdp-accent-gold" />
                  <div>
                    <p className="text-sm text-gray-300">General Inquiries</p>
                    <a href="tel:+442071234567" className="hover:text-cdp-accent-gold transition-colors">
                      +44 (0) 20 7123 4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-cdp-accent-gold mt-1" />
                  <div>
                    <p className="text-sm text-gray-300">Headquarters</p>
                    <p className="text-sm">CDP AERO House, Aviation Quarter,<br />Farnborough, Hampshire, GU14 6XA</p>
                  </div>
                </div>
              </div>
              
              <button className="cdp-button-outline text-sm">
                CONTACT US
              </button>
              
              <div>
                <p className="text-sm text-gray-300 mb-3">SHARE YOUR FEEDBACK</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-cdp-accent-gold transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-cdp-accent-gold transition-colors">
                    <Youtube size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-cdp-accent-gold transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-cdp-accent-gold transition-colors">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-cdp-accent-gold mb-4">OUR SERVICES</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-cdp-accent-gold transition-colors">Aircraft Design</a></li>
                <li><a href="#" className="hover:text-cdp-accent-gold transition-colors">Certification Engineering</a></li>
                <li><a href="#" className="hover:text-cdp-accent-gold transition-colors">Modifications</a></li>
                <li><a href="#" className="hover:text-cdp-accent-gold transition-colors">Repairs & Maintenance</a></li>
                <li><a href="#" className="hover:text-cdp-accent-gold transition-colors">Consulting Services</a></li>
                <li><a href="#" className="hover:text-cdp-accent-gold transition-colors">Quality Assurance</a></li>
                <li><a href="#" className="hover:text-cdp-accent-gold transition-colors">Project Management</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-cdp-accent-gold mb-4">COMPANY</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-cdp-accent-gold transition-colors">About CDP AERO</a></li>
                <li><a href="#" className="hover:text-cdp-accent-gold transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cdp-accent-gold transition-colors">News & Insights</a></li>
                <li><a href="#" className="hover:text-cdp-accent-gold transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-cdp-accent-gold transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-cdp-accent-gold transition-colors">Partners</a></li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl text-cdp-accent-gold mb-4">
                STAY INFORMED ABOUT CDP AERO
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <select 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3 bg-transparent border border-gray-600 text-white focus:border-cdp-accent-gold focus:outline-none"
                >
                  <option value="">Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                </select>
                
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-cdp-accent-gold focus:outline-none"
                />
                
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-cdp-accent-gold focus:outline-none"
                />
                
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-cdp-accent-gold focus:outline-none"
                />
                
                <div className="text-xs text-gray-300 leading-relaxed">
                  <label className="flex items-start space-x-2">
                    <input type="checkbox" className="mt-1" />
                    <span>
                      I would like to receive updates on aviation industry developments, technology innovations,
                      and exclusive insights from CDP AERO's expert team. To learn more about how we store and process
                      your data please visit our <a href="#" className="text-cdp-accent-gold hover:underline">Privacy Policy</a>. 
                      You may opt out of receiving our updates at any time, either by using an
                      unsubscribe link or by contacting us at info@cdpaero.com.
                    </span>
                  </label>
                </div>
                
                <button type="submit" className="cdp-button w-full">
                  SIGN UP
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="section-padding py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-gray-400 max-w-3xl">
              Copyright CDP AERO Limited 2025. All copyright and other intellectual property rights in all logos,
              designs, text, images and other materials on this website are owned by CDP AERO
              Limited or appear with permission of the relevant owner. 'CDP AERO' is a
              registered trade mark. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4">
              <img src="/abta-logo.svg" alt="ABTA" className="h-8" />
              <button className="text-xs text-gray-400 hover:text-cdp-accent-gold transition-colors">
                Back to top of page
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
