import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Section } from '../ui/Section';

const certifications = [
    {
        name: "AI/ML Engineer - Stage 1",
        issuer: "SLIIT",
        year: "2025"
    },
    {
        name: "Programming in Python - 1",
        issuer: "CODL - University of Moratuwa",
        year: "2025"
    },
    {
        name: "Web Development - 1",
        issuer: "CODL - University of Moratuwa",
        year: "2025"
    },
    {
        name: "Fundamentals of Digital Marketing",
        issuer: "Google - Digital Garage",
        year: "2024"
    },
    {
        name: "Arduino CodeCamp Workshop",
        issuer: "CODECAMP",
        year: "2024"
    }
];

export function Certifications() {
    return (
        <Section id="certifications" className="bg-slate-50 dark:bg-[#06001a] transition-colors duration-300">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Certifications</h2>
                <div className="h-2 w-24 bg-[#6366f1] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="bg-white dark:bg-slate-900/50 p-8 rounded-[40px] shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all border border-slate-100 dark:border-slate-800 group flex flex-col"
                    >
                        <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300">
                            <Award size={32} className="text-[#6366f1] group-hover:text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-none tracking-tight group-hover:text-[#6366f1] transition-colors">{cert.name}</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-semibold tracking-widest text-sm mb-6 uppercase">{cert.issuer}</p>

                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50 dark:border-slate-800">
                            <span className="text-xs font-semibold text-slate-300 dark:text-slate-500 tracking-[0.2em]">{cert.year}</span>
                            <button className="text-[#6366f1] p-3 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all">
                                <ExternalLink size={20} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}

