
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import PhotoUpload from '@/components/PhotoUpload';
import ResultCard from '@/components/ResultCard';
import SafetyTips from '@/components/SafetyTips';
import EmergencyServices from '@/components/EmergencyServices';
import Footer from '@/components/Footer';
import modelService from '@/utils/modelService';
import { Species } from '@/utils/speciesData';
import { Shield, AlertTriangle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [isIdentifying, setIsIdentifying] = useState(false);
  const [identificationResult, setIdentificationResult] = useState<{
    species: Species | null;
    confidence: number;
  } | null>(null);
  const [isModelLoading, setIsModelLoading] = useState(true);
  
  // Load the model on component mount
  useEffect(() => {
    const loadModel = async () => {
      try {
        await modelService.loadModel();
        setIsModelLoading(false);
        toast.success('Wildlife identification model loaded successfully');
      } catch (error) {
        console.error('Error loading model:', error);
        setIsModelLoading(false);
        toast.error('Failed to load identification model');
      }
    };
    
    loadModel();
  }, []);
  
  const handleImageSelected = async (imageElement: HTMLImageElement, file: File) => {
    try {
      setIsIdentifying(true);
      
      // Slight delay to allow UI to update and show loading state
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const result = await modelService.identifyImage(imageElement);
      
      // Add a slight delay to make the process feel more substantial
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIdentificationResult(result);
      
      if (result.species) {
        if (result.species.dangerLevel === 'dangerous' || result.species.dangerLevel === 'lethal') {
          toast.warning(
            `Warning: ${result.species.name} detected`,
            {
              description: 'This species can be dangerous. Review safety information.',
              icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
              duration: 6000,
            }
          );
        } else {
          toast.success(
            `Identified: ${result.species.name}`,
            { 
              description: `${Math.round(result.confidence * 100)}% confidence`,
              icon: <Info className="h-5 w-5" />,
            }
          );
        }
      } else {
        toast.error('Unable to identify the species');
      }
    } catch (error) {
      console.error('Error identifying image:', error);
      toast.error('An error occurred during identification');
      setIdentificationResult(null);
    } finally {
      setIsIdentifying(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 animate-fade-in">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
                <Shield className="h-3.5 w-3.5 mr-1.5" />
                <span>Perth Wildlife Identifier</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
                Identify & Stay Safe from Perth Wildlife
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Upload a photo to instantly identify local wildlife. Get safety tips and first aid advice for encounters with potentially dangerous species.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#upload-section">
                    Identify Wildlife
                  </a>
                </Button>
                
                <Button size="lg" variant="outline" asChild>
                  <a href="#safety-tips">
                    Safety Tips
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/10 rounded-full blur-xl"></div>
                
                <Card className="glass-card overflow-hidden relative z-10 border-2">
                  <img 
                    src="https://www.dpaw.wa.gov.au/images/plants-animals/animals/living-with-wildlife/snakes_and_lizards/190307%20Dugite%205.jpg" 
                    alt="Perth Wildlife" 
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upload & Result Section */}
      <section className="py-20" id="upload-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-2xl mx-auto animate-fade-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
              <div className="h-2 w-2 rounded-full bg-accent mr-1.5"></div>
              <span>AI-Powered Identification</span>
            </div>
            <h2 className="text-3xl font-medium mb-4">Upload a Wildlife Photo</h2>
            <p className="text-muted-foreground">
              Take or upload a photo of wildlife you've encountered. Our system will identify the species
              and provide valuable safety information.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
              <PhotoUpload 
                onImageSelected={handleImageSelected} 
                isProcessing={isIdentifying}
              />
              
              {isModelLoading && (
                <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-md flex items-center">
                  <div className="h-4 w-4 rounded-full border-2 border-amber-500 border-t-transparent animate-spin mr-3"></div>
                  <p className="text-sm text-amber-800">Loading wildlife identification model...</p>
                </div>
              )}
            </div>
            
            <div className="animate-fade-up" style={{ animationDelay: '150ms' }}>
              {identificationResult?.species ? (
                <ResultCard 
                  species={identificationResult.species} 
                  confidence={identificationResult.confidence} 
                />
              ) : (
                <div className="h-full flex items-center justify-center rounded-xl p-10 glass-card">
                  <div className="text-center max-w-sm">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="h-10 w-10 text-primary opacity-75" />
                    </div>
                    <h3 className="text-2xl font-medium mb-3">
                      Wildlife Identification Results
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Upload a photo of Perth wildlife to see identification results, 
                      danger assessment, and safety information.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#safety-tips">
                        Browse Safety Tips
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Safety Tips Section */}
      <SafetyTips />
      
      {/* Emergency Services Section */}
      <EmergencyServices />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
