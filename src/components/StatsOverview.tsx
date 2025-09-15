import { TrendingUp, Users, BookOpen, Target, Brain, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: Brain,
    label: "AI Insights Generated",
    value: "2,847",
    change: "+23%",
    gradient: "bg-gradient-primary"
  },
  {
    icon: BookOpen,
    label: "Documents Processed", 
    value: "1,342",
    change: "+18%",
    gradient: "bg-gradient-secondary"
  },
  {
    icon: Target,
    label: "Assessments Created",
    value: "89",
    change: "+31%",
    gradient: "bg-gradient-success"
  },
  {
    icon: Users,
    label: "Active Learners",
    value: "456",
    change: "+12%",
    gradient: "bg-gradient-primary"
  },
  {
    icon: TrendingUp,
    label: "Avg. Improvement",
    value: "34%",
    change: "+7%",
    gradient: "bg-gradient-secondary"
  },
  {
    icon: Clock,
    label: "Study Hours",
    value: "12.5k",
    change: "+45%",
    gradient: "bg-gradient-success"
  }
];

export const StatsOverview = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className={`w-10 h-10 rounded-lg ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground truncate">{stat.label}</p>
              <p className="text-xs font-medium text-emerald-600">{stat.change}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};