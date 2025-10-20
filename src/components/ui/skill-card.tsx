'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Code, Database, Globe, Cpu } from 'lucide-react';

const skillIcons: Record<string, React.ReactNode> = {
  'C++': <Cpu className="w-6 h-6" />,
  'ASP.NET': <Globe className="w-6 h-6" />,
  'Java': <Code className="w-6 h-6" />,
  'TypeScript': <Code className="w-6 h-6" />,
  'JavaScript': <Code className="w-6 h-6" />,
  'Python': <Database className="w-6 h-6" />,
};

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="text-gray-600 dark:text-gray-400 mr-3">
              {skillIcons[skill.name] || <Code className="w-6 h-6" />}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-900 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <ProgressBar value={skill.level} />
            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {skill.category === 'primary' ? 'Core Technology' : 'Supporting Technology'}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}