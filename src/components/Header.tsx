
import React from 'react';
import { cn } from '@/lib/utils';
import { Shield } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full px-6 py-4 glass-card border-b backdrop-blur-md z-10", className)}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 animate-fade-in">
          <Shield className="h-7 w-7 text-primary" />
          <div>
            <h1 className="text-xl font-medium leading-none">Perth Wildlife</h1>
            <p className="text-xs text-muted-foreground">Identifier & Safety Advisor</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#" 
            className="text-sm font-medium hover:text-primary transition-colors duration-200"
          >
            Home
          </a>
          <a 
            href="#safety-tips" 
            className="text-sm font-medium hover:text-primary transition-colors duration-200"
          >
            Safety Tips
          </a>
          <a 
            href="#emergency" 
            className="text-sm font-medium hover:text-primary transition-colors duration-200"
          >
            Emergency Services
          </a>
          <a 
            href="#about" 
            className="text-sm font-medium hover:text-primary transition-colors duration-200"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
