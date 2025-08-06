import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vishalhirani2007@gmail.com",
      href: "mailto:vishalhirani2007@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "vishal-hirani-9a4093331",
      href: "https://www.linkedin.com/in/vishal-hirani-9a4093331"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "vishalhirani978",
      href: "https://github.com/vishalhirani978"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@vishalhirani.777",
      href: "https://www.instagram.com/vishalhirani.777"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[hsl(var(--muted)/0.3)]">
      <div className="container mx-auto max-w-4xl">
        <div className="section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Get In Touch
          </h2>
          
          <Card className="card-glow p-8 md:p-12 text-center hover-lift">
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always interested in new opportunities, collaborations, and conversations 
              about AI and technology. Feel free to reach out!
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="p-6 hover-lift transition-all duration-300 hover:border-[hsl(var(--ai-purple)/0.5)]">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-r from-[hsl(var(--ai-purple)/0.2)] to-[hsl(var(--ai-blue)/0.2)] 
                                       rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-[hsl(var(--ai-purple))]" />
                        </div>
                        
                        <div className="text-left">
                          <p className="font-semibold text-foreground">{contact.label}</p>
                          <p className="text-sm text-muted-foreground truncate">{contact.value}</p>
                        </div>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>
            
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[hsl(var(--ai-purple))] to-[hsl(var(--ai-blue))] 
                         hover:shadow-2xl transition-all duration-300 px-8 py-3 text-lg"
            >
              <a href="mailto:vishalhirani2007@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Send Me an Email
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;