
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonVariant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link" | "success" | "info" | "warning";
  highlighted?: boolean;
}

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonVariant = "default",
  highlighted = false 
}: PricingCardProps) => {
  return (
    <Card className={`border-0 ${highlighted ? 'shadow-vuexy ring-2 ring-vuexy-primary/20' : 'shadow-vuexy-sm'} relative overflow-hidden`}>
      {highlighted && (
        <div className="absolute top-0 inset-x-0 h-1 bg-vuexy-primary"></div>
      )}
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground">/mes</span>
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>
        <Link to="/register">
          <Button className="w-full mb-6" variant={buttonVariant}>
            Comenzar
          </Button>
        </Link>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <ArrowRight size={16} className="text-vuexy-primary shrink-0 mt-1" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
