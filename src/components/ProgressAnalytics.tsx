import { BarChart3, TrendingUp, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const progressData = [
  { subject: "JavaScript", progress: 87, change: "+12%", level: "Advanced" },
  { subject: "React", progress: 76, change: "+8%", level: "Intermediate" },
  { subject: "Data Structures", progress: 45, change: "+23%", level: "Beginner" },
  { subject: "Algorithms", progress: 62, change: "+15%", level: "Intermediate" },
  { subject: "System Design", progress: 34, change: "+19%", level: "Beginner" }
];

const recentAchievements = [
  { title: "Algorithm Master", description: "Completed 50 algorithm challenges", date: "2 days ago", type: "bronze" },
  { title: "Study Streak", description: "7 consecutive days of learning", date: "1 week ago", type: "silver" },
  { title: "Fast Learner", description: "Improved by 25% this month", date: "2 weeks ago", type: "gold" }
];

export const ProgressAnalytics = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Progress Overview */}
      <Card className="shadow-medium">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <CardTitle>Learning Progress</CardTitle>
              <CardDescription>Track your mastery across subjects</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {progressData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-sm">{item.subject}</span>
                  <Badge variant="outline" className="text-xs">{item.level}</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-emerald-600 font-medium">{item.change}</span>
                  <span className="text-xs font-medium">{item.progress}%</span>
                </div>
              </div>
              <Progress value={item.progress} className="h-2" />
            </div>
          ))}
          
          <div className="pt-4 border-t border-border">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Overall Progress</span>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-emerald-600">+15% this month</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card className="shadow-medium">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-success rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <CardTitle>Recent Achievements</CardTitle>
              <CardDescription>Celebrate your learning milestones</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentAchievements.map((achievement, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                achievement.type === 'gold' ? 'bg-yellow-500' : 
                achievement.type === 'silver' ? 'bg-gray-400' : 'bg-orange-500'
              }`}>
                <Award className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">{achievement.title}</h4>
                <p className="text-xs text-muted-foreground mb-1">{achievement.description}</p>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{achievement.date}</span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="pt-4 border-t border-border text-center">
            <p className="text-sm text-muted-foreground mb-2">Next Achievement</p>
            <div className="flex items-center justify-between text-sm">
              <span>Code Warrior (Complete 100 challenges)</span>
              <span className="font-medium">78/100</span>
            </div>
            <Progress value={78} className="h-2 mt-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};