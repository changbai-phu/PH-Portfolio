'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Code2, Database, BookOpen, ArrowUpRight, Plus } from 'lucide-react';

const topics = [
  { id:'background', label:'My background', icon:Code2, number:'01', title:'Engineering, grounded in real systems.', text:'My background spans electrical engineering, communications, and computer engineering. At Bell, I worked with production systems where data accuracy, service integration, and careful troubleshooting were part of the everyday work.', tags:['Electrical engineering','Communications','Production systems'], link:'#experience', action:'Explore my experience' },
  { id:'building', label:'What I build', icon:Database, number:'02', title:'Useful tools for everyday questions.', text:'I’m interested in using AI and data to solve real-life problems I encounter, from making sense of research papers to finding what’s getting popular in technology news. I start with the source data, make each processing step understandable, and test how the pieces work together.', tags:['Applied AI','Data engineering','Practical problems'], link:'#work', action:'Explore my projects' },
  { id:'learning', label:'What I’m learning', icon:BookOpen, number:'03', title:'Following my curiosity into quantum computing.', text:'I’m learning quantum computing, starting with resources like IBM Quantum Learning and digging into research papers. That led me to ResearchCompass, where I’m building a workflow for finding relevant papers and grounding AI-assisted research in source material.', tags:['Quantum computing','Scientific literature','ResearchCompass'], link:'https://changbai-phu.github.io/phx-labs/', action:'Notes on PHX Labs' },
];
export function AboutExplorer() {
  const [hovered,setHovered] = useState<string | null>(null);
  const [focused,setFocused] = useState<string | null>(null);
  const [tapped,setTapped] = useState<string | null>(null);
  return <div className="about-explorer"><p className="about-invitation">Three parts of my story. <span className="story-hover-hint">Hover over a card to read more.</span><span className="story-touch-hint">Tap a card to read more.</span></p><div className="about-story-cards">{topics.map(({id,label,icon:Icon,number,title,text,link,action})=>{
    const open=hovered===id || focused===id || tapped===id;
    return <article className={`about-story-card ${open ? 'is-expanded' : ''}`} key={id} tabIndex={0} aria-label={label}
      onPointerUp={event=>{if(event.pointerType !== 'mouse' && !(event.target as HTMLElement).closest('a, button'))setTapped(tapped===id ? null : id);}}
      onPointerEnter={event=>{if(event.pointerType==='mouse')setHovered(id);}}
      onPointerLeave={event=>{if(event.pointerType==='mouse')setHovered(null);}}
      onFocus={event=>{if(event.target.matches(':focus-visible'))setFocused(id);}}
      onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget))setFocused(null);}}
      onKeyDown={event=>{if(event.key==='Escape'){setHovered(null);setFocused(null);setTapped(null);}}}>
      <div className="story-card-front" aria-hidden={open} inert={open}>
      <div className="story-card-top"><Icon size={23}/><span>{number}</span></div>
      <p className="story-card-label">{label}</p><h3>{title}</h3>
      <Button className="story-card-toggle" tabIndex={-1} aria-label={`Read about ${label.toLowerCase()}`} aria-expanded={open} aria-controls={`story-${id}`} onClick={()=>setTapped(id)}><span className="story-hover-hint">Hover to explore</span><span className="story-touch-hint">Tap to explore</span><Plus size={17} className="story-reveal-icon"/></Button>
      </div>
      <div id={`story-${id}`} aria-hidden={!open} inert={!open} className="story-card-body"><p>{text}</p><a href={link} className="text-link">{action} <ArrowUpRight size={15}/></a><Button className="story-card-toggle story-touch-close" onClick={()=>{setTapped(null);setFocused(null);setHovered(null);}}>Back to card</Button></div>
    </article>;
  })}</div></div>;
}
