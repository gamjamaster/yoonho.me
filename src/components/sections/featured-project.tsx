'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data/portfolio';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function FeaturedProject() {
  const featuredProject = projects.find(p => p.id === 'study-habit-tracker');
  
  if (!featuredProject) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Project
          </h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Highlighting my most comprehensive development project that demonstrates full-stack capabilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {featuredProject.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 font-normal">
                    Full-Stack Web Application
                  </p>
                </div>
                <div className="flex gap-3">
                  {featuredProject.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(featuredProject.githubUrl, '_blank')}
                      className="border-gray-300 dark:border-gray-600"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                  {featuredProject.liveUrl && (
                    <Button
                      size="sm"
                      onClick={() => window.open(featuredProject.liveUrl, '_blank')}
                      className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {featuredProject.features.slice(0, 5).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-600 dark:text-gray-300"
                      >
                        <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                    {featuredProject.features.length > 5 && (
                      <li className="text-gray-600 dark:text-gray-400 font-medium">
                        +{featuredProject.features.length - 5} more features
                      </li>
                    )}
                  </ul>

                  <Link href={`/projects/${featuredProject.id}`}>
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                      View Project Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/projects">
            <Button 
              variant="outline"
              size="lg"
              className="border-gray-300 dark:border-gray-600"
            >
              View All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}