import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Speed Up Data Analysis and Presentation Building",
      provider: "Google (Coursera)",
      verifyLink: "https://coursera.org/verify/C1OCGH68JYFX",
      hasVerify: true
    },
    {
      title: "Google Prompting Essentials Specialization",
      provider: "Google (Coursera)",
      verifyLink: "https://coursera.org/verify/specialization/BAOJ11WVXHUY",
      hasVerify: true
    },
    {
      title: "Start Writing Prompts like a Pro",
      provider: "Google (Coursera)",
      hasVerify: false
    },
    {
      title: "Introduction to AI",
      provider: "Google (Coursera)",
      hasVerify: false
    },
    {
      title: "AI for Beginners",
      provider: "HP",
      hasVerify: false
    },
    {
      title: "Use AI as a Creative or Expert Partner",
      provider: "Google (Coursera)",
      hasVerify: false
    },
    {
      title: "Design Prompts for Everyday Work Tasks",
      provider: "Google (Coursera)",
      hasVerify: false
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Certificates
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="card-glow p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-[hsl(var(--ai-purple)/0.2)] to-[hsl(var(--ai-blue)/0.2)] rounded-lg">
                    <Award className="w-6 h-6 text-[hsl(var(--ai-purple))]" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-foreground">
                      {cert.title}
                    </h3>
                    
                    <Badge variant="secondary" className="mb-3">
                      {cert.provider}
                    </Badge>
                    
                    {cert.hasVerify && (
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[hsl(var(--ai-purple))] hover:text-[hsl(var(--ai-blue))] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Verify Certificate
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;