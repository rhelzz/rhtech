import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    // Parallax effect
    const handleParallax = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        element.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax, { passive: true });
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-16 sm:pt-20 pb-8">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="parallax absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="parallax absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="parallax absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 sm:px-4 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-serif text-gray-900 leading-tight"
          >
            <span className="block">Creative</span>
            <span className="block text-primary">Developer</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
          >
            I craft beautiful digital experiences that merge creativity with functionality. 
            Specializing in modern web development and stunning user interfaces.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPortfolio}
              className="w-full sm:w-auto bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Hire Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-4 sm:space-x-6 mt-6 sm:mt-8"
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 sm:p-3 bg-white rounded-full shadow-md hover:shadow-lg text-gray-600 hover:text-primary transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-400 cursor-pointer"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;