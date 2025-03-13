
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

const Calendar = () => {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendario</h1>
          <p className="text-muted-foreground">Organiza todas tus actividades</p>
        </div>
        <Button className="flex gap-2 items-center">
          <PlusIcon size={18} />
          <span>Nuevo Evento</span>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Calendario</CardTitle>
          <CardDescription>Programa y visualiza tus eventos y tareas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center p-8 text-muted-foreground">
            Esta sección está en desarrollo. ¡Pronto podrás ver tu calendario completo aquí!
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Calendar;
