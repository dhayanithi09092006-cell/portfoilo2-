"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight, BrainCircuit, Code2, Cpu, Github, Linkedin, Mail,
  Smartphone, Globe, Database, Sparkles, GraduationCap, ExternalLink,
  Menu, X, Layers, ScanSearch, LineChart, Gamepad2
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01", title: "Dawnflow", category: "AI-powered mobile application",
    status: "In development", icon: Smartphone,
    description: "A personal growth and productivity app concept built around daily check-ins, habit tracking, progress insights, activity monitoring and AI-assisted guidance.",
    stack: ["Flutter", "Dart", "Firebase", "Android Sensors", "AI integration"]
  },
  {
    number: "02", title: "ASCEND AI", category: "Python productivity prototype",
    status: "CLI prototype", icon: BrainCircuit,
    description: "An earlier command-line productivity prototype with daily check-ins, progress viewing, model training and next-day productivity prediction using activity data.",
    stack: ["Python", "CSV", "Machine Learning"]
  },
  {
    number: "03", title: "AI Engineering Drawing Analyzer", category: "Individual AI / Computer Vision project",
    status: "Project development", icon: ScanSearch,
    description: "An individual project exploring how AI and computer vision can help interpret engineering drawings and extract useful technical information from blueprint images.",
    stack: ["Python", "OpenCV", "Computer Vision", "HTML", "CSS", "JavaScript"]
  },
  {
    number: "04", title: "Stock Market Analyzer", category: "Data analysis / ML project",
    status: "Project exploration", icon: LineChart,
    description: "A stock-market analysis project explored using market data, including Tata stock data, to study price information and analytical workflows.",
    stack: ["Python", "Machine Learning", "Data Analysis"]
  },
  {
    number: "05", title: "Mini E-commerce Frontend", category: "Web development",
    status: "Frontend project", icon: Globe,
    description: "An Amazon-inspired shopping frontend focused on presenting products and creating a familiar e-commerce browsing experience.",
    stack: ["HTML", "CSS", "JavaScript"]
  },
  {
    number: "06", title: "Personal Portfolio Website", category: "Web development",
    status: "Portfolio project", icon: Code2,
    description: "A responsive developer portfolio concept to present technical skills, projects, education and professional interests.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    number: "07", title: "2D Unity Game", category: "Game development",
    status: "Development exploration", icon: Gamepad2,
    description: "A 2D game development project explored using Unity, with an emphasis on core gameplay and interactive design.",
    stack: ["Unity", "C#"]
  },
  {
    number: "08", title: "3D Endless Car Runner", category: "Web-based game development",
    status: "Concept / exploration", icon: Gamepad2,
    description: "A browser-based 3D endless driving game concept explored with Three.js.",
    stack: ["Three.js", "JavaScript", "3D"]
  },
  {
    number: "09", title: "Computer Vision Experiments", category: "AI / Computer Vision",
    status: "Technical experiments", icon: ScanSearch,
    description: "Image-processing experiments covering image reading, preprocessing, edge detection, Local Binary Patterns and corner detection.",
    stack: ["Python", "OpenCV", "Image Processing"]
  },
  {
    number: "10", title: "CNN Image Classification", category: "Deep learning",
    status: "Learning / implementation", icon: Cpu,
    description: "Exploration of convolutional neural networks for image classification and visual pattern learning.",
    stack: ["Python", "CNN", "Deep Learning"]
  },
  {
    number: "11", title: "RNN Video Processing", category: "Deep learning",
    status: "Learning / experimentation", icon: Layers,
    description: "TensorFlow experiments involving synthetic video data generation and recurrent neural network-based video sequence processing.",
    stack: ["Python", "TensorFlow", "RNN"]
  }
];

const skillGroups = [
  { title: "Programming", icon: Code2, skills: ["Python", "JavaScript", "TypeScript", "Dart", "HTML", "CSS"] },
  { title: "Web & Mobile", icon: Smartphone, skills: ["React", "Next.js", "Flutter", "Tailwind CSS", "Flask"] },
  { title: "AI & Data", icon: BrainCircuit, skills: ["Machine Learning", "Computer Vision", "OpenCV", "CNN", "RNN", "Data Analysis"] },
  { title: "Tools & Platforms", icon: Database, skills: ["Firebase", "GitHub", "VS Code", "Unity", "Three.js", "SQLite"] }
];

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } }
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Education", "#education"], ["Contact", "#contact"]];

  return (
    <main>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="nav-wrap">
        <nav className="nav glass">
          <a className="brand" href="#home">DB<span>.</span></a>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </div>
          <a className="nav-cta" href="#contact">Let&apos;s connect <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <section className="hero section" id="home">
        <motion.div className="hero-copy" initial="hidden" animate="show" variants={fade}>
          <div className="eyebrow"><span className="status-dot" /> AI & MACHINE LEARNING STUDENT</div>
          <h1>Hi, I&apos;m <span className="gradient-text">Dhayanithi B.</span><br />I build ideas into <span className="outline-text">digital experiences.</span></h1>
          <p className="hero-lead">An aspiring AI/ML engineer passionate about building practical applications with Python, machine learning, mobile development and web technologies.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button secondary" href="#contact">Get in touch <Mail size={16} /></a>
          </div>
          <div className="hero-meta"><span><MapPinIcon /> India</span><span>Open to learning & opportunities</span></div>
        </motion.div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <div className="profile-card glass">
            <div className="profile-top"><span className="tiny-label">PERSONAL PROFILE</span><Sparkles size={18} /></div>
            <div className="avatar">D<span>B</span></div>
            <h2>Dhayanithi B</h2>
            <p>AI/ML • Development • Innovation</p>
            <div className="profile-tags"><span>Python</span><span>Flutter</span><span>Machine Learning</span></div>
            <div className="profile-bottom"><span>BUILD · LEARN · IMPROVE</span><span className="pulse-dot" /></div>
          </div>
          <div className="float-chip chip-top"><BrainCircuit size={17} /> Artificial Intelligence</div>
          <div className="float-chip chip-bottom"><Code2 size={17} /> Full-stack development</div>
        </motion.div>
      </section>

      <section className="section about-section" id="about">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious mind. Practical builder." />
        <div className="about-grid">
          <motion.div className="about-text glass" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 18 }} viewport={{ once: true }}>
            <p>I&apos;m <strong>Dhayanithi B</strong>, an Artificial Intelligence and Machine Learning engineering student who enjoys exploring how technology can solve everyday problems.</p>
            <p>My interests include machine learning, computer vision, AI-powered applications, mobile app development and modern web experiences. I like learning by building, experimenting with ideas and improving projects step by step.</p>
            <p>My current direction is to grow into an <strong>AI/ML Engineer</strong> while strengthening my software development and problem-solving skills.</p>
          </motion.div>
          <div className="about-stats">
            <div className="stat glass"><span className="stat-icon"><BrainCircuit /></span><strong>AI & ML</strong><small>Core learning focus</small></div>
            <div className="stat glass"><span className="stat-icon"><Code2 /></span><strong>Build-first</strong><small>Learning through projects</small></div>
            <div className="stat glass"><span className="stat-icon"><Sparkles /></span><strong>Always learning</strong><small>Curiosity drives progress</small></div>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <SectionHeading eyebrow="WHAT I WORK WITH" title="Skills & technologies" />
        <div className="skill-grid">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return <motion.div className="skill-card glass" key={group.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="skill-title"><span><Icon size={19} /></span><h3>{group.title}</h3></div>
              <div className="pills">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
            </motion.div>;
          })}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <SectionHeading eyebrow="SELECTED WORK & EXPLORATIONS" title="Projects I’ve explored" />
        <p className="section-intro">A collection of applications, prototypes and technical explorations across AI/ML, web, mobile and game development. Status labels distinguish ongoing work from experiments.</p>
        <div className="project-grid">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return <motion.article className="project-card glass" key={project.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.07 }}>
              <div className="project-top"><span className="project-number">{project.number}</span><span className="project-icon"><Icon size={20} /></span></div>
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="pills project-pills">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
              <div className="project-status">{project.status}</div>
            </motion.article>;
          })}
        </div>
      </section>

      <section className="section education-section" id="education">
        <SectionHeading eyebrow="MY ACADEMIC BACKGROUND" title="Education" />
        <div className="education-card glass">
          <div className="education-icon"><GraduationCap size={27} /></div>
          <div><span className="project-category">UNDERGRADUATE DEGREE</span><h3>B.E. in Artificial Intelligence and Machine Learning</h3><p>Dhanalakshmi College of Engineering</p><small>Affiliated with Anna University</small></div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-card glass">
          <span className="eyebrow">HAVE A PROJECT OR AN IDEA?</span>
          <h2>Let&apos;s create something <span className="gradient-text">meaningful.</span></h2>
          <p>I&apos;m interested in connecting with people, learning from new challenges and exploring opportunities in AI/ML and software development.</p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:your.email@example.com"><Mail size={17} /> Email me</a>
            <a className="social-link" href="https://github.com/yourusername" target="_blank" rel="noreferrer"><Github /> GitHub <ExternalLink size={13} /></a>
            <a className="social-link" href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn <ExternalLink size={13} /></a>
          </div>
          <p className="edit-note">Before publishing: replace the sample email, GitHub and LinkedIn links with your real details.</p>
        </div>
      </section>

      <footer className="footer"><a className="brand" href="#home">DB<span>.</span></a><span>Designed & built by Dhayanithi B</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <motion.div className="section-heading" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <span className="eyebrow">{eyebrow}</span><h2>{title}</h2>
  </motion.div>;
}

function MapPinIcon() {
  return <span aria-hidden="true">⌖</span>;
}
