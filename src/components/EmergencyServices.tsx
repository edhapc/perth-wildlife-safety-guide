
import React from 'react';
import { Phone, MapPin, AlertTriangle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface EmergencyService {
  name: string;
  description: string;
  phone: string;
  address?: string;
  website?: string;
  hours: string;
}

const emergencyServices: EmergencyService[] = [
  {
    name: 'Royal Perth Hospital',
    description: 'Major trauma center with 24/7 emergency department',
    phone: '(08) 9224 2244',
    address: 'Wellington St, Perth WA 6000',
    website: 'https://www.rph.health.wa.gov.au/',
    hours: 'Open 24 hours'
  },
  {
    name: 'Fiona Stanley Hospital',
    description: 'Full emergency services with specialized toxicology',
    phone: '(08) 6152 2222',
    address: '11 Robin Warren Dr, Murdoch WA 6150',
    website: 'https://www.fsh.health.wa.gov.au/',
    hours: 'Open 24 hours'
  },
  {
    name: 'St John Ambulance',
    description: 'Emergency ambulance services',
    phone: '000',
    website: 'https://stjohnwa.com.au/',
    hours: 'Emergency: 24 hours'
  },
  {
    name: 'Wildcare Helpline',
    description: 'For injured wildlife assistance',
    phone: '(08) 9474 9055',
    website: 'https://www.dpaw.wa.gov.au/about-us/contact-us/wildcare-helpline',
    hours: '9am - 5pm, 7 days'
  },
  {
    name: 'Perth Snake Removal',
    description: 'Professional snake catching and relocation services',
    phone: '0403 600 358',
    website: 'https://perthsnakeremoval.com.au/',
    hours: 'Available 24/7 for emergencies'
  },
  {
    name: 'Poisons Information Centre',
    description: 'Expert advice for all poisonings and bites',
    phone: '13 11 26',
    website: 'https://www.wapoisons.com.au/',
    hours: 'Open 24 hours'
  }
];

const EmergencyServices: React.FC = () => {
  return (
    <section className="py-16 bg-secondary/50" id="emergency">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto animate-fade-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-danger-500/10 text-danger-500 text-xs font-medium mb-4">
            <AlertTriangle className="h-3.5 w-3.5 mr-1.5" />
            <span>Emergency Response</span>
          </div>
          <h2 className="text-3xl font-medium mb-4">Local Emergency Services</h2>
          <p className="text-muted-foreground">
            If you encounter a dangerous animal or experience a bite or sting, these local services can help.
            Always call 000 in life-threatening situations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyServices.map((service, index) => (
            <Card 
              key={service.name} 
              className="glass-card animate-fade-up" 
              style={{ animationDelay: `${index * 50 + 100}ms` }}
            >
              <CardHeader className="pb-2">
                <CardTitle>{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start">
                  <Phone className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">{service.phone}</p>
                  </div>
                </div>
                
                {service.address && (
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                    <p className="text-sm">{service.address}</p>
                  </div>
                )}
                
                <div className="flex items-start">
                  <div className="h-4 w-4 mr-2" /> {/* Spacer for alignment */}
                  <p className="text-xs text-muted-foreground">{service.hours}</p>
                </div>
              </CardContent>
              
              {service.website && (
                <CardFooter className="pt-0">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group glass-button"
                    onClick={() => window.open(service.website, '_blank')}
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
        
        <div className="mt-10 p-6 rounded-xl glass text-center mx-auto max-w-2xl animate-fade-up">
          <h3 className="font-medium text-xl mb-3 flex items-center justify-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-danger-500" />
            Emergency Reminder
          </h3>
          <p className="mb-4">
            In any life-threatening emergency, always call <strong className="text-danger-500">000</strong> immediately.
            For snake or spider bites, seek medical attention as soon as possible.
          </p>
          <Button 
            size="lg" 
            className="bg-danger-500 hover:bg-danger-600 text-white"
            onClick={() => { window.location.href = 'tel:000'; }}
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Emergency Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmergencyServices;
