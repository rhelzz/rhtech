import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Award, Coffee } from 'lucide-react';
import { useEffect } from 'react';

const AboutSection = () => {
  useEffect(() => {
    // Initialize AOS if needed
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true
      });
    }
  }, []);

  const skills = [
    { icon: Code, name: 'Frontend Development', description: 'React, Vue, Angular' },
    { icon: Palette, name: 'UI/UX Design', description: 'Figma, Adobe Creative Suite' },
    { icon: Zap, name: 'Performance', description: 'Fast, optimized websites' },
    { icon: Users, name: 'Collaboration', description: 'Team player & leader' },
    { icon: Award, name: 'Quality', description: 'High standards & attention to detail' },
    { icon: Coffee, name: 'Passion', description: 'Love what I do everyday' }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-primary/30">👨‍💻</div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-lg p-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-semibold text-lg"
              >
                About Me
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl font-bold font-serif text-gray-900 mt-2 mb-6"
              >
                Passionate Developer & Designer
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-4 text-gray-600 leading-relaxed"
              >
                <p>
                  Hi! I'm a creative developer with a passion for building beautiful, 
                  functional web experiences. With over 3 years of experience in the 
                  industry, I specialize in creating modern, responsive websites and 
                  applications that not only look great but perform exceptionally.
                </p>
                <p>
                  I believe that great design and clean code go hand in hand. My approach 
                  combines creativity with technical expertise to deliver solutions that 
                  exceed expectations and drive results for my clients.
                </p>
              </motion.div>
            </div>

            {/* Skills Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                    <skill.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{skill.name}</h3>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Let's Work Together
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;