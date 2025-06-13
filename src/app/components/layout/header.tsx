'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#portofolio', label: 'Portofolio' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]
  

  return (
    <header className="bg-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/home" className="ml-8">
            <Image src="/img/Logo.png" alt="Logo" width={70} height={50} />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 justify-center flex-1 text-md text-black">
            {menuItems.map((item) => (
              <li key={`${item.href}-${item.label}`}>
              <a 
                  href={item.href}
                  className= "text-black hover:text-yellow-400 transition-colors duration-500 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="h-0.5 bg-gray-700 block"></span>
              <span className="h-0.5 bg-gray-700 block"></span>
              <span className="h-0.5 bg-gray-700 block"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="block text-black hover:text-yellow-400 transition-colors duration-300 relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header