"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import type { RoomTarget } from "./RoomScene";


const nav = [
  ["About", "about"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Contact", "contact"],
] as const;
const skillGroups = [
  ["Frontend", "React · Next.js · TypeScript"],
  ["Backend", "Node.js · APIs · FastAPI"],
  ["AI & Machine Learning", "Python · TensorFlow · OpenCV · scikit-learn"],
  ["Databases", "PostgreSQL · SQL"],
  ["DevOps & Tools", "Git · Docker · Figma · CI/CD"],
  ["Programming", "Python · TypeScript · JavaScript"],
];

export default function Portfolio() {
  const go = (target: RoomTarget) =>
    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <main>
      <header className="site-nav">
        <a href="#home" className="brand" aria-label="Fatima Alfurais, home">
          FA<span>•</span>
        </a>
        <nav aria-label="Primary navigation">
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </header>
      <section id="home" className="hero">
        <div className="hero-copy">
          <h1>
            Building ideas
            <br />
            <i>with dimension.</i>
          </h1>
          <p>
            I&apos;m Fatima Alfurais, a software engineering student exploring
            intelligent products, robust backends, and thoughtful interfaces.
          </p>
          <div className="hero-actions">
            <button onClick={() => go("projects")}>
              View projects <span>↓</span>
            </button>
            <button className="quiet-button" onClick={() => go("contact")}>
              Contact me ↗
            </button>
          </div>
      
        </div>
      
      </section>
      <section id="projects" className="content-section">
        <h2>
          Projects with
          <br />
          <i>a real question inside.</i>
        </h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04 }}
            >
              <div className="project-visual">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>
                  Project preview
                  <br />
                  not provided
                </p>
              </div>
              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <ul>
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <p className="project-detail">
                <b>Focus</b>
                {project.features}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name} on GitHub`}
              >
                View on GitHub ↗
              </a>
            </motion.article>
          ))}
        </div>
      </section>
      <section id="skills" className="content-section skills">
        <h2>
          A versatile
          <br />
          <i>building toolkit.</i>
        </h2>
        <div className="skills-grid">
          {skillGroups.map(([title, detail], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="contact" className="contact-section">
        <h2>
          Let&apos;s make something
          <br />
          <i>thoughtful.</i>
        </h2>
        <a className="email" href="mailto:alfuraisf@gmail.com">
          alfuraisf@gmail.com ↗
        </a>
        <p>
          GitHub and LinkedIn links have not been supplied; add them here when
          ready.
        </p>
      </section>
      <footer>
        © {new Date().getFullYear()} Fatima Alfurais{" "}
      </footer>
    </main>
  );
}
