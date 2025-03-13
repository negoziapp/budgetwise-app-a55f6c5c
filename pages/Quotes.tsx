
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
  Share, 
  Trash2 
} from "lucide-react";

// Datos de ejemplo
const quotes = [
  { id: "PRE-2023-001", client: "Empresa ABC SL", date: "10/06/2023", amount: 3450.00, status: "Aceptado" },
  { id: "PRE-2023-002", client: "Innovaciones Tech", date: "05/07/2023", amount: 2700.50, status: "Pendiente" },
  { id: "PRE-2023-003", client: "ServiRapid SL", date: "12/07/2023", amount: 1200.25, status: "Rechazado" },
  { id: "PRE-2023-004", client: "Suministros Generales", date: "20/07/2023", amount: 5800.00, status: "Pendiente" },
  { id: "PRE-2023-005", client: "Desarrollos Web", date: "01/08/2023", amount: 950.50, status: "Aceptado" },
  { id: "PRE-2023-006", client: "Manufacturas Textiles", date: "08/08/2023", amount: 3200.75, status: "Pendiente" },
  { id: "PRE-2023-007", client: "Distribuidora Industrial", date: "15/08/2023", amount: 1600.00, status: "Rechazado" },
  { id: "PRE-2023-008", client: "Consultora Fiscal", date: "22/08/2023", amount: 2400.50, status: "Pendiente" },
];

const Quotes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredQuotes = quotes.filter(quote => 
    quote.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadgeClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "aceptado":
        return "bg-green-100 text-green-800";
      case "pendiente":
        return "bg-yellow-100 text-yellow-800";
      case "rechazado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="page-container">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="page-title">Presupuestos</h1>
            <p className="text-muted-foreground">Gestiona todos tus presupuestos</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus size={18} />
            <span>Nuevo Presupuesto</span>
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative w-full md:w-auto md:min-w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar por cliente o número..."
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
                      <ChevronDown className="h-4 w-4 ml-2" />
                      Filtrar
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Todos</DropdownMenuItem>
                    <DropdownMenuItem>Aceptados</DropdownMenuItem>
                    <DropdownMenuItem>Pendientes</DropdownMenuItem>
                    <DropdownMenuItem>Rechazados</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nº Presupuesto</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead className="text-right">Importe</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredQuotes.length > 0 ? (
                  filteredQuotes.map((quote) => (
                    <TableRow key={quote.id}>
                      <TableCell className="font-medium">{quote.id}</TableCell>
                      <TableCell>{quote.client}</TableCell>
                      <TableCell>{quote.date}</TableCell>
                      <TableCell className="text-right">{quote.amount.toFixed(2)} €</TableCell>
                      <TableCell>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusBadgeClass(quote.status)}`}>
                          {quote.status}
                        </span>
                      </TableCell>
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
                              <span>Ver</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                              <Download className="mr-2 h-4 w-4" />
                              <span>Descargar</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                              <Share className="mr-2 h-4 w-4" />
                              <span>Compartir</span>
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
                      No se encontraron presupuestos
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

export default Quotes;
