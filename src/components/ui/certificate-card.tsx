'use client';

import { motion } from 'framer-motion';
import { Certificate } from '@/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Award, ExternalLink } from 'lucide-react';

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
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
          <CardTitle className="flex items-start justify-between">
            <div className="flex items-start">
              <Award className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-1 mr-2 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {certificate.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {certificate.issuer}
                </p>
              </div>
            </div>
            {certificate.credentialUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(certificate.credentialUrl, '_blank')}
                className="border-gray-300 dark:border-gray-600"
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            )}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Issued: {new Date(certificate.issueDate).toLocaleDateString()}</span>
            {certificate.expiryDate && (
              <span className="ml-4">
                Expires: {new Date(certificate.expiryDate).toLocaleDateString()}
              </span>
            )}
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {certificate.description}
          </p>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Skills Covered
            </h4>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}