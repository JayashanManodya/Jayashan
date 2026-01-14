import { useState } from 'react';
import { Section } from '../ui/Section';
import { ProjectCard } from '../ui/ProjectCard';

const allProjects = [{
  title: 'WeatherLK',
  description: 'WeatherLK is a full-stack machine learning–based weather forecasting web application designed for Sri Lankan cities. It uses historical weather data since 2010 to predict temperature, rainfall, wind speed, sunrise, sunset, and elevation through a trained Random Forest model. The machine learning model was trained in Google Colab and served via a FastAPI backend. A modern React + Vite frontend provides a clean, responsive dashboard with city-based search and date selection. This project demonstrates end-to-end ML development, API integration, and production-ready web deployment.',
  tags: [
    'React',
    'Vite',
    'FastAPI',
    'Machine Learning',
    'Random Forest',
    'Python',
    'Google Colab'
  ],
  category: ['Web', 'ML'],
  image: 'projectPhotos/weatherLK.png',
  githubUrl: 'https://github.com/JayashanManodya/WeatherLK',
},
{
  title: 'Portfolio Website',
  description: 'Developed a modern, performance-focused portfolio website using React + TypeScript, featuring a dark/light adaptive theme, smooth Framer Motion animations, and a mobile-first responsive architecture.',
  tags: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Lucide React',
    'Vite',
    'PostCSS'
  ],
  category: 'Web',
  image: 'projectPhotos/posterv1.png',
  githubUrl: 'https://github.com/JayashanManodya/Jayashan',
},
{
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
  category: ['Web', 'AI'],
  image: 'projectPhotos/railLink.png',
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
  category: ['Computer Vision', 'DL'],
  image: 'projectPhotos/plateX.jpg',
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
  image: 'projectPhotos/InkSpire-BookStore.jpg',
  githubUrl: 'https://github.com/JayashanManodya/Inkspire_Bookstore',
},
{
  title: 'Automated Room Comfort Control System',
  description: 'An IoT-based smart room automation system that monitors and controls temperature, humidity, and lighting using real-time sensor data. Built with an ESP8266 microcontroller and integrated with the Blynk app for remote monitoring, manual control, and automation management.',
  tags: ['IoT', 'ESP8266', 'Embedded C++', 'Blynk', 'DHT11', 'BH1750'],
  category: 'IoT',
  image: 'projectPhotos/Automated-Room-Comfort-Control-System.png',
  githubUrl: 'https://github.com/JayashanManodya/Automated-Room-Comfort-Control-System',

},
{
  title: 'Portfolio V1',
  description: 'My first personal website built with HTML/CSS/JS. Showcases my early journey into web development.',
  tags: ['HTML', 'CSS', 'JavaScript'],
  category: 'Web',
  githubUrl: 'https://github.com/JayashanManodya/Portfolio',
  image: 'projectPhotos/Portfolio-V1.png',
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

  return (
    <Section id="projects" className="transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Featured Projects</h2>
        <div className="h-2 w-24 bg-brand-primary mx-auto rounded-full" />

        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 shadow-sm ${filter === cat
                ? 'bg-brand-primary text-white shadow-brand-primary/20 shadow-lg scale-105'
                : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </Section>
  );
}