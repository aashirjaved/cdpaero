'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Custom gold icon
const goldIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
      <path fill="#D4AF37" stroke="#B8860B" stroke-width="2" d="M12.5 0C5.6 0 0 5.6 0 12.5c0 12.5 12.5 28.5 12.5 28.5s12.5-16 12.5-28.5C25 5.6 19.4 0 12.5 0zm0 17.5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
    </svg>
  `),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41]
})

interface Region {
  name: string
  description: string
  coordinates: [number, number]
  details: {
    office: string
    timezone: string
    contact: string
    email: string
  }
}

interface MapComponentProps {
  regions: Region[]
}

export default function MapComponent({ regions }: MapComponentProps) {
  // Flight paths connecting all offices
  const flightPaths = [
    // UK to other offices
    [regions[0].coordinates, regions[1].coordinates], // UK to Europe
    [regions[0].coordinates, regions[2].coordinates], // UK to MENA
    [regions[0].coordinates, regions[3].coordinates], // UK to Asia
    [regions[0].coordinates, regions[4].coordinates], // UK to USA
    // Cross connections
    [regions[1].coordinates, regions[2].coordinates], // Europe to MENA
    [regions[2].coordinates, regions[3].coordinates], // MENA to Asia
  ]

  return (
    <div className="h-[500px] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
      <MapContainer
        center={[30, 20]} // Center on world view
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        className="z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Flight paths */}
        {flightPaths.map((path, index) => (
          <Polyline
            key={index}
            positions={path}
            pathOptions={{
              color: '#D4AF37',
              weight: 2,
              opacity: 0.7,
              dashArray: '10, 10'
            }}
          />
        ))}
        
        {/* Office markers */}
        {regions.map((region, index) => (
          <Marker
            key={index}
            position={region.coordinates}
            icon={goldIcon}
          >
            <Popup className="custom-popup">
              <div className="p-2 min-w-[250px]">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <h3 className="font-serif text-lg font-semibold text-blue-900">
                    {region.name}
                  </h3>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 font-medium">
                  {region.description}
                </p>
                
                <div className="grid grid-cols-1 gap-2 text-xs text-gray-700">
                  <div className="flex items-center bg-gray-50 p-2 rounded">
                    <svg className="w-3 h-3 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{region.details.office}</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded">
                    <svg className="w-3 h-3 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{region.details.timezone}</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded">
                    <svg className="w-3 h-3 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="font-mono text-xs">{region.details.contact}</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded">
                    <svg className="w-3 h-3 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="font-mono text-xs">{region.details.email}</span>
                  </div>
                </div>
                
                <button className="w-full mt-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded text-sm transition-colors">
                  Contact {region.name} Office
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
