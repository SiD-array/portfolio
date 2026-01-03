import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaCode, 
  FaBrain, 
  FaDatabase, 
  FaMobile, 
  FaCloud, 
  FaTools,
  FaServer,
  FaChartLine,
  FaJs, 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaNpm,
  FaGithub,
  FaLinux,
  FaWindows,
  FaApple
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiRedis, 
  SiTensorflow, 
  SiPytorch, 
  SiScikitlearn, 
  SiPandas, 
  SiNumpy, 
  SiJupyter, 
  SiTableau, 
  SiPowerbi,
  SiExpress,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiMui,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiJest,
  SiCypress,
  SiWebpack,
  SiBabel
} from 'react-icons/si'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('languages')

  const skillCategories = {
    languages: {
      title: "Languages",
      icon: FaCode,
      color: "neon-cyan"
    },
    frameworks: {
      title: "Frameworks/Tools",
      icon: FaTools,
      color: "neon-purple"
    },
    data_ml: {
      title: "Data/ML Libraries",
      icon: FaBrain,
      color: "neon-cyan"
    },
    databases: {
      title: "Databases",
      icon: FaDatabase,
      color: "neon-purple"
    }
  }

  const allSkills = [
    // Languages
    { name: "Python", icon: FaPython, level: 92, color: "#3776AB", category: "languages" },
    { name: "Java", icon: FaCode, level: 88, color: "#ED8B00", category: "languages" },
    { name: "JavaScript", icon: FaJs, level: 85, color: "#F7DF1E", category: "languages" },
    { name: "React", icon: FaReact, level: 82, color: "#61DAFB", category: "languages" },
    { name: "Node.js", icon: FaNodeJs, level: 78, color: "#339933", category: "languages" },
    { name: "C/C++", icon: FaCode, level: 75, color: "#00599C", category: "languages" },
    { name: "SQL", icon: FaDatabase, level: 80, color: "#336791", category: "languages" },
    { name: "HTML/CSS", icon: FaHtml5, level: 90, color: "#E34F26", category: "languages" },
    { name: "C#/.NET", icon: FaCode, level: 75, color: "#512BD4", category: "languages" },
    { name: "F#", icon: FaCode, level: 72, color: "#378BBA", category: "languages" },
    
    // Frameworks/Tools
    { name: "FastAPI", icon: FaCode, level: 80, color: "#009688", category: "frameworks" },
    { name: "Streamlit", icon: FaCode, level: 78, color: "#FF4B4B", category: "frameworks" },
    { name: "Vite", icon: FaCode, level: 85, color: "#646CFF", category: "frameworks" },
    { name: "Bootstrap", icon: FaBootstrap, level: 82, color: "#7952B3", category: "frameworks" },
    { name: "TailwindCSS", icon: SiTailwindcss, level: 85, color: "#06B6D4", category: "frameworks" },
    { name: "Firebase", icon: SiFirebase, level: 75, color: "#FFCA28", category: "frameworks" },
    { name: "JavaFX", icon: FaCode, level: 68, color: "#ED8B00", category: "frameworks" },
    { name: "Git", icon: FaGitAlt, level: 88, color: "#F05032", category: "frameworks" },
    { name: "VS Code", icon: FaCode, level: 90, color: "#007ACC", category: "frameworks" },
    
    // Data/ML Libraries
    { name: "NumPy", icon: SiNumpy, level: 88, color: "#4DABCF", category: "data_ml" },
    { name: "Pandas", icon: SiPandas, level: 90, color: "#E377C2", category: "data_ml" },
    { name: "Scikit-learn", icon: SiScikitlearn, level: 88, color: "#F7931E", category: "data_ml" },
    { name: "TensorFlow", icon: SiTensorflow, level: 75, color: "#FF6F00", category: "data_ml" },
    { name: "Matplotlib", icon: FaChartLine, level: 85, color: "#11557C", category: "data_ml" },
    { name: "XGBoost", icon: FaCode, level: 78, color: "#FF6600", category: "data_ml" },
    { name: "LightGBM", icon: FaCode, level: 72, color: "#FF6600", category: "data_ml" },
    { name: "NLTK", icon: FaCode, level: 75, color: "#FF6B6B", category: "data_ml" },
    { name: "Recharts", icon: FaCode, level: 80, color: "#FF6B6B", category: "data_ml" },
    { name: "TA-Lib", icon: FaCode, level: 65, color: "#FF6B6B", category: "data_ml" },
    { name: "Deedle", icon: FaCode, level: 70, color: "#378BBA", category: "data_ml" },
    { name: "Plotly.NET", icon: FaChartLine, level: 72, color: "#3F4F75", category: "data_ml" },
    
    // Databases
    { name: "MySQL", icon: SiMysql, level: 82, color: "#4479A1", category: "databases" },
    { name: "PostgreSQL", icon: SiPostgresql, level: 80, color: "#336791", category: "databases" },
    { name: "MongoDB", icon: SiMongodb, level: 75, color: "#47A248", category: "databases" }
  ]

  const filteredSkills = selectedCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-card-bg to-dark-bg">
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
            <span className="gradient-text">Technical Skills</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-text-gray max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical expertise across various domains of software development.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === key
                  ? `bg-${category.color} text-dark-bg`
                  : 'glass-effect text-text-gray hover:text-neon-cyan hover:border-neon-cyan/50'
              }`}
            >
              <category.icon size={16} />
              <span className="font-medium">{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                boxShadow: `0 0 30px ${skill.color}40`
              }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group relative"
            >
              <div className="glass-effect p-6 rounded-lg text-center hover:neon-glow transition-all duration-300 h-full">
                {/* Skill Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4 flex justify-center"
                >
                  <skill.icon 
                    size={40} 
                    style={{ color: skill.color }}
                    className="group-hover:drop-shadow-lg transition-all duration-300"
                  />
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-sm font-semibold text-text-light mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="w-full bg-text-gray/20 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                      boxShadow: `0 0 10px ${skill.color}40`
                    }}
                  />
                </div>

                {/* Skill Level */}
                <p className="text-xs text-text-gray">
                  {skill.level}%
                </p>

                {/* Hover Effect */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-neon-cyan rounded-full flex items-center justify-center"
                  >
                    <span className="text-dark-bg text-xs font-bold">
                      {skill.level}
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-light mb-4">
              <span className="gradient-text">Continuous Learning</span>
            </h3>
            <p className="text-text-gray leading-relaxed mb-6">
              I'm constantly exploring new technologies and frameworks to stay at the forefront of software development. 
              Currently learning about advanced machine learning techniques, cloud architecture, and emerging web technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-medium"
              >
                Always Learning
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-neon-purple/10 border border-neon-purple/30 rounded-full text-neon-purple text-sm font-medium"
              >
                Open Source Contributor
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-medium"
              >
                Tech Enthusiast
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
