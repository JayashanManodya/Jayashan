import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Section } from '../ui/Section';

const certifications = [
    {
        name: "Google UX Design Professional Certificate",
        issuer: "Coursera / Google",
        year: "2023"
    },
    {
        name: "Complete Web Design Course",
        issuer: "Udemy",
        year: "2022"
    },
    {
        name: "UI/UX Specialization",
        issuer: "Interaction Design Foundation",
        year: "2022"
    }
];

export function Certifications() {
    return (
        <Section id="certifications" className="bg-slate-50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 italic uppercase tracking-tighter">Certifications</h2>
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
                        className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all border border-slate-100 group flex flex-col"
                    >
                        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300">
                            <Award size={32} className="text-[#6366f1] group-hover:text-white" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-2 leading-none italic uppercase tracking-tight group-hover:text-[#6366f1] transition-colors">{cert.name}</h3>
                        <p className="text-slate-500 font-bold italic uppercase tracking-widest text-sm mb-6">{cert.issuer}</p>

                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                            <span className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] italic">{cert.year}</span>
                            <button className="text-[#6366f1] p-3 rounded-full hover:bg-indigo-50 transition-all">
                                <ExternalLink size={20} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}

