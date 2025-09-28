import { motion } from 'framer-motion';
import { Code2, Smartphone, Palette, Globe, Zap, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Vue, and Node.js.',
      features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Modern Frameworks']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps that work seamlessly on both iOS and Android devices.',
      features: ['React Native', 'Flutter', 'Native Performance', 'App Store Deployment']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that provide exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: Globe,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: ['Shopping Cart', 'Payment Gateway', 'Admin Panel', 'Analytics']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your website and improve user experience with advanced optimization techniques.',
      features: ['Code Splitting', 'Image Optimization', 'Caching', 'CDN Setup']
    },
    {
      icon: Shield,
      title: 'Maintenance & Support',
      description: '24/7 support and maintenance to keep your digital products running smoothly.',
      features: ['Bug Fixes', 'Security Updates', 'Feature Updates', 'Technical Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-lg">Services</span>
          <h2 className="text-4xl font-bold font-serif text-gray-900 mt-2 mb-6">
            What I Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer a comprehensive range of digital services to help bring your ideas to life 
            and grow your business online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Service Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors duration-300"
              >
                <service.icon size={32} className="text-primary" />
              </motion.div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-serif text-gray-900 mb-4">
              My Work Process
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to deliver exceptional results every time
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your needs, goals, and target audience'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Creating detailed project roadmap and timeline'
              },
              {
                step: '03',
                title: 'Design & Development',
                description: 'Bringing your vision to life with clean code'
              },
              {
                step: '04',
                title: 'Launch & Support',
                description: 'Deployment and ongoing maintenance support'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-xl font-bold mb-4">
                  {process.step}
                </div>
                
                {/* Step Content */}
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.description}</p>

                {/* Connector Line (hidden on last item) */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2 -z-10">
                    <div className="absolute inset-0 bg-primary transform origin-left scale-x-0 animate-pulse"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how I can help bring your ideas to life
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;