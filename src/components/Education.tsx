import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-[hsl(var(--muted)/0.3)]">
      <div className="container mx-auto max-w-4xl">
        <div className="section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Education
          </h2>
          
          <Card className="card-glow p-8 md:p-12 hover-lift">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-r from-[hsl(var(--ai-purple)/0.2)] to-[hsl(var(--ai-blue)/0.2)] rounded-xl">
                <GraduationCap className="w-8 h-8 text-[hsl(var(--ai-purple))]" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-gradient">
                  BSc in Artificial Intelligence
                </h3>
                
                <p className="text-lg text-muted-foreground mb-4">
                  Quaid-e-Awam University of Engineering, Science & Technology
                </p>
                
                <p className="text-muted-foreground">
                  Nawabshah, Sindh, Pakistan
                </p>
                
                <div className="mt-6 p-4 bg-[hsl(var(--muted)/0.5)] rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Focus Areas:</strong> Machine Learning, Deep Learning, Natural Language Processing, 
                    Computer Vision, Data Science, and AI Ethics
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;