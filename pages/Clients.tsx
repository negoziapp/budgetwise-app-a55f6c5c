
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

const Clients = () => {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
          <p className="text-muted-foreground">Administra tu cartera de clientes</p>
        </div>
        <Button className="flex gap-2 items-center">
          <PlusIcon size={18} />
          <span>Nuevo Cliente</span>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Listado de Clientes</CardTitle>
          <CardDescription>Todos tus clientes en un solo lugar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center p-8 text-muted-foreground">
            Esta sección está en desarrollo. ¡Pronto podrás gestionar todos tus clientes desde aquí!
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Clients;
