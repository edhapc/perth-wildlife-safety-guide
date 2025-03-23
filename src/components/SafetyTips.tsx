
import React from 'react';
import { Shield, AlertTriangle, Phone, Bandage } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const SafetyTips: React.FC = () => {
  return (
    <section className="py-16" id="safety-tips">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto animate-fade-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <Shield className="h-3.5 w-3.5 mr-1.5" />
            <span>Stay Safe in Perth</span>
          </div>
          <h2 className="text-3xl font-medium mb-4">Wildlife Safety Tips</h2>
          <p className="text-muted-foreground">
            Perth's natural environment is home to various wildlife. Here are some general safety tips
            to help you stay safe when encountering local fauna.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="glass-card animate-fade-up" style={{ animationDelay: '100ms' }}>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                Snakes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Keep a safe distance and never approach or attempt to handle snakes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Wear closed shoes and long pants when walking in bushland</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Stay on designated trails and avoid tall grass and dense vegetation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>If you see a snake, back away slowly and allow it to move away</span>
                </li>
              </ul>
              
              <Separator className="my-4" />
              
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <Bandage className="h-4 w-4 mr-1.5 text-danger-500" />
                  If Bitten:
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-danger-500 mt-0.5">•</span>
                    <span>Call 000 immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger-500 mt-0.5">•</span>
                    <span>Keep the victim still and calm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger-500 mt-0.5">•</span>
                    <span>Apply pressure-immobilization bandage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger-500 mt-0.5">•</span>
                    <span>Do not wash the bite or apply a tourniquet</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card animate-fade-up" style={{ animationDelay: '150ms' }}>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                Spiders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Shake out shoes, clothing, and bedding before use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Wear gloves when gardening or moving outdoor items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Check dark corners, storage areas, and under furniture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Keep yard tidy and reduce clutter that provides hiding spots</span>
                </li>
              </ul>
              
              <Separator className="my-4" />
              
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <Bandage className="h-4 w-4 mr-1.5 text-danger-500" />
                  If Bitten:
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-danger-500 mt-0.5">•</span>
                    <span>Apply a cold pack to reduce pain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger-500 mt-0.5">•</span>
                    <span>Seek medical attention, especially for Redback bites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger-500 mt-0.5">•</span>
                    <span>Monitor for symptoms like pain, swelling, or nausea</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card animate-fade-up" style={{ animationDelay: '200ms' }}>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-sm">
                <li>
                  <h4 className="font-medium">Emergency Services</h4>
                  <p className="text-lg font-bold">000</p>
                  <p className="text-muted-foreground">For life-threatening emergencies</p>
                </li>
                
                <li>
                  <h4 className="font-medium">Poisons Information Centre</h4>
                  <p className="text-lg font-bold">13 11 26</p>
                  <p className="text-muted-foreground">For advice on bites and stings</p>
                </li>
                
                <li>
                  <h4 className="font-medium">Wildcare Helpline</h4>
                  <p className="text-lg font-bold">9474 9055</p>
                  <p className="text-muted-foreground">For injured or orphaned wildlife</p>
                </li>
                
                <li>
                  <h4 className="font-medium">Snake Removal Services</h4>
                  <p className="text-muted-foreground">
                    Various private snake catchers operate in the Perth area. Search online for the closest service.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;
