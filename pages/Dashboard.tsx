
import { StatCard } from "@/components/dashboard/StatCard";
import { IncomeExpenseChart } from "@/components/dashboard/IncomeExpenseChart";
import { 
  TrendingUp, 
  TrendingDown, 
  FileText, 
  FilePlus2, 
  Calculator, 
  BarChart4 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Datos de ejemplo para facturas recientes
  const recentInvoices = [
    { id: "FAC-2023-001", client: "Empresa ABC SL", date: "15/06/2023", amount: 1250.50, status: "Pagada" },
    { id: "FAC-2023-002", client: "Comercial XYZ", date: "28/06/2023", amount: 845.00, status: "Pendiente" },
    { id: "FAC-2023-003", client: "Distribuciones 123", date: "10/07/2023", amount: 2100.75, status: "Pagada" },
  ];

  // Datos de ejemplo para presupuestos recientes
  const recentQuotes = [
    { id: "PRE-2023-001", client: "Empresa ABC SL", date: "10/06/2023", amount: 3450.00, status: "Aceptado" },
    { id: "PRE-2023-002", client: "Innovaciones Tech", date: "05/07/2023", amount: 2700.50, status: "Pendiente" },
    { id: "PRE-2023-003", client: "ServiRapid SL", date: "12/07/2023", amount: 1200.25, status: "Rechazado" },
  ];

  const getStatusBadgeClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "pagada":
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
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="text-muted-foreground mb-6">Bienvenido de nuevo a PYME Simplifica</p>
        </div>

        {/* Tarjetas de estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Ingresos este mes" 
            value="4.250 €" 
            trend={{ value: 12, positive: true }}
            icon={TrendingUp}
            variant="primary"
          />
          <StatCard 
            title="Gastos este mes" 
            value="1.850 €" 
            trend={{ value: 8, positive: false }}
            icon={TrendingDown}
            variant="default"
          />
          <StatCard 
            title="Facturas" 
            value="28" 
            icon={FileText}
            variant="default"
          />
          <StatCard 
            title="Presupuestos" 
            value="15" 
            trend={{ value: 18, positive: true }}
            icon={FilePlus2}
            variant="success"
          />
        </div>

        {/* Gráficos y tablas */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mt-2">
          {/* Gráfico */}
          <div className="lg:col-span-4">
            <IncomeExpenseChart />
          </div>

          {/* Facturas recientes */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-lg">Facturas recientes</CardTitle>
                  <CardDescription>Últimas facturas emitidas</CardDescription>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/invoices">Ver todas</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInvoices.map((invoice) => (
                    <div key={invoice.id} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{invoice.client}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{invoice.id}</span>
                          <span>•</span>
                          <span>{invoice.date}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{invoice.amount.toFixed(2)} €</p>
                        <span className={`inline-block px-2 py-0.5 text-xs rounded-full mt-1 ${getStatusBadgeClass(invoice.status)}`}>
                          {invoice.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Presupuestos recientes */}
        <div className="mt-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-lg">Presupuestos recientes</CardTitle>
                <CardDescription>Últimos presupuestos enviados</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/quotes">Ver todos</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recentQuotes.map((quote) => (
                  <div key={quote.id} className="border rounded-lg p-4 hover:bg-accent transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${getStatusBadgeClass(quote.status)}`}>
                        {quote.status}
                      </span>
                      <p className="font-bold">{quote.amount.toFixed(2)} €</p>
                    </div>
                    <h3 className="font-semibold">{quote.client}</h3>
                    <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                      <span>{quote.id}</span>
                      <span>{quote.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
