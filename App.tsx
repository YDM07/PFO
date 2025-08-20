import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Switch } from './components/ui/switch';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Code, 
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  Users,
  Menu,
  X,
  Download,
  FileText,
  Brain,
  Database,
  Server,
  Cpu,
  Zap,
  Target,
  Calendar,
  Globe,
  Layers,
  Settings,
  BarChart3,
  Network,
  Coffee,
  ChevronRight,
  Star,
  TrendingUp,
  Sparkles,
  Rocket,
  Code2,
  GitBranch,
  Terminal,
  Sun,
  Moon,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleCardFlip = (cardIndex: number) => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(cardIndex)) {
      newFlippedCards.delete(cardIndex);
    } else {
      newFlippedCards.add(cardIndex);
    }
    setFlippedCards(newFlippedCards);
  };

  useEffect(() => {
    // Set initial theme
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'education', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillsData = {
    languages: [
      { name: 'Python', icon: <Code2 className="w-5 h-5" />, level: 95, color: 'from-blue-500 to-blue-700' },
      { name: 'Java', icon: <Coffee className="w-5 h-5" />, level: 90, color: 'from-orange-500 to-red-600' },
      { name: 'JavaScript', icon: <Globe className="w-5 h-5" />, level: 88, color: 'from-yellow-500 to-orange-600' },
      { name: 'SQL', icon: <Database className="w-5 h-5" />, level: 85, color: 'from-green-500 to-emerald-700' },
      { name: 'C++', icon: <Cpu className="w-5 h-5" />, level: 80, color: 'from-purple-500 to-purple-700' },
      { name: 'HTML/CSS', icon: <Code className="w-5 h-5" />, level: 92, color: 'from-pink-500 to-rose-600' }
    ],
    frameworks: [
      { name: 'React', icon: <Layers className="w-5 h-5" />, level: 90, color: 'from-cyan-500 to-blue-600' },
      { name: 'Node.js', icon: <Server className="w-5 h-5" />, level: 85, color: 'from-green-600 to-green-800' },
      { name: 'TensorFlow', icon: <Brain className="w-5 h-5" />, level: 88, color: 'from-orange-600 to-red-700' },
      { name: 'Express', icon: <Network className="w-5 h-5" />, level: 82, color: 'from-gray-600 to-gray-800' },
      { name: 'Keras', icon: <Brain className="w-5 h-5" />, level: 85, color: 'from-red-500 to-pink-700' },
      { name: 'Pandas', icon: <BarChart3 className="w-5 h-5" />, level: 90, color: 'from-indigo-500 to-purple-700' }
    ],
    tools: [
      { name: 'Git', icon: <GitBranch className="w-5 h-5" />, level: 88, color: 'from-orange-500 to-red-600' },
      { name: 'Docker', icon: <Settings className="w-5 h-5" />, level: 75, color: 'from-blue-500 to-cyan-600' },
      { name: 'MongoDB', icon: <Database className="w-5 h-5" />, level: 83, color: 'from-green-700 to-emerald-800' },
      { name: 'MySQL', icon: <Database className="w-5 h-5" />, level: 85, color: 'from-blue-700 to-indigo-800' },
      { name: 'GCP', icon: <Globe className="w-5 h-5" />, level: 78, color: 'from-yellow-600 to-orange-700' },
      { name: 'Firebase', icon: <Zap className="w-5 h-5" />, level: 80, color: 'from-yellow-500 to-orange-600' }
    ]
  };

  const aboutCards = [
    {
      title: 'AI/ML Engineering',
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-blue-600 via-purple-600 to-indigo-700',
      frontContent: 'Building intelligent systems with cutting-edge machine learning algorithms and deep neural networks.',
      backContent: 'Specialized in Computer Vision, NLP, and predictive modeling. Built CNN models achieving 90% accuracy on 10,000+ image datasets. Expert in TensorFlow, Keras, and PyTorch for creating production-ready AI solutions.',
      stats: ['90% Model Accuracy', 'TensorFlow Expert', '10k+ Images Processed']
    },
    {
      title: 'Full-Stack Development',
      icon: <Code2 className="w-8 h-8" />,
      gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
      frontContent: 'Creating scalable web applications with modern frameworks and responsive user experiences.',
      backContent: 'MERN stack specialist with expertise in React, Node.js, Express, and MongoDB. Built applications serving global users with 25% increase in engagement. Focus on performance optimization and clean architecture.',
      stats: ['MERN Stack Pro', '25% User Growth', 'Global Scale Apps']
    },
    {
      title: 'Data Science & Analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: 'from-orange-600 via-red-600 to-pink-700',
      frontContent: 'Transforming raw data into actionable insights using advanced statistical methods and visualization.',
      backContent: 'Expert in data preprocessing, feature engineering, and statistical analysis. Proficient with Pandas, NumPy, and Scikit-learn. Reduced processing time by 40% through optimized data pipelines and automation.',
      stats: ['40% Faster Processing', 'Statistical Analysis', 'Data Automation']
    },
    {
      title: 'Leadership & Innovation',
      icon: <Rocket className="w-8 h-8" />,
      gradient: 'from-purple-600 via-indigo-600 to-blue-700',
      frontContent: 'Leading teams and driving innovation through strategic thinking and collaborative problem-solving.',
      backContent: 'Copyright holder of innovative software solutions. Led teams of 60+ members with 25% increase in participation. Secretary of Admissions Task Force, boosting engagement by 25% through digital transformation.',
      stats: ['60+ Team Members', 'Copyright Holder', '25% Growth Impact']
    }
  ];

  const projects = [
    {
      title: 'Dysgraphia Disorder Forecasting',
      role: 'ML Engineer',
      period: 'Feb 2024 – May 2025',
      description: [
        'Engineered and trained a Convolutional Neural Network (CNN) achieving 90% classification accuracy on 10,000+ medical images',
        'Implemented advanced data augmentation and hyperparameter tuning, improving model precision by 15% and reducing loss by 7%',
        'Deployed production-ready model with real-time inference capabilities for early disorder detection'
      ],
      technologies: ['TensorFlow', 'Keras', 'CNN', 'Python', 'OpenCV', 'Data Augmentation'],
      gradient: 'from-blue-600 to-purple-700',
      icon: <Brain className="w-8 h-8" />,
      metrics: ['90% Accuracy', '10K+ Images', '15% Precision Boost']
    },
    {
      title: 'LANGZEN: AI-Powered Language Learning',
      role: 'Full-stack Developer',
      period: 'Aug 2023 – Jan 2024',
      description: [
        'Developed comprehensive MERN stack application with interactive AI-driven language modules and real-time translation',
        'Integrated Google Translate API with custom NLP algorithms, achieving 25% increase in user session duration',
        'Implemented scalable architecture supporting global user base with multilingual content delivery'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Google Translate API', 'NLP'],
      gradient: 'from-emerald-600 to-teal-700',
      icon: <Globe className="w-8 h-8" />,
      metrics: ['25% User Growth', 'Global Scale', 'AI Translation']
    }
  ];

  const experiences = [
    {
      company: 'Saranyu Technologies',
      role: 'Software Development Intern',
      period: 'Dec 2023 – Jan 2024',
      location: 'Mumbai, India',
      type: 'Internship',
      description: [
        'Architected and developed client-facing React dashboard, driving 20% increase in user engagement through intuitive UX design',
        'Built scalable Python-based email delivery system with automated configurations, boosting delivery speed by 30%',
        'Optimized backend data processing algorithms and implemented caching strategies, reducing load times by 25%'
      ],
      technologies: ['React', 'Python', 'Dashboard Development', 'System Architecture', 'Performance Optimization'],
      gradient: 'from-purple-600 to-pink-700',
      achievements: ['20% User Engagement ↑', '30% Delivery Speed ↑', '25% Load Time ↓']
    },
    {
      company: 'Geofencing Research Project',
      role: 'Data Science Intern',
      period: 'May 2023',
      location: 'Mumbai, India',
      type: 'Research Project',
      description: [
        'Engineered automated data processing pipeline using Pandas, improving data accuracy by 15% through advanced validation',
        'Developed Google Maps API integration for geographic data analysis, enabling 40% faster processing cycles',
        'Created standardized data visualization templates and reporting systems, enhancing presentation quality by 25%'
      ],
      technologies: ['Python', 'Pandas', 'Google Maps API', 'Data Visualization', 'Geographic Analysis'],
      gradient: 'from-orange-600 to-yellow-600',
      achievements: ['15% Data Accuracy ↑', '40% Processing Speed ↑', '25% Report Quality ↑']
    }
  ];

  const education = [
    {
      institution: 'K. J. Somaiya Institute of Technology (KJSIT)',
      degree: 'B.Tech in Computer Engineering',
      specialization: 'Honors in Data Science',
      period: 'Dec 2021 – May 2025',
      location: 'Mumbai, India',
      cgpa: '8.41',
      coursework: [
        'Advanced Data Structures & Algorithms',
        'Artificial Intelligence & Machine Learning',
        'Deep Learning & Neural Networks',
        'Natural Language Processing',
        'Database Management Systems',
        'Software Engineering & Architecture',
        'Computer Vision & Image Processing'
      ],
      achievements: [
        'Data Science Honors Program',
        'Academic Excellence Award',
        'Research Publication in AI/ML'
      ],
      gradient: 'from-blue-600 to-indigo-700'
    }
  ];

  const achievements = [
    {
      title: 'Software Copyright Recognition',
      subtitle: 'ROC No: SW-18071/2024',
      description: 'Government-issued copyright for LANGZEN Idiom Learning App, recognized as innovative contribution to educational technology and language learning solutions.',
      icon: <Award className="w-8 h-8" />,
      gradient: 'from-yellow-500 to-orange-600',
      category: 'Innovation',
      year: '2024'
    },
    {
      title: 'Admissions Task Force Secretary',
      subtitle: 'Strategic Digital Leadership',
      description: 'Led digital transformation initiatives resulting in 25% increase in applicant engagement and 20% improvement in response rates through data-driven campaigns.',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-blue-600 to-cyan-600',
      category: 'Leadership',
      year: '2023-2024'
    },
    {
      title: 'Global Leadership Coordinator',
      subtitle: 'Leo Club International',
      description: 'Orchestrated leadership development programs for 60+ members, achieving 25% increase in community volunteer participation through innovative engagement strategies.',
      icon: <Target className="w-8 h-8" />,
      gradient: 'from-emerald-600 to-teal-600',
      category: 'Community Impact',
      year: '2022-2024'
    }
  ];

  const navigation = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-background text-foreground tech-grid">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-6">
                <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                  YM.dev
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm transition-all duration-200 relative ${
                      activeSection === item.id 
                        ? 'text-tech-blue font-medium' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-tech-blue rounded-full"></div>
                    )}
                  </button>
                ))}
                
                {/* Theme Toggle */}
                <div className="flex items-center gap-2 ml-4">
                  <Sun className="w-4 h-4 text-muted-foreground" />
                  <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
                  <Moon className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-3 px-2 text-sm transition-colors rounded-lg hover:bg-accent ${
                      activeSection === item.id ? 'text-tech-blue bg-accent' : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex items-center justify-between pt-4 px-2">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-muted-foreground" />
                    <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
                    <Moon className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center space-y-10">
              <div className="space-y-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium border border-blue-500/20 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2 text-tech-blue" />
                  <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                    Available for Full-time Opportunities
                  </span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight tracking-tight" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                  Yash Deepal Madaiyar
                </h1>
                
                <div className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                    <span className="text-tech-blue">AI/ML Engineer</span> & 
                    <span className="text-tech-purple"> Full-Stack Developer</span>
                  </h2>
                  
                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
                      Passionate <span className="text-tech-blue">Computer Engineering graduate</span> specializing in 
                      <span className="text-tech-purple"> Artificial Intelligence</span> and 
                      <span className="text-tech-indigo"> Data Science</span>. Expert in 
                      <span className="text-tech-orange"> Python</span>, 
                      <span className="text-tech-rose"> Java</span>, and 
                      <span className="text-tech-emerald"> full-stack development</span>. 
                      <br className="hidden sm:block" />
                      Building next-generation <span className="text-tech-cyan">intelligent systems</span> and <span className="text-tech-violet">scalable web applications</span>.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Let's Connect
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-600/20 hover:border-blue-600/40 hover:bg-blue-600/5 transition-all duration-300 text-lg px-8 py-6"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Resume
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-purple-600/20 hover:border-purple-600/40 hover:bg-purple-600/5 transition-all duration-300 text-lg px-8 py-6" 
                  asChild
                >
                  <a href="https://github.com/YDM07" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-tech-blue" />
                  Mumbai, Maharashtra, India
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-tech-purple" />
                  yd.madaiyar@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-tech-indigo" />
                  +91 7900076161
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                What I Bring to the Table
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{fontFamily: 'Manrope, sans-serif'}}>
                Combining technical expertise with innovative thinking to create impactful solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aboutCards.map((card, index) => (
                <div key={index} className="group perspective-1000 h-80">
                  <div 
                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                      flippedCards.has(index) ? 'rotate-y-180' : ''
                    }`}
                    onClick={() => toggleCardFlip(index)}
                  >
                    {/* Front of card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden">
                      <Card className={`h-full bg-gradient-to-br ${card.gradient} p-1 border-0 shadow-xl transition-all duration-300`}>
                        <div className="h-full bg-background/95 backdrop-blur-sm rounded-lg p-8 flex flex-col justify-between">
                          <div>
                            <div className="text-foreground mb-4 opacity-80">
                              {card.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">{card.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{card.frontContent}</p>
                          </div>
                          <div className="flex items-center justify-between mt-6">
                            <span className="text-sm text-tech-cyan">Click to explore</span>
                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Back of card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                      <Card className={`h-full bg-gradient-to-br ${card.gradient} p-1 border-0 shadow-xl`}>
                        <div className="h-full bg-background/95 backdrop-blur-sm rounded-lg p-8">
                          <div className="text-foreground mb-4 opacity-80">
                            {card.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-4">{card.title}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{card.backContent}</p>
                          <div className="space-y-2">
                            {card.stats.map((stat, statIndex) => (
                              <div key={statIndex} className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-tech-amber" />
                                <span className="text-sm text-tech-sky">{stat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                Professional Experience
              </h2>
              <p className="text-xl text-muted-foreground" style={{fontFamily: 'Manrope, sans-serif'}}>
                Building real-world solutions and gaining valuable industry insights
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border border-border/50 overflow-hidden shadow-lg">
                  <div className={`h-1 bg-gradient-to-r ${exp.gradient}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 bg-gradient-to-r ${exp.gradient} rounded-lg`}>
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl text-foreground">{exp.company}</CardTitle>
                            <Badge variant="secondary" className="text-xs mt-1">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                        <CardDescription className="text-lg text-tech-blue mb-1">
                          {exp.role}
                        </CardDescription>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <div className={`w-2 h-2 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium text-muted-foreground mb-2">Key Achievements</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, idx) => (
                            <Badge key={idx} variant="outline" className="text-tech-emerald border-emerald-600/30">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-muted-foreground mb-2">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                Academic Excellence
              </h2>
              <p className="text-xl text-muted-foreground" style={{fontFamily: 'Manrope, sans-serif'}}>
                Strong foundation in computer science and data science
              </p>
            </div>

            {education.map((edu, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border border-border/50 overflow-hidden shadow-lg">
                <div className={`h-1 bg-gradient-to-r ${edu.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 bg-gradient-to-r ${edu.gradient} rounded-lg`}>
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-foreground">{edu.institution}</CardTitle>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {edu.location}
                          </Badge>
                        </div>
                      </div>
                      <CardDescription className="text-lg text-tech-blue mb-1">
                        {edu.degree}
                      </CardDescription>
                      <p className="text-tech-purple mb-2">{edu.specialization}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                        <Badge className="bg-emerald-500/20 text-tech-emerald border-emerald-500/30">
                          CGPA: {edu.cgpa}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-lg font-medium text-foreground mb-3">Relevant Coursework</h5>
                      <div className="space-y-2">
                        {edu.coursework.map((course, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-tech-blue" />
                            <span className="text-muted-foreground text-sm">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-lg font-medium text-foreground mb-3">Academic Achievements</h5>
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-tech-amber" />
                            <span className="text-muted-foreground text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground" style={{fontFamily: 'Manrope, sans-serif'}}>
                Innovative solutions that make a real-world impact
              </p>
            </div>
            
            <div className="space-y-12">
              {projects.map((project, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border border-border/50 overflow-hidden shadow-lg">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-2">
                        <div className={`p-4 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-lg`}>
                          <div className="text-white">
                            {project.icon}
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-7 space-y-4">
                        <div>
                          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                            <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                            <Badge variant="outline" className="text-tech-blue border-blue-600/30">
                              {project.period}
                            </Badge>
                          </div>
                          <p className="text-lg text-tech-purple mb-4">{project.role}</p>
                        </div>
                        
                        <ul className="space-y-3">
                          {project.description.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                              <div className={`w-1.5 h-1.5 bg-gradient-to-r ${project.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                              <span className="text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="lg:col-span-3">
                        <div className="space-y-3">
                          <h5 className="text-sm font-medium text-muted-foreground mb-3">Key Metrics</h5>
                          {project.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                              <TrendingUp className="w-4 h-4 text-tech-emerald" />
                              <span className="text-sm text-foreground font-medium">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                Technical Arsenal
              </h2>
              <p className="text-xl text-muted-foreground" style={{fontFamily: 'Manrope, sans-serif'}}>
                Cutting-edge technologies and frameworks I work with
              </p>
            </div>
            
            <div className="space-y-12">
              {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                <Card key={category} className="bg-card/80 backdrop-blur-sm border border-border/50 overflow-hidden shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
                      {category === 'languages' && <Code2 className="w-8 h-8 text-tech-blue" />}
                      {category === 'frameworks' && <Layers className="w-8 h-8 text-tech-purple" />}
                      {category === 'tools' && <Settings className="w-8 h-8 text-tech-emerald" />}
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {skills.map((skill, index) => (
                        <div key={skill.name} className="group">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg shadow-lg transition-transform duration-300`}>
                                <div className="text-white">
                                  {skill.icon}
                                </div>
                              </div>
                              <span className="font-medium text-foreground">{skill.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 delay-${index * 100}`}
                              style={{width: `${skill.level}%`}}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Competitive Programming */}
              <Card className="bg-card/80 backdrop-blur-sm border border-border/50 overflow-hidden shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
                    <Terminal className="w-8 h-8 text-tech-orange" />
                    Competitive Programming & Problem Solving
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { title: 'LeetCode', subtitle: '125+ Problems', icon: <Code className="w-8 h-8" />, gradient: 'from-yellow-500 to-orange-600' },
                      { title: 'Data Structures', subtitle: '& Algorithms', icon: <BarChart3 className="w-8 h-8" />, gradient: 'from-blue-500 to-purple-600' },
                      { title: 'System Design', subtitle: '& Architecture', icon: <Network className="w-8 h-8" />, gradient: 'from-emerald-500 to-teal-600' }
                    ].map((item, index) => (
                      <div key={index} className="text-center group">
                        <div className={`p-6 bg-gradient-to-br ${item.gradient} rounded-2xl shadow-lg mb-4 mx-auto w-fit transition-transform duration-300`}>
                          <div className="text-white">
                            {item.icon}
                          </div>
                        </div>
                        <h4 className="font-bold text-foreground text-lg mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.subtitle}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                Recognition & Leadership
              </h2>
              <p className="text-xl text-muted-foreground" style={{fontFamily: 'Manrope, sans-serif'}}>
                Awards and leadership roles that define my journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border border-border/50 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className={`h-2 bg-gradient-to-r ${achievement.gradient}`}></div>
                  <CardContent className="p-8 text-center space-y-4">
                    <div className={`p-4 bg-gradient-to-br ${achievement.gradient} rounded-2xl shadow-lg mx-auto w-fit transition-transform duration-300`}>
                      <div className="text-white">
                        {achievement.icon}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs text-muted-foreground border-border">
                        {achievement.category} • {achievement.year}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                      <p className="text-tech-blue text-sm">{achievement.subtitle}</p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                Let's Build the Future Together
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{fontFamily: 'Manrope, sans-serif'}}>
                Ready to collaborate on innovative projects and create extraordinary digital experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    {[
                      { icon: <Mail className="w-6 h-6" />, label: "Email", value: "yd.madaiyar@gmail.com", href: "mailto:yd.madaiyar@gmail.com", gradient: "from-tech-blue to-tech-cyan" },
                      { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+91 7900076161", href: "tel:+917900076161", gradient: "from-tech-purple to-tech-pink" },
                      { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "Mumbai, Maharashtra, India", href: "#", gradient: "from-tech-emerald to-tech-teal" }
                    ].map((contact, index) => (
                      <a key={index} href={contact.href} className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:bg-card/70 transition-all duration-300 group">
                        <div className={`p-3 bg-gradient-to-r ${contact.gradient} rounded-lg shadow-lg transition-transform duration-300`}>
                          <div className="text-white">
                            {contact.icon}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{contact.label}</div>
                          <div className="text-muted-foreground">{contact.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Connect Online</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://linkedin.com/in/yash-madaiyar" },
                      { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/YDM07" },
                      { icon: <Code className="w-5 h-5" />, label: "LeetCode", href: "https://leetcode.com/u/YDM10" }
                    ].map((social, index) => (
                      <Button key={index} variant="outline" className="border-2 border-border/50 hover:border-blue-600/40 hover:bg-blue-600/5 transition-all duration-300" asChild>
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          {social.icon}
                          <span className="ml-2">{social.label}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Ready to Collaborate?</CardTitle>
                  <CardDescription className="text-muted-foreground text-lg">
                    I'm actively seeking full-time opportunities in AI/ML Engineering, Data Science, and Full-Stack Development. 
                    Let's discuss how I can contribute to your team's success and drive innovation together.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-6" asChild>
                      <a href="mailto:yd.madaiyar@gmail.com">
                        <Mail className="w-5 h-5 mr-2" />
                        Send Email
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full border-2 border-purple-600/20 hover:border-purple-600/40 hover:bg-purple-600/5 transition-all duration-300 text-lg py-6" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FileText className="w-5 h-5 mr-2" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted/30 border-t border-border py-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-2">
              <p className="text-muted-foreground">&copy; 2025 Yash Deepal Madaiyar. All rights reserved.</p>
              <p className="text-sm text-muted-foreground">Crafted with React, Tailwind CSS, and a passion for innovation</p>
            </div>
          </div>
        </footer>

        <style>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}</style>
      </div>
    </div>
  );
}