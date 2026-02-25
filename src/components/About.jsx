import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCode, FaRocket, FaBrain, FaUniversity, FaLaptopCode } from 'react-icons/fa'

const About = () => {
  const education = [
    {
      year: "2023 - Present",
      degree: "Master of Science in Computer Science",
      institution: "Rochester Institute of Technology (RIT)",
      description: "Specializing in Machine Learning, Full-Stack Development, and Data Visualization",
      icon: FaUniversity,
      color: "neon-cyan"
    },
    {
      year: "2019 - 2023",
      degree: "Bachelor of Technology in Computer Science",
      institution: "IPS Academy, Indore",
      description: "Foundation in Computer Science with focus on algorithms and software development",
      icon: FaGraduationCap,
      color: "neon-purple"
    }
  ]

  const passions = [
    {
      title: "Machine Learning & AI",
      description: "Building intelligent systems for biomarker discovery, computer vision, and real-time recognition",
      icon: FaBrain,
      color: "neon-cyan"
    },
    {
      title: "Full-Stack Development",
      description: "Creating end-to-end solutions with React, .NET, and modern frameworks",
      icon: FaLaptopCode,
      color: "neon-purple"
    },
    {
      title: "Big Data & Analytics",
      description: "Processing millions of records with PostgreSQL, MongoDB, and functional programming",
      icon: FaRocket,
      color: "neon-cyan"
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
    <section id="about" className="section-padding bg-gradient-to-b from-dark-bg to-card-bg">
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
            <span className="gradient-text">About Me</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-text-gray max-w-3xl mx-auto leading-relaxed"
          >
            A passionate Computer Science graduate student with a love for creating innovative solutions 
            through code. My journey from IPS Academy to RIT has shaped my expertise in machine learning, 
            big data analytics, functional programming, and full-stack development.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Education Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-center lg:text-left"
            >
              <span className="gradient-text">Education Journey</span>
            </motion.h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan to-neon-purple"></div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`relative z-10 w-16 h-16 rounded-full bg-${edu.color}/20 border-2 border-${edu.color} flex items-center justify-center`}
                  >
                    <edu.icon className={`text-${edu.color}`} size={20} />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="glass-effect p-6 rounded-lg hover:neon-glow transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-${edu.color} font-semibold text-sm`}>
                          {edu.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-text-light mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-neon-cyan font-medium mb-3">
                        {edu.institution}
                      </p>
                      <p className="text-text-gray leading-relaxed">
                        {edu.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Passions & Interests */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-center lg:text-left"
            >
              <span className="gradient-text">My Passions</span>
            </motion.h3>
            
            <div className="space-y-6">
              {passions.map((passion, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-effect p-6 rounded-lg hover:neon-glow transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 rounded-full bg-${passion.color}/10 border border-${passion.color}/30 group-hover:bg-${passion.color}/20 transition-colors duration-300`}
                    >
                      <passion.icon className={`text-${passion.color}`} size={24} />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-text-light mb-2">
                        {passion.title}
                      </h4>
                      <p className="text-text-gray leading-relaxed">
                        {passion.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Personal Touch */}
            <motion.div
              variants={itemVariants}
              className="mt-8 glass-effect p-6 rounded-lg"
            >
              <h4 className="text-xl font-bold text-text-light mb-4">
                Beyond Code
              </h4>
              <p className="text-text-gray leading-relaxed">
                When I'm not coding, you'll find me exploring the latest in AI research, 
                contributing to open-source projects, or experimenting with new technologies. 
                I believe in continuous learning and sharing knowledge with the developer community.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
