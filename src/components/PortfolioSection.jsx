import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback, useRef } from 'react';
import { ExternalLink, Github, Eye, X } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollPositionRef = useRef(0);

  const categories = ['All', 'Web Development', 'UI/UX Design', 'Mobile App', 'Branding'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with React & Node.js',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Banking App Design',
      category: 'UI/UX Design',
      description: 'Clean and intuitive banking mobile app interface',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Figma', 'UI/UX', 'Mobile'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Restaurant Website',
      category: 'Web Development',
      description: 'Responsive restaurant website with online ordering',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Vue.js', 'CSS3', 'JavaScript'],
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Fitness Mobile App',
      category: 'Mobile App',
      description: 'Workout tracking app with social features',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'Firebase', 'Redux'],
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Tech Startup Branding',
      category: 'Branding',
      description: 'Complete brand identity for tech startup',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Brand Identity', 'Logo Design', 'Guidelines'],
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Portfolio Dashboard',
      category: 'UI/UX Design',
      description: 'Admin dashboard for portfolio management',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Dashboard', 'Analytics', 'Charts'],
      github: '#',
      demo: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Disable scroll function
  const disableScroll = useCallback(() => {
    // Simpan posisi scroll saat ini
    scrollPositionRef.current = window.pageYOffset;
    
    // Lock body scroll dengan multiple methods
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPositionRef.current}px`;
    document.body.style.width = '100%';
    document.documentElement.style.overflow = 'hidden';
  }, []);

  // Enable scroll function
  const enableScroll = useCallback(() => {
    // Restore body scroll
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.documentElement.style.overflow = '';
    
    // Restore scroll position
    window.scrollTo(0, scrollPositionRef.current);
  }, []);

  // Function to open image modal
  const openImageModal = useCallback((project) => {
    setSelectedImage(project);
    disableScroll();
  }, [disableScroll]);

  // Function to close image modal
  const closeImageModal = useCallback(() => {
    setSelectedImage(null);
    enableScroll();
  }, [enableScroll]);

  // Handle escape key to close modal
  useEffect(() => {
    if (!selectedImage) return;

    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeImageModal();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key !== 'Escape' && e.key !== 'Tab') {
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, closeImageModal]);

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (selectedImage) {
        enableScroll();
      }
    };
  }, [selectedImage, enableScroll]);

  // Handle backdrop click
  const handleBackdropClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      closeImageModal();
    }
  }, [closeImageModal]);

  // Handle close button click
  const handleCloseClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    closeImageModal();
  }, [closeImageModal]);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-lg">My Work</span>
          <h2 className="text-4xl font-bold font-serif text-gray-900 mt-2 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my recent work spanning web development, UI/UX design, 
            and branding projects that showcase my skills and creativity.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-2"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-3 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-base whitespace-nowrap ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary hover:text-white shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Action Buttons Overlay - Unified layout untuk mobile dan desktop */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center justify-center space-x-3">
                    <motion.button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openImageModal(project);
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-gray-900 p-2.5 sm:p-3 rounded-full hover:bg-primary hover:text-white transition-colors shadow-lg flex items-center justify-center"
                      aria-label="View Image"
                      type="button"
                    >
                      <Eye size={18} className="sm:w-5 sm:h-5" />
                    </motion.button>
                    
                    <motion.a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-gray-900 p-2.5 sm:p-3 rounded-full hover:bg-primary hover:text-white transition-colors shadow-lg flex items-center justify-center"
                      aria-label="View Code"
                    >
                      <Github size={18} className="sm:w-5 sm:h-5" />
                    </motion.a>
                    
                    <motion.a
                      href={project.demo}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-gray-900 p-2.5 sm:p-3 rounded-full hover:bg-primary hover:text-white transition-colors shadow-lg flex items-center justify-center"
                      aria-label="External Link"
                    >
                      <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <div className="mb-2">
                  <span className="text-xs sm:text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-primary text-primary px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-sm sm:text-base"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence mode="wait">
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center"
            onClick={handleBackdropClick}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              padding: '1rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              className="relative w-full max-w-5xl max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              style={{
                margin: '0 auto'
              }}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseClick}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[10] bg-black/60 text-white p-2 sm:p-3 rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm flex items-center justify-center"
                aria-label="Close modal"
                type="button"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>

              {/* Modal Content */}
              <div className="relative flex flex-col h-full max-h-[95vh]">
                {/* Image Section */}
                <div className="relative flex-shrink-0">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-cover"
                    style={{ 
                      display: 'block',
                      userSelect: 'none',
                      pointerEvents: 'none'
                    }}
                    draggable={false}
                  />
                </div>
                
                {/* Content Section */}
                <div className="flex-1 overflow-y-auto bg-white p-4 sm:p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-primary px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white">
                      {selectedImage.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-gray-900">
                    {selectedImage.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    {selectedImage.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedImage.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs sm:text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <motion.a
                      href={selectedImage.github}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-3 rounded-lg transition-colors text-sm sm:text-base font-medium"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a
                      href={selectedImage.demo}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg transition-colors text-sm sm:text-base font-medium"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;