import './globals.css'
import React from 'react'

export const metadata = {
  title: 'CDP AERO | World-Class Aviation Design & Production Solutions',
  description: 'Elevating Aviation Excellence Worldwide. World-class aircraft design, certification engineering, and interior solutions for commercial and private aviation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
