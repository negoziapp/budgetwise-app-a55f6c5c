
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

const Quotes = () => {
  // Datos de ejemplo para los presupuestos
  const quotes = [
    // Aquí irían los datos reales de presupuestos cuando los tengamos
  ];

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Presupuestos</h1>
        <Button variant="default" className="flex items-center gap-2">
          <PlusIcon size={16} />
          <span>Nuevo Presupuesto</span>
        </Button>
      </div>
      
      <Card className="border-none shadow-none bg-background">
        <CardContent className="p-0">
          {quotes.length > 0 ? (
            <div className="divide-y">
              {/* Aquí iría el listado de presupuestos */}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-2">No hay presupuestos disponibles.</p>
              <p className="text-muted-foreground text-sm">Crea un nuevo presupuesto haciendo clic en el botón superior.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Quotes;
