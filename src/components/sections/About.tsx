import { Section } from '../ui/Section';
import { Brain, Code, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

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
    desc: 'Engineering robust systems through clean code'
  }, {
    icon: Globe,
    label: 'AI Integration',
    desc: 'Deploying models to web applications'
  }];

  return (
    <Section id="about" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">About Me</h2>
        <div className="h-2 w-24 bg-[#6366f1] mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-slate-600 leading-relaxed text-lg"
        >
          <p className="font-medium text-slate-900">
            I am an undergraduate student at the Sri Lanka Institute of Information Technology (SLIIT), specializing in Artificial Intelligence.
          </p>
          <p>
            My academic journey has helped me build a solid foundation in programming, data structures, and software engineering. I enjoy working on hands-on projects, experimenting with emerging tools, and applying theoretical knowledge to practical applications.
          </p>
          <p>
            Beyond academics, I am motivated, curious, and always eager to improve my skills. I value teamwork, creativity, and problem-solving, and I aim to grow into a skilled IT professional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {interests.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#6366f1]/30 hover:shadow-xl hover:shadow-[#6366f1]/5 transition-all group"
            >
              <item.icon className="w-10 h-10 text-[#6366f1] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">
                {item.label}
              </h3>
              <p className="text-sm text-slate-500 font-medium leading-snug">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}