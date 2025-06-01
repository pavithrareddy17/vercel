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
          <h1>MITHUN SANJITH</h1>
          <p className="title">Aspiring Software Developer</p>
          <p className="subtitle">Student at Jain (Deemed-to-be University)</p>
        </div>
      </header>
      <Section id="about" title="ABOUT ME">
        <p>Hello! I'm Mithun Sanjith, an aspiring software developer passionate about technology and innovation. Currently pursuing my Computer Science degree at Jain (Deemed-to-be University), I am dedicated to learning and exploring the ever-evolving world of software development.</p>
        <p>From a young age, I’ve been fascinated by how technology shapes the world around us, and this curiosity has driven me to develop a deep understanding of programming languages, algorithms, and system design. I enjoy solving complex problems and building creative solutions that make an impact.</p>
        <p>I have hands-on experience in various technologies such as React.js, Python, Java, and databases like MySQL and MongoDB. I am particularly interested in web development and artificial intelligence, and I thrive when working on projects that involve machine learning, data science, and automation.</p>
        <p>Outside of coding, I’m passionate about continuous learning and enjoy collaborating with like-minded people who share the same enthusiasm for tech. I'm always open to new challenges and believe that collaboration and feedback are key to personal and professional growth.</p>
        <p>If you’re interested in connecting or discussing potential opportunities, feel free to reach out. I’m always excited to collaborate, learn, and create something meaningful!</p>
      </Section>
      <Section id="skills" title="SKILLS">
        <ul className="skills">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>React.js</li>
          <li>Python</li>
          <li>Java</li>
          <li>MYSQL</li>
          <li>MongoDB</li>
        </ul>
      </Section>
      <Section id="projects" title="PROJECTS">
        <div className="project-grid">
          <ProjectCard
            title="CyberAssist AI – Intelligent Cybersecurity Assistant" 
            description="BDeveloped a FastAPI backend integrating GROQ’s LLaMA-3 model to generate context-aware responses based on user queries, leveraging a cybersecurity Q&A dataset. Implemented semantic search using SentenceTransformer to retrieve the most relevant past conversations, significantly improving response accuracy. Designed a responsive web interface using HTML, CSS, and JavaScript to enable seamless, real-time chat interaction with the AI assistant."
            link="https://github.com/mithunsanjith5/CyberAssistant"
          />
          <ProjectCard
            title="Multilingual Neural Machine Translation Web App"
            description="Developed an interactive web application using Streamlit and Hugging Face’s M2M100 model to enable real-time translation across 30+ global and regional languages. The app features dynamic source-target language selection, multilingual tokenization, GPU acceleration (when available), and accurate language code mapping. To enhance usability, it includes session state management, live model loading indicators, language swapping functionality, and options to download translated output—all aimed at delivering a seamless and efficient user experience."
            link="https://github.com/mithunsanjith5/Language-Translation"
          />
          <ProjectCard
            title="E-commerce Platform – Online Shopping Application (Ongoing)"
            description="Developing a full-stack online shopping platform with a focus on delivering a seamless and intuitive user experience, incorporating features such as user authentication, real-time product catalog management, and secure payment gateway integration. The frontend is built using React, with Redux for state management and Axios for efficient API communication."
          />
        </div>
      </Section>
      <Section id="contact" title="Contact">
        <p>Email: mithunsajith5@gmail.com</p>
        <p>Phone: +91 7845651055</p>
        <p>
          <a href="https://www.linkedin.com/in/mithun-sanjith-0a52a0271" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/mithunsanjith5" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </Section>
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} MITHUN SANJITH. All rights reserved.</p>
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
