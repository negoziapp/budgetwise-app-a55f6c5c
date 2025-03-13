
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Copy, 
  Share2, 
  Users 
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Referrals = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  // Información de ejemplo
  const referralData = {
    code: "PYME10",
    url: "https://pymesimplifica.com/r/PYME10",
    discount: "10%",
    totalReferrals: 5,
    activeReferrals: 3,
    savingsGenerated: 120.50
  };

  // Historial de referidos (ejemplo)
  const referralsHistory = [
    { id: 1, name: "Juan Martínez", date: "10/07/2023", status: "Activo", discount: "12.00 €" },
    { id: 2, name: "María López", date: "15/07/2023", status: "Activo", discount: "9.50 €" },
    { id: 3, name: "Carlos Pérez", date: "01/08/2023", status: "Inactivo", discount: "0.00 €" },
    { id: 4, name: "Ana Rodríguez", date: "12/08/2023", status: "Activo", discount: "15.00 €" },
    { id: 5, name: "José García", date: "20/08/2023", status: "Pendiente", discount: "0.00 €" },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    
    toast({
      title: "¡Copiado!",
      description: "Enlace de referido copiado al portapapeles",
    });
    
    setTimeout(() => setCopied(false), 2000);
  };

  const shareReferralLink = () => {
    // Implementar opción de compartir en redes sociales
    // Aquí se podría usar la Web Share API si está disponible
    
    if (navigator.share) {
      navigator.share({
        title: 'Únete a PYME Simplifica',
        text: `Utiliza mi código de referido ${referralData.code} y obtén un descuento del ${referralData.discount}`,
        url: referralData.url,
      });
    } else {
      copyToClipboard(referralData.url);
    }
  };

  return (
    <div className="page-container">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="page-title">Programa de Referidos</h1>
          <p className="text-muted-foreground">Invita a otros autónomos y pymes y gana descuentos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta principal de referidos */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Tu enlace de referido</CardTitle>
              <CardDescription>
                Comparte este enlace con otros autónomos o pymes y ambos obtendréis un {referralData.discount} de descuento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-muted rounded-lg text-center">
                <p className="text-lg font-medium">Tu código de referido es:</p>
                <p className="text-3xl font-bold text-primary my-2">{referralData.code}</p>
                <p className="text-sm text-muted-foreground">
                  Este código ofrece un {referralData.discount} de descuento a tus referidos
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Input 
                    value={referralData.url} 
                    readOnly 
                    className="pr-10"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-0 top-0" 
                    onClick={() => copyToClipboard(referralData.url)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <Button onClick={shareReferralLink} className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  <span>Compartir</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tarjeta de estadísticas */}
          <Card>
            <CardHeader>
              <CardTitle>Tus estadísticas</CardTitle>
              <CardDescription>
                Resumen de tu programa de referidos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total de referidos</span>
                  <span className="font-medium">{referralData.totalReferrals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Referidos activos</span>
                  <span className="font-medium">{referralData.activeReferrals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ahorro generado</span>
                  <span className="font-medium">{referralData.savingsGenerated.toFixed(2)} €</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Historial de referidos */}
        <Card>
          <CardHeader>
            <CardTitle>Historial de referidos</CardTitle>
            <CardDescription>Lista de personas que han usado tu código</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Nombre</th>
                    <th className="text-left py-3 px-2">Fecha</th>
                    <th className="text-left py-3 px-2">Estado</th>
                    <th className="text-right py-3 px-2">Descuento aplicado</th>
                  </tr>
                </thead>
                <tbody>
                  {referralsHistory.map((referral) => (
                    <tr key={referral.id} className="border-b">
                      <td className="py-3 px-2">{referral.name}</td>
                      <td className="py-3 px-2">{referral.date}</td>
                      <td className="py-3 px-2">
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          referral.status === "Activo" 
                            ? "bg-green-100 text-green-800" 
                            : referral.status === "Pendiente" 
                              ? "bg-yellow-100 text-yellow-800" 
                              : "bg-gray-100 text-gray-800"
                        }`}>
                          {referral.status}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-right">{referral.discount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Referrals;
