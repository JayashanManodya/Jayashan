import { Section } from '../ui/Section';
import { SkillCard } from '../ui/SkillCard';
import { Brain, Code2, Layout, Terminal } from 'lucide-react';
export function Skills() {
  const skillCategories = [{
    title: 'AI & ML',
    icon: Brain,
    color: 'cyan' as const,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP', 'Pandas', 'NumPy']
  }, {
    title: 'Programming',
    icon: Code2,
    color: 'purple' as const,
    skills: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL']
  }, {
    title: 'Web Development',
    icon: Layout,
    color: 'blue' as const,
    skills: ['React.js', 'Tailwind CSS', 'FastAPI', 'REST APIs']
  }, {
    title: 'Tools & Platforms',
    icon: Terminal,
    color: 'green' as const,
    skills: ['Git', 'Jupyter', 'VS Code', 'Hugging Face']
  }];
  return <Section id="skills" className="bg-black/20">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Technical <span className="text-purple-400">Arsenal</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        A comprehensive toolkit for building intelligent systems, from data
        processing to model deployment and frontend integration.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillCategories.map((category, index) => <SkillCard key={category.title} {...category} delay={index * 0.1} />)}
    </div>
  </Section>;
}