import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Section } from '../ui/Section';

const certifications = [
    {
        name: "AI/ML Engineer - Stage 1",
        issuer: "SLIIT",
        year: "2025",
        link: "https://drive.google.com/file/d/1g-x9ne8bCMCBhegS9pWykP4KZiTWGSDZ/view?usp=sharing"
    },
    {
        name: "Programming in Python - 1",
        issuer: "CODL - University of Moratuwa",
        year: "2025",
        link: "https://drive.google.com/file/d/13nM0wpkaVtN3hZSbMlvmKrv62qJW_SZJ/view?usp=sharing"
    },
    {
        name: "Web Development - 1",
        issuer: "CODL - University of Moratuwa",
        year: "2025",
        link: "https://drive.google.com/file/d/14irbPMYuKXrJ3WnKt3GYj5yCkN86mku2/view?usp=sharing"
    },
    {
        name: "Fundamentals of Digital Marketing",
        issuer: "Google - Digital Garage",
        year: "2024",
        link: "https://drive.google.com/file/d/1ZvcEdlpWjspez9VKC9UpODrseOBKFUUP/view?usp=sharing"
    },
    {
        name: "Arduino CodeCamp Workshop",
        issuer: "CODECAMP",
        year: "2024",
        link: "https://drive.google.com/file/d/10y6OnhET-q0XGHTemL_PedWBf8yclfyB/view?usp=sharing"
    }
];

export function Certifications() {
    return (
        <Section id="certifications" className="bg-slate-50 dark:bg-[#06001a] transition-colors duration-300">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Certifications</h2>
                <div className="h-2 w-24 bg-brand-primary mx-auto rounded-full" />
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
                        className="bg-white dark:bg-slate-900/50 p-8 rounded-[40px] shadow-sm hover:shadow-2xl hover:shadow-brand-primary/10 transition-all border border-slate-200 dark:border-slate-800 group flex flex-col"
                    >
                        <div className="w-16 h-16 bg-brand-primary/10 dark:bg-brand-primary/20 rounded-2xl flex items-center justify-center mb-8 border border-brand-primary/5 dark:border-brand-primary/20 group-hover:bg-brand-primary transition-all duration-300">
                            <Award size={32} className="text-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight tracking-tight">{cert.name}</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-semibold tracking-wider text-sm mb-12 uppercase">{cert.issuer}</p>

                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                            <span className="text-sm font-bold text-slate-300 dark:text-slate-600 tracking-wider font-outfit">{cert.year}</span>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-primary hover:scale-110 transition-all duration-300"
                            >
                                <ExternalLink size={24} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}

