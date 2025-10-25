import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown, FaCode, FaRocket, FaBrain, FaDownload } from 'react-icons/fa'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const fullText = "Hi, I'm Siddharth 👋 — a Computer Science Graduate Student @ RIT specializing in Full-Stack Development & Machine Learning."

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText.length) {
        setCurrentText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      } else if (isDeleting && currentIndex > 0) {
        setCurrentText(fullText.slice(0, currentIndex - 1))
        setCurrentIndex(currentIndex - 1)
      } else if (currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (currentIndex === 0 && isDeleting) {
        setIsDeleting(false)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, fullText])

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/portfolio/resume.pdf'
    link.download = 'Siddharth_Bhople_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-neon-cyan/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-neon-purple/20 rounded-full"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom text-center relative z-10"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">Siddharth Bhople</span>
          </motion.h1>
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-8"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="p-3 rounded-full bg-neon-cyan/10 border border-neon-cyan/30"
            >
              <FaCode className="text-neon-cyan" size={24} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -10 }}
              className="p-3 rounded-full bg-neon-purple/10 border border-neon-purple/30"
            >
              <FaBrain className="text-neon-purple" size={24} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="p-3 rounded-full bg-neon-cyan/10 border border-neon-cyan/30"
            >
              <FaRocket className="text-neon-cyan" size={24} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Typing Animation */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-xl md:text-2xl lg:text-3xl font-mono text-text-light min-h-[4rem] flex items-center justify-center">
            <span className="text-neon-cyan">{currentText}</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-neon-cyan ml-1"
            >
              |
            </motion.span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-text-gray mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Passionate about creating innovative solutions through code. 
          I specialize in building scalable web applications, implementing machine learning algorithms, 
          and crafting beautiful user experiences that make a difference.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 204, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="btn-primary text-lg px-8 py-4"
          >
            Explore My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(123, 97, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2"
          >
            <FaDownload size={18} />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute transform -translate-x-1/2"
          style={{ bottom: '-0.75rem', width: '100%' }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-text-gray hover:text-neon-cyan transition-colors duration-300 cursor-pointer group"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-2 group-hover:text-neon-cyan transition-colors duration-300">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaChevronDown size={20} className="group-hover:text-neon-cyan transition-colors duration-300" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: -100,
              opacity: 0
            }}
            animate={{ 
              y: window.innerHeight + 100,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute text-neon-cyan/30 font-mono text-sm"
          >
            {['const', 'function', 'return', 'if', 'else', 'for'][i]}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Hero
