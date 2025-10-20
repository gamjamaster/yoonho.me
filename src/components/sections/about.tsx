'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data/portfolio';
import { GraduationCap, MapPin, Mail } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
                <img 
                  src="/profile.webp" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Computer Science Student</h3>
              <p className="text-blue-100">Passionate about software development and AI</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <GraduationCap className="w-5 h-5 mr-3 text-blue-600" />
                <span>
                  <strong>{personalInfo.major}</strong> - {personalInfo.year}
                </span>
              </div>
              
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                <span>{personalInfo.university}</span>
              </div>
              
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-600" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Academic Interests</h4>
              <div className="flex flex-wrap gap-2">
                {['Software Development', 'Artificial Intelligence', 'Object-Oriented Programming', 'Web Development'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}