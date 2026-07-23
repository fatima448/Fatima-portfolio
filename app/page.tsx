"use client";
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "./data/projects";
const sections = [
  "Home",
  "Projects",
  "Skills",
  "Contact",
] as const;
type Section = (typeof sections)[number];
export default function Home() {
  const [active, setActive] = useState<Section>("Home"),
    [filter, setFilter] = useState("All");
  const shown =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);
  return (
    <main className="shell">
      <div className="app">
        <header>
          <a className="mark" onClick={() => setActive("Home")}>
            FA<span>•</span>
          </a>
          <nav>
            {sections.map((s) => (
              <button
                className={active === s ? "on" : ""}
                onClick={() => setActive(s)}
                key={s}
              >
                {s}
              </button>
            ))}
          </nav>
        </header>
        <section className="viewport">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
            >
              {active === "Home" && <HomeView go={setActive} />}{" "}
              {active === "Projects" && (
                <Projects filter={filter} setFilter={setFilter} list={shown} />
              )}{" "}
              {active === "Skills" && <Skills />}
              {active === "Contact" && <Contact />}
            </motion.div>
          </AnimatePresence>
          <motion.div
            className="guide"
            animate={{ y: [0, -7, 0], rotate: [0, 0.7, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Image
              src="/mascot-guide.png"
              alt="Chibi software engineer guide mascot"
              width={1024}
              height={1024}
            />
          </motion.div>
        </section>
        <footer>
          <span>fatima alfurais</span>
        </footer>
      </div>
    </main>
  );
}
function HomeView({ go }: { go: (s: Section) => void }) {
  return (
    <div className="home">
      <h1>
        Hello, 
        <br/> I&apos;m 
       <em> Fatima ALfurais.</em>
      </h1>
      <p>
        A software engineering student exploring intelligent
        products, robust backends, and thoughtful interfaces.
      </p>
      <button className="cta" onClick={() => go("Projects")}>
        Explore work ↗
      </button>
    </div>
  );
}
function Projects({ filter, setFilter, list }: Readonly<{
  filter: string;
  setFilter: (x: string) => void;
  list: typeof projects;
}>) {
  const cats = [
    "All",
    "Frontend",
    "Full Stack",
    "Artificial Intelligence",
    "Machine Learning",
  ];
  return (
    <div>
      <h2>
        Selected <em>experiments.</em>
      </h2>
      <div className="filters">
        {cats.map((c) => (
          <button
            className={filter === c ? "on" : ""}
            onClick={() => setFilter(c)}
            key={c}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="cards">
        {list.map((p) => (
          <article key={p.name}>
            <span>{p.type}</span>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <small>{p.tech.join(" · ")}</small>
            <footer>
              {p.features}
              <b>GitHub ↗</b>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
function Skills() {
  return (
    <div>
      <h2>
        A toolkit for
        <br />
        <em>thoughtful building.</em>
      </h2>
      <div className="skillgrid">
        {[
          ["Frontend", "React · Next.js · TypeScript"],
          ["Backend", "Node · APIs · FastAPI"],
          ["Data", "PostgreSQL · SQL"],
          ["AI / ML", "Python · TensorFlow · OpenCV"],
          ["Tools", "Git · Docker · Figma"],
          ["DevOps", "CI/CD · Cloud fundamentals"],
        ].map(([a, b]) => (
          <div key={a}>
            <i>✦</i>
            <h3>{a}</h3>
            <p>{b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
function Contact() {
  return (
    <div className="contact">
      <h2>
        Let&apos;s build
        <br />
        <em>something useful.</em>
      </h2>
      <a href="mailto:alfuraisf@gmail.com">alfuraisf@gmail.com ↗</a>
      <div className="links">
        <button>GitHub</button>
        <button>LinkedIn</button>
      </div>
    </div>
  );
}
