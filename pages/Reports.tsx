
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Reports = () => {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Informes</h1>
          <p className="text-muted-foreground">Analiza el rendimiento de tu negocio</p>
        </div>
        <Button className="flex gap-2 items-center">
          <Download size={18} />
          <span>Exportar Informe</span>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Informes Financieros</CardTitle>
          <CardDescription>Visualiza todos los datos importantes de tu negocio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center p-8 text-muted-foreground">
            Esta sección está en desarrollo. ¡Pronto podrás generar informes completos desde aquí!
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
