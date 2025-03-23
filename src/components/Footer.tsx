
import React from 'react';
import { Shield, AlertTriangle, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-lg font-medium">Perth Wildlife</h3>
                <p className="text-xs text-neutral-400">Identifier & Safety Advisor</p>
              </div>
            </div>
            
            <p className="text-sm text-neutral-400">
              A tool to help Perth residents and visitors identify local wildlife and stay safe
              in Australia's unique natural environment.
            </p>
            
            <div className="flex items-center text-xs text-neutral-500">
              <Heart className="h-3 w-3 mr-1 text-primary" />
              <span>Built with care for Perth's community</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary transition-colors duration-200">Wildlife Identification Guide</a>
              </li>
              <li>
                <a href="#safety-tips" className="text-neutral-300 hover:text-primary transition-colors duration-200">Safety Tips</a>
              </li>
              <li>
                <a href="#emergency" className="text-neutral-300 hover:text-primary transition-colors duration-200">Emergency Services</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary transition-colors duration-200">First Aid for Bites & Stings</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary transition-colors duration-200">Conservation Efforts</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Important Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.dpaw.wa.gov.au/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-primary transition-colors duration-200">
                  Department of Biodiversity, Conservation and Attractions
                </a>
              </li>
              <li>
                <a href="https://www.healthywa.wa.gov.au/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-primary transition-colors duration-200">
                  HealthyWA
                </a>
              </li>
              <li>
                <a href="https://www.stjohnwa.com.au/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-primary transition-colors duration-200">
                  St John Ambulance WA
                </a>
              </li>
              <li>
                <a href="https://www.emergency.wa.gov.au/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-primary transition-colors duration-200">
                  Emergency WA
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-neutral-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Perth Wildlife Identifier. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-200 text-sm">
              Terms of Use
            </a>
            <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-200 text-sm">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-neutral-600">
            This app is for educational purposes only. Always seek professional medical advice for wildlife encounters.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
