import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="App">
      <header className="hero">
        <div className="container">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
          <h1>VELURU PAVITHRA</h1>
          <p className="title">Aspiring Software Developer</p>
          <p className="subtitle">Student at Jain (Deemed-to-be University)</p>
        </div>
      </header>

      <section className="about">
        <div className="container">
          <h2>ABOUT ME</h2>
          <p>A dedicated Computer Science Student with a keen understanding of emerging technologies and software. Committed to continuous learning and professional growth, aiming to collaborate with dynamic teams. Passionate about contributing to an organization's success and spreading education for the greater good.</p>
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <h2>SKILLS</h2>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
          </ul>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <h2>PROJECTS</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>AI BANKING CHATBOT</h3>
              <p>Built an intelligent banking Chatbot capable of handling user queries, managing transactions, and providing account insights with secure authentication.</p>
            </div>
            <div className="project-card">
              <h3>AI DRIVEN VIRTUAL HEALTH PREDICTION MODEL</h3>
              <p>Developed a machine learning model to predict lung cancer risk based on patient data, enhancing early diagnosis and clinical decision-making.</p>
            </div>
            <div className="project-card">
              <h3>LANGUAGE TRANSLATION</h3>
              <p>Built a real-time language translation web app using Streamlit and deep learning-based translation APIs for seamless multilingual communication.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h2>Contact</h2>
          <p>Email: mithunsajith5@gmail.com</p>
          <p>Phone: +91 7845651055</p>
          <p>
            <a href="https://www.linkedin.com/in/mithun-sanjith-0a52a0271">LinkedIn</a> | <a href="https://github.com/mithunsanjith5">GitHub</a>
          </p>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 MITHUN SANJITH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
