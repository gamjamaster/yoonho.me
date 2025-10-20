'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data/portfolio';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Github, ExternalLink, ArrowLeft, Target, Users, Lightbulb, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function StudyHabitTrackerPage() {
  const project = projects.find(p => p.id === 'study-habit-tracker');

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  const sections = [
    {
      id: 'overview',
      title: 'Project Overview',
      icon: <Target className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The Study-Habit-Tracker is a comprehensive web application designed to help students monitor, 
            analyze, and improve their study habits. This project represents my journey into full-stack 
            web development, combining modern frontend technologies with robust backend solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The application provides students with tools to track study sessions, visualize progress, 
            set goals, and maintain consistent study schedules. It features an intuitive interface 
            that makes habit tracking both simple and engaging.
          </p>
        </div>
      )
    },
    {
      id: 'role',
      title: 'My Role & Responsibilities',
      icon: <Users className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            As the sole developer of this project, I was responsible for the entire development lifecycle:
          </p>
          <ul className="space-y-2">
            {[
              'Frontend development using React.js with modern hooks and state management',
              'Backend architecture design and implementation with Node.js',
              'Database design and optimization for user data and study sessions',
              'User interface design with focus on accessibility and user experience',
              'Performance optimization and responsive design implementation',
              'Testing, debugging, and deployment processes'
            ].map((responsibility, idx) => (
              <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: 'process',
      title: 'Development Process',
      icon: <Lightbulb className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The development process followed modern software development practices:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Planning & Design</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  User research and requirement analysis
                </li>
                <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Wireframing and UI/UX design
                </li>
                <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Database schema design
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Implementation</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Agile development methodology
                </li>
                <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Version control with Git
                </li>
                <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Continuous testing and iteration
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'results',
      title: 'Results & Impact',
      icon: <TrendingUp className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The Study-Habit-Tracker successfully demonstrates my ability to create full-stack web applications 
            that solve real-world problems. The project achieved several key outcomes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Achievement</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Successfully implemented a complete web application with modern technologies and best practices.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">User Experience</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Created an intuitive and responsive interface that enhances user productivity and engagement.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Learning Outcome</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Gained comprehensive understanding of full-stack development and modern web technologies.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="outline" className="mb-6 border-gray-300 dark:border-gray-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                {project.description}
              </p>
            </div>
            <div className="flex gap-4 mt-6 md:mt-0">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  className="border-gray-300 dark:border-gray-600"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
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

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="text-gray-600 dark:text-gray-400 mr-3">
                      {section.icon}
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {section.content}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>Key Features & Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}