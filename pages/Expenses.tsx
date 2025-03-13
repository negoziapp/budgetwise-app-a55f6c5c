
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { 
  ChevronDown, 
  Download, 
  FileText, 
  MoreVertical, 
  Plus, 
  Search, 
  Trash2 
} from "lucide-react";

// Datos de ejemplo
const expenses = [
  { id: "GAS-2023-001", description: "Material de oficina", date: "05/06/2023", amount: 120.50, category: "Suministros" },
  { id: "GAS-2023-002", description: "Servicio de Internet", date: "10/06/2023", amount: 75.00, category: "Servicios" },
  { id: "GAS-2023-003", description: "Gasolina", date: "15/06/2023", amount: 90.75, category: "Transporte" },
  { id: "GAS-2023-004", description: "Alquiler de oficina", date: "01/07/2023", amount: 850.00, category: "Alquiler" },
  { id: "GAS-2023-005", description: "Equipo informático", date: "08/07/2023", amount: 1200.50, category: "Inversiones" },
  { id: "GAS-2023-006", description: "Comida con cliente", date: "15/07/2023", amount: 85.30, category: "Representación" },
  { id: "GAS-2023-007", description: "Facturas teléfono", date: "20/07/2023", amount: 45.00, category: "Servicios" },
  { id: "GAS-2023-008", description: "Publicidad", date: "01/08/2023", amount: 350.00, category: "Marketing" },
];

const categories = [
  "Todos",
  "Suministros",
  "Servicios",
  "Transporte",
  "Alquiler",
  "Inversiones",
  "Representación",
  "Marketing",
];

const Expenses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  const filteredExpenses = expenses.filter(expense => 
    (expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
     expense.id.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === "Todos" || expense.category === selectedCategory)
  );

  const getCategoryBadgeClass = (category: string) => {
    switch (category.toLowerCase()) {
      case "suministros":
        return "bg-blue-100 text-blue-800";
      case "servicios":
        return "bg-purple-100 text-purple-800";
      case "transporte":
        return "bg-green-100 text-green-800";
      case "alquiler":
        return "bg-red-100 text-red-800";
      case "inversiones":
        return "bg-amber-100 text-amber-800";
      case "representación":
        return "bg-pink-100 text-pink-800";
      case "marketing":
        return "bg-cyan-100 text-cyan-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="page-container">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="page-title">Gastos</h1>
            <p className="text-muted-foreground">Gestiona todos tus gastos</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus size={18} />
            <span>Nuevo Gasto</span>
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative w-full md:w-auto md:min-w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar gasto..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-9">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9">
                      {selectedCategory}
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {categories.map((category) => (
                      <DropdownMenuItem 
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Referencia</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead className="text-right">Importe</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredExpenses.length > 0 ? (
                  filteredExpenses.map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell className="font-medium">{expense.id}</TableCell>
                      <TableCell>{expense.description}</TableCell>
                      <TableCell>{expense.date}</TableCell>
                      <TableCell>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${getCategoryBadgeClass(expense.category)}`}>
                          {expense.category}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">{expense.amount.toFixed(2)} €</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="cursor-pointer">
                              <FileText className="mr-2 h-4 w-4" />
                              <span>Ver detalle</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Eliminar</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                      No se encontraron gastos
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Expenses;
