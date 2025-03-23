
import React from 'react';
import { cn } from '@/lib/utils';
import { Shield, AlertTriangle, Info, Check, ExternalLink } from 'lucide-react';
import { Species, getDangerLevelColor } from '@/utils/speciesData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface ResultCardProps {
  species: Species;
  confidence: number;
  className?: string;
}

const DangerLevelBadge: React.FC<{ level: Species['dangerLevel'] }> = ({ level }) => {
  const colorClass = getDangerLevelColor(level);
  
  const getIcon = () => {
    switch(level) {
      case 'harmless':
        return <Check className="h-3 w-3" />;
      case 'caution':
        return <Info className="h-3 w-3" />;
      case 'dangerous':
      case 'lethal':
        return <AlertTriangle className="h-3 w-3" />;
      default:
        return null;
    }
  };
  
  return (
    <div className={cn("chip inline-flex items-center gap-1 px-2 py-1", colorClass)}>
      {getIcon()}
      <span className="capitalize">{level}</span>
    </div>
  );
};

const ResultCard: React.FC<ResultCardProps> = ({ species, confidence, className }) => {
  const confidencePercent = (confidence * 100).toFixed(1);
  
  return (
    <Card className={cn("glass-card overflow-hidden animate-fade-up", className)}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={species.imageUrl} 
          alt={species.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <DangerLevelBadge level={species.dangerLevel} />
          <h3 className="text-white text-xl font-medium mt-1">{species.name}</h3>
          <p className="text-white/70 text-xs italic">{species.scientificName}</p>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">{species.name}</CardTitle>
            <CardDescription>{species.category.charAt(0).toUpperCase() + species.category.slice(1)}</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground">Confidence</div>
            <div className="text-lg font-medium">{confidencePercent}%</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <p className="text-sm">{species.description}</p>
        
        <div>
          <h4 className="text-sm font-medium mb-1">Habitat</h4>
          <p className="text-sm text-muted-foreground">{species.habitat}</p>
        </div>
        
        {species.dangerLevel !== 'harmless' && species.firstAid && (
          <>
            <Separator />
            
            <div>
              <div className="flex items-center gap-1 mb-2">
                <Shield className="h-4 w-4 text-danger-500" />
                <h4 className="text-sm font-medium">First Aid</h4>
              </div>
              
              <ul className="text-sm space-y-1">
                {species.firstAid.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-danger-500 mt-0.5">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {species.emergencyAdvice && (
              <div className="bg-danger-50 border border-danger-100 rounded-md p-3">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="h-4 w-4 text-danger-500" />
                  <h4 className="text-sm font-medium text-danger-600">Emergency Advice</h4>
                </div>
                <p className="text-sm text-danger-600">{species.emergencyAdvice}</p>
              </div>
            )}
          </>
        )}
      </CardContent>
      
      <CardFooter className="border-t pt-4">
        <div className="w-full">
          <h4 className="text-sm font-medium mb-2">Safety Tips</h4>
          <ul className="text-sm space-y-1 mb-4">
            {species.safetyTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
          
          {species.dangerLevel !== 'harmless' && (
            <Button className="w-full group" variant="outline">
              <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              Find Local Emergency Services
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
