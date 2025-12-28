import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
export function Contact() {
  return <Section id="contact">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's <span className="text-purple-400">Connect</span>
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I'm currently looking for internship opportunities in AI/ML and Full
            Stack Development. Whether you have a question, a project idea, or
            just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <a href="mailto:hello@example.com" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
              <div className="p-3 rounded-lg bg-white/5 mr-4">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">hello@example.com</p>
              </div>
            </a>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-gray-500 mb-4">
                Find me on social media
              </p>
              <div className="flex gap-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => <a key={i} href="#" className="p-3 rounded-lg bg-white/5 text-gray-400 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_15px_rgba(0,217,255,0.4)] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </a>)}
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10" onSubmit={e => e.preventDefault()}>
          <Input label="Name" placeholder="John Doe" />
          <Input label="Email" type="email" placeholder="john@example.com" />
          <Textarea label="Message" placeholder="Tell me about your project..." />
          <Button className="w-full" size="lg">
            Send Message
          </Button>
        </form>
      </div>

      <footer className="mt-24 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© 2024 AI Portfolio. Built with React & Tailwind CSS.</p>
      </footer>
    </Section>;
}