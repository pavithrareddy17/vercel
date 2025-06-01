import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import Navbar from './Navbar.js';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const [showNavbar, setShowNavbar] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [darkMode, handleScroll]);

  return (
    <div className="App">
      <Navbar darkMode={darkMode} show={showNavbar} setDarkMode={setDarkMode} />

      <header className="head">
        <div className="container">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
          <h1>VELURU PAVITHRA</h1>
          <p className="title">Aspiring Software Developer</p>
          <p className="subtitle">Student at Jain (Deemed-to-be University)</p>
        </div>
      </header>

      <Section id="about" title="ABOUT ME">
        {/* [About Me Content - Keep your existing text here] */}
        <p>I'm Pavithra Veluru...</p>
      </Section>

      <Section id="skills" title="SKILLS">
        <ul className="skills">
          <li>HTML5</li><li>CSS3</li><li>React.js</li><li>Python</li><li>Java</li>
          <li>MYSQL</li><li>MongoDB</li><li>OpenAI API</li><li>LLaMA 3.2</li>
          <li>Arduino</li><li>Sensors</li><li>Flask</li><li>Fast API</li>
          <li>AWS services-lambda</li><li>AWS services-Bedrock</li>
          <li>Embedded Systems</li><li>Network Security</li>
        </ul>
      </Section>

      <Section id="internships" title="INTERNSHIPS">
        <div className="internship-list">
          <div className="internship">
            <h3>Cloud Intern – Ellucian</h3>
            <p>Worked on an ML-based incident management system using AWS Lambda, Bedrock, and LLMs like LLaMA 3.2. Built proactive/reactive modules that predicted and summarized incidents and recommended best responses. Integrated Slack APIs to automate war rooms. Developed a single dashboard with React to streamline workflows.</p>
          </div>
          <div className="internship">
            <h3>IoT Intern – Rural Handmade</h3>
            <p>Optimized supply chain monitoring and implemented sensor-based inventory management. Published blogs on emerging IoT trends. Gained hands-on experience in scalable real-world IoT systems.</p>
          </div>
        </div>
      </Section>

      <Section id="projects" title="PROJECTS">
        <div className="project-grid">
          <ProjectCard
            title="AI Chatbot using OpenAI API and Flask" 
            description="In this project, I designed and implemented an AI-powered educational assistant chatbot using the OpenAI API..."
            link="https://github.com/mithunsanjith5/CyberAssistant"
          />
          <ProjectCard
            title="Implantable Sensor System with Solar Harvester for IoT Healthcare"
            description="This ongoing research-based project explores the feasibility and development of a subcutaneous implantable sensor system powered by solar energy harvesting..."
            link="https://github.com/mithunsanjith5/Language-Translation"
          />
          <ProjectCard
            title="IoT-based Smart Blind Stick"
            description="This team project involved designing and building a smart assistive device for visually impaired individuals..."
          />
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <p>Email: pavithraveluru2@gmail.com</p>
        <p>Phone: +91 7989257170</p>
        <p>
          <a href="https://www.linkedin.com/in/veluru-pavithra-a79278223" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/pavithrareddy17" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </Section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} VELURU PAVITHRA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const Section = ({ id, title, children }) => (
  <section id={id}>
    <div className="container">
      <h2>{title}</h2>
      {children}
    </div>
  </section>
);

const ProjectCard = ({ title, description, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </a>
);

export default App;
