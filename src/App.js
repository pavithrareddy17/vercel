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
        <p>I'm Pavithra Veluru, a motivated and eager Computer Science postgraduate in the field of IoT from Jain University, Bengaluru. With a CGPA of 9.2 and a good track record of studies during my academic tenure, I have developed a strong foundation in both theoretical and practical sides of computer science. My areas of interest are AI, IoT, cloud computing, and full-stack development, and I enjoy developing innovative solutions to real-world problems.</p>
        <p>My educational and project experiences demonstrate strong dedication to ongoing learning and practical implementation. My most effective project is the AI Educational Chatbot, constructed using the OpenAI API (Ollama/Mistral model) with Flask as the backend. I managed backend logic, real-time prompt evaluation, and maintenance of fluid multi-turn dialogues. The system is designed with educational settings in mind and implements leading-edge LLM technologies to provide smart, adaptive answers.</p>
        <p>In another exemplary project, I designed an IoT-based Smart Blind Stick as part of a team project. This prototype helps the visually impaired navigate their environment through the use of sensors and built-in technology. The project focused on empathetic design and the significant impact IoT can have in improving accessibility.</p>
        <p>My research project on an Implantable Sensor System with Solar Harvester investigates subcutaneous solar energy harvesting for wireless implantable medical devices. This captures my interest in fusing IoT with healthy and environmentally friendly applications, extending the potential of what embedded systems can do in medicine.</p>
        <p>Personally, I interned at Ellucian as a Cloud Intern, working on an ML-based incident management system. Using AWS Lambda and AWS Bedrock with LLMs such as Llama 3.2, I developed proactive and reactive modules that forecasted incidents, recounted previous cases, and suggested best-response recommendations. A React-based single dashboard simplified workflows, decreasing incident resolution time by as much as 30%. We also integrated Slack APIs to automate war room setup and team assignments—showcasing my skill to incorporate AI, cloud, and automation to develop enterprise-grade tools.</p>
        <p>At Rural Handmade, where I interned in IoT, I optimized supply chain remote monitoring, dealt with sensor-based inventory management, and blogged on upcoming IoT trends. This experience cemented my knowledge of scalable, real-world IoT implementation.</p>
        <p>My technical toolkit includes Python, Java, Flask, FastAPI, MySQL, React, HTML/CSS, Arduino, and AWS services like Lambda and Bedrock. I’m equally comfortable working on embedded systems or scalable web platforms. I’ve also gained leadership experience as the Social Media Lead for the ZIGBEE Club for IoT, and contributed to event management and community engagement.</p>
        <p>What sets me apart is my multidisciplinary approach—blending AI, cloud, IoT, and full-stack development—to create projects that are not only technically robust but also socially relevant. I’m always eager to learn, adapt, and contribute to impactful solutions, whether in a team setting or independently.</p>
        <p>You are welcome to check out my LinkedIn and GitHub to see my projects, code contributions, and collaborations. I hope to be part of innovative teams where I can keep on growing and making a difference through technology.</p>
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
          <li>OpenAI API</li>
          <li>LLaMA 3.2</li>
          <li>Arduino</li>
          <li>Sensors</li>
          <li>Flask</li>
          <li>Fast API</li>
          <li>AWS services-lambda</li>
          <li>AWS services-Bedrock</li>
          <li>Embedded Systems</li>
          <li>Network Security</li>
        </ul>
      </Section>
      <Section id="projects" title="PROJECTS">
        <div className="project-grid">
          <ProjectCard
            title="AI Chatbot using OpenAI API and Flask" 
            description="In this project, I designed and implemented an AI-powered educational assistant chatbot using the OpenAI API, specifically integrating the Ollama framework with the Mistral language model. The backend was built using Flask, where I handled the complete API integration and core application logic. The chatbot supports dynamic, multi-turn conversations in real-time, responding intelligently to user prompts. The primary focus was on providing accurate, context-aware educational assistance to students, making learning more interactive and efficient. I also emphasized scalable architecture, ensuring the system could handle multiple sessions smoothly. This project deepened my understanding of natural language processing, API orchestration, and real-time communication systems.
"
            link="https://github.com/mithunsanjith5/CyberAssistant"
          />
          <ProjectCard
            title="Implantable Sensor System with Solar Harvester for IoT Healthcare"
            description="This ongoing research-based project explores the feasibility and development of a subcutaneous implantable sensor system powered by solar energy harvesting. The goal is to create a self-powered wireless sensor platform that can monitor patient health parameters without frequent battery replacements—ideal for long-term medical applications. I’m working on both the prototype development and academic research paper. The system includes low-power embedded sensors that communicate wirelessly and harvest energy from light beneath the skin. It combines embedded systems, power-efficient design, and biomedical IoT, showcasing my interest in merging technology with sustainable healthcare innovation."
            link="https://github.com/mithunsanjith5/Language-Translation"
          />
          <ProjectCard
            title="IoT-based Smart Blind Stick"
            description="This team project involved designing and building a smart assistive device for visually impaired individuals to enhance their mobility and safety. We developed a prototype smart stick embedded with ultrasonic sensors to detect obstacles in the environment and alert users through vibrations. The stick can sense objects at various distances and directions, providing real-time feedback. Additionally, it integrates with GPS for navigation and location tracking features. My contribution included sensor integration, programming the control logic on Arduino, and testing the system in real-world scenarios. This project reinforced my skills in embedded IoT design, sensor interfacing, and user-centric product development."
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
