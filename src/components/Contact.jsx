import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram,
  FaPaperPlane,
  FaUser,
  FaComment,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        reply_to: formData.email
      }
      
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID, 
        EMAILJS_CONFIG.TEMPLATE_ID, 
        templateParams, 
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      
      // Success handling
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
      
    } catch (error) {
      console.error('EmailJS Error:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "sid.work0403@gmail.com",
      link: "mailto:sid.work0403@gmail.com",
      color: "neon-cyan"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+1 (585) 625-8123",
      link: "tel:+15856258123",
      color: "neon-purple"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Rochester, NY, USA",
      link: "#",
      color: "neon-cyan"
    }
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/SiD-array",
      color: "neon-cyan"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/siddharth-bhople",
      color: "neon-purple"
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      url: "https://instagram.com/sidb_5",
      color: "neon-purple"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-dark-bg to-card-bg">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">Get In Touch</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-text-gray max-w-3xl mx-auto leading-relaxed"
          >
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can work together!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-8"
            >
              <span className="gradient-text">Let's Connect</span>
            </motion.h3>

            {/* Contact Info Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass-effect p-6 rounded-lg hover:neon-glow transition-all duration-300 block group"
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 rounded-full bg-${info.color}/10 border border-${info.color}/30 group-hover:bg-${info.color}/20 transition-colors duration-300`}
                    >
                      <info.icon className={`text-${info.color}`} size={24} />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-light mb-1">
                        {info.title}
                      </h4>
                      <p className="text-text-gray group-hover:text-neon-cyan transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-text-light mb-6">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 rounded-full bg-${social.color}/10 border border-${social.color}/30 hover:bg-${social.color}/20 hover:neon-glow transition-all duration-300 group`}
                  >
                    <social.icon 
                      className={`text-${social.color} group-hover:rotate-12 transition-transform duration-300`} 
                      size={24} 
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 glass-effect p-6 rounded-lg"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="text-lg font-semibold text-text-light">
                  Available for Opportunities
                </h4>
              </div>
              <p className="text-text-gray leading-relaxed">
                I'm currently open to new opportunities in full-stack development, 
                machine learning, and data science roles. Let's discuss how I can 
                contribute to your team!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-8"
            >
              <span className="gradient-text">Send a Message</span>
            </motion.h3>

            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name Field */}
              <div>
                <label className="block text-text-light font-medium mb-2">
                  <FaUser className="inline mr-2" size={14} />
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-card-bg border border-border-gray rounded-lg text-text-light placeholder-text-gray focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-text-light font-medium mb-2">
                  <FaEnvelope className="inline mr-2" size={14} />
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-card-bg border border-border-gray rounded-lg text-text-light placeholder-text-gray focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-text-light font-medium mb-2">
                  <FaComment className="inline mr-2" size={14} />
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-card-bg border border-border-gray rounded-lg text-text-light placeholder-text-gray focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-text-light font-medium mb-2">
                  <FaComment className="inline mr-2" size={14} />
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-card-bg border border-border-gray rounded-lg text-text-light placeholder-text-gray focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center space-x-2 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-400 bg-green-400/10 border border-green-400/30 p-4 rounded-lg"
                >
                  <FaCheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/30 p-4 rounded-lg"
                >
                  <FaExclamationCircle size={20} />
                  <span>Failed to send message. Please try again.</span>
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
