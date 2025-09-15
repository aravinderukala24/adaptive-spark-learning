import { useState } from "react";
import { 
  Brain, 
  FileText, 
  BarChart3, 
  Target, 
  Upload, 
  BookOpen, 
  Users, 
  Settings,
  Search,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const navigationItems = [
  { icon: Brain, label: "AI Dashboard", badge: "Pro", active: true },
  { icon: FileText, label: "Documents", badge: null, active: false },
  { icon: Target, label: "Assessments", badge: "New", active: false },
  { icon: BarChart3, label: "Analytics", badge: null, active: false },
  { icon: BookOpen, label: "Study Plans", badge: null, active: false },
  { icon: Users, label: "Collaboration", badge: "Beta", active: false },
];

export const DashboardNavigation = () => {
  const [activeItem, setActiveItem] = useState("AI Dashboard");

  return (
    <nav className="w-full bg-card/50 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AdaptiveLearn
            </span>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search courses, documents, or assessments..." 
                className="pl-10 bg-background/60 backdrop-blur-sm border-border/50"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </Button>
            <Button variant="ghost" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-1 pb-4">
          {navigationItems.map((item) => (
            <Button
              key={item.label}
              variant={activeItem === item.label ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveItem(item.label)}
              className={`flex items-center space-x-2 ${
                activeItem === item.label 
                  ? "bg-gradient-primary text-primary-foreground shadow-medium" 
                  : "hover:bg-muted/50"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
              {item.badge && (
                <Badge 
                  variant={item.badge === "Pro" ? "default" : "secondary"} 
                  className="ml-1 text-xs"
                >
                  {item.badge}
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};