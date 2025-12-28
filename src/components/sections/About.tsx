import React from 'react';
import { Section } from '../ui/Section';
import { Brain, Code, Database, Globe } from 'lucide-react';
export function About() {
  const interests = [{
    icon: Brain,
    label: 'Machine Learning',
    desc: 'Developing algorithms that learn from data'
  }, {
    icon: Database,
    label: 'Data Science',
    desc: 'Extracting insights from complex datasets'
  }, {
    icon: Code,
    label: 'Software Engineering',
    desc: 'Engineering robust systems through clean code and structured design'
  }, {
    icon: Globe,
    label: 'AI Integration',
    desc: 'Deploying models to web applications'
  }];
  return <Section id="about">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p>
            I am an undergraduate student at the Sri Lanka Institute of Information Technology (SLIIT), currently pursuing a B.Sc. (Hons) in Information Technology with a specialization in Artificial Intelligence. I have a strong interest in how intelligent systems can solve real-world problems, and I enjoy continuously learning new technologies that shape the future of computing.
          </p>
          <p>
            My academic journey has helped me build a solid foundation in programming, data structures, software engineering, and AI-related concepts. I enjoy working on hands-on projects, experimenting with emerging tools, and applying theoretical knowledge to practical applications. I am particularly interested in areas such as machine learning, data analysis, and intelligent application development.
          </p>
          <p>
            Beyond academics, I am motivated, curious, and always eager to improve my skills. I value teamwork, creativity, and problem-solving, and I aim to grow into a skilled IT professional who can contribute meaningfully to innovative and impactful technology solutions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {interests.map((item, idx) => <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <item.icon className="w-8 h-8 text-purple-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            {item.label}
          </h3>
          <p className="text-sm text-gray-400">{item.desc}</p>
        </div>)}
      </div>
    </div>
  </Section>;
}