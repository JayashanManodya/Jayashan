import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
interface TimelineItemProps {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  index: number;
}
export function TimelineItem({
  degree,
  institution,
  period,
  location,
  description,
  index
}: TimelineItemProps) {
  return <motion.div initial={{
    opacity: 0,
    x: -20
  }} whileInView={{
    opacity: 1,
    x: 0
  }} viewport={{
    once: true
  }} transition={{
    delay: index * 0.2
  }} className="relative pl-8 pb-12 border-l border-white/10 last:pb-0">
      <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(0,217,255,0.5)]" />

      <div className="glass p-6 rounded-xl hover:bg-white/5 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
          <h3 className="text-xl font-bold text-white">{degree}</h3>
          <span className="flex items-center text-sm text-cyan-400 bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-500/20 w-fit">
            <Calendar className="w-3 h-3 mr-2" />
            {period}
          </span>
        </div>

        <div className="flex items-center text-gray-400 mb-4">
          <span className="font-medium text-purple-400 mr-4">
            {institution}
          </span>
          <span className="flex items-center text-sm">
            <MapPin className="w-3 h-3 mr-1" />
            {location}
          </span>
        </div>

        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>;
}