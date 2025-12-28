import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { ProjectCard } from '../ui/ProjectCard';
const allProjects = [{
  title: 'RailLink – Next-Gen Train Scheduling & Booking System',
  description: 'An AI-driven railway management platform with an intelligent chatbot at its core, built using Spring Boot and Thymeleaf to modernize train scheduling, passenger booking, automated e-ticketing via n8n, and end-to-end administrative operations.',
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
  category: ['Web', 'AI/ML'],
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
  description: 'My first personal website built with HTML/CSS/JS. Showcases my early journey into web development.',
  tags: ['HTML', 'CSS', 'JavaScript'],
  category: 'Web',
  githubUrl: '#',
  image: '/projectPhotos/Portfolio-V1.png',
  demoUrl: 'https://jayashanmanodya.github.io/Portfolio/'
}];
export function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web', 'AI/ML', 'Computer Vision', 'IoT'];
  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(p =>
      Array.isArray(p.category)
        ? p.category.includes(filter)
        : p.category === filter
    );
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