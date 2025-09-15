import { Brain, Sparkles, TrendingUp, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const recommendations = [
  {
    type: "Focus Area",
    title: "Strengthen Data Structures Knowledge",
    description: "Based on recent assessments, you need more practice with trees and graphs",
    confidence: 94,
    priority: "High",
    action: "Start Practice Session",
    icon: Target
  },
  {
    type: "Study Strategy",
    title: "Spaced Repetition for Algorithms",
    description: "Review sorting algorithms every 3 days for optimal retention",
    confidence: 87,
    priority: "Medium", 
    action: "Set Reminder",
    icon: Brain
  },
  {
    type: "Content Suggestion",
    title: "Advanced React Patterns",
    description: "You're ready for advanced topics based on your current progress",
    confidence: 91,
    priority: "Low",
    action: "Explore Topics",
    icon: Sparkles
  }
];

export const AIRecommendations = () => {
  return (
    <Card className="shadow-medium">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="flex items-center space-x-2">
              <span>AI Study Recommendations</span>
              <Sparkles className="w-4 h-4 text-yellow-500" />
            </CardTitle>
            <CardDescription>Personalized insights to accelerate your learning</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                  <rec.icon className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <Badge variant="outline" className="text-xs mb-1">{rec.type}</Badge>
                  <h4 className="font-medium text-sm">{rec.title}</h4>
                </div>
              </div>
              <Badge 
                variant={rec.priority === "High" ? "destructive" : rec.priority === "Medium" ? "default" : "secondary"}
                className="text-xs"
              >
                {rec.priority}
              </Badge>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted-foreground">Confidence:</span>
                <Progress value={rec.confidence} className="w-16 h-2" />
                <span className="text-xs font-medium">{rec.confidence}%</span>
              </div>
              <Button size="sm" variant="outline" className="text-xs">
                {rec.action}
              </Button>
            </div>
          </div>
        ))}
        
        <Button className="w-full bg-gradient-primary hover:opacity-90">
          <TrendingUp className="w-4 h-4 mr-2" />
          Generate More Recommendations
        </Button>
      </CardContent>
    </Card>
  );
};