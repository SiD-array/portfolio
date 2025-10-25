import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-effect' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            &lt;SB/&gt;
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-neon-cyan'
                    : 'text-text-gray hover:text-text-light'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-cyan"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/SiD-array"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-text-gray hover:text-neon-cyan transition-colors duration-300"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/siddharth-bhople"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-text-gray hover:text-neon-cyan transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:sid.work0403@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-text-gray hover:text-neon-cyan transition-colors duration-300"
            >
              <FaEnvelope size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-light"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-neon-cyan bg-neon-cyan/10'
                    : 'text-text-gray hover:text-text-light hover:bg-white/5'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            <div className="flex items-center justify-center space-x-6 pt-4 border-t border-border-gray">
              <motion.a
                href="https://github.com/SiD-array"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-text-gray hover:text-neon-cyan transition-colors duration-300"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/siddharth-bhople"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-text-gray hover:text-neon-cyan transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:sid.work0403@gmail.com"
                whileHover={{ scale: 1.2 }}
                className="text-text-gray hover:text-neon-cyan transition-colors duration-300"
              >
                <FaEnvelope size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
