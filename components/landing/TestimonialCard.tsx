
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
}

const TestimonialCard = ({ quote, author, company }: TestimonialCardProps) => {
  return (
    <Card className="border-0 shadow-vuexy-sm">
      <CardContent className="p-6">
        <div className="mb-4 text-vuexy-primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6 4C11.6 4 10.8 6 8.8 8C6.8 10 4 10.8 4 10.8L4.4 14.4C4.4 14.4 7.2 14 10 16.8C12.8 19.6 12.4 22.4 12.4 22.4L16 22.8C16 22.8 16.8 20 18.8 18C20.8 16 23.6 15.2 23.6 15.2L23.2 11.6C23.2 11.6 20.4 12 17.6 9.2C14.8 6.4 15.2 3.6 15.2 3.6L11.6 4Z" fill="currentColor"/>
          </svg>
        </div>
        <p className="italic mb-6">{quote}</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
