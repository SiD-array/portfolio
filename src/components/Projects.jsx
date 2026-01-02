import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaBrain, FaChartLine, FaMobile, FaServer, FaEye, FaCheckCircle, FaCog } from 'react-icons/fa'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Completed Projects
  const completedProjects = [
    {
      id: 1,
      title: "RNA-Seq Cancer Biomarker Discovery",
      description: "Implemented a robust ML pipeline analyzing RNA-Seq data from TCGA, achieving 100% F1-Macro Score for multi-class cancer subtype classification with a validated 50-gene biomarker panel.",
      longDescription: "Built a comprehensive machine learning pipeline to analyze high-dimensional RNA sequencing data from The Cancer Genome Atlas (TCGA), successfully classifying five distinct cancer subtypes (BRCA, COAD, KIRC, LUAD, PRAD). The pipeline uses model interpretability to establish a definitive 50-gene biomarker panel validated via external bioinformatics pathway analysis.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "gProfiler"],
      category: "ml",
      github: "https://github.com/SiD-array/rna-seq-cancer-biomarker-discovery",
      live: "https://biomarker-discovery-app.vercel.app",
      features: [
        "Multi-class cancer subtype classification",
        "50-gene biomarker panel discovery",
        "Pathway enrichment analysis",
        "Interactive web dashboard",
        "Model interpretability analysis"
      ],
      icon: FaBrain,
      color: "neon-purple",
      date: "December 2025",
      achievements: [
        "Achieved 100% F1-Macro Score using Logistic Regression classifier",
        "Identified and validated 50-gene biomarker panel via gProfiler pathway analysis",
        "Processed 801 samples with 20,531 gene features across 5 cancer types",
        "Deployed interactive dashboard on Vercel for result visualization"
      ]
    },
    {
      id: 2,
      title: "Reddit Comments Big Data Analysis",
      description: "Big Data analysis of ~50M Reddit comments using a 3-phase approach: relational modeling (PostgreSQL), document-oriented design (MongoDB), and data mining with Apriori algorithm.",
      longDescription: "Comprehensive Big Data project analyzing the Reddit Comments May 2015 dataset containing approximately 50 million comments. Implemented a 3-phase methodology covering relational database design, NoSQL document modeling, and association rule mining to discover patterns in Reddit user behavior.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "PostgreSQL", "MongoDB", "Pandas", "mlxtend", "Apriori"],
      category: "data",
      github: "https://github.com/SiD-array/Reddit-Comments-May-2015-Data-Analysis",
      live: "https://reddit-comments-may-2015-data-analy.vercel.app",
      features: [
        "3-phase data architecture approach",
        "PostgreSQL relational modeling",
        "MongoDB document-oriented design",
        "Apriori association rule mining",
        "Interactive analytics dashboard"
      ],
      icon: FaDatabase,
      color: "neon-cyan",
      date: "November 2025",
      achievements: [
        "Processed and analyzed ~50 million Reddit comments",
        "Achieved 23.6x query speedup with optimized indexing",
        "Discovered user behavior patterns using Apriori algorithm",
        "Built ETL pipeline handling 50K rows/chunk for streaming ingestion"
      ]
    },
    {
      id: 3,
      title: "Real-Time Stock Analysis Dashboard",
      description: "Designed and deployed a full-stack stock analysis web application with interactive multi-timeframe charts, anomaly detection, and predictive modeling.",
      longDescription: "Built a comprehensive financial dashboard that processes real-time stock data and applies multiple machine learning algorithms for price prediction. The system includes interactive visualizations, portfolio tracking, and automated alerts with 99.9% uptime supporting 100+ active users.",
      image: "/api/placeholder/600/400",
      technologies: ["React (Vite)", "Recharts", "Firebase", "FastAPI", "ML Libraries"],
      category: "fullstack",
      github: "https://github.com/SiD-array/StockView",
      live: "https://stock-view-ebon.vercel.app/",
      features: [
        "Interactive multi-timeframe charts",
        "Anomaly detection algorithms",
        "Predictive modeling with ML",
        "Firebase watchlist functionality",
        "News API sentiment analysis"
      ],
      icon: FaChartLine,
      color: "neon-cyan",
      date: "July 2025",
      achievements: [
        "Implemented multiple ML algorithms (Linear Regression, Random Forest, XGBoost, LightGBM, CNN)",
        "Improved prediction accuracy using technical indicators and R², MAE, MSE metrics",
        "Deployed frontend on Vercel and backend on Railway with 99.9% uptime",
        "Supporting 100+ active users with real-time data processing"
      ]
    },
    {
      id: 4,
      title: "Movie Recommendation System",
      description: "Built content-based recommender system on 5K+ movies with improved preprocessing and similarity accuracy.",
      longDescription: "Developed a sophisticated movie recommendation engine using content-based filtering with Count Vectorizer and cosine similarity. The system processes movie metadata and user preferences to provide personalized recommendations with 18% improved accuracy through advanced preprocessing techniques.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Scikit-learn", "Pandas", "NLTK"],
      category: "ml",
      github: "https://github.com/SiD-array/movie-recommender",
      features: [
        "Content-based recommendation engine",
        "Count Vectorizer + cosine similarity",
        "Advanced text preprocessing",
        "Interactive Streamlit web app",
        "5K+ movie database"
      ],
      icon: FaBrain,
      color: "neon-purple",
      date: "June 2024",
      achievements: [
        "Built content-based recommender on 5K+ movies dataset",
        "Improved similarity accuracy by 18% via enhanced preprocessing",
        "Implemented stemming and feature engineering techniques",
        "Launched interactive web application using Streamlit"
      ]
    },
    {
      id: 5,
      title: "PG Life Web Application",
      description: "Pioneered full-stack housing platform for exploring and bookmarking accommodations across multiple cities with user authentication.",
      longDescription: "Created a comprehensive property management platform for PG accommodations with advanced search capabilities, user authentication, and real-time resource updates. The platform features responsive design, optimized database queries, and seamless user experience across desktop and mobile environments.",
      image: "/api/placeholder/600/400",
      technologies: ["HTML", "CSS", "Bootstrap 5", "Javascript", "AJAX", "PHP", "MySQL"],
      category: "fullstack",
      github: "https://github.com/SiD-array/PGLife",
      live: "https://pg-life-demo.netlify.app",
      features: [
        "Multi-city accommodation search",
        "User authentication system",
        "Bookmark and favorites functionality",
        "Real-time resource updates",
        "Responsive mobile design"
      ],
      icon: FaDatabase,
      color: "neon-cyan",
      date: "March 2023",
      achievements: [
        "Pioneered full-stack housing platform with multi-city support",
        "Accelerated SQL queries resulting in 40% faster load times",
        "Implemented user authentication and bookmarking system",
        "Deployed fully responsive UI across desktop and mobile using Bootstrap and CSS Grid"
      ]
    }
  ]

  // In-Progress Projects
  const inProgressProjects = [
    {
      id: 101,
      title: "AI-Powered Code Assistant",
      description: "An intelligent code completion and suggestion tool that helps developers write better code using natural language processing and code analysis.",
      longDescription: "Building an AI-powered development tool that analyzes code context and provides intelligent suggestions, bug detection, and code optimization recommendations. The system uses transformer models trained on open-source code repositories to understand programming patterns and best practices.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Transformers", "FastAPI", "React", "TypeScript", "OpenAI API", "Redis"],
      category: "ml",
      github: "https://github.com/SiD-array/ai-code-assistant",
      live: "#",
      features: [
        "Intelligent code completion",
        "Bug detection and fixes",
        "Code optimization suggestions",
        "Natural language queries",
        "Multi-language support"
      ],
      icon: FaCode,
      color: "neon-purple",
      date: "In Progress",
      status: "in-progress",
      achievements: [
        "Implementing transformer-based code analysis",
        "Building natural language processing pipeline",
        "Developing real-time code suggestions",
        "Creating multi-language support framework"
      ]
    },
    {
      id: 102,
      title: "E-Commerce Analytics Dashboard",
      description: "A comprehensive analytics platform for e-commerce businesses with real-time metrics, customer insights, and sales forecasting.",
      longDescription: "Developing a powerful analytics dashboard that processes large volumes of e-commerce data to provide actionable insights. The system includes customer segmentation, sales forecasting using time series analysis, and automated reporting with customizable dashboards.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Python", "Pandas", "Scikit-learn", "PostgreSQL", "Docker"],
      category: "data",
      github: "https://github.com/SiD-array/ecommerce-analytics",
      live: "#",
      features: [
        "Real-time sales metrics",
        "Customer segmentation",
        "Sales forecasting",
        "Interactive visualizations",
        "Automated reporting"
      ],
      icon: FaChartLine,
      color: "neon-cyan",
      date: "In Progress",
      status: "in-progress",
      achievements: [
        "Building real-time data processing pipeline",
        "Implementing customer segmentation algorithms",
        "Creating interactive D3.js visualizations",
        "Developing automated reporting system"
      ]
    },
    {
      id: 103,
      title: "Mobile-First Task Manager",
      description: "A responsive task management application with team collaboration features, real-time updates, and productivity analytics.",
      longDescription: "Creating a modern task management solution with real-time collaboration, drag-and-drop functionality, and productivity insights. The app features offline support, push notifications, and integrates with popular productivity tools.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Node.js", "Socket.io", "MongoDB", "Firebase", "Redux", "Expo"],
      category: "mobile",
      github: "https://github.com/SiD-array/task-manager",
      live: "#",
      features: [
        "Real-time collaboration",
        "Drag-and-drop interface",
        "Productivity analytics",
        "Offline support",
        "Push notifications"
      ],
      icon: FaMobile,
      color: "neon-purple",
      date: "In Progress",
      status: "in-progress",
      achievements: [
        "Building cross-platform mobile app with React Native",
        "Implementing real-time collaboration with Socket.io",
        "Creating offline-first architecture",
        "Developing productivity analytics dashboard"
      ]
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', icon: FaEye },
    { id: 'fullstack', label: 'Full-Stack', icon: FaServer },
    { id: 'ml', label: 'Machine Learning', icon: FaBrain },
    { id: 'data', label: 'Data Analytics', icon: FaChartLine },
    { id: 'mobile', label: 'Mobile', icon: FaMobile }
  ]

  const filterProjects = (projects) => {
    return selectedCategory === 'all' 
      ? projects 
      : projects.filter(project => project.category === selectedCategory)
  }

  const filteredCompletedProjects = filterProjects(completedProjects)
  const filteredInProgressProjects = filterProjects(inProgressProjects)

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

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-dark-bg to-card-bg">
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
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-text-gray max-w-3xl mx-auto leading-relaxed mb-8"
          >
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            machine learning, and data visualization.
          </motion.p>

          {/* Category Filter */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-neon-cyan text-dark-bg'
                    : 'glass-effect text-text-gray hover:text-neon-cyan hover:border-neon-cyan/50'
                }`}
              >
                <category.icon size={16} />
                <span className="font-medium">{category.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Completed Projects Section */}
        {filteredCompletedProjects.length > 0 && (
          <>
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <FaCheckCircle className="text-green-400 text-2xl" />
              <h3 className="text-2xl md:text-3xl font-bold text-text-light">
                Completed Projects
              </h3>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium">
                {filteredCompletedProjects.length}
              </span>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              <AnimatePresence>
                {filteredCompletedProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ y: -10 }}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    className="group relative"
                  >
                    <div className="glass-effect rounded-lg overflow-hidden hover:neon-glow transition-all duration-300 h-full">
                      {/* Project Image */}
                      <div className="relative h-48 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-full h-full flex items-center justify-center"
                        >
                          <project.icon className={`text-${project.color} text-6xl opacity-50`} />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-${project.color}/20 text-${project.color} border border-${project.color}/30`}>
                            {categories.find(cat => cat.id === project.category)?.label}
                          </span>
                        </div>

                        {/* Completed Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30">
                            ✓ Completed
                          </span>
                        </div>

                        {/* Action Buttons */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ 
                            opacity: hoveredProject === project.id ? 1 : 0,
                            y: hoveredProject === project.id ? 0 : 20
                          }}
                          className="absolute bottom-4 right-4 flex space-x-2"
                        >
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-dark-bg/80 rounded-full text-text-light hover:text-neon-cyan transition-colors duration-300"
                          >
                            <FaGithub size={16} />
                          </motion.a>
                          {project.live !== "#" && (
                            <motion.a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 bg-dark-bg/80 rounded-full text-text-light hover:text-neon-cyan transition-colors duration-300"
                            >
                              <FaExternalLinkAlt size={16} />
                            </motion.a>
                          )}
                        </motion.div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-text-light group-hover:text-neon-cyan transition-colors duration-300">
                            {project.title}
                          </h3>
                          {project.date && (
                            <span className="text-sm text-neon-cyan font-medium">
                              {project.date}
                            </span>
                          )}
                        </div>
                        <p className="text-text-gray mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-neon-purple/10 text-neon-purple border border-neon-purple/30 rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Achievements */}
                        {project.achievements && (
                          <div className="space-y-2 mb-4">
                            <h4 className="text-sm font-semibold text-neon-cyan">Key Achievements:</h4>
                            {project.achievements.slice(0, 2).map((achievement, idx) => (
                              <div key={idx} className="flex items-start space-x-2 text-sm text-text-gray">
                                <span className="text-neon-cyan mt-1">•</span>
                                <span>{achievement}</span>
                              </div>
                            ))}
                            {project.achievements.length > 2 && (
                              <div className="text-sm text-neon-purple">
                                +{project.achievements.length - 2} more achievements
                              </div>
                            )}
                          </div>
                        )}

                        {/* Features */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-neon-cyan">Features:</h4>
                          {project.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm text-text-gray">
                              <span className="text-neon-cyan">•</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                          {project.features.length > 2 && (
                            <div className="text-sm text-neon-purple">
                              +{project.features.length - 2} more features
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}

        {/* In Progress Projects Section */}
        {filteredInProgressProjects.length > 0 && (
          <>
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <FaCog className="text-orange-400 text-2xl animate-spin" style={{ animationDuration: '3s' }} />
              <h3 className="text-2xl md:text-3xl font-bold text-text-light">
                Currently Working On
              </h3>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full text-sm font-medium animate-pulse">
                {filteredInProgressProjects.length}
              </span>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredInProgressProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ y: -10 }}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    className="group relative"
                  >
                    <div className="glass-effect rounded-lg overflow-hidden hover:neon-glow transition-all duration-300 h-full border border-orange-500/20">
                      {/* Project Image */}
                      <div className="relative h-48 bg-gradient-to-br from-orange-500/10 to-neon-purple/20 overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-full h-full flex items-center justify-center"
                        >
                          <project.icon className={`text-${project.color} text-6xl opacity-50`} />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-${project.color}/20 text-${project.color} border border-${project.color}/30`}>
                            {categories.find(cat => cat.id === project.category)?.label}
                          </span>
                        </div>

                        {/* In Progress Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30 animate-pulse">
                            🚧 In Progress
                          </span>
                        </div>

                        {/* Action Buttons */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ 
                            opacity: hoveredProject === project.id ? 1 : 0,
                            y: hoveredProject === project.id ? 0 : 20
                          }}
                          className="absolute bottom-4 right-4 flex space-x-2"
                        >
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-dark-bg/80 rounded-full text-text-light hover:text-neon-cyan transition-colors duration-300"
                          >
                            <FaGithub size={16} />
                          </motion.a>
                          {project.live !== "#" && (
                            <motion.a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 bg-dark-bg/80 rounded-full text-text-light hover:text-neon-cyan transition-colors duration-300"
                            >
                              <FaExternalLinkAlt size={16} />
                            </motion.a>
                          )}
                        </motion.div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-text-light group-hover:text-orange-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          {project.date && (
                            <span className="text-sm text-orange-400 font-medium">
                              {project.date}
                            </span>
                          )}
                        </div>
                        <p className="text-text-gray mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-neon-purple/10 text-neon-purple border border-neon-purple/30 rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Current Progress */}
                        {project.achievements && (
                          <div className="space-y-2 mb-4">
                            <h4 className="text-sm font-semibold text-orange-400">Current Progress:</h4>
                            {project.achievements.slice(0, 2).map((achievement, idx) => (
                              <div key={idx} className="flex items-start space-x-2 text-sm text-text-gray">
                                <span className="text-orange-400 mt-1">→</span>
                                <span>{achievement}</span>
                              </div>
                            ))}
                            {project.achievements.length > 2 && (
                              <div className="text-sm text-neon-purple">
                                +{project.achievements.length - 2} more in progress
                              </div>
                            )}
                          </div>
                        )}

                        {/* Planned Features */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-orange-400">Planned Features:</h4>
                          {project.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm text-text-gray">
                              <span className="text-orange-400">○</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                          {project.features.length > 2 && (
                            <div className="text-sm text-neon-purple">
                              +{project.features.length - 2} more planned
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}

        {/* View More Button */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/SiD-array"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <FaGithub size={20} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
