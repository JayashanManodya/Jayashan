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
    <Section id="about" className="bg-white dark:bg-[#030014] transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">About Me</h2>
        <div className="h-2 w-24 bg-brand-primary mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg"
        >
          <p className="font-semibold text-slate-900 dark:text-white">
            I am Jayashan Manodya, an undergraduate student at the Sri Lanka Institute of Information Technology (SLIIT) specializing in Artificial Intelligence. Originally from Ratnapura, Sri Lanka. I am driven by a passion for solving complex problems through technology.          </p>
          <p>
            My academic journey has helped me build a solid foundation in programming, data structures, and software engineering. I particularly enjoy hands-on projects where I can experiment with emerging AI tools and bridge the gap between theoretical knowledge and practical application.          </p>
          <p>
            Beyond my studies , I am a curious and motivated individual committed to continuous learning. I value teamwork and creativity, and I am eager to leverage my skills to grow into a versatile IT professional."
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
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/5 transition-all group"
            >
              <item.icon className="w-10 h-10 text-brand-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                {item.label}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}