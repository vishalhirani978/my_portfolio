import { Card } from "@/components/ui/card";
import { Code, Brain, Users, Lightbulb } from "lucide-react";

const Skills = () => {
  const technicalSkills = ["HTML", "CSS", "JavaScript", "Python", "Java", "C"];
  const softSkills = ["Problem-solving", "Communication", "Team collaboration", "Adaptability", "Critical thinking"];

  return (
    <section id="skills" className="py-20 px-6 bg-[hsl(var(--muted)/0.3)]">
      <div className="container mx-auto max-w-6xl">
        <div className="section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <Card className="card-glow p-8 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-[hsl(var(--ai-purple)/0.2)] to-[hsl(var(--ai-blue)/0.2)] rounded-lg">
                  <Code className="w-6 h-6 text-[hsl(var(--ai-purple))]" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">Technical Skills</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
            
            {/* Soft Skills */}
            <Card className="card-glow p-8 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-[hsl(var(--ai-blue)/0.2)] to-[hsl(var(--ai-cyan)/0.2)] rounded-lg">
                  <Brain className="w-6 h-6 text-[hsl(var(--ai-blue))]" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">Soft Skills</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
          
          {/* AI Specializations */}
          <Card className="card-glow p-8 mt-8 hover-lift">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-[hsl(var(--ai-purple)/0.2)] to-[hsl(var(--ai-cyan)/0.2)] rounded-lg">
                  <Lightbulb className="w-6 h-6 text-[hsl(var(--ai-cyan))]" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">AI Specializations</h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {["Machine Learning", "Data Analysis", "AI Prompting", "Automation", "Web Development", "System Design"].map((spec, index) => (
                  <span key={index} className="skill-tag">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;