'use client'

export default function LatestOffers() {
  const offers = [
    {
      title: "PREMIUM AIRCRAFT SOLUTIONS",
      description: "Discover our comprehensive aircraft modification and certification services for commercial and private aviation.",
      image: "https://images.unsplash.com/photo-1569045124816-bf0f58bb3736?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=798&q=80",
      buttonText: "EXPLORE SERVICES",
      href: "#"
    },
    {
      title: "CDP AERO INSIGHTS",
      subtitle: "AVIATION, INNOVATION, EXCELLENCE",
      description: "Stay informed with the latest developments in aircraft design, certification engineering, and industry innovations from our expert team.",
      image: "https://images.unsplash.com/photo-1588979355313-6711a095465f?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=444&q=80",
      buttonText: "READ OUR INSIGHTS",
      href: "#"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-cdp-charcoal mb-4">
              EXPLORE OUR SERVICES
            </h2>
            <div className="w-24 h-0.5 bg-cdp-accent-gold mx-auto"></div>
          </div>

          {/* Offers Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {offers.map((offer, index) => (
              <div key={index} className="group">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg shadow-xl mb-6">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {offer.subtitle && (
                    <p className="text-sm font-medium tracking-wider text-cdp-accent-gold uppercase">
                      {offer.subtitle}
                    </p>
                  )}
                  
                  <h3 className="font-serif text-2xl md:text-3xl text-cdp-charcoal">
                    {offer.title}
                  </h3>
                  
                  <p className="text-lg leading-relaxed text-cdp-medium-gray">
                    {offer.description}
                  </p>
                  
                  <button className="cdp-button-outline">
                    {offer.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
