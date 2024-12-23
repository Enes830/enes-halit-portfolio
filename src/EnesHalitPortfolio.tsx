import { useState } from 'react';
import { 
  Home, 
  Code, 
  Award, 
  Briefcase, 
  Mail, 
  Phone, 
  Linkedin 
} from 'lucide-react';

const EnesHalitPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    'Flutter', 
    'Node.js', 
    'Git', 
    'GitHub', 
    'Agile Methodologies', 
    'Problem Solving',
    'react',
  ];

  const projects = [
    {
      name: 'Laboratory Access System',
      description: 'Innovative access control solution using NFC & QR technologies',
      technologies: ['Flutter', 'Dart', 'QR Code']
    },
    {
      name: 'InternNotify Platform',
      description: 'Web platform connecting students with internship opportunities',
      technologies: ['Node.js', 'React', 'Web Development']
    }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="text-center p-8">
            <img 
              src="assets\photo.jpg"
              alt="Enes Halit" 
              className="rounded-full mx-auto mb-4 w-48 h-48 object-cover border-4 border-blue-500"
            />
            <h1 className="text-3xl font-bold text-blue-800">Enes Halit</h1>
            <p className="text-xl text-gray-600">Software Engineer & Student</p>
            <p className="mt-4 max-w-2xl mx-auto text-gray-700">
              Code wizard 🧙‍♂️ | Mobile & Web Developer | Problem Solver | Turning caffeine into code since 2022
            </p>
          </div>
        );

      case 'skills':
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Professional Skills</h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Notable Projects</h2>
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white shadow-md rounded-lg p-6 mb-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-700">{project.name}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4 flex space-x-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'hobbies':
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Hobbies & Interests</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* <div className="bg-white shadow-md rounded-lg p-6">
                <FootballIcon className="w-12 h-12 text-blue-600 mb-4" />
                <Football className="w-12 h-12 text-blue-600 mb-4" />
                <p className="text-gray-600">Weekend warrior on the football pitch ⚽</p>
              </div> */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <Code className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold">LeetCode Problem Solving</h3>
                <p className="text-gray-600">Coding challenges: where logic meets fun! 🧩</p>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Contact Me</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <a 
                  href="mailto:eneshalit9@gmail.com" 
                  className="text-gray-700 hover:text-blue-800"
                >
                  eneshalit9@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">+905511970526</span>
              </div>
              <div className="flex space-x-4 mt-4">
                {/* <a href="https://github.com/eneshalit" target="_blank" rel="noopener noreferrer">
                  <GitHub className="w-8 h-8 text-gray-700 hover:text-blue-800" />
                </a> */}
                <a href="https://www.linkedin.com/in/eneshalit" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-8 h-8 text-gray-700 hover:text-blue-800" />
                </a>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex">
      <nav className="w-20 bg-blue-800 flex flex-col items-center py-8 space-y-6">
        {[
          { icon: Home, section: 'home', tooltip: 'Home' },
          { icon: Award, section: 'skills', tooltip: 'Skills' },
          { icon: Briefcase, section: 'projects', tooltip: 'Projects' },
          // { icon: FootballIcon, section: 'hobbies', tooltip: 'Hobbies' },
          { icon: Code, section: 'hobbies', tooltip: 'Hobbies' },
        ].map(({ icon: Icon, section, tooltip }) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`p-3 rounded-lg transition-colors ${
              activeSection === section 
                ? 'bg-blue-600 text-white' 
                : 'text-blue-200 hover:bg-blue-700'
            } group relative`}
          >
            <Icon className="w-6 h-6" />
            <span className="absolute left-full ml-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {tooltip}
            </span>
          </button>
        ))}
      </nav>
      
      <main className="flex-1 overflow-y-auto">
        {renderSection()}
      </main>
    </div>
  );
};


export default EnesHalitPortfolio;