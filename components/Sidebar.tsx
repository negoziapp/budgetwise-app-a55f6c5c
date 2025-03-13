
import { NavLink } from "react-router-dom";
import {
  Sidebar as SidebarContainer,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";
import { 
  LayoutDashboard, 
  FileText, 
  FilePlus2, 
  Receipt, 
  Users, 
  Settings, 
  LogOut,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const { user, logout } = useAuth();

  const menuItems = [
    { title: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { title: "Facturas", path: "/dashboard/invoices", icon: FileText },
    { title: "Presupuestos", path: "/dashboard/quotes", icon: FilePlus2 },
    { title: "Gastos", path: "/dashboard/expenses", icon: Receipt },
    { title: "Referidos", path: "/dashboard/referrals", icon: Users },
    { title: "WhatsApp", path: "/dashboard/whatsapp-auth", icon: MessageCircle },
    { title: "Configuración", path: "/dashboard/settings", icon: Settings },
  ];

  return (
    <SidebarContainer>
      <SidebarHeader className="flex items-center px-3 h-16 mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">PYME</span>
          <span className="text-2xl font-light">Simplifica</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.path}
                      className={({ isActive }) => 
                        isActive ? "text-primary font-medium" : ""
                      }
                    >
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t py-3 px-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>
          <div className="flex-1 truncate">
            <div className="font-medium">{user?.name}</div>
            <div className="text-sm text-muted-foreground truncate">{user?.email}</div>
          </div>
        </div>
        <Button variant="outline" size="sm" className="w-full flex items-center gap-2" onClick={logout}>
          <LogOut size={16} />
          <span>Cerrar sesión</span>
        </Button>
      </SidebarFooter>
    </SidebarContainer>
  );
}
