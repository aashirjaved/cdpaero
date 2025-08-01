import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-medium transition-all duration-300 uppercase tracking-wider text-sm focus:outline-none focus:ring-2 focus:ring-cdp-accent-gold/50'
  
  const variants = {
    primary: 'bg-cdp-accent-gold hover:bg-cdp-dark-gold text-white',
    outline: 'border-2 border-cdp-accent-gold text-cdp-accent-gold hover:bg-cdp-accent-gold hover:text-white',
    ghost: 'text-cdp-accent-gold hover:bg-cdp-accent-gold/10'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-12 py-4 text-base'
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
