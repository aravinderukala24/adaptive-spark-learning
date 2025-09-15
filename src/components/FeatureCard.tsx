import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stats?: string;
  badge?: string;
  gradient?: string;
  action?: string;
  onAction?: () => void;
  highlight?: boolean;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  stats,
  badge,
  gradient = "bg-gradient-primary",
  action,
  onAction,
  highlight = false
}: FeatureCardProps) => {
  return (
    <Card className={`group relative overflow-hidden transition-all duration-300 hover:shadow-medium hover:-translate-y-1 ${
      highlight ? 'ring-2 ring-primary/20 shadow-strong' : ''
    }`}>
      {highlight && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-gradient-primary text-primary-foreground">Featured</Badge>
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className={`w-12 h-12 rounded-xl ${gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
          {badge && (
            <Badge variant="secondary" className="text-xs">
              {badge}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        {stats && (
          <div className="mb-4 p-3 bg-muted/30 rounded-lg">
            <p className="text-sm font-medium text-foreground">{stats}</p>
          </div>
        )}
        
        {action && (
          <Button 
            onClick={onAction}
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
            size="sm"
          >
            {action}
          </Button>
        )}
      </CardContent>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
    </Card>
  );
};