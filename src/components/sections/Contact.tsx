import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
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
    <Section id="contact" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Let's Connect</h2>
        <div className="h-2 w-24 bg-[#6366f1] mx-auto rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-600 mb-12 leading-relaxed text-lg font-medium">
            I'm currently looking for internship opportunities in AI/ML and Full
            Stack Development. Whether you have a question, a project idea, or
            just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-8">
            <a href="mailto:kpjmp28@gmail.com" className="group flex items-center p-6 rounded-[32px] bg-slate-50 border border-slate-100 hover:border-[#6366f1]/30 hover:shadow-xl hover:shadow-[#6366f1]/5 transition-all duration-300">
              <div className="p-4 rounded-2xl bg-white text-[#6366f1] group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm mr-6">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Email Me</p>
                <p className="text-xl font-black text-slate-900 tracking-tight group-hover:text-[#6366f1] transition-colors">kpjmp28@gmail.com</p>
              </div>
            </a>

            <div className="pt-8">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 ml-1">
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
                    className="p-4 rounded-2xl bg-slate-50 text-slate-400 hover:bg-[#6366f1] hover:text-white hover:shadow-lg hover:shadow-[#6366f1]/20 border border-slate-100 transition-all duration-300"
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
          className="space-y-6 bg-slate-50 p-10 rounded-[40px] border border-slate-100 shadow-sm"
          onSubmit={e => e.preventDefault()}
        >
          <Input label="Name" placeholder="Jayashan Manodya" />
          <Input label="Email" type="email" placeholder="kpjmp28@gmail.com" />
          <Textarea label="Message" placeholder="Tell me about your project or opportunity..." />
          <Button className="w-full bg-[#6366f1] hover:bg-indigo-700 text-white py-6 rounded-[24px] text-lg font-black uppercase tracking-widest shadow-lg shadow-[#6366f1]/20" size="lg">
            Send Message
          </Button>
        </motion.form>
      </div>

      <footer className="mt-32 pt-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">© 2025 Jayashan Manodya. All rights reserved.</p>
      </footer>
    </Section>
  );
}