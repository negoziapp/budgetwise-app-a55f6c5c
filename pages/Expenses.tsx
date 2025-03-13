
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

const Expenses = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gastos</h1>
          <p className="text-muted-foreground">Controla todos tus gastos</p>
        </div>
        <Button className="flex gap-2 items-center">
          <PlusIcon size={18} />
          <span>Nuevo Gasto</span>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Listado de Gastos</CardTitle>
          <CardDescription>Visualiza y administra tus gastos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center p-8 text-muted-foreground">
            Esta sección está en desarrollo. ¡Pronto podrás gestionar todos tus gastos desde aquí!
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Expenses;
