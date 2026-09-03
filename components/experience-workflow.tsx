'use client';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Database, Code2, CheckCheck, Activity } from 'lucide-react';
const stages = [
  { title: 'Validate data', icon: Database, tools: 'Python · SQL', description: 'Extracted and processed production data, investigated inconsistencies, and checked accuracy during system migrations and deployments.' },
  { title: 'Test integrations', icon: Code2, tools: 'REST APIs · Postman', description: 'Performed API, functional, and integration testing to check service communication, traffic flows, and request/response behavior.' },
  { title: 'Support releases', icon: CheckCheck, tools: 'Validation · Documentation', description: 'Verified system changes, documented validation procedures, and collaborated with cross-functional teams to support release readiness.' },
  { title: 'Investigate issues', icon: Activity, tools: 'Logs · Monitoring', description: 'Used logs and monitoring tools to investigate production issues, identify root causes, and document troubleshooting procedures for operations teams.' },
];
export function ExperienceWorkflow() {
  return <div className="responsibility-explorer"><div className="responsibility-heading"><h4>A closer look at my work</h4><p>Open a responsibility for details.</p></div><Accordion className="responsibility-list">{stages.map(({title,icon:Icon,tools,description},index)=><AccordionItem value={title} key={title} className="responsibility-row"><AccordionTrigger className="responsibility-trigger"><span className="responsibility-number">0{index+1}</span><Icon size={19}/><span className="responsibility-name">{title}</span><span className="responsibility-tools">{tools}</span></AccordionTrigger><AccordionContent className="responsibility-copy"><p>{description}</p></AccordionContent></AccordionItem>)}</Accordion></div>;
}
