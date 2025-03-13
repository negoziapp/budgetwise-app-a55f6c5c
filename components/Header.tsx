
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { 
  BellIcon, 
  PlusIcon, 
  SearchIcon, 
  MoonIcon, 
  SunIcon, 
  MenuIcon,
  CalendarIcon,
  MailIcon,
  HelpCircleIcon 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="bg-background border-b px-5 flex items-center justify-between h-16 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground lg:hidden">
          <MenuIcon size={20} />
        </SidebarTrigger>
        
        <div className="relative hidden md:flex items-center">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="bg-secondary h-9 pl-9 pr-4 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary w-64"
          />
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Crear Nuevo</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  <Link to="/dashboard/invoices" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Factura</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Crea una nueva factura para tus clientes</p>
                  </Link>
                  <Link to="/dashboard/quotes" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Presupuesto</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Genera un nuevo presupuesto para tus clientes</p>
                  </Link>
                  <Link to="/dashboard/expenses" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Gasto</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Registra un nuevo gasto en tu contabilidad</p>
                  </Link>
                  <Link to="/dashboard/clients" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Cliente</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Añade un nuevo cliente a tu base de datos</p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-muted-foreground hover:text-foreground hidden md:flex"
        >
          <CalendarIcon size={20} />
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-muted-foreground hover:text-foreground hidden md:flex"
        >
          <MailIcon size={20} />
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-muted-foreground hover:text-foreground"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
              <BellIcon size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                5
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="font-normal">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Notificaciones</span>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-xs text-primary">
                  Marcar todas como leídas
                </Button>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-y-auto">
              <DropdownMenuItem className="p-0 focus:bg-transparent">
                <Link to="/dashboard/invoices" className="w-full p-3 flex gap-3 hover:bg-muted/50 rounded-md">
                  <div className="bg-primary/10 text-primary rounded-md p-2 h-fit">
                    <FileText size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Nueva factura pagada</p>
                    <p className="text-xs text-muted-foreground mt-1">Cliente: Comercial XYZ</p>
                    <p className="text-xs text-muted-foreground mt-1">Hace 10 minutos</p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0 focus:bg-transparent">
                <Link to="/dashboard/quotes" className="w-full p-3 flex gap-3 hover:bg-muted/50 rounded-md">
                  <div className="bg-green-500/10 text-green-500 rounded-md p-2 h-fit">
                    <FilePlus2 size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Presupuesto aceptado</p>
                    <p className="text-xs text-muted-foreground mt-1">Cliente: Empresa ABC</p>
                    <p className="text-xs text-muted-foreground mt-1">Hace 30 minutos</p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0 focus:bg-transparent">
                <Link to="/dashboard/payments" className="w-full p-3 flex gap-3 hover:bg-muted/50 rounded-md">
                  <div className="bg-blue-500/10 text-blue-500 rounded-md p-2 h-fit">
                    <CreditCard size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Nuevo pago recibido</p>
                    <p className="text-xs text-muted-foreground mt-1">Cliente: Distribuciones S.L.</p>
                    <p className="text-xs text-muted-foreground mt-1">Hace 2 horas</p>
                  </div>
                </Link>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <div className="p-2">
              <Button variant="outline" size="sm" className="w-full text-center justify-center">
                Ver todas las notificaciones
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-muted-foreground hover:text-foreground hidden md:flex"
        >
          <HelpCircleIcon size={20} />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" size="sm" className="flex items-center gap-2 md:hidden">
              <PlusIcon size={16} />
              <span className="hidden md:inline">Crear nuevo</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem className="cursor-pointer">
              <Link to="/dashboard/invoices" className="w-full flex items-center">
                <span>Nueva Factura</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Link to="/dashboard/quotes" className="w-full flex items-center">
                <span>Nuevo Presupuesto</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Link to="/dashboard/expenses" className="w-full flex items-center">
                <span>Nuevo Gasto</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Link to="/dashboard/clients" className="w-full flex items-center">
                <span>Nuevo Cliente</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
