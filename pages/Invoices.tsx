
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

// Tipo para las facturas
type Invoice = {
  id: string;
  number: string;
  client: string;
  date: string;
  amount: number;
  status: 'pagada' | 'pendiente' | 'impagada';
};

// Datos de ejemplo para las facturas
const invoicesData: Invoice[] = [
  { id: '1', number: 'FAC-2023-001', client: 'Empresa ABC SL', date: '15/06/2023', amount: 1250.50, status: 'pagada' },
  { id: '2', number: 'FAC-2023-002', client: 'Comercial XYZ', date: '28/06/2023', amount: 845.00, status: 'pendiente' },
  { id: '3', number: 'FAC-2023-003', client: 'Distribuciones 123', date: '10/07/2023', amount: 2100.75, status: 'pagada' },
  { id: '4', number: 'FAC-2023-004', client: 'Tecnología Innovadora', date: '05/07/2023', amount: 3750.25, status: 'pendiente' },
  { id: '5', number: 'FAC-2023-005', client: 'Fabricaciones Metálicas', date: '22/07/2023', amount: 1850.00, status: 'pagada' },
  { id: '6', number: 'FAC-2023-006', client: 'Transportes Rápidos', date: '01/08/2023', amount: 675.50, status: 'impagada' },
  { id: '7', number: 'FAC-2023-007', client: 'Suministros Generales', date: '08/08/2023', amount: 1200.00, status: 'pagada' },
  { id: '8', number: 'FAC-2023-008', client: 'Marketing Online', date: '15/08/2023', amount: 950.75, status: 'pendiente' },
];

const Invoices = () => {
  const [invoices, setInvoices] = useState<Invoice[]>(invoicesData);
  const [searchQuery, setSearchQuery] = useState('');

  // Función para filtrar facturas basado en la búsqueda
  const filteredInvoices = invoices.filter(invoice => 
    invoice.client.toLowerCase().includes(searchQuery.toLowerCase()) || 
    invoice.number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Función para renderizar el badge de estado
  const renderStatusBadge = (status: Invoice['status']) => {
    switch (status) {
      case 'pagada':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Pagada</Badge>;
      case 'pendiente':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pendiente</Badge>;
      case 'impagada':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Impagada</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Facturas</h1>
          <p className="text-muted-foreground">Gestiona todas tus facturas emitidas</p>
        </div>
        <Button variant="default" className="flex items-center gap-2">
          <PlusIcon size={16} />
          <span>Nueva Factura</span>
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

          {filteredInvoices.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nº Factura</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Importe</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInvoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.number}</TableCell>
                    <TableCell>{invoice.client}</TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>{invoice.amount.toFixed(2)} €</TableCell>
                    <TableCell>{renderStatusBadge(invoice.status)}</TableCell>
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
              <p className="text-muted-foreground mb-2">No hay facturas disponibles.</p>
              <p className="text-muted-foreground text-sm">Crea una nueva factura haciendo clic en el botón superior.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Invoices;
