import React, { useEffect } from 'react'
import Navbar from '../HomePage/Navbar'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const navigate = useNavigate()

  useEffect(() => {
    document.body.classList.remove('projects-page')
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12, mass: 0.5 },
    },
  };

  return (
    /* 1. NEW BACKGROUND: Stronger "Top Spotlight" effect */
    <div style={{ 
      /* Gradient starts Dark Grey at top (#2a2a2a) and fades to Pitch Black (#000000) */
      background: 'radial-gradient(circle at 50% 10%, #2a2a2a 0%, #000000 80%)', 
      minHeight: '100vh', 
      width: '100vw',
      position: 'fixed',
      top: 0, 
      left: 0, 
      zIndex: 50,
      overflowY: 'auto'
    }}>
      
      <div style={{ position: 'relative', zIndex: 100 }}>
        <Navbar/>
      </div>

      <section 
        className="px-4 sm:px-6 py-10 sm:py-14"
        style={{ color: '#ffffff', position: 'relative', zIndex: 60 }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="min-h-[80vh] flex items-center justify-center text-center"
        >
          <div className="max-w-3xl w-full px-6">
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
              style={{
                fontFamily: 'var(--font-head)',
                background: 'linear-gradient(90deg, #FF8C00, #FF4500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: '#FF8C00',
                filter: 'drop-shadow(0 0 30px rgba(255, 69, 0, 0.6))' /* Stronger Glow */
              }}
            >
              COMING SOON
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-2xl md:text-3xl font-medium max-w-2xl leading-snug mx-auto"
              style={{ color: '#ffffff' }} /* Pure White for max contrast */
            >
              We're building something{' '}
              <span style={{ color: '#FF8C00', fontWeight: 'bold' }}>truly special</span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed mx-auto"
              style={{ color: '#d1d1d1' }} /* Light Grey */
            >
              Our team is working tirelessly to deliver an experience that exceeds all expectations.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex justify-center"
            >
              <motion.button
                onClick={() => navigate('/JoinUs')}
                whileHover={{ scale: 1.05, boxShadow: '0 5px 20px rgba(255, 69, 0, 0.6)' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-3 text-white rounded-full font-semibold shadow-lg transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FF8C00 0%, #FF4500 100%)',
                  boxShadow: '0 5px 15px rgba(255, 69, 0, 0.3)',
                  border: 'none'
                }}
              >
                Join Us
              </motion.button>
            </motion.div>

            {/* 2. FIXED FOOTER TEXT: White, Wide Spacing, and !important to force visibility */}
            <motion.div
              variants={itemVariants}
              className="mt-16 text-sm tracking-[0.2em]" /* WIDE spacing for cinematic look */
              style={{
                color: '#ffffff', 
                textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                opacity: 0.8,
                fontWeight: '600',
                textTransform: 'uppercase'
              }}
            >
              Something big is brewing... be the first to know          
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Projects