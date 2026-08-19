import { ArrowUpRight, GitFork, Mail, Network } from "lucide-react";
import type { ReactNode } from "react";
import { SiFigma, SiGit, SiNextdotjs, SiPython, SiReact, SiTensorflow, SiTypescript } from "react-icons/si";
import { projects } from "../data/projects";
import "./ai-design.css";
import "./adjustments.css";
const skills=["React","Next.js","TypeScript","Python","FastAPI","TensorFlow","OpenCV","SQL","Git","Docker","Figma","scikit-learn"];
const skillIcons: Record<string, ReactNode>={React:<SiReact/>,"Next.js":<SiNextdotjs/>,TypeScript:<SiTypescript/>,Python:<SiPython/>,TensorFlow:<SiTensorflow/>,Git:<SiGit/>,Figma:<SiFigma/>};
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const roles=[
  ["AI & Cybersecurity Intern","EARTech","Aug 2026 – Present","Remote","Building practical foundations across AI systems and cybersecurity."],
  ["Software Engineering Intern","Synergy Maze AI","Jul 2026 – Present","On-site","Supporting software development work in an AI-focused team environment."],
  ["Software Engineering Intern","Ebtekar Raqmi","Dec 2025 – May 2026","Remote","Contributed to data analysis, visualization, and model-related development workflows."],
  ["Artificial Intelligence Intern","BLUESENSE","Oct 2025 – Nov 2025","Remote","Completed an AI internship centered on practical machine-learning foundations."],
];
export default function AIDesignPage(){return <main className="editorial-page">
  <header className="header"><a href="#top" className="mark">FA</a><nav><a href="#about">About</a><a href="#work">Projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a></nav><a href="#contact">Contact <ArrowUpRight size={14}/></a></header>
  <section className="hero" id="top"><div><h1>Fatima<br/><em>Alfurais</em></h1></div><div className="intro">I am a software engineering student interested in artificial intelligence, full-stack development, and practical applications of machine learning.<a href="#work">Projects <ArrowUpRight size={17}/></a></div><div className="motif" aria-hidden="true"><i/><i/><i/><i/><b/></div></section>
  <section className="about" id="about"><div><h2>Currently learning</h2><span>How to build reliable AI-powered applications.</span></div></section>
  <section className="work" id="work"><div className="heading"><h2>Things I&apos;ve made.</h2><small>{projects.length} projects</small></div><div className="projects">{projects.map(project=><a key={project.name} href={project.url} target="_blank" rel="noreferrer"><img src={`${basePath}${project.image}`} alt={`${project.name} preview`}/><div><small>{project.type}</small><h3>{project.name}</h3><ArrowUpRight size={19}/></div><p>{project.desc}</p><footer>{project.tech.map(tech=><span key={tech}>{tech}</span>)}</footer></a>)}</div></section>
  <section className="experience" id="experience"><div className="heading"><h2>Places I&apos;ve grown.</h2></div><div className="roles">{roles.map(([title,company,date,place,detail])=><article key={company}><div><h3>{title}</h3><small>{company}</small></div><p>{detail}</p><div><time>{date}</time><small>{place}</small></div></article>)}</div></section>
  <section className="skills" id="skills"><div><h2>My working toolkit.</h2><aside>{skills.map(skill=><span key={skill}>{skillIcons[skill]}{skill}</span>)}</aside></div></section>
  <footer className="contact" id="contact"><div><p>Open to internships, entry-level roles, and project collaboration.</p><h2>Let&apos;s talk about<br/><em>your idea.</em></h2><a href="mailto:alfuraisf@gmail.com">alfuraisf@gmail.com <ArrowUpRight/></a></div><aside><a href="https://github.com/fatima448" target="_blank" rel="noreferrer"><GitFork size={16}/> GitHub</a><a href="https://www.linkedin.com/in/fatima-alfurais?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer"><Network size={16}/> LinkedIn</a><a href="mailto:alfuraisf@gmail.com"><Mail size={16}/> Email</a></aside></footer>
</main>}
