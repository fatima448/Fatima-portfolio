"use client";

import Link from "next/link";
import { projects } from "../data/projects";

const skills = [
  ["01", "Frontend", "React, Next.js, TypeScript, and responsive interfaces."],
  ["02", "Backend", "Node.js, APIs, FastAPI, and dependable services."],
  ["03", "Data", "PostgreSQL, SQL, and thoughtful data modelling."],
  ["04", "AI / ML", "Python, TensorFlow, OpenCV, and intelligent products."],
];

export default function ScrollablePortfolio() {
  const moveScene = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width - 0.5) * 2}`);
    event.currentTarget.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height - 0.5) * 2}`);
  };

  return (
    <main className="neo-site" onPointerMove={moveScene}>
      <div className="noise" aria-hidden="true" />
      <header className="neo-nav">
        <Link href="/" className="neo-mark">F<span>A</span><i>·</i></Link>
        <nav aria-label="Page sections"><a href="#work">Selected work</a><a href="#skills">Capabilities</a><a href="#contact">Contact</a></nav>
        <Link className="neo-switch" href="/">Classic view <span>↗</span></Link>
      </header>

      <section className="neo-hero" id="home">
        <div className="hero-copy">
          <h1>Ideas with<br /><em>dimension.</em></h1>
          <p className="hero-intro">I&apos;m Fatima Alfurais. I design and build intelligent digital products where clear thinking meets expressive interfaces.</p>
          <div className="hero-actions"><a href="#work" className="neo-button">Explore my work <b>↓</b></a><a href="mailto:alfuraisf@gmail.com" className="text-link">Let&apos;s talk <span>↗</span></a></div>
        </div>
        <div className="hero-scene" aria-hidden="true">
          <div className="scene-grid" />
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="code-window"><div className="window-bar"><i /><i /><i /><span>fatima.tsx</span></div><p><b>const</b> <em>build</em> = () <span>=&gt;</span> &#123;</p><p className="indent"><strong>idea</strong>.<u>ship</u>();</p><p className="indent"><b>return</b> <span>&lt;impact /&gt;</span>;</p><p>&#125;</p></div>
          <div className="git-orbit"><i /><i /><i /><b /></div>
          <div className="code-symbol symbol-one">&lt;/&gt;</div><div className="code-symbol symbol-two">&#123; &#125;</div>
          <p className="scene-note">CODE / CREATE<br />REPEAT</p>
        </div>
        <p className="scroll-cue">Scroll to enter <span>↓</span></p>
      </section>

      <section className="neo-section work-neo" id="work">
        <div className="section-head"><p className="neo-label"><span /> 01 — Selected work</p><h2>Built to be<br /><em>experienced.</em></h2><p>From ML experiments to usable products, each project starts with a real question worth exploring.</p></div>
        <div className="project-stack">
          {projects.map((project, index) => <a className="neo-project" href={project.url} target="_blank" rel="noreferrer" key={project.name}>
            <span className="project-index">0{index + 1}</span><div><p>{project.type}</p><h3>{project.name}</h3></div><p className="project-description">{project.desc}</p><div className="project-meta"><span>{project.tech.join(" / ")}</span><b>↗</b></div>
          </a>)}
        </div>
      </section>

      <section className="neo-section capabilities" id="skills">
        <div className="cap-orb" aria-hidden="true" /><p className="neo-label"><span /> 02 — Capabilities</p><h2>Systems,<br /><em>not just screens.</em></h2>
        <div className="skill-deck">{skills.map(([number, title, description]) => <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><i>✦</i></article>)}</div>
      </section>

      <section className="contact-neo" id="contact">
        <div><p className="neo-label"><span /> 03 — Get in touch</p><h2>Have an idea<br />with <em>potential?</em></h2></div>
        <a href="mailto:alfuraisf@gmail.com">alfuraisf@gmail.com <span>↗</span></a>
      </section>
      <footer className="neo-footer"><span>© {new Date().getFullYear()} Fatima Alfurais</span><span>Designed in 3D space</span><Link href="/">Classic version</Link></footer>
    </main>
  );
}
