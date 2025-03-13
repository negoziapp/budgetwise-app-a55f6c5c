
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Datos de ejemplo
const generateMonthlyData = () => {
  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  return months.map((month) => ({
    name: month,
    ingresos: Math.floor(Math.random() * 5000) + 1000,
    gastos: Math.floor(Math.random() * 3000) + 500,
  }));
};

const generateQuarterlyData = () => {
  return [
    { name: "Q1", ingresos: 12500, gastos: 7800 },
    { name: "Q2", ingresos: 14200, gastos: 8100 },
    { name: "Q3", ingresos: 10800, gastos: 6900 },
    { name: "Q4", ingresos: 16500, gastos: 9200 },
  ];
};

export function IncomeExpenseChart() {
  const [period, setPeriod] = useState("monthly");
  const [data, setData] = useState<Array<{name: string, ingresos: number, gastos: number}>>(generateMonthlyData());

  useEffect(() => {
    setData(period === "monthly" ? generateMonthlyData() : generateQuarterlyData());
  }, [period]);

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Ingresos vs Gastos</CardTitle>
          <CardDescription>Comparativa de ingresos y gastos</CardDescription>
        </div>
        <Select
          value={period}
          onValueChange={setPeriod}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Periodo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Mensual</SelectItem>
            <SelectItem value="quarterly">Trimestral</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 0,
                left: -10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis 
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <Tooltip 
                formatter={(value) => [`${value} €`, undefined]}
                labelFormatter={(label) => `${label}`}
              />
              <Legend />
              <Bar dataKey="ingresos" name="Ingresos" fill="#2563eb" radius={[4, 4, 0, 0]} />
              <Bar dataKey="gastos" name="Gastos" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
