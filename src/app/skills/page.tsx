import { skills } from '@/lib/data/portfolio';
import { SkillCard } from '@/components/ui/skill-card';
import { Navigation } from '@/components/layout/navigation';

export default function SkillsPage() {
  const primarySkills = skills.filter(skill => skill.category === 'primary');
  const secondarySkills = skills.filter(skill => skill.category === 'secondary');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h1>
          <div className="w-24 h-1 bg-gray-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Primary Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {primarySkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Secondary Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondarySkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </section>
        </div>
        </div>
      </div>
    </div>
  );
}