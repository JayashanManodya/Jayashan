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
    label: 'Neural Networks',
    desc: 'Building deep learning architectures'
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
              I am a final year undergraduate student specializing in Artificial
              Intelligence and Machine Learning. My journey began with a
              curiosity about how machines perceive the world, which led me down
              the rabbit hole of deep learning and computer vision.
            </p>
            <p>
              Currently, I'm focused on scalable AI solutions and making complex
              models accessible through intuitive web interfaces. I believe in
              the power of open source and actively contribute to the developer
              community.
            </p>
            <p>
              When I'm not training models, you can find me participating in
              hackathons, reading sci-fi novels, or exploring the latest
              developments in generative AI.
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