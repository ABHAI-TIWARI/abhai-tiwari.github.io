import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  Code,
  Cpu,
  Car,
  Zap,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  ExternalLink
} from 'lucide-react'
import './App.css'

// Import images
import autosarBg from './assets/zcG044AlmCo7.jpeg'
import stm32Board from './assets/EalvHHU8UNFK.jpg'
import ecuDiagram from './assets/hEfxRJ2S46yo.jpg'
import pcbDesign from './assets/ZdcP3e1UBZDb.jpg'
import automotiveSystem from './assets/46uSuMRsUgmS.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    "Programming Languages": ["Embedded C", "Python", "MATLAB", "C++"],
    "AUTOSAR Tools": ["DaVinci Developer", "DaVinci Configurator", "EB Tresos", "Mobilgene Studio"],
    "Vector Tools": ["CANoe", "CANape", "VectorCast"],
    "Microcontrollers": ["STM32F407", "STM32F410", "ESP32", "Arduino", "Raspberry Pi", "Renesas RH850", "ATmega"],
    "Protocols": ["CAN", "LIN", "CAN-FD", "SPI", "I2C", "UART", "Bluetooth", "Wi-Fi", "ZigBee"],
    "Development Tools": ["Git", "Gerrit", "JIRA", "Confluence", "DOORS", "iSystem Debugger", "J-Link", "TRACE32"],
    "RTOS": ["FreeRTOS", "SafeRTOS", "ThreadX"],
    "PCB Design": ["Eagle", "EasyEDA", "Proteus"]
  }

  const experiences = [
    {
      company: "DH Lighting India Pvt Ltd",
      position: "Team Lead",
      duration: "Jan 2024 - Present",
      location: "India",
      responsibilities: [
        "Firmware development for Smart Mood Lamp project",
        "Team recruitment and management",
        "Handling change requests and project coordination"
      ]
    },
    {
      company: "Motherson Innovation Tech Limited",
      position: "Lead Software Engineer",
      duration: "Mar 2023 - Jan 2024",
      location: "India",
      responsibilities: [
        "Firmware development for automotive ECUs",
        "Leading MAN CMS and HKMC CMS projects",
        "Bug fixing and detailed design development",
        "AUTOSAR application layer and BSW development"
      ]
    },
    {
      company: "Motherson Innovation Tech Limited",
      position: "Senior Embedded Software Engineer",
      duration: "Jan 2022 - Mar 2023",
      location: "India",
      responsibilities: [
        "Automotive ECU firmware development",
        "Static code analysis using PcLint",
        "Hands-on with RH850 microcontroller",
        "ECU diagnostics using UDS protocol"
      ]
    },
    {
      company: "Virtual Employee Pvt Ltd",
      position: "Team Lead",
      duration: "Jan 2021 - Jan 2022",
      location: "India",
      responsibilities: [
        "ESP32-IDF programming and LVGL GUI development",
        "Touch screen controller based air sampling pump",
        "PID controller implementation",
        "Sensor interfacing and FreeRTOS integration"
      ]
    },
    {
      company: "StretchSkin Technologies Pte. Ltd.",
      position: "Embedded AI Engineer",
      duration: "Dec 2018 - Feb 2020",
      location: "Singapore",
      responsibilities: [
        "Wearable smart glove development for stroke patients",
        "Machine learning algorithms for pattern recognition",
        "Heat therapy controller with Android app integration",
        "Biomarker capturing wearable device (StretchFit)"
      ]
    }
  ]

  const projects = [
    {
      title: "Smart Mood Lamp",
      company: "DH Lighting India",
      description: "Advanced firmware development for intelligent lighting solutions with mood-based controls.",
      technologies: ["Embedded C", "Microcontroller Programming", "IoT"]
    },
    {
      title: "MAN CMS & HKMC CMS",
      company: "Motherson Innovation",
      description: "Automotive ECU development with AUTOSAR compliance, diagnostics, and real-time systems.",
      technologies: ["AUTOSAR", "DaVinci", "CANoe", "RH850", "UDS"]
    },
    {
      title: "Wearable Smart Glove",
      company: "StretchSkin Technologies",
      description: "AI-powered wearable device for stroke patient rehabilitation with machine learning pattern recognition.",
      technologies: ["Machine Learning", "Embedded AI", "Wearable Tech", "Pattern Recognition"]
    },
    {
      title: "Real-time Water Quality Monitoring",
      company: "CSIR-CEERI",
      description: "Wireless embedded multi-sensor system for RO plant monitoring with cloud integration.",
      technologies: ["IoT", "Firebase", "Android Development", "Sensor Integration"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-purple-200/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-purple-600">
                Abhai Tiwari
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSection === item
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 hover:text-purple-700'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md border-t border-purple-200/50">
              {['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium w-full text-left transition-all duration-300 ${
                    activeSection === item
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 hover:text-purple-700'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${autosarBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/80 via-purple-50/80 to-indigo-100/80" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <img src="/abhai-tiwari/blob/main/src/assets/IMG_3592.jpeg" alt="Abhai Tiwari" className="w-48 h-48 rounded-full mx-auto mb-6 object-cover" />
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-purple-700">
                Abhai Tiwari
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-pink-600 font-normal mt-2">
                Embedded Systems Engineer
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              8+ Years of expertise in AUTOSAR, Automotive ECUs, and Embedded AI Solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-purple-300 text-purple-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent px-8 py-3 text-lg transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2 text-purple-500" />
                Faridabad, India
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-purple-500" />
                +91-7838049750
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-purple-500" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/70 backdrop-blur-sm border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Passionate Embedded Systems Engineer with 8 years of comprehensive experience in the automotive industry, 
                    research institutes, and innovative startups. Specialized in AUTOSAR development, automotive ECU programming, 
                    and cutting-edge embedded AI solutions.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    My expertise spans across the entire embedded systems development lifecycle, from hardware design and 
                    PCB development to firmware programming and system integration. I have successfully led teams and 
                    delivered complex projects in automotive, IoT, and wearable technology domains.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Award className="h-6 w-6 text-purple-500 mr-3" />
                      <span className="text-gray-700 font-medium">8+ Years Experience</span>
                    </div>
                    <div className="flex items-center">
                      <Car className="h-6 w-6 text-purple-500 mr-3" />
                      <span className="text-gray-700 font-medium">AUTOSAR Expert</span>
                    </div>
                    <div className="flex items-center">
                      <Cpu className="h-6 w-6 text-purple-500 mr-3" />
                      <span className="text-gray-700 font-medium">Embedded AI</span>
                    </div>
                    <div className="flex items-center">
                      <Code className="h-6 w-6 text-purple-500 mr-3" />
                      <span className="text-gray-700 font-medium">Team Leadership</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src={stm32Board} 
                alt="STM32 Development Board" 
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border border-purple-200/50"
              />
              <img 
                src={ecuDiagram} 
                alt="ECU Diagram" 
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border border-purple-200/50"
              />
              <img 
                src={pcbDesign} 
                alt="PCB Design" 
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border border-purple-200/50"
              />
              <img 
                src={automotiveSystem} 
                alt="Automotive System" 
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border border-purple-200/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-gray-800 text-xl">{exp.position}</CardTitle>
                      <CardDescription className="text-purple-600 text-lg font-medium">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                      <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
                        {exp.duration}
                      </Badge>
                      <p className="text-gray-500 text-sm mt-1">{exp.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <Zap className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-gray-800 text-lg flex items-center">
                    <Code className="h-5 w-5 text-purple-500 mr-2" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200 border-purple-200 transition-all duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-4">
              Key Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <CardTitle className="text-gray-800 text-xl group-hover:text-purple-600 transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-purple-600 font-medium">
                    {project.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="border-purple-300 text-purple-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-4">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/70 backdrop-blur-sm border-purple-200/50 shadow-lg mb-8">
              <CardHeader>
                <div className="flex items-center">
                  <GraduationCap className="h-8 w-8 text-purple-500 mr-4" />
                  <div>
                    <CardTitle className="text-gray-800 text-xl">Bachelor of Technology (B.Tech)</CardTitle>
                    <CardDescription className="text-purple-600 text-lg">
                      Electronics and Instrumentation Engineering
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700"><strong>Institution:</strong> IIMT College of Engineering</p>
                    <p className="text-gray-700"><strong>University:</strong> Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
                  </div>
                  <div>
                    <p className="text-gray-700"><strong>Duration:</strong> Aug 2012 - Jun 2016</p>
                    <p className="text-gray-700"><strong>Grade:</strong> 70.5%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-purple-200/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-800 text-xl flex items-center">
                  <BookOpen className="h-6 w-6 text-purple-500 mr-3" />
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">Machine Learning</Badge>
                    <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">Python Programming</Badge>
                    <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">PCB Design (Eagle & Proteus)</Badge>
                  </div>
                  <div className="space-y-2">
                    <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">MATLAB AUTOSAR</Badge>
                    <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">Embedded Coder</Badge>
                    <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">EB Tresos AUTOSAR</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-gray-700 text-lg mt-6 max-w-2xl mx-auto">
              Ready to collaborate on your next embedded systems project? Let's discuss how my expertise 
              can contribute to your team's success.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/70 backdrop-blur-sm border-purple-200/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800 text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-purple-500 mr-4" />
                    <div>
                      <p className="text-gray-800 font-medium">Email</p>
                      <p className="text-gray-600">abhaytiwari586@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-purple-500 mr-4" />
                    <div>
                      <p className="text-gray-800 font-medium">Phone</p>
                      <p className="text-gray-600">+91-7838049750</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-purple-500 mr-4" />
                    <div>
                      <p className="text-gray-800 font-medium">Location</p>
                      <p className="text-gray-600">Flat A02 Park Elite Premium<br />Sector 84, Faridabad - 121002</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-purple-200/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800 text-xl">Let's Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">
                    I'm always interested in discussing new opportunities, innovative projects, 
                    and collaborations in embedded systems and automotive technology.
                  </p>
                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </Button>
                    <div className="flex space-x-4">
                      <Button variant="outline" className="flex-1 border-purple-300 text-purple-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300">
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                      </Button>
                      <Button variant="outline" className="flex-1 border-purple-300 text-purple-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300">
                        <Github className="mr-2 h-5 w-5" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-100 to-pink-100 border-t border-purple-200/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2025 Abhai Tiwari. All rights reserved. | Embedded Systems Engineer | AUTOSAR Specialist
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

