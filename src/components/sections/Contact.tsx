import { useState } from 'react';
import { Section } from '../ui/Section';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Mail, Github, Linkedin, Facebook, Instagram, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/JayashanManodya' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/jayashanmanodya/' },
    { Icon: Facebook, href: 'https://www.facebook.com/jayashan.manodya' },
    { Icon: Instagram, href: 'https://www.instagram.com/jayashan.manodya/' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setErrorMessage((error as Error).message);
    }
  };

  return (
    <Section id="contact" className="transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Let's Connect</h2>
        <div className="h-2 w-24 bg-brand-primary mx-auto rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-600 dark:text-slate-400 mb-12 leading-relaxed text-lg font-normal">
            I'm currently looking for internship opportunities in AI/ML and Full
            Stack Development. Whether you have a question, a project idea, or
            just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-8">
            <a href="mailto:kpjayashan@gmail.com" className="group flex items-center p-6 rounded-[32px] bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 text-brand-primary border border-slate-200 dark:border-slate-800 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm mr-6">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 mb-1 uppercase">Email Me</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-brand-primary transition-colors">kpjayashan@gmail.com</p>
              </div>
            </a>

            <div className="pt-8">
              <p className="text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 mb-6 ml-1 uppercase">
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
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-500 hover:bg-brand-primary hover:text-white hover:shadow-lg hover:shadow-brand-primary/20 border border-slate-200 dark:border-slate-800 transition-all duration-300"
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
          className="relative space-y-6 bg-slate-50 dark:bg-slate-900/50 p-10 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm"
          onSubmit={handleSubmit}
        >
          <Input 
            label="Name" 
            placeholder="Jayashan Manodya" 
            required 
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            disabled={status === 'loading'}
          />
          <Input 
            label="Email" 
            type="email" 
            placeholder="kpjmp28@gmail.com" 
            required
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            disabled={status === 'loading'}
          />
          <Textarea 
            label="Message" 
            placeholder="Tell me about your project or opportunity..." 
            required
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            disabled={status === 'loading'}
          />
          
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
              whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
              disabled={status === 'loading'}
              className={`
                w-full py-6 rounded-[24px] text-lg font-bold tracking-widest transition-all duration-300 flex items-center justify-center gap-3
                ${status === 'success' 
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' 
                  : status === 'error'
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/20'
                  : 'bg-brand-primary hover:bg-brand-primary-hover text-white shadow-lg shadow-brand-primary/20'
                }
                disabled:opacity-70 disabled:cursor-not-allowed
              `}
            >
              {status === 'loading' ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 className="w-6 h-6" />
                  Message Sent!
                </>
              ) : status === 'error' ? (
                <>
                  <AlertCircle className="w-6 h-6" />
                  Retry Send
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
            
            <AnimatePresence>
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-center text-red-500 font-semibold text-sm"
                >
                  {errorMessage || 'Something went wrong. Please try again.'}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>

      <footer className="mt-32 pt-12 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-brand-primary font-bold text-1xl mb-4 tracking-wide">තෙරුවන් සරණයි...!</p>
        <p className="text-slate-400 dark:text-slate-500 font-semibold tracking-widest text-xs uppercase">© 2025 Jayashan Manodya. All rights reserved.</p>
      </footer>
    </Section>
  );
}