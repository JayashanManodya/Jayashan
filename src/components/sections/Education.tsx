import React from 'react';
import { Section } from '../ui/Section';
import { TimelineItem } from '../ui/TimelineItem';
export function Education() {
  const education = [{
    degree: 'BSc (Hons) in IT Specialising in Artificial Intelligence',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: '2024 – Present',
    location: 'Malabe, Sri Lanka',
    description: 'Undergraduate specializing in Artificial Intelligence. Gaining strong foundations in programming, data structures, software engineering, and AI-related concepts. Actively engaged in academic projects and hands-on learning in modern computing technologies.'

  }, {
    degree: 'G.C.E. Advanced Level (A/L)',
    institution: 'Prince College, Ratnapura',
    period: '2022',
    location: 'Ratnapura, Sri Lanka',
    description: 'Completed G.C.E. Advanced Level in the Mathematics stream, including Combined Mathematics, Physics, and Information & Communication Technology (ICT). Built a strong foundation in analytical thinking, problem-solving, and computing concepts.'
  }];
  return <Section id="education">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Academic <span className="text-blue-400">Journey</span>
      </h2>

      <div className="space-y-0">
        {education.map((item, index) => <TimelineItem key={index} {...item} index={index} />)}
      </div>
    </div>
  </Section>;
}