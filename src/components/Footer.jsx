import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaRocket } from 'react-icons/fa'

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [terminalText, setTerminalText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  const terminalMessages = [
    "> Currently coding something cool in React ⚡",
    "> Building amazing user experiences 🚀",
    "> Learning new technologies daily 📚",
    "> Contributing to open source projects 💻",
    "> Creating innovative solutions 🎯"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % terminalMessages.length)
    }, 3000)

    return () => clearInterval(messageTimer)
  }, [])

  useEffect(() => {
    const textTimer = setInterval(() => {
      const currentMessage = terminalMessages[currentIndex]
      setTerminalText((prev) => {
        if (prev.length < currentMessage.length) {
          return currentMessage.slice(0, prev.length + 1)
        }
        return prev
      })
    }, 100)

    return () => clearInterval(textTimer)
  }, [currentIndex])

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/siddharthbhople",
      label: "GitHub"
    },
    {
      icon: FaLinkedin,
      url: "https://linkedin.com/in/siddharthbhople",
      label: "LinkedIn"
    },
    {
      icon: FaEnvelope,
      url: "mailto:siddharth.bhople@example.com",
      label: "Email"
    }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-t from-dark-bg to-card-bg border-t border-border-gray">
      <div className="container-custom">
        {/* Terminal Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 border-b border-border-gray"
        >
          <div className="glass-effect p-6 rounded-lg max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-text-gray text-sm font-mono">Terminal</span>
            </div>
            <div className="font-mono text-neon-cyan">
              <span>{terminalText}</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-neon-cyan"
              >
                |
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold gradient-text mb-4 cursor-pointer"
                onClick={() => scrollToSection('#home')}
              >
                &lt;SB/&gt;
              </motion.div>
              <p className="text-text-gray leading-relaxed mb-6 max-w-md">
                A passionate Computer Science graduate student specializing in 
                full-stack development, machine learning, and data visualization. 
                Building the future, one line of code at a time.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 hover:bg-neon-cyan/20 hover:neon-glow transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="text-neon-cyan group-hover:rotate-12 transition-transform duration-300" size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-text-light mb-6">
                <span className="gradient-text">Quick Links</span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 10 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-text-gray hover:text-neon-cyan transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-text-light mb-6">
                <span className="gradient-text">Get In Touch</span>
              </h3>
              <div className="space-y-3">
                <p className="text-text-gray">
                  <span className="text-neon-cyan">Email:</span><br />
                  siddharth.bhople@example.com
                </p>
                <p className="text-text-gray">
                  <span className="text-neon-purple">Location:</span><br />
                  Rochester, NY
                </p>
                <p className="text-text-gray">
                  <span className="text-neon-cyan">Status:</span><br />
                  Available for opportunities
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-6 border-t border-border-gray"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-text-gray">
              <span>© 2025 Siddharth Bhople. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-red-500" size={16} />
              </motion.div>
              <span>and lots of</span>
              <FaCode className="text-neon-cyan" size={16} />
            </div>
            
            <div className="flex items-center space-x-4 text-text-gray">
              <span className="text-sm">
                {currentTime.toLocaleTimeString()}
              </span>
              <div className="flex items-center space-x-1">
                <FaRocket className="text-neon-purple" size={14} />
                <span className="text-sm">Powered by React & Vite</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
