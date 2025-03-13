
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

// Tipo para los gastos
type Expense = {
  id: string;
  number: string;
  provider: string;
  date: string;
  amount: number;
  category: string;
  status: 'pagado' | 'pendiente';
};

// Datos de ejemplo para los gastos
const expensesData: Expense[] = [
  { id: '1', number: 'GAS-2023-001', provider: 'Suministros Oficina', date: '08/06/2023', amount: 350.75, category: 'Material oficina', status: 'pagado' },
  { id: '2', number: 'GAS-2023-002', provider: 'Alquiler local', date: '15/06/2023', amount: 800.00, category: 'Alquiler', status: 'pagado' },
  { id: '3', number: 'GAS-2023-003', provider: 'Electricidad', date: '22/06/2023', amount: 145.50, category: 'Suministros', status: 'pagado' },
  { id: '4', number: 'GAS-2023-004', provider: 'Internet y teléfono', date: '01/07/2023', amount: 89.99, category: 'Telecomunicaciones', status: 'pendiente' },
  { id: '5', number: 'GAS-2023-005', provider: 'Software ERP', date: '05/07/2023', amount: 250.00, category: 'Servicios informáticos', status: 'pendiente' },
  { id: '6', number: 'GAS-2023-006', provider: 'Seguros', date: '12/07/2023', amount: 375.25, category: 'Seguros', status: 'pagado' },
  { id: '7', number: 'GAS-2023-007', provider: 'Asesoría contable', date: '20/07/2023', amount: 300.00, category: 'Servicios profesionales', status: 'pendiente' },
  { id: '8', number: 'GAS-2023-008', provider: 'Gasolina', date: '28/07/2023', amount: 120.50, category: 'Transporte', status: 'pagado' },
];

const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>(expensesData);
  const [searchQuery, setSearchQuery] = useState('');

  // Función para filtrar gastos basado en la búsqueda
  const filteredExpenses = expenses.filter(expense => 
    expense.provider.toLowerCase().includes(searchQuery.toLowerCase()) || 
    expense.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Función para renderizar el badge de estado
  const renderStatusBadge = (status: Expense['status']) => {
    switch (status) {
      case 'pagado':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Pagado</Badge>;
      case 'pendiente':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pendiente</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Gastos</h1>
          <p className="text-muted-foreground">Gestiona todos tus gastos y pagos a proveedores</p>
        </div>
        <Button variant="default" className="flex items-center gap-2">
          <PlusIcon size={16} />
          <span>Nuevo Gasto</span>
        </Button>
      </div>
      
      <Card className="border shadow-sm">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Buscar por proveedor o categoría..." 
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

          {filteredExpenses.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nº Gasto</TableHead>
                  <TableHead>Proveedor</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Importe</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredExpenses.map((expense) => (
                  <TableRow key={expense.id}>
                    <TableCell className="font-medium">{expense.number}</TableCell>
                    <TableCell>{expense.provider}</TableCell>
                    <TableCell>{expense.date}</TableCell>
                    <TableCell>{expense.category}</TableCell>
                    <TableCell>{expense.amount.toFixed(2)} €</TableCell>
                    <TableCell>{renderStatusBadge(expense.status)}</TableCell>
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
              <p className="text-muted-foreground mb-2">No hay gastos disponibles.</p>
              <p className="text-muted-foreground text-sm">Crea un nuevo gasto haciendo clic en el botón superior.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Expenses;
