import { Section } from '../ui/Section';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Mail, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const socialLinks = [
    { Icon: Github, href: 'https://github.com/JayashanManodya' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/jayashanmanodya/' },
    { Icon: Facebook, href: 'https://www.facebook.com/jayashan.manodya' },
    { Icon: Instagram, href: 'https://www.instagram.com/jayashan.manodya/' }
  ];

  return (
    <Section id="contact" className="bg-white dark:bg-[#030014] transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Let's Connect</h2>
        <div className="h-2 w-24 bg-[#6366f1] mx-auto rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-600 dark:text-slate-400 mb-12 leading-relaxed text-lg font-medium">
            I'm currently looking for internship opportunities in AI/ML and Full
            Stack Development. Whether you have a question, a project idea, or
            just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-8">
            <a href="mailto:kpjmp28@gmail.com" className="group flex items-center p-6 rounded-[32px] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-[#6366f1]/30 hover:shadow-xl hover:shadow-[#6366f1]/5 transition-all duration-300">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 text-[#6366f1] group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm mr-6">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-black tracking-widest text-slate-400 dark:text-slate-500 mb-1">Email Me</p>
                <p className="text-xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-[#6366f1] transition-colors">kpjmp28@gmail.com</p>
              </div>
            </a>

            <div className="pt-8">
              <p className="text-xs font-black tracking-widest text-slate-400 dark:text-slate-500 mb-6 ml-1">
                Social Media
              </p>
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-500 hover:bg-[#6366f1] hover:text-white hover:shadow-lg hover:shadow-[#6366f1]/20 border border-slate-100 dark:border-slate-800 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 bg-slate-50 dark:bg-slate-900/50 p-10 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm"
          onSubmit={e => e.preventDefault()}
        >
          <Input label="Name" placeholder="Jayashan Manodya" />
          <Input label="Email" type="email" placeholder="kpjmp28@gmail.com" />
          <Textarea label="Message" placeholder="Tell me about your project or opportunity..." />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#6366f1] hover:bg-[#5850ec] text-white py-6 rounded-[24px] text-lg font-black tracking-widest shadow-lg shadow-[#6366f1]/20 transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      <footer className="mt-32 pt-12 border-t border-slate-100 dark:border-slate-800 text-center">
        <p className="text-slate-400 dark:text-slate-500 font-bold tracking-widest text-xs">© 2025 Jayashan Manodya. All rights reserved.</p>
      </footer>
    </Section>
  );
}