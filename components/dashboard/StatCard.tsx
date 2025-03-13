
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: number;
    positive: boolean;
  };
  icon: LucideIcon;
  variant?: "default" | "primary" | "success" | "info" | "warning" | "danger";
}

export function StatCard({ title, value, trend, icon: Icon, variant = "default" }: StatCardProps) {
  const variantStyles = {
    default: "bg-card",
    primary: "bg-gradient-to-r from-vuexy-primary to-[#9e95f5] text-white",
    success: "bg-gradient-to-r from-vuexy-success to-[#5ddba3] text-white",
    info: "bg-gradient-to-r from-vuexy-info to-[#55f9ff] text-white",
    warning: "bg-gradient-to-r from-vuexy-warning to-[#ffbd5a] text-white",
    danger: "bg-gradient-to-r from-vuexy-danger to-[#f07b7c] text-white",
  };

  const iconStyles = {
    default: "bg-white/10 text-vuexy-primary",
    primary: "bg-white/20 text-white",
    success: "bg-white/20 text-white",
    info: "bg-white/20 text-white",
    warning: "bg-white/20 text-white",
    danger: "bg-white/20 text-white",
  };
  
  return (
    <div className={cn("rounded-lg p-6 shadow-vuexy transition-all group hover:shadow-vuexy-lg", variantStyles[variant])}>
      <div className="flex items-center justify-between mb-2">
        <div className={cn(
          "p-3 rounded-md",
          iconStyles[variant]
        )}>
          <Icon size={24} />
        </div>
        
        {trend && (
          <span className={cn(
            "text-xs font-medium px-2 py-1 rounded-full flex items-center",
            trend.positive ? 
              variant === "default" ? "bg-vuexy-success/10 text-vuexy-success" : "bg-white/20 text-white" : 
              variant === "default" ? "bg-vuexy-danger/10 text-vuexy-danger" : "bg-white/20 text-white"
          )}>
            <span className="mr-1">{trend.positive ? "▲" : "▼"}</span>
            {trend.value}%
          </span>
        )}
      </div>

      <h3 className={cn(
        "text-2xl font-semibold mt-2",
        variant === "default" ? "text-foreground" : "text-white"
      )}>
        {value}
      </h3>
      
      <p className={cn(
        "text-sm mt-1",
        variant === "default" ? "text-muted-foreground" : "text-white/80"
      )}>
        {title}
      </p>
    </div>
  );
}
