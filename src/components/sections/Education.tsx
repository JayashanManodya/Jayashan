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
  }, {
    degree: 'G.C.E. Ordinary Level (O/L)',
    institution: 'Prince College, Ratnapura',
    period: '2019',
    location: 'Ratnapura, Sri Lanka',
    description: 'Successfully completed the G.C.E. Ordinary Level examination with high academic standing, establishing a strong foundation across core subjects including Mathematics and Science.'
  }];

  return (
    <Section id="education" className="bg-white dark:bg-[#030014] transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Academic Journey</h2>
        <div className="h-2 w-24 bg-[#6366f1] mx-auto rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-0">
          {education.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}