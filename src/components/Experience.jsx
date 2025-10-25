import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaCode, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa'

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState(null)

  const experiences = [
    {
      id: 1,
      company: "Verzeo EduTech",
      position: "Machine Learning Intern",
      duration: "June 2023 - August 2023",
      location: "Remote",
      type: "Internship",
      description: "Developed and implemented machine learning models for educational data analysis and student performance prediction.",
      achievements: [
        "Built a student performance prediction model using Random Forest and XGBoost algorithms",
        "Improved model accuracy by 15% through feature engineering and hyperparameter tuning",
        "Created interactive dashboards for data visualization using Python and Tableau",
        "Collaborated with a team of 5 developers to deliver ML solutions for educational analytics"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Tableau", "Jupyter"],
      metrics: [
        { label: "Model Accuracy", value: "92%", improvement: "+15%" },
        { label: "Data Processing", value: "10K+ records", improvement: "Daily" },
        { label: "Team Size", value: "5 members", improvement: "Cross-functional" }
      ],
      icon: FaBuilding,
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

  const toggleExpanded = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-card-bg to-dark-bg">
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
            <span className="gradient-text">Professional Experience</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-text-gray max-w-3xl mx-auto leading-relaxed"
          >
            My journey in the tech industry, building innovative solutions and growing as a developer.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Timeline */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-cyan hidden md:block"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative flex flex-col md:flex-row items-center mb-16"
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 rounded-full bg-${exp.color}/20 border-4 border-${exp.color} items-center justify-center hidden md:flex`}
                >
                  <exp.icon className={`text-${exp.color}`} size={20} />
                </motion.div>

                {/* Mobile Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-16 h-16 rounded-full bg-${exp.color}/20 border-4 border-${exp.color} flex items-center justify-center mb-4 md:hidden`}
                >
                  <exp.icon className={`text-${exp.color}`} size={20} />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
                >
                  <div className="glass-effect p-6 rounded-lg hover:neon-glow transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-text-light mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-neon-cyan font-semibold mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-text-gray">
                          <div className="flex items-center space-x-1">
                            <FaCalendarAlt size={12} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaMapMarkerAlt size={12} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleExpanded(exp.id)}
                        className="text-neon-cyan hover:text-neon-purple transition-colors duration-300"
                      >
                        {expandedCard === exp.id ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                      </motion.button>
                    </div>

                    {/* Description */}
                    <p className="text-text-gray mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Type Badge */}
                    <div className="inline-block">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-${exp.color}/20 text-${exp.color} border border-${exp.color}/30`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedCard === exp.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 pt-6 border-t border-border-gray">
                            {/* Achievements */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-text-light mb-3 flex items-center">
                                <FaLightbulb className="text-neon-cyan mr-2" size={16} />
                                Key Achievements
                              </h4>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start space-x-2 text-text-gray"
                                  >
                                    <span className="text-neon-cyan mt-1">•</span>
                                    <span>{achievement}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-text-light mb-3 flex items-center">
                                <FaCode className="text-neon-purple mr-2" size={16} />
                                Technologies Used
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, idx) => (
                                  <motion.span
                                    key={idx}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="px-3 py-1 bg-neon-purple/10 text-neon-purple border border-neon-purple/30 rounded-full text-sm"
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </div>
                            </div>

                            {/* Metrics */}
                            <div>
                              <h4 className="text-lg font-semibold text-text-light mb-3 flex items-center">
                                <FaChartLine className="text-neon-cyan mr-2" size={16} />
                                Impact Metrics
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {exp.metrics.map((metric, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="text-center p-3 bg-neon-cyan/5 border border-neon-cyan/20 rounded-lg"
                                  >
                                    <div className="text-2xl font-bold text-neon-cyan mb-1">
                                      {metric.value}
                                    </div>
                                    <div className="text-sm text-text-gray mb-1">
                                      {metric.label}
                                    </div>
                                    <div className="text-xs text-neon-purple">
                                      {metric.improvement}
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Future Goals */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-text-light mb-4">
                <span className="gradient-text">What's Next?</span>
              </h3>
              <p className="text-text-gray leading-relaxed max-w-2xl mx-auto">
                I'm actively seeking opportunities to apply my skills in machine learning and full-stack development 
                to solve real-world problems. I'm particularly interested in roles that combine AI/ML with web development, 
                allowing me to create intelligent, user-friendly applications.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
