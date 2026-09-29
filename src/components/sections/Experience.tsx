import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Section } from '../ui/Section';

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description?: string;
    points?: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: "AI & Automation Intern",
        company: "Cherry Global AI",
        period: "2026 - Present",
        points: [
            "Designed and engineered AI-powered applications with agentic workflows, automation, and intelligent decision-making.",
            "Implemented and integrated AI solutions using LLMs, RAG, semantic search, and external APIs.",
            "Developed, tested, and deployed AI/MCP solutions across local and cloud environments.",
            "Evaluated and optimized AI systems by testing accuracy, response time, token usage, and overall performance.",
            "Researched WikiLLM-based knowledge systems, focusing on RAG, knowledge retrieval, and AI-powered question answering."
        ]
    },
    {
        title: "Lead Creative Designer",
        company: "Glanz Digital",
        period: "2025 - Present",
        description: "Leading visual design efforts as a remote part-time Lead Creative Designer, responsible for creating impactful visual content and digital assets to support brand identity and marketing objectives."
    },
    {
        title: "Founder & Senior Graphic Designer",
        company: "PIXEL 104",
        period: "2017 - 2022",
        description: "Founded and led a creative design studio delivering high-quality graphic design services, specializing in branding, social media assets, and digital illustrations while managing end-to-end project workflows for an international clientele."
    }
];

export function Experience() {
    return (
        <Section id="experience" className="transition-colors duration-300">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Experiences</h2>
                <div className="h-2 w-24 bg-brand-primary mx-auto rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto space-y-0">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative pl-10 border-l-4 border-slate-200 dark:border-slate-800 group transition-colors pb-16 last:pb-0"
                    >
                        <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white dark:bg-[#030014] border-4 border-brand-primary rounded-full group-hover:scale-125 transition-transform" />
                        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{exp.title}</h3>
                                <span className="text-brand-primary font-semibold text-sm bg-brand-primary/10 dark:bg-brand-primary/20 px-4 py-2 rounded-full tracking-wider">{exp.period}</span>
                            </div>
                            <p className="text-lg font-bold text-brand-primary tracking-wide flex items-center gap-2 mb-4">
                                <Briefcase size={20} /> {exp.company}
                            </p>
                            {exp.description && (
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-normal">{exp.description}</p>
                            )}
                            {exp.points && exp.points.length > 0 && (
                                <ul className="space-y-2.5 max-w-2xl text-slate-600 dark:text-slate-400 font-normal">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}

