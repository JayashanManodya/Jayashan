import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Quote } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export function Blogs() {
    return (
        <Section id="blogs" className="transition-colors duration-300">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Blogs</h2>
                <div className="h-2 w-24 bg-brand-primary mx-auto rounded-full" />
                <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Sharing my thoughts, insights, and lessons learned on technology, artificial intelligence, and software engineering.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                {/* Medium CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-[32px] overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group"
                >
                    <div className="flex-1">
                        <div className="flex items-center gap-3 text-brand-primary mb-4">
                            <BookOpen className="w-6 h-6" />
                            <span className="font-bold tracking-wider text-sm uppercase">Medium Blog</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                            Read my latest articles on Medium
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mb-0">
                            I regularly publish technical articles and thought pieces. Follow along to stay updated with the latest in AI and development.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Button
                            size="lg"
                            className="bg-brand-primary hover:bg-brand-primary-hover text-white rounded-full px-8 py-6 text-lg transition-all duration-300 shadow-[0_0_20px_var(--brand-primary-glow)] group-hover:scale-105 active:scale-95"
                            onClick={() => window.open('https://medium.com/@kpjmp28', '_blank')}
                        >
                            <ExternalLink className="w-5 h-5 mr-3" />
                            Visit Medium
                        </Button>
                    </div>

                    {/* Subtle Background Elements */}
                    <div className="absolute top-[-10%] right-[-5%] opacity-5 dark:opacity-10 group-hover:rotate-12 transition-transform duration-700">
                        <Quote size={200} className="text-brand-primary" />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
