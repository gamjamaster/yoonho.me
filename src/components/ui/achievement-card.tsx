'use client';

import { motion } from 'framer-motion';
import { Achievement } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Trophy, Award, Star, Target } from 'lucide-react';

const categoryIcons = {
  academic: Trophy,
  competition: Award,
  project: Star,
  certification: Award,
  other: Target,
};

const levelColors = {
  local: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
  regional: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  national: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  international: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
};

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const IconComponent = categoryIcons[achievement.category];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start">
              <div className="text-gray-600 dark:text-gray-400 mt-1 mr-4">
                <IconComponent className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[achievement.level]}`}>
                {achievement.level.charAt(0).toUpperCase() + achievement.level.slice(1)}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm capitalize">
                {achievement.category}
              </span>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{new Date(achievement.date).toLocaleDateString()}</span>
          </div>

          {achievement.details && achievement.details.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Details
              </h4>
              <ul className="space-y-2">
                {achievement.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}