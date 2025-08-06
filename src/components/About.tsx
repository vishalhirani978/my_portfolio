import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            About Me
          </h2>
          
          <Card className="card-glow p-8 md:p-12 hover-lift">
            <div className="text-lg leading-relaxed space-y-6">
              <p className="text-muted-foreground">
                Vishal Hirani is a passionate AI student pursuing a{" "}
                <span className="text-gradient font-semibold">
                  BSc in Artificial Intelligence
                </span>{" "}
                at Quaid-e-Awam University of Engineering, Science & Technology, Nawabshah.
              </p>
              
              <p className="text-muted-foreground">
                With a strong foundation in both theoretical concepts and practical applications of AI, 
                Vishal enjoys building real-world solutions, designing intelligent systems, and working 
                on innovative projects in the field of{" "}
                <span className="text-gradient font-semibold">
                  machine learning and automation
                </span>.
              </p>
              
              <p className="text-muted-foreground">
                His journey in AI is driven by curiosity and a desire to create technology that makes 
                a meaningful impact. From developing web applications to exploring advanced ML algorithms, 
                Vishal is constantly learning and pushing the boundaries of what's possible with artificial intelligence.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;