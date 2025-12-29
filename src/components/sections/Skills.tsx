import { Section } from '../ui/Section';
import { SkillCard } from '../ui/SkillCard';
import { Brain, Code2, Layout, Terminal } from 'lucide-react';

export function Skills() {
  const skillCategories = [{
    title: 'AI & ML',
    icon: Brain,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP', 'Pandas', 'NumPy']
  }, {
    title: 'Programming',
    icon: Code2,
    skills: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL']
  }, {
    title: 'Web Development',
    icon: Layout,
    skills: ['React.js', 'Tailwind CSS', 'FastAPI', 'REST APIs']
  }, {
    title: 'Tools',
    icon: Terminal,
    skills: ['Git', 'Jupyter', 'VS Code', 'Hugging Face']
  }];

  return (
    <Section id="skills" className="bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">Technical Arsenal</h2>
        <div className="h-2 w-24 bg-[#6366f1] mx-auto rounded-full" />
        <p className="text-slate-500 max-w-2xl mx-auto mt-8 font-medium">
          A comprehensive toolkit for building intelligent systems, from data
          processing to model deployment and frontend integration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.title} {...category} delay={index * 0.1} />
        ))}
      </div>
    </Section>
  );
}