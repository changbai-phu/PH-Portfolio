import { AboutExplorer } from '@/components/about-explorer';
import { ResearchArchitecture } from '@/components/research-architecture';
import { ExperienceWorkflow } from '@/components/experience-workflow';
import { ArrowUpRight, Download, Mail, Code2, Database, Workflow } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

const skills = [
  { icon: Code2, title: 'Applied AI', text: 'LLM applications, RAG, semantic search, embeddings, NLP, Scikit-learn, PyTorch' },
  { icon: Database, title: 'Data & backend', text: 'Python, SQL, PostgreSQL, MongoDB, REST APIs, Airflow, Pandas, NumPy' },
  { icon: Workflow, title: 'Reliable delivery', text: 'Docker, Git, CI/CD, AWS, Linux, Jenkins, integration testing, Splunk, Grafana' },
];
const resume = './Peiqi-Hu-Resume.pdf';
export default function Home() {
  return <div className="portfolio design-a">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header wrap">
      <a href="#" className="wordmark" aria-label="Peiqi Hu home">ph<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#about">About me</a><a href="#work">Projects</a><a href="#experience">Work experience</a><a href="#contact" className="nav-contact">Let’s talk <ArrowUpRight size={15}/></a></nav>
    </header>
    <main id="main">
      <section className="hero wrap">
        <div className="hero-copy"><p className="eyebrow">AI APPLICATIONS & DATA ENGINEER</p>
        <h1 className="hero-name">Peiqi Hu<span>.</span></h1>
        <p className="hero-statement">Making data useful. <em>Making AI practical.</em></p>
        <div className="hero-bottom"><p>I’m an AI applications and data engineer. My background includes production engineering at Bell and a master’s in Communications and Computer Engineering from the University of Toronto. My work connects Python automation, data validation, API testing, and production troubleshooting with independent projects in research-focused AI and automated analytics.</p></div>
        <div className="hero-actions"><a className={`${buttonVariants()} primary-link`} href="#work">Explore my work <ArrowUpRight size={16}/></a><a className="text-link" href={resume} download><Download size={16}/> Download résumé</a></div>
        </div><div className="credentials"><span>Previously at <strong>Bell</strong></span><span>MEng · <strong>University of Toronto</strong></span><span><strong>AWS</strong> Certified Cloud Practitioner</span></div>
      </section>
      <section id="about" className="wrap personal-section" aria-labelledby="about-title">
        <h2 id="about-title" className="about-simple-title">About me</h2>
        <AboutExplorer/>
      </section>
      <section id="work" className="work-section">
        <div className="wrap"><div className="section-heading"><div><p className="eyebrow">02 / SELECTED WORK</p><h2>Selected projects</h2></div><p>Practical projects in applied AI and data engineering.</p></div>
          <article className="project project-research">
            <div className="project-story"><div className="project-meta"><span>01 — APPLIED AI</span><span className="status">In progress</span></div><h3>ResearchCompass</h3><p className="project-subtitle">A modular AI-assisted workflow for exploring, analyzing, and organizing scientific literature.</p>
              <div className="case-story"><h4>The story</h4><p>I started learning quantum computing with IBM Quantum Learning. As I got curious about topics like error correction and quantum communication, I turned to research papers to understand them better. That’s where the idea for ResearchCompass began.</p><h4>The challenge</h4><p>Keeping up with new research while understanding foundational papers is difficult. LLMs can help with exploration, but hallucinations, unsupported claims, and inconsistent reasoning make their answers hard to trust without the original sources.</p><h4>The solution I’m building</h4><p>I’m building a tool that finds relevant papers and answers questions using their content, with links back to the original passages so answers can be checked. Each part can be reused or changed as the project grows. Next, I plan to add answer evaluation, organized notes, reading suggestions, and tools to compare papers and explore possible research gaps.</p></div>
              <div className="tags">{['Python', 'RAG', 'ChromaDB', 'SentenceTransformer', 'Streamlit'].map(t=><span key={t}>{t}</span>)}</div>
              <div className="project-links"><a href="https://github.com/changbai-phu/ResearchCompass" className="repo-link"><Code2 size={16}/> View repository <ArrowUpRight size={15}/></a></div>
            </div>
            <div className="project-visual research-visual" aria-label="ResearchCompass: seven modules, implementation status, and development roadmap"><ResearchArchitecture/></div>
          </article>
          <article className="project project-news">
            <div className="project-story"><div className="project-meta"><span>02 — DATA ENGINEERING</span><span>2026</span></div><h3>News Trend Analyzer</h3><p className="project-subtitle">An automated pipeline for collecting, analyzing, and exploring technology news.</p>
              <div className="case-story"><h4>The story</h4><p>I wanted to find out what was getting popular in technology news. That simple question led me to build News Trend Analyzer, a way to collect articles and explore the topics getting attention.</p><h4>The challenge</h4><p>RSS articles need cleaning and deduplication before they can support useful analysis. The collection, processing, and dashboard services also need to work together reliably.</p><h4>The solution</h4><p>I automated news collection and cleanup with a scheduled Airflow workflow, removing duplicate articles before analyzing their sentiment. Each successful run saves the results to PostgreSQL for exploration in a Streamlit dashboard. Docker packages the services so the project is easier to set up and run.</p></div>
              <div className="tags">{['Python', 'Airflow', 'Docker', 'PostgreSQL', 'Streamlit', 'TextBlob'].map(t=><span key={t}>{t}</span>)}</div>
              <div className="project-links"><a href="https://github.com/changbai-phu/news-trend-analyzer" className="repo-link"><Code2 size={16}/> View repository <ArrowUpRight size={15}/></a><a href="https://github.com/changbai-phu/news-trend-analyzer#demo-screenshots" className="text-link">Demo screenshots <ArrowUpRight size={14}/></a></div>
            </div>
            <div className="project-visual news-visual" aria-label="News analytics workflow"><div className="visual-caption"><span>NEWS TREND ANALYZER</span><span>WORKFLOW</span></div><div className="workflow-rows">{[['01','Collect','Scheduled RSS feeds · Airflow'],['02','Analyze','Clean · deduplicate · sentiment & topics'],['03','Store','Raw & processed data · PostgreSQL'],['04','Explore','Collected news · Streamlit dashboard']].map(([n,t,d])=><div key={n}><span>{n}</span><div><strong>{t}</strong><small>{d}</small></div><ArrowUpRight size={20}/></div>)}</div><div className="visual-footer">ORCHESTRATED WITH AIRFLOW · PACKAGED WITH DOCKER</div></div>
          </article>
        </div>
      </section>
      <section id="experience" className="wrap career-section" aria-labelledby="experience-title"><div className="section-heading"><div><p className="eyebrow">03 / PROFESSIONAL EXPERIENCE</p><h2 id="experience-title">Work experience</h2></div><p>Production engineering, from data validation to release readiness.</p></div>
        <div className="career-layout">
          <article className="role-detail"><div className="role-heading"><div><h3>Technology Specialist</h3><p>Architecture and Engineering · Bell</p></div><span className="role-dates">MAY 2022 — JUL 2024</span></div>

            <div className="role-content"><div className="contributions-panel"><h4 className="accomplishments-label">Key contributions</h4><ul className="career-accomplishments"><li>Developed Python automation for data extraction, processing, and validation, reducing manual investigation time by 40%.</li><li>Analyzed and validated production datasets during system migrations and deployments, investigating inconsistencies across integrated systems.</li><li>Built SQL queries for data validation, issue investigation, and system-change verification.</li><li>Performed API, functional, and integration testing to check service communication and release readiness.</li><li>Investigated production issues through logs and monitoring, documented troubleshooting procedures, and collaborated with cross-functional teams.</li></ul>
            </div><ExperienceWorkflow/></div>
          </article>
        </div>
      </section>
      <section className="wrap toolkit"><div className="section-heading"><h2>A practical toolkit.</h2><p>From the first query to production troubleshooting.</p></div><div className="skill-grid">{skills.map(({icon:Icon,title,text})=><div className="skill" key={title}><Icon size={23}/><h3>{title}</h3><p>{text}</p></div>)}</div></section>
      <section className="wrap education"><p className="eyebrow">04 / EDUCATION & PERSPECTIVE</p><div className="education-grid"><div><span>2020 — 2021</span><h3>University of Toronto</h3><p>Master of Engineering<br/>Communications and Computer Engineering</p></div><div><span>2015 — 2019</span><h3>McMaster University</h3><p>Bachelor of Engineering · with Distinction<br/>Electrical Engineering</p></div><div><span>BEYOND THE DEGREE</span><h3>Always connecting ideas.</h3><p>AWS Certified Cloud Practitioner · Nov 2025<br/>English (fluent) · Mandarin (native)</p></div></div></section>
      <section id="contact" className="contact-section"><div className="wrap"><p className="eyebrow">05 / LET’S CONNECT</p><h2>Get in touch</h2><div className="contact-bottom"><div className="socials"><a href="mailto:hu.peiqi@outlook.com"><Mail size={17}/> Email <ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/in/peiqihu/"><ArrowUpRight size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href="https://github.com/changbai-phu"><Code2 size={17}/> GitHub <ArrowUpRight size={14}/></a></div></div></div></section>
    </main><footer className="wrap"><span>© 2026 Peiqi Hu</span><span>Thoughtful engineering. Practical impact.</span><a href="#">Back to top ↑</a></footer>
  </div>;
}
