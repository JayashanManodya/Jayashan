import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { ProjectCard } from '../ui/ProjectCard';
const allProjects = [{
  title: 'RailLink – Next-Gen Train Scheduling & Booking System',
  description: 'A full-stack railway management platform built with Spring Boot and Thymeleaf to modernize train scheduling and passenger booking. The system features an AI-powered chatbot for real-time assistance, automated email workflows using n8n for e-ticket delivery, and comprehensive admin controls for managing trains, routes, stations, and schedules.',
  tags: [
    'Java',
    'Spring Boot',
    'Spring Security',
    'Spring MVC',
    'Thymeleaf',
    'MySQL',
    'AI Chatbot',
    'n8n',
    'Full Stack'
  ],
  category: 'WEB',
  image: '/projectPhotos/railLink.png',
  githubUrl: 'https://github.com/JayashanManodya/RailLink#',
},
{
  title: 'PlateX',
  description: 'An AI-powered computer vision system that detects and recognizes vehicle license plates from images using YOLOv12 and PaddleOCR. The system includes custom post-processing to format Sri Lankan-style license plates and extract vehicle details such as province, category, and fuel type, with a Flask-based web interface for visualization and CSV export.',
  tags: [
    'Python',
    'Computer Vision',
    'YOLO',
    'PaddleOCR',
    'Flask',
    'OpenCV',
    'Roboflow',
    'OCR'
  ],
  category: 'Computer Vision',
  image: '/projectPhotos/plateX.jpg',
  githubUrl: 'https://github.com/JayashanManodya/PlateX',
}
  , {
  title: 'InkSpire BookStore',
  description: 'A modern online bookstore management system developed using Java EE technologies. The system provides secure user authentication, book inventory management, shopping cart functionality, order processing, and an admin dashboard, using a file-based data storage approach.',
  tags: [
    'Java',
    'Jakarta EE',
    'Servlets',
    'JSP',
    'Maven',
    'Tomcat',
    'OOP',
    'File Handling'
  ],
  category: 'Web',
  image: '/projectPhotos/InkSpire-BookStore.jpg',
  githubUrl: '#',
},
{
  title: 'Automated Room Comfort Control System',
  description: 'An IoT-based smart room automation system that monitors and controls temperature, humidity, and lighting using real-time sensor data. Built with an ESP8266 microcontroller and integrated with the Blynk app for remote monitoring, manual control, and automation management.',
  tags: ['IoT', 'ESP8266', 'Embedded C++', 'Blynk', 'DHT11', 'BH1750'],
  category: 'IoT',
  image: '/projectPhotos/Automated-Room-Comfort-Control-System.png',
  githubUrl: 'https://github.com/JayashanManodya/Automated-Room-Comfort-Control-System',

},
{
  title: 'Portfolio V1',
  description: 'My first personal website built with vanilla HTML/CSS/JS. Showcases my early journey into web development.',
  tags: ['HTML', 'CSS', 'JavaScript'],
  category: 'Web',
  githubUrl: '#',
  demoUrl: '#'
}, {
  title: 'Sentiment Analyzer',
  description: 'NLP-based web app that analyzes social media comments to determine brand sentiment. Uses BERT model for high accuracy.',
  tags: ['NLP', 'Transformers', 'FastAPI', 'React'],
  category: 'AI/ML',
  githubUrl: '#',
  demoUrl: '#'
}, {
  title: 'University Chatbot',
  description: 'RAG-based chatbot for answering student queries about campus facilities, courses, and schedules.',
  tags: ['LangChain', 'OpenAI API', 'Vector DB', 'Next.js'],
  category: 'University',
  githubUrl: '#',
  demoUrl: '#'
}, {
  title: 'Crypto Predictor',
  description: 'Time-series forecasting model for cryptocurrency prices using LSTM networks. Includes a dashboard for visualization.',
  tags: ['TensorFlow', 'LSTM', 'Streamlit', 'Pandas'],
  category: 'AI/ML',
  githubUrl: '#',
  demoUrl: '#'
}];
export function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AI/ML', 'Web', 'University'];
  const filteredProjects = filter === 'All' ? allProjects : allProjects.filter(p => p.category === filter);
  return <Section id="projects" className="bg-black/20">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Featured <span className="text-cyan-400">Projects</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(cat => <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,217,255,0.4)]' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}>
          {cat}
        </button>)}
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map((project, index) => <ProjectCard key={project.title} {...project} index={index} />)}
    </div>
  </Section>;
}