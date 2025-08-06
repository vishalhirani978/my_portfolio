const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © 2024 Vishal Hirani. Built with passion for AI and technology.
        </p>
        
        <div className="mt-4 flex justify-center space-x-2">
          <span className="w-2 h-2 bg-[hsl(var(--ai-purple))] rounded-full animate-pulse" />
          <span className="w-2 h-2 bg-[hsl(var(--ai-blue))] rounded-full animate-pulse delay-300" />
          <span className="w-2 h-2 bg-[hsl(var(--ai-cyan))] rounded-full animate-pulse delay-700" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;