'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data/portfolio';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Code, Database, Globe, Cpu } from 'lucide-react';
import Link from 'next/link';

const skillIcons: Record<string, React.ReactNode> = {
  'C++': <Cpu className="w-8 h-8" />,
  'ASP.NET': <Globe className="w-8 h-8" />,
  'Java': <Code className="w-8 h-8" />,
  'TypeScript': <Code className="w-8 h-8" />,
  'JavaScript': <Code className="w-8 h-8" />,
  'Python': <Database className="w-8 h-8" />,
};

export function FeaturedSkills() {
  const primarySkills = skills.filter(skill => skill.category === 'primary');
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Core Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My primary programming languages and technologies with proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {primarySkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-gray-600 dark:text-gray-400 mb-4 flex justify-center">
                {skillIcons[skill.name] || <Code className="w-8 h-8" />}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {skill.name}
              </h3>
              <div className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-4">
                {skill.level}%
              </div>
              <ProgressBar value={skill.level} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/skills">
            <Button 
              variant="outline"
              size="lg"
              className="border-gray-300 dark:border-gray-600"
            >
              View All Skills
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}