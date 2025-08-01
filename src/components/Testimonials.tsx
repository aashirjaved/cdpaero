'use client'

import { useState, useEffect } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Fleet Manager",
    company: "Global Airways",
    location: "London, UK",
    rating: 5,
    text: "CDP AERO's expertise in aircraft modifications exceeded our expectations. Their attention to regulatory compliance and quality craftsmanship made our fleet modernization project seamless and successful.",
    project: "Boeing 737 Cabin Modifications"
  },
  {
    id: 2,
    name: "Captain Michael Chen",
    position: "Operations Director",
    company: "Horizon Aviation",
    location: "Singapore",
    rating: 5,
    text: "When we needed emergency AOG support, CDP AERO's rapid response team was exceptional. They had our aircraft back in service within 24 hours with full regulatory compliance.",
    project: "AOG Support & Avionics Repair"
  },
  {
    id: 3,
    name: "Dr. Elena Rodriguez",
    position: "Chief Engineer",
    company: "AeroDesign Solutions",
    location: "Miami, FL",
    rating: 5,
    text: "The structural analysis and stress testing provided by CDP AERO was thorough and precise. Their engineering expertise gave us complete confidence in our aircraft's airworthiness certification.",
    project: "Structural Analysis & Certification"
  }
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-cdp-light-gray to-white">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="section-heading text-cdp-primary-blue mb-6">
              CLIENT SUCCESS STORIES
            </h2>
            <div className="w-24 h-1 bg-cdp-accent-gold mx-auto mb-6"></div>
            <p className="text-lg text-cdp-charcoal max-w-2xl mx-auto">
              Discover what makes CDP AERO exceptional through the experiences of our valued clients
            </p>
          </div>

          {/* Testimonial Content */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 mx-auto max-w-3xl border border-cdp-light-gray">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <Quote size={48} className="text-cdp-accent-gold" />
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-cdp-charcoal leading-relaxed mb-8 font-light italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-cdp-accent-gold fill-current"
                  />
                ))}
              </div>

              {/* Guest Info */}
              <div className="text-center">
                <h4 className="font-montserrat text-xl font-semibold text-cdp-primary-blue mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-sm text-cdp-medium-gray mb-1">
                  {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                </p>
                <p className="text-sm text-cdp-medium-gray mb-2">
                  {testimonials[currentTestimonial].location}
                </p>
                <p className="text-xs uppercase tracking-wider text-cdp-accent-gold font-medium">
                  {testimonials[currentTestimonial].project}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-cdp-accent-gold scale-125'
                      : 'bg-gray-300 hover:bg-cdp-accent-gold/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
