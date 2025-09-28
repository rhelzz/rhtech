import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Eye, X } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

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

  // Function to open image modal
  const openImageModal = (project) => {
    setSelectedImage(project);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Function to close image modal
  const closeImageModal = () => {
    setSelectedImage(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Handle escape key to close modal
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeImageModal();
    }
  };

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
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.button
                    onClick={() => openImageModal(project)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                    aria-label="View Image"
                  >
                    <Eye size={20} />
                  </motion.button>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                    aria-label="View Code"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                    aria-label="External Link"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
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
            className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              className="relative max-w-4xl max-h-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeImageModal}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </motion.button>

              {/* Image */}
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-cover"
                />
                
                {/* Image Overlay with Project Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <div className="mb-2">
                    <span className="inline-block bg-primary px-3 py-1 rounded-full text-sm font-medium">
                      {selectedImage.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-200 mb-4">{selectedImage.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedImage.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-white/20 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={selectedImage.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={selectedImage.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-primary hover:bg-primary/90 px-4 py-2 rounded-full transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;