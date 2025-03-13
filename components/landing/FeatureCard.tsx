
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <Card className="border-0 shadow-vuexy-sm hover:shadow-vuexy transition-shadow group">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg bg-vuexy-primary/10 text-vuexy-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
