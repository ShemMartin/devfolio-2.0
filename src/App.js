import React, { useState, useEffect } from 'react';
import { Code, Mail, Github, Linkedin, ExternalLink, Menu, X, Server, Smartphone, Database, Globe, Moon, Sun, ArrowUp, Zap, Users, Award, Terminal, Cpu, Cloud, Layers } from 'lucide-react';

export default function ModernPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [stats, setStats] = useState({ projects: 0, clients: 0, hours: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  // Tech stack for carousel
  const techStack = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-400' },
    { name: 'JavaScript', icon: '📜', color: 'from-yellow-400 to-orange-400' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-indigo-500' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-teal-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-cyan-500' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-red-400' },
    { name: 'Git', icon: '📦', color: 'from-orange-500 to-red-500' },
  ];

  // Rotating tech carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [techStack.length]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        setStats(prev => ({
          projects: prev.projects < 15 ? prev.projects + 1 : 15,
          clients: prev.clients < 10 ? prev.clients + 1 : 10,
          hours: prev.hours < 500 ? prev.hours + 10 : 500
        }));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [loading]);

  const projects = [
    {
      title: "Real-Time Task Manager",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built for teams who need seamless coordination.",
      tech: ["React", "Node.js", "WebSocket", "MongoDB"],
      features: ["Real-time sync", "Drag & drop", "User authentication", "Team workspaces"],
      github: "#",
      live: "#",
      difficulty: "Advanced",
      gradient: "from-purple-500 to-pink-500",
      category: "Web App"
    },
    {
      title: "E-Commerce Dashboard",
      description: "Full-featured admin dashboard for managing products, orders, and analytics with interactive charts and inventory management. Complete business solution.",
      tech: ["React", "Express", "PostgreSQL", "Chart.js"],
      features: ["Analytics", "CRUD operations", "Search & filters", "Order tracking"],
      github: "#",
      live: "#",
      difficulty: "Advanced",
      gradient: "from-blue-500 to-cyan-500",
      category: "Web App"
    },
    {
      title: "DevOps Monitoring Dashboard",
      description: "System monitoring tool displaying server metrics, uptime statistics, and automated alerts. Real-time infrastructure monitoring for DevOps teams.",
      tech: ["React", "Node.js", "Docker", "Redis"],
      features: ["Live metrics", "Alert system", "Multi-server support", "Historical data"],
      github: "#",
      live: "#",
      difficulty: "Advanced",
      gradient: "from-orange-500 to-red-500",
      category: "Web App"
    },
    {
      title: "Savory Bites Restaurant",
      description: "Modern restaurant landing page with elegant menu showcase, online reservations, and seamless ordering system. Designed to increase customer engagement and bookings.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
      features: ["Menu gallery", "Reservation system", "Mobile-first design", "Contact form"],
      github: "#",
      live: "#",
      difficulty: "Intermediate",
      gradient: "from-red-500 to-orange-500",
      category: "Landing Page"
    },
    {
      title: "CloudFlow - SaaS Platform",
      description: "Sleek SaaS product landing page for project management software. Features pricing tables, feature comparisons, and demo booking. Conversion-optimized design.",
      tech: ["React", "Tailwind CSS", "AOS Animations"],
      features: ["Pricing table", "Feature showcase", "Demo request", "Testimonials"],
      github: "#",
      live: "#",
      difficulty: "Intermediate",
      gradient: "from-blue-600 to-purple-600",
      category: "Landing Page"
    },
    {
      title: "PixelForge Creative Studio",
      description: "Bold creative agency landing page with striking portfolio grid and team showcase. Dark theme with neon accents designed to capture attention and convert visitors.",
      tech: ["React", "Tailwind CSS", "GSAP"],
      features: ["Portfolio grid", "Team section", "Case studies", "Contact form"],
      github: "#",
      live: "#",
      difficulty: "Intermediate",
      gradient: "from-pink-500 to-violet-500",
      category: "Landing Page"
    }
  ];

  const skills = [
    { name: "React", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "PHP", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "MySQL", level: 85 },
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "Product Manager", text: "Outstanding work! Delivered ahead of schedule with excellent quality.", avatar: "👩‍💼" },
    { name: "Mike Chen", role: "Tech Lead", text: "Great communication and technical skills. Would definitely work together again.", avatar: "👨‍💻" },
    { name: "Emily Davis", role: "Startup Founder", text: "Transformed our vision into reality. Highly recommended!", avatar: "👩‍🚀" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const SkillBar = ({ skill, level }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{skill}</span>
        <span className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>{level}%</span>
      </div>
      <div className={`w-full ${isDarkMode ? 'bg-slate-700' : 'bg-gray-300'} rounded-full h-3 overflow-hidden`}>
        <div
          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 text-4xl animate-bounce">💻</div>
          <div className="absolute top-40 right-20 text-4xl animate-bounce" style={{ animationDelay: '0.3s' }}>⚛️</div>
          <div className="absolute bottom-20 left-20 text-4xl animate-bounce" style={{ animationDelay: '0.6s' }}>🚀</div>
          <div className="absolute bottom-40 right-10 text-4xl animate-bounce" style={{ animationDelay: '0.9s' }}>🎨</div>
        </div>
        
        <div className="text-center relative z-10">
          <div className="relative">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-cyan-400 mx-auto"></div>
            <Code className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400" size={40} />
          </div>
          <p className="mt-6 text-xl font-semibold text-white">Loading Portfolio...</p>
          <div className="mt-4 flex gap-2 justify-center">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${isDarkMode ? 'bg-slate-900/95 border-slate-700' : 'bg-white/95 border-gray-200'} backdrop-blur-md border-b z-50`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Code className="text-cyan-400 animate-pulse" size={28} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Shem Martin
              </span>
            </div>
            
            <div className="hidden md:flex gap-8 items-center">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-cyan-400 transition-colors relative ${
                    activeSection === section ? 'text-cyan-400' : ''
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                  )}
                </button>
              ))}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all`}
              >
                {isDarkMode ? <Sun size={20} className="text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} /> : <Moon size={20} className="text-slate-700" />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-gray-200'}`}
              >
                {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-4">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize text-left hover:text-cyan-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Tech Icons Background */}
      <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex items-center">
        {/* Animated gradient blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Floating tech icons */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-4xl animate-bounce" style={{ animationDuration: '3s' }}>💻</div>
          <div className="absolute top-40 right-20 text-4xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>⚛️</div>
          <div className="absolute bottom-20 left-20 text-4xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>🚀</div>
          <div className="absolute bottom-40 right-10 text-4xl animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>🎨</div>
          <div className="absolute top-1/2 left-1/4 text-3xl animate-pulse">🔧</div>
          <div className="absolute top-1/3 right-1/4 text-3xl animate-pulse" style={{ animationDelay: '1s' }}>⚡</div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="text-center">
            {/* Animated tech badge */}
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full backdrop-blur-sm">
                <span className="text-4xl animate-bounce">{techStack[currentTechIndex].icon}</span>
                <span className={`font-semibold bg-gradient-to-r ${techStack[currentTechIndex].color} bg-clip-text text-transparent`}>
                  {techStack[currentTechIndex].name} Developer
                </span>
              </div>
            </div>

            {/* Main heading with typing effect simulation */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent inline-block animate-pulse">
                Frontend & Full-Stack Developer
              </span>
            </h1>

            {/* Terminal-style subheading */}
            <div className={`max-w-2xl mx-auto mb-8 ${isDarkMode ? 'bg-slate-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-lg p-4 border ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
              <div className="flex items-center gap-2 mb-2">
                <Terminal size={16} className="text-green-400" />
                <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>~/portfolio</span>
              </div>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} font-mono`}>
                <span className="text-green-400">$</span> Building scalable web applications with modern technologies
              </p>
            </div>

            {/* Tech stack carousel */}
            <div className="mb-8 flex justify-center gap-4 flex-wrap">
              {techStack.slice(0, 4).map((tech, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 ${isDarkMode ? 'bg-slate-800/50' : 'bg-white/80'} backdrop-blur-sm px-4 py-2 rounded-full border ${isDarkMode ? 'border-slate-700' : 'border-gray-200'} hover:scale-110 transition-transform`}
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className={`text-sm font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2"
              >
                <Layers size={20} />
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-cyan-500 hover:bg-cyan-500/10 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center gap-2"
              >
                <Mail size={20} />
                Get in Touch
              </button>
            </div>

            <div className="flex gap-6 justify-center mt-8">
              <a href="https://github.com/ShemMartin" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-slate-300' : 'text-gray-600'} hover:text-cyan-400 transition-all transform hover:scale-125 hover:-translate-y-1`}>
                <Github size={28} />
              </a>
              <a href="https://linkedin.com/in/shem-martin" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-slate-300' : 'text-gray-600'} hover:text-cyan-400 transition-all transform hover:scale-125 hover:-translate-y-1`}>
                <Linkedin size={28} />
              </a>
              <a href="mailto:shemlecrae1309@gmail.com" className={`${isDarkMode ? 'text-slate-300' : 'text-gray-600'} hover:text-cyan-400 transition-all transform hover:scale-125 hover:-translate-y-1`}>
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 ${isDarkMode ? 'border-cyan-400' : 'border-gray-400'} rounded-full flex justify-center p-2`}>
            <div className={`w-1.5 h-1.5 ${isDarkMode ? 'bg-cyan-400' : 'bg-gray-400'} rounded-full animate-pulse`}></div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className={`py-12 ${isDarkMode ? 'bg-slate-800/50' : 'bg-white'} border-y ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="relative inline-block mb-3">
                <Award className="text-cyan-400 animate-bounce" size={32} />
              </div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                {stats.projects}+
              </div>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Projects Completed</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="relative inline-block mb-3">
                <Users className="text-purple-400 animate-bounce" size={32} style={{ animationDelay: '0.2s' }} />
              </div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
                {stats.clients}+
              </div>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Happy Clients</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="relative inline-block mb-3">
                <Code className="text-green-400 animate-bounce" size={32} style={{ animationDelay: '0.4s' }} />
              </div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 mb-2">
                {stats.hours}+
              </div>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Hours Coded</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 right-10 text-6xl opacity-5">💻</div>
        <div className="absolute bottom-10 left-10 text-6xl opacity-5">🚀</div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} mb-6 leading-relaxed`}>
                Hi there, I'm Shem Martin 👋 - Founder of <strong className="text-cyan-400">DevLoom Creatives</strong>, 
                a passionate frontend and full-stack developer from Kenya. I specialize in creating 
                beautiful, responsive user interfaces and robust backend systems that power modern web applications.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} mb-6 leading-relaxed`}>
                At DevLoom Creatives, we craft everything from pixel-perfect landing pages to complex web applications. 
                Our expertise spans React, PHP, Node.js, and MySQL, with a strong focus on user experience and performance. 
                Currently expanding into Python & Django to deliver even more powerful solutions.
              </p>
              <div className="flex gap-4 flex-wrap">
                {[
                  { icon: Globe, label: 'Full-Stack', color: 'from-cyan-400 to-blue-500' },
                  { icon: Server, label: 'Backend', color: 'from-purple-400 to-pink-500' },
                  { icon: Smartphone, label: 'Responsive', color: 'from-green-400 to-cyan-400' },
                  { icon: Database, label: 'Databases', color: 'from-orange-400 to-red-500' }
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-2 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} border px-4 py-3 rounded-lg hover:scale-110 transition-all shadow-md hover:shadow-lg`}>
                    <item.icon className="text-cyan-400" size={20} />
                    <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-semibold`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${isDarkMode ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700' : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'} p-8 rounded-2xl border backdrop-blur-sm shadow-2xl`}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Zap className="text-cyan-400 animate-pulse" size={24} />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Quick Facts</span>
              </h3>
              <ul className={`space-y-4 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <span className="text-2xl">🎯</span>
                  <span><strong>Focus:</strong> Full-Stack Web Development</span>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <span className="text-2xl">🏢</span>
                  <span><strong>Company:</strong> DevLoom Creatives</span>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <span className="text-2xl">📍</span>
                  <span><strong>Location:</strong> Kenya / Available Globally</span>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <span className="text-2xl">🚀</span>
                  <span><strong>Currently Learning:</strong> Python & Django</span>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <span className="text-2xl">💡</span>
                  <span><strong>Motto:</strong> "Code today, build tomorrow"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects with Color Gradients */}
      <section id="projects" className={`py-20 px-4 ${isDarkMode ? 'bg-slate-800/30' : 'bg-gray-100'} relative overflow-hidden`}>
        {/* Background tech icons */}
        <div className="absolute top-20 left-10 text-5xl opacity-5 animate-pulse">⚛️</div>
        <div className="absolute bottom-20 right-10 text-5xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }}>🔧</div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-center mb-12 text-lg`}>
            A diverse portfolio showcasing web applications and landing pages
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group ${isDarkMode ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-white hover:bg-gray-50 border-gray-200'} backdrop-blur-lg rounded-2xl border transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl overflow-hidden`}
              >
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-1`}>
                        {project.title}
                      </h3>
                      <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                        {project.category}
                      </span>
                    </div>
                    <span className={`text-xs bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent px-3 py-1 rounded-full border border-cyan-500/30 font-semibold`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <p className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'} mb-4`}>{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-2`}>Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span key={i} className={`text-xs ${isDarkMode ? 'bg-slate-700/50' : 'bg-gray-100'} px-3 py-1 rounded-full`}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-2`}>Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className={`text-xs bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent px-3 py-1 rounded-full border border-opacity-30 font-semibold`} style={{ borderColor: 'currentColor' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a href={project.github} className={`flex items-center gap-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} hover:text-cyan-400 transition-all hover:translate-x-1`}>
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a href={project.live} className={`flex items-center gap-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} hover:text-cyan-400 transition-all hover:translate-x-1`}>
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Skills */}
      <section id="skills" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Cpu className="absolute top-10 left-10 w-32 h-32 animate-spin" style={{ animationDuration: '20s' }} />
          <Cloud className="absolute bottom-10 right-10 w-32 h-32 animate-bounce" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((skill, i) => (
              <SkillBar key={i} skill={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 px-4 ${isDarkMode ? 'bg-slate-800/30' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Users className="text-cyan-400 animate-pulse" size={36} />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <div className={`${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} backdrop-blur-lg rounded-3xl border p-12 text-center shadow-2xl`}>
            <div className="text-6xl mb-6 animate-bounce">{testimonials[currentTestimonial].avatar}</div>
            <p className={`text-xl ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} mb-6 italic leading-relaxed`}>
              "{testimonials[currentTestimonial].text}"
            </p>
            <h4 className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {testimonials[currentTestimonial].name}
            </h4>
            <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>{testimonials[currentTestimonial].role}</p>
            <div className="flex gap-2 justify-center mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`h-3 rounded-full transition-all ${
                    i === currentTestimonial ? 'bg-gradient-to-r from-cyan-400 to-blue-500 w-8' : 'bg-slate-600 w-3'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} mb-8 leading-relaxed`}>
            DevLoom Creatives is available for freelance projects and full-time opportunities. 
            Let's build something amazing together!
          </p>
          <div className="flex gap-6 justify-center mb-8 flex-wrap">
            <a
              href="mailto:shemlecrae1309@gmail.com"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://github.com/ShemMartin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 border-2 border-cyan-500 hover:bg-cyan-500/10 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-lg`}>shemlecrae1309@gmail.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${isDarkMode ? 'border-slate-700 bg-slate-800/50' : 'border-gray-200 bg-white'}`}>
        <div className={`max-w-6xl mx-auto text-center ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          <p>© 2024 Shem Martin | DevLoom Creatives. Built with React & Tailwind CSS</p>
          <p className="text-sm mt-2">Made with ❤️ and lots of ☕</p>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <a
        href="#contact"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all z-50 group"
        title="Contact Me"
      >
        <Mail size={24} className="group-hover:animate-bounce" />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-8 left-8 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 border-slate-700' : 'bg-white hover:bg-gray-100 border-gray-200'} p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all z-50 border group`}
          title="Back to Top"
        >
          <ArrowUp size={24} className="text-cyan-400 group-hover:animate-bounce" />
        </button>
      )}
    </div>
  );
}