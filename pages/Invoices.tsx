
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

const Invoices = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Facturas</h1>
          <p className="text-muted-foreground">Gestiona todas tus facturas</p>
        </div>
        <Button className="flex gap-2 items-center">
          <PlusIcon size={18} />
          <span>Nueva Factura</span>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Listado de Facturas</CardTitle>
          <CardDescription>Visualiza y administra tus facturas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center p-8 text-muted-foreground">
            Esta sección está en desarrollo. ¡Pronto podrás gestionar todas tus facturas desde aquí!
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Invoices;
