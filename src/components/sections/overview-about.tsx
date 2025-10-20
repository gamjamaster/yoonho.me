'use client';

import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '@/lib/data/portfolio';
import { Button } from '@/components/ui/button';
import { GraduationCap, MapPin, Mail, Github, Linkedin } from 'lucide-react';

const iconMap = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
};

export function OverviewAbout() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
                <img 
                  src="/profile.webp" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Computer Science Student</h3>
              <p className="text-gray-100">Passionate about software development and AI</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <GraduationCap className="w-5 h-5 mr-3 text-gray-600" />
                <span>
                  <strong>{personalInfo.major}</strong> - {personalInfo.year}
                </span>
              </div>
              
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-gray-600" />
                <span>{personalInfo.university}</span>
              </div>
              
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-gray-600" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                  return (
                    <Button
                      key={link.name}
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(link.url, '_blank')}
                      className="border-gray-300 dark:border-gray-600"
                    >
                      {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                      {link.name}
                    </Button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}