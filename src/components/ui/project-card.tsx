'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="text-gray-900 dark:text-white">{project.title}</span>
            <div className="flex gap-2">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  className="border-gray-300 dark:border-gray-600"
                >
                  <Github className="w-4 h-4" />
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="border-gray-300 dark:border-gray-600"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col">
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Technologies Used
            </h4>
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

          <div className="mt-auto">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.slice(0, 3).map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                >
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
              {project.features.length > 3 && (
                <li className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  +{project.features.length - 3} more features
                </li>
              )}
            </ul>
          </div>

          {project.id === 'study-habit-tracker' && (
            <div className="mt-4">
              <Link href={`/projects/${project.id}`}>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                  View Details
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}