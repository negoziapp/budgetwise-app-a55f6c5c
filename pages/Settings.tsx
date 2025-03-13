
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Check, Upload } from "lucide-react";

export default function Settings() {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);

  const handleSave = () => {
    toast({
      title: "Configuración guardada",
      description: "Tus cambios han sido guardados correctamente.",
    });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    
    setUploading(true);
    
    // Simulamos una carga
    setTimeout(() => {
      setUploading(false);
      toast({
        title: "Logo actualizado",
        description: "Tu logo ha sido actualizado correctamente.",
      });
    }, 1500);
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Configuración</h1>
      
      <Tabs defaultValue="perfil" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="perfil">Perfil de Empresa</TabsTrigger>
          <TabsTrigger value="facturacion">Facturación</TabsTrigger>
          <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
          <TabsTrigger value="notificaciones">Notificaciones</TabsTrigger>
        </TabsList>
        
        <TabsContent value="perfil">
          <Card>
            <CardHeader>
              <CardTitle>Información de la Empresa</CardTitle>
              <CardDescription>Actualiza la información de tu empresa o negocio.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nombre de la empresa</Label>
                  <Input id="company-name" defaultValue="Mi Empresa SL" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cif">CIF/NIF</Label>
                  <Input id="cif" defaultValue="B12345678" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Dirección</Label>
                  <Input id="address" defaultValue="Calle Ejemplo 123" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Ciudad</Label>
                  <Input id="city" defaultValue="Madrid" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postal-code">Código Postal</Label>
                  <Input id="postal-code" defaultValue="28001" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" defaultValue="+34 600 123 456" />
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <Label>Logo de la empresa</Label>
                <div className="flex items-center gap-4">
                  <div className="h-24 w-24 bg-muted rounded-md flex items-center justify-center">
                    <img src="/placeholder.svg" alt="Logo" className="h-16 w-16" />
                  </div>
                  <div>
                    <Button variant="outline" size="sm" className="relative" disabled={uploading}>
                      <input
                        type="file"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        accept="image/*"
                        onChange={handleLogoUpload}
                      />
                      <Upload className="h-4 w-4 mr-2" />
                      {uploading ? "Cargando..." : "Subir logo"}
                    </Button>
                    <p className="text-xs text-muted-foreground mt-1">
                      Formatos soportados: JPG, PNG. Máximo 2MB.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave}>Guardar cambios</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="facturacion">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Facturación</CardTitle>
              <CardDescription>Configura tus preferencias para facturas y presupuestos.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="iva">IVA por defecto (%)</Label>
                  <Input id="iva" type="number" defaultValue="21" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="serie">Serie de facturación</Label>
                  <Input id="serie" defaultValue="A" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numeracion">Próximo número</Label>
                  <Input id="numeracion" type="number" defaultValue="1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account">Cuenta bancaria (IBAN)</Label>
                  <Input id="account" defaultValue="ES12 3456 7890 1234 5678 9012" />
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto-iva" className="text-base">Calcular IVA automáticamente</Label>
                  <p className="text-sm text-muted-foreground">Añadir IVA automático en facturas nuevas</p>
                </div>
                <Switch id="auto-iva" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="send-email" className="text-base">Enviar por email automáticamente</Label>
                  <p className="text-sm text-muted-foreground">Enviar facturas por email al generarlas</p>
                </div>
                <Switch id="send-email" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave}>Guardar cambios</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="whatsapp">
          <Card>
            <CardHeader>
              <CardTitle>Conexión con WhatsApp</CardTitle>
              <CardDescription>Configura tu conexión con WhatsApp para enviar y recibir información.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg flex items-center gap-3 mb-4">
                <div className="bg-green-500 rounded-full p-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp conectado</p>
                  <p className="text-sm text-muted-foreground">+34 600 123 456</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="whatsapp-invoices" className="text-base">Recibir facturas por WhatsApp</Label>
                    <p className="text-sm text-muted-foreground">Permite crear facturas enviando fotos por WhatsApp</p>
                  </div>
                  <Switch id="whatsapp-invoices" defaultChecked />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="whatsapp-expenses" className="text-base">Recibir gastos por WhatsApp</Label>
                    <p className="text-sm text-muted-foreground">Permite registrar gastos enviando fotos por WhatsApp</p>
                  </div>
                  <Switch id="whatsapp-expenses" defaultChecked />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="whatsapp-notifications" className="text-base">Notificaciones por WhatsApp</Label>
                    <p className="text-sm text-muted-foreground">Recibe notificaciones importantes por WhatsApp</p>
                  </div>
                  <Switch id="whatsapp-notifications" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between">
              <Button variant="outline">Desconectar WhatsApp</Button>
              <Button onClick={handleSave}>Guardar cambios</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notificaciones">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Notificaciones</CardTitle>
              <CardDescription>Personaliza qué notificaciones quieres recibir y cómo.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Facturas pagadas</p>
                    <p className="text-sm text-muted-foreground">Notificación cuando una factura es marcada como pagada</p>
                  </div>
                  <Switch id="invoices-paid" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Facturas vencidas</p>
                    <p className="text-sm text-muted-foreground">Alerta cuando una factura supera la fecha de vencimiento</p>
                  </div>
                  <Switch id="invoices-overdue" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Presupuestos aceptados</p>
                    <p className="text-sm text-muted-foreground">Notificación cuando un cliente acepta un presupuesto</p>
                  </div>
                  <Switch id="quotes-accepted" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Resumen semanal</p>
                    <p className="text-sm text-muted-foreground">Recibe un resumen semanal de la actividad</p>
                  </div>
                  <Switch id="weekly-summary" />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Nuevos referidos</p>
                    <p className="text-sm text-muted-foreground">Notificación cuando alguien usa tu código de referido</p>
                  </div>
                  <Switch id="new-referrals" defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave}>Guardar cambios</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
