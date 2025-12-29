import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Section } from '../ui/Section';

const experiences = [
    {
        title: "Product Designer",
        company: "Freelance",
        period: "2023 - Present",
        description: "Creating user-centered designs for various digital products, focusing on mobile apps and web platforms."
    },
    {
        title: "UI/UX Intern",
        company: "Creative Studio",
        period: "2022 - 2023",
        description: "Assisted in designing interfaces and secondary components, gaining experience in design systems and prototyping."
    }
];

export function Experience() {
    return (
        <Section id="experience" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Experience</h2>
                <div className="h-2 w-24 bg-[#6366f1] mx-auto rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative pl-10 border-l-4 border-slate-100 group hover:border-[#6366f1] transition-colors pb-12 last:pb-0"
                    >
                        <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white border-4 border-[#6366f1] rounded-full group-hover:scale-125 transition-transform" />
                        <div className="bg-white p-8 rounded-[32px] border border-slate-50 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{exp.title}</h3>
                                <span className="text-[#6366f1] font-black text-sm bg-indigo-50 px-4 py-2 rounded-full uppercase tracking-wider">{exp.period}</span>
                            </div>
                            <p className="text-lg font-black text-[#6366f1] uppercase tracking-widest flex items-center gap-2 mb-4">
                                <Briefcase size={20} /> {exp.company}
                            </p>
                            <p className="text-slate-600 leading-relaxed max-w-2xl font-medium">{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}

