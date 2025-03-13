
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  PlusIcon, 
  Search, 
  Download, 
  Filter, 
  MoreVertical 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Tipo para los presupuestos
type Quote = {
  id: string;
  number: string;
  client: string;
  date: string;
  amount: number;
  status: 'aceptado' | 'pendiente' | 'rechazado';
};

// Datos de ejemplo para los presupuestos
const quotesData: Quote[] = [
  { id: '1', number: 'PRE-2023-001', client: 'Empresa ABC SL', date: '10/06/2023', amount: 1500.25, status: 'aceptado' },
  { id: '2', number: 'PRE-2023-002', client: 'Comercial XYZ', date: '22/06/2023', amount: 945.50, status: 'pendiente' },
  { id: '3', number: 'PRE-2023-003', client: 'Distribuciones 123', date: '05/07/2023', amount: 2300.00, status: 'aceptado' },
  { id: '4', number: 'PRE-2023-004', client: 'Tecnología Innovadora', date: '01/07/2023', amount: 4200.75, status: 'pendiente' },
  { id: '5', number: 'PRE-2023-005', client: 'Fabricaciones Metálicas', date: '15/07/2023', amount: 1950.00, status: 'rechazado' },
  { id: '6', number: 'PRE-2023-006', client: 'Transportes Rápidos', date: '28/07/2023', amount: 775.25, status: 'pendiente' },
  { id: '7', number: 'PRE-2023-007', client: 'Suministros Generales', date: '03/08/2023', amount: 1350.50, status: 'aceptado' },
  { id: '8', number: 'PRE-2023-008', client: 'Marketing Online', date: '10/08/2023', amount: 1050.75, status: 'pendiente' },
];

const Quotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>(quotesData);
  const [searchQuery, setSearchQuery] = useState('');

  // Función para filtrar presupuestos basado en la búsqueda
  const filteredQuotes = quotes.filter(quote => 
    quote.client.toLowerCase().includes(searchQuery.toLowerCase()) || 
    quote.number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Función para renderizar el badge de estado
  const renderStatusBadge = (status: Quote['status']) => {
    switch (status) {
      case 'aceptado':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Aceptado</Badge>;
      case 'pendiente':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pendiente</Badge>;
      case 'rechazado':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Rechazado</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Presupuestos</h1>
          <p className="text-muted-foreground">Gestiona todos tus presupuestos generados</p>
        </div>
        <Button variant="default" className="flex items-center gap-2">
          <PlusIcon size={16} />
          <span>Nuevo Presupuesto</span>
        </Button>
      </div>
      
      <Card className="border shadow-sm">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Buscar por cliente o número..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Download size={16} />
                <span>Exportar</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={16} />
                <span>Filtrar</span>
              </Button>
            </div>
          </div>

          {filteredQuotes.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nº Presupuesto</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Importe</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredQuotes.map((quote) => (
                  <TableRow key={quote.id}>
                    <TableCell className="font-medium">{quote.number}</TableCell>
                    <TableCell>{quote.client}</TableCell>
                    <TableCell>{quote.date}</TableCell>
                    <TableCell>{quote.amount.toFixed(2)} €</TableCell>
                    <TableCell>{renderStatusBadge(quote.status)}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
