
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  AlertCircle, 
  Check, 
  CheckCheck, 
  MessageCircle, 
  Smartphone 
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";

const WhatsappAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const handleSendCode = () => {
    if (!phoneNumber || phoneNumber.length < 9) {
      toast({
        title: "Número inválido",
        description: "Por favor, introduce un número de teléfono válido",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulación de envío de código
    setTimeout(() => {
      toast({
        title: "Código enviado",
        description: `Hemos enviado un código de verificación a tu WhatsApp (${phoneNumber})`,
      });
      setIsLoading(false);
      setStep(2);
    }, 2000);
  };

  const handleVerifyCode = () => {
    if (!verificationCode || verificationCode.length < 4) {
      toast({
        title: "Código inválido",
        description: "Por favor, introduce el código de verificación completo",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulación de verificación de código
    setTimeout(() => {
      // Para fines de demostración, consideraremos válido cualquier código de 6 dígitos
      if (verificationCode.length === 6 && !isNaN(Number(verificationCode))) {
        toast({
          title: "Verificación exitosa",
          description: "Tu número de WhatsApp ha sido verificado correctamente",
        });
        setStep(3);
      } else {
        toast({
          title: "Código incorrecto",
          description: "El código de verificación no es válido. Inténtalo de nuevo.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="page-container">
      <div className="flex flex-col gap-6 max-w-md mx-auto">
        <div>
          <h1 className="page-title">Conexión con WhatsApp</h1>
          <p className="text-muted-foreground">Conecta tu número de WhatsApp para gestionar tu negocio</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Verificación de WhatsApp</CardTitle>
            <CardDescription>
              Vincula tu número de WhatsApp para poder enviar facturas, presupuestos y gestionar gastos desde tu móvil
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-yellow-50 text-yellow-800 rounded-lg">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">
                    Necesitamos verificar tu número de WhatsApp para habilitar la funcionalidad completa.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Número de teléfono
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted text-muted-foreground">
                      +34
                    </span>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="600 123 456"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="rounded-l-none"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Introduce tu número de WhatsApp completo sin espacios ni guiones.
                  </p>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-blue-50 text-blue-800 rounded-lg">
                  <MessageCircle className="h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">
                    Hemos enviado un código de verificación a tu WhatsApp. Por favor, introdúcelo a continuación.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="code" className="text-sm font-medium">
                    Código de verificación
                  </label>
                  <Input
                    id="code"
                    type="text"
                    placeholder="123456"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    maxLength={6}
                  />
                  <p className="text-xs text-muted-foreground">
                    Introduce el código de 6 dígitos que has recibido en tu WhatsApp.
                  </p>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-green-50 text-green-800 rounded-lg">
                  <CheckCheck className="h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">¡Verificación completa!</p>
                    <p className="text-sm">
                      Tu número de WhatsApp ha sido verificado correctamente.
                    </p>
                  </div>
                </div>
                
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-5 w-5 text-muted-foreground" />
                      <span>+34 {phoneNumber}</span>
                    </div>
                    <span className="flex items-center gap-1 text-sm text-green-600">
                      <Check className="h-4 w-4" />
                      Verificado
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Próximos pasos</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Envía "HOLA" a nuestro número de WhatsApp para comenzar.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Utiliza los comandos disponibles para gestionar tu negocio.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Todas tus acciones en WhatsApp se sincronizarán automáticamente con la plataforma.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step === 1 && (
              <Button onClick={handleSendCode} disabled={isLoading}>
                {isLoading ? "Enviando..." : "Enviar código de verificación"}
              </Button>
            )}
            
            {step === 2 && (
              <>
                <Button variant="outline" onClick={() => setStep(1)} disabled={isLoading}>
                  Atrás
                </Button>
                <Button onClick={handleVerifyCode} disabled={isLoading}>
                  {isLoading ? "Verificando..." : "Verificar código"}
                </Button>
              </>
            )}
            
            {step === 3 && (
              <div className="flex justify-center w-full">
                <Button variant="outline" asChild>
                  <a href="https://wa.me/34600000000?text=HOLA" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Abrir WhatsApp
                  </a>
                </Button>
              </div>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default WhatsappAuth;
