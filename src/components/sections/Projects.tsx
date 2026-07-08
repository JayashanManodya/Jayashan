import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { ProjectCard } from '../ui/ProjectCard';

const allProjects = [{
  title: 'Kapuruka Shopping Agent (KIKO)',
  description:
    'An AI-powered conversational shopping assistant for Kapruka.com that lets users search products, manage carts, and complete checkout through natural language chat. Built with a multi-agent backend using FastAPI, LangGraph, and LangChain, plus a modern Next.js frontend with multilingual support for English, Sinhala, and Tamil.',
  tags: [
    'FastAPI',
    'LangGraph',
    'LangChain',
    'Next.js',
    'React',
    'Python',
    'AI Agents',
    'Multilingual'
  ],
  category: ['Full Stack', 'Gen AI'],
  image: 'projectPhotos/kiko.png',
  githubUrl: 'https://github.com/JayashanManodya/Kapuruka_Shopping_Agent',
  demoUrl: 'https://drive.google.com/file/d/1BQSnxiufotrtzKIkE_Js2mjcZFP_QeQw/view?usp=sharing',
}, {
  title: 'TeaPlanter · AI Powered Tea Estate Management',
  description:
    'In progress: an AI-powered tea estate management platform with role-based dashboards for harvest, workforce, attendance, inventory, and finances. Includes YOLOv8–based tea leaf disease prediction, a multi-agent AI assistant, and price forecasting (XGBoost).',
  tags: [
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Vite',
    'Spring Security',
    'OAuth2',
    'Clerk',
    'YOLO',
    'RandomForest'
  ],
  category: ['Full Stack', 'ML', 'DL', 'Gen AI'],
  image: 'projectPhotos/teaPlanter.png',
  githubUrl: 'https://github.com/JayashanManodya/Tea-Planter',
  demoUrl: 'https://www.teaplanter.online/',
},
{
  title: 'Multi-Agent Retrieval-Augmented Knowledge System',
  description: 'A high-accuracy RAG system that answers questions from PDFs using query planning, vector embeddings, Pinecone DB, and multi-agent orchestration. Built with FastAPI, LangChain, and LangGraph, it ensures context-grounded answers with minimal hallucinations.',
  tags: [
    'FastAPI',
    'LangChain',
    'LangGraph',
    'Pinecone',
    'Python',
    'RAG',
    'AI Agents'
  ],
  category: ['Gen AI'],
  image: 'projectPhotos/ikms_new.png',
  githubUrl: 'https://github.com/JayashanManodya/ikms-rag-agent-system',
  demoUrl: 'https://ikms-rag-agent-system.vercel.app/',
},
{
  title: 'FuelAlert - Real-Time Fuel Availability Tracker',
  description: 'A real-time fuel station monitoring platform for Sri Lanka with interactive maps, community-driven fuel status updates, trilingual support (English, Sinhala, Tamil), and an admin panel. Built with React, Express, Neon PostgreSQL, Drizzle ORM, and Leaflet maps.',
  tags: [
    'React',
    'TypeScript',
    'Express',
    'PostgreSQL',
    'Drizzle ORM',
    'Leaflet',
    'Tailwind CSS',
    'Vite'
  ],
  category: ['Full Stack'],
  image: 'projectPhotos/FuelAlert_low.png',
  githubUrl: 'https://github.com/JayashanManodya/Fuel-Watch-LK',
  demoUrl: 'https://fuelalert.online/',
},
{
  title: 'BookLink · Community Book Exchange',
  description:
    'BookLink is a community app for listing books and arranging in-person exchanges: browse listings, send exchange requests, chat with listers, manage a wishlist, leave reviews, and report issues. The product is a React Native (Expo) client with an Express API backed by MongoDB, using Clerk for authentication.',
  tags: [
    'React Native',
    'Expo',
    'Express',
    'MongoDB',
    'Clerk',
    'TypeScript',
    'REST API'
  ],
  category: ['Mobile', 'Full Stack'],
},
{
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
  category: ['Full Stack', 'ML'],
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
  category: ['Others'],
  image: 'projectPhotos/jayashan.online.png',
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
  category: ['Full Stack', 'Gen AI'],
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
  category: ['DL', 'Full Stack'],
  image: 'projectPhotos/plateX.jpg',
  githubUrl: 'https://github.com/JayashanManodya/PlateX',
},
{
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
  category: 'Full Stack',
  image: 'projectPhotos/InkSpire-BookStore.jpg',
  githubUrl: 'https://github.com/JayashanManodya/Inkspire_Bookstore',
},
{
  title: 'Automated Room Comfort Control System',
  description: 'An IoT-based smart room automation system that monitors and controls temperature, humidity, and lighting using real-time sensor data. Built with an ESP8266 microcontroller and integrated with the Blynk app for remote monitoring, manual control, and automation management.',
  tags: ['IoT', 'ESP8266', 'Embedded C++', 'Blynk', 'DHT11', 'BH1750'],
  category: ['Others'],
  image: 'projectPhotos/Automated-Room-Comfort-Control-System.png',
  githubUrl: 'https://github.com/JayashanManodya/Automated-Room-Comfort-Control-System',
},
{
  title: 'Portfolio V1',
  description: 'My first personal website built with HTML/CSS/JS. Showcases my early journey into web development.',
  tags: ['HTML', 'CSS', 'JavaScript'],
  category: ['Others'],
  image: 'projectPhotos/Portfolio-V1.png',
  demoUrl: 'https://jayashanmanodya.github.io/Portfolio/'
}];

const PROJECTS_PER_PAGE = 3;

export function Projects() {
  const [filter, setFilter] = useState('All');
  const [pageIndex, setPageIndex] = useState(0);
  const categories = ['All', 'Full Stack', 'Gen AI', 'Mobile', 'ML', 'DL', 'Others'];

  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(p =>
      Array.isArray(p.category)
        ? p.category.includes(filter)
        : p.category === filter
    );

  useEffect(() => {
    setPageIndex(0);
  }, [filter]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));

  useEffect(() => {
    setPageIndex(i => Math.min(i, Math.max(0, totalPages - 1)));
  }, [totalPages]);
  const clampedPage = Math.min(pageIndex, totalPages - 1);
  const start = clampedPage * PROJECTS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(start, start + PROJECTS_PER_PAGE);

  const goPrev = () => setPageIndex(p => Math.max(0, p - 1));
  const goNext = () => setPageIndex(p => Math.min(totalPages - 1, p + 1));

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
        {paginatedProjects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-6 mt-12 px-4">
          <button
            type="button"
            onClick={goPrev}
            disabled={clampedPage === 0}
            aria-label="Previous projects page"
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 shadow-sm transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-brand-primary/40 disabled:opacity-40 disabled:pointer-events-none disabled:hover:bg-white dark:disabled:hover:bg-slate-900"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-semibold tracking-wide text-slate-600 dark:text-slate-400 min-w-[6rem] text-center tabular-nums">
            Page {clampedPage + 1} of {totalPages}
          </span>
          <button
            type="button"
            onClick={goNext}
            disabled={clampedPage >= totalPages - 1}
            aria-label="Next projects page"
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 shadow-sm transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-brand-primary/40 disabled:opacity-40 disabled:pointer-events-none disabled:hover:bg-white dark:disabled:hover:bg-slate-900"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </Section>
  );
}