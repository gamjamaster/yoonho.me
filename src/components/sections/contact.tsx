'use client';

import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '@/lib/data/portfolio';
import { Button } from '@/components/ui/button';
import { Mail, Github, Send } from 'lucide-react';

export function ContactSection() {
  const iconMap = {
    mail: Mail,
    github: Github,
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations. 
            Feel free to reach out if you&apos;d like to discuss projects, internships, or just connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Whether you&apos;re looking for a passionate computer science student for an internship, 
                want to collaborate on a project, or simply want to say hello, I&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.url}
                      target={link.name === 'Email' ? undefined : '_blank'}
                      rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
                      className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors group"
                    >
                      <div className="text-blue-600 mr-4 group-hover:scale-110 transition-transform">
                        {IconComponent && <IconComponent className="w-6 h-6" />}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {link.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {link.name === 'Email' ? personalInfo.email : '@gamjamaster'}
                        </p>
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg text-white"
          >
            <div className="text-center">
              <Send className="w-12 h-12 mx-auto mb-6 opacity-90" />
              <h3 className="text-xl font-semibold mb-4">
                Ready to work together?
              </h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                I&apos;m currently seeking internship opportunities and open to discussing 
                exciting projects in software development, AI, and web technologies.
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100"
                onClick={() => window.location.href = `mailto:${personalInfo.email}`}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-gray-500 dark:text-gray-400">
            © 2025 {personalInfo.name}. Built with Next.js and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}