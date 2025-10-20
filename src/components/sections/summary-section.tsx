'use client';

import { motion } from 'framer-motion';
import { certificates, achievements } from '@/lib/data/portfolio';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Trophy, Calendar } from 'lucide-react';
import Link from 'next/link';

export function SummarySection() {
  const recentCertificates = certificates.slice(0, 2);
  const recentAchievements = achievements.slice(0, 2);

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
            Recent Accomplishments
          </h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Latest certifications and achievements demonstrating my commitment to continuous learning and growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Recent Certificates */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-gray-600 dark:text-gray-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Latest Certificates
              </h3>
            </div>
            
            <div className="space-y-4">
              {recentCertificates.map((certificate, index) => (
                <motion.div
                  key={certificate.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {certificate.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {certificate.issuer}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(certificate.issueDate).toLocaleDateString()}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-6">
              <Link href="/certificates">
                <Button 
                  variant="outline"
                  className="w-full border-gray-300 dark:border-gray-600"
                >
                  View All Certificates
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Recent Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Trophy className="w-6 h-6 text-gray-600 dark:text-gray-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Recent Achievements
              </h3>
            </div>
            
            <div className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {achievement.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(achievement.date).toLocaleDateString()}</span>
                        </div>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm capitalize">
                          {achievement.category}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-6">
              <Link href="/achievements">
                <Button 
                  variant="outline"
                  className="w-full border-gray-300 dark:border-gray-600"
                >
                  View All Achievements
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                6
              </div>
              <div className="text-gray-600 dark:text-gray-300">Programming Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                3
              </div>
              <div className="text-gray-600 dark:text-gray-300">Major Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {certificates.length}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Certificates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {achievements.length}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Achievements</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}