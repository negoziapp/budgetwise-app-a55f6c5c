
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

const Calendar = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Calendario</h1>
          <p className="text-muted-foreground">Gestiona tu agenda y citas programadas</p>
        </div>
        <Button variant="default" className="flex items-center gap-2">
          <PlusIcon size={16} />
          <span>Nuevo Evento</span>
        </Button>
      </div>
      
      <Card className="border shadow-sm">
        <CardContent className="p-6">
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-2">No hay eventos disponibles.</p>
            <p className="text-muted-foreground text-sm">Crea un nuevo evento haciendo clic en el botón superior.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Calendar;
