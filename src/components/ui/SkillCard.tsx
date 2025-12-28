import React from 'react';
import { motion } from 'framer-motion';
import { BoxIcon } from 'lucide-react';
interface SkillCardProps {
  title: string;
  skills: string[];
  icon: BoxIcon;
  color: 'cyan' | 'purple' | 'blue' | 'green';
  delay?: number;
}
export function SkillCard({
  title,
  skills,
  icon: Icon,
  color,
  delay = 0
}: SkillCardProps) {
  const colorClasses = {
    cyan: 'border-cyan-500/20 hover:border-cyan-500/50 shadow-cyan-500/5 hover:shadow-cyan-500/20',
    purple: 'border-purple-500/20 hover:border-purple-500/50 shadow-purple-500/5 hover:shadow-purple-500/20',
    blue: 'border-blue-500/20 hover:border-blue-500/50 shadow-blue-500/5 hover:shadow-blue-500/20',
    green: 'border-emerald-500/20 hover:border-emerald-500/50 shadow-emerald-500/5 hover:shadow-emerald-500/20'
  };
  const iconColors = {
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    blue: 'text-blue-400',
    green: 'text-emerald-400'
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    delay,
    duration: 0.5
  }} whileHover={{
    y: -5
  }} className={`glass p-6 rounded-xl border transition-all duration-300 ${colorClasses[color]}`}>
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-lg bg-white/5 ${iconColors[color]}`}>
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => <span key={index} className="px-3 py-1 text-sm font-medium text-gray-300 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors">
            {skill}
          </span>)}
      </div>
    </motion.div>;
}