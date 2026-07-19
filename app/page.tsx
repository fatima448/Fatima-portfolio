"use client";

import Image from "next/image";
import { useState } from "react";

type Project = { name: string; focus: string; tech: string[] };
const projects: Project[] = [
  { name: "SyneMaze EduAI", focus: "AI-assisted learning experience", tech: ["AI", "Education", "Web"] },
  { name: "WeatherWise", focus: "Weather insight application", tech: ["Frontend", "API", "Data"] },
  { name: "ExplainThis", focus: "Concept explanation platform", tech: ["Full-stack", "AI", "UX"] },
  { name: "Acne Detection & Severity Classification", focus: "Computer vision classification project", tech: ["Python", "ML", "Computer Vision"] },
  { name: "Ball-Balancing Robot", focus: "Control systems and embedded engineering", tech: ["Robotics", "Embedded", "Control"] },
  { name: "Oiliness Classification API", focus: "Machine learning prediction API", tech: ["API", "ML", "Backend"] },
  { name: "Brain Tumor Classification", focus: "Medical image classification project", tech: ["Deep Learning", "Python", "Vision"] },
  { name: "Product Recommendation System", focus: "Personalized recommendation engine", tech: ["ML", "Data", "Backend"] },
];
const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return <main>
    <nav className="nav" aria-label="Main navigation"><a className="brand" href="#home">FA<span>.</span></a><div className="nav-links"><a href="#about">About</a><a href="#work">Work</a><a href="#background">Background</a><a className="contact-link" href="#contact">Let&apos;s connect <Arrow /></a></div></nav>
    <section className="hero section" id="home"><div className="hero-copy"><p className="eyebrow">Software Engineering Student · Saudi Arabia</p><h1>Building thoughtful<br /><em>systems</em> for real people.</h1><p className="intro">I&apos;m Fatima Alfurais—an emerging software engineer exploring artificial intelligence, scalable backend systems, and meaningful digital experiences.</p><div className="actions"><a className="button primary" href="#work">Explore my work <Arrow /></a><a className="button text-button" href="#contact">Get in touch</a></div></div><div className="hero-art"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><Image className="hero-image" src="/fatima-hero.png" alt="Illustration of a hijabi software engineer working at a laptop" width={1536} height={1024} priority/><div className="note note-one">curious<br />by design</div><div className="note note-two">01 — 08</div></div></section>
    <section className="section about" id="about"><p className="eyebrow">01 / About</p><div className="split"><h2>Curiosity is where my engineering begins.</h2><div><p>I&apos;m a Software Engineering student drawn to the point where rigorous systems meet useful, human-centred products. I enjoy turning complex problems into clear, considered solutions.</p><p>My interests span artificial intelligence, machine learning, computer vision, backend and full-stack development, software architecture, microservices, and database design.</p></div></div></section>
    <section className="section work" id="work"><div className="section-heading"><div><p className="eyebrow">02 / Selected work</p><h2>Projects in progress,<br />problems in focus.</h2></div><p className="quiet">Screenshots, descriptions, links, and project outcomes will be added as they are available.</p></div><div className="project-grid">{projects.map((project, i) => <article className={`project-card ${expanded === project.name ? "open" : ""}`} key={project.name}><div className="project-visual"><span>Project visual</span><b>{String(i + 1).padStart(2, "0")}</b></div><div className="project-content"><p className="project-number">{String(i + 1).padStart(2, "0")}</p><h3>{project.name}</h3><p>{project.focus}</p><div className="tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div><button aria-expanded={expanded === project.name} onClick={() => setExpanded(expanded === project.name ? null : project.name)}>{expanded === project.name ? "Show less" : "View details"} <Arrow /></button>{expanded === project.name && <div className="details"><p><strong>Contribution:</strong> Project contribution details to be added.</p><p><strong>Links:</strong> GitHub and live-demo links will appear when provided.</p></div>}</div></article>)}</div></section>
    <section className="section skills"><p className="eyebrow">03 / Focus areas</p><div className="skills-layout"><h2>The tools matter.<br />The thinking matters more.</h2><div className="skill-list">{["Artificial Intelligence & Machine Learning", "Computer Vision", "Backend & API Development", "Full-stack Development", "Software Architecture & Microservices", "Database Design"].map((skill, index) => <div key={skill}><span>0{index + 1}</span><p>{skill}</p></div>)}</div></div></section>
    <section className="section background" id="background"><p className="eyebrow">04 / Background</p><div className="timeline"><article><span>Education</span><h3>Software Engineering</h3><p>Student · Institution and graduation details to be added</p></article><article><span>Experience</span><h3>Building foundations</h3><p>Professional experience, internships, and relevant activities to be added</p></article></div></section>
    <section className="contact section" id="contact"><p className="eyebrow">05 / Contact</p><h2>Let&apos;s make something<br /><em>thoughtful.</em></h2><p>Have an opportunity, project, or conversation in mind? I&apos;d love to hear from you.</p><a className="email" href="mailto:your-email@example.com">your-email@example.com <Arrow /></a><p className="placeholder">Email, GitHub, and LinkedIn links are intentionally shown as placeholders until provided.</p></section><footer><span>© {new Date().getFullYear()} Fatima Alfurais</span><span>Designed with intention</span></footer>
  </main>;
}
