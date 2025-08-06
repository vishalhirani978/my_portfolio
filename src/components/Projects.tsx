import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Featured Project
          </h2>
          
          <Card className="card-glow p-8 md:p-12 hover-lift">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gradient">
                  EASY MED
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A comprehensive medical website that allows users to book appointments 
                  online with doctors and healthcare providers. Features a clean, 
                  user-friendly interface designed to streamline the healthcare 
                  appointment process.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {["HTML", "CSS", "JavaScript"].map((tech, index) => (
                    <span key={index} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[hsl(var(--ai-purple))] to-[hsl(var(--ai-blue))] 
                               hover:shadow-lg transition-all duration-300"
                  >
                    <a
                      href="https://vishalhirani978.github.io/EASY-MED-medical-website-/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    asChild
                    className="border-[hsl(var(--ai-purple)/0.5)] hover:bg-[hsl(var(--ai-purple)/0.1)]"
                  >
                    <a
                      href="https://github.com/vishalhirani978/EASY-MED-medical-website-.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-[hsl(var(--ai-purple)/0.1)] to-[hsl(var(--ai-blue)/0.1)] 
                               rounded-lg border border-[hsl(var(--ai-purple)/0.3)] p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-16 h-16 text-[hsl(var(--ai-purple))] mx-auto mb-4 animate-glow-pulse" />
                    <p className="text-muted-foreground">Medical Appointment System</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;