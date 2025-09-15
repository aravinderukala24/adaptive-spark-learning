import { 
  FileText, 
  Brain, 
  Target, 
  BarChart3, 
  Upload, 
  BookOpen, 
  Zap, 
  Users, 
  Sparkles,
  TrendingUp,
  Clock,
  Award
} from "lucide-react";
import { DashboardNavigation } from "@/components/DashboardNavigation";
import { StatsOverview } from "@/components/StatsOverview";
import { FeatureCard } from "@/components/FeatureCard";
import { AIRecommendations } from "@/components/AIRecommendations";
import { ProgressAnalytics } from "@/components/ProgressAnalytics";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-dashboard.jpg";

const Index = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "AI Document Processing",
      description: "Advanced neural networks extract key concepts, generate summaries, and create knowledge graphs from any document format.",
      stats: "2,847 documents processed • 94% accuracy",
      badge: "AI-Powered",
      gradient: "bg-gradient-primary",
      action: "Upload Documents",
      highlight: true
    },
    {
      icon: Target,
      title: "Automated Assessment Generation", 
      description: "Create personalized quizzes, practice tests, and adaptive assessments based on learning objectives and difficulty levels.",
      stats: "89 assessments created • 31% improvement rate",
      badge: "Smart Testing",
      gradient: "bg-gradient-secondary",
      action: "Generate Assessment"
    },
    {
      icon: BarChart3,
      title: "Advanced Progress Analytics",
      description: "Real-time insights into learning patterns, knowledge gaps, and performance trends with predictive analytics.",
      stats: "456 active learners • 12.5k study hours tracked",
      badge: "Analytics Pro",
      gradient: "bg-gradient-success",
      action: "View Analytics"
    },
    {
      icon: Sparkles,
      title: "Personalized Study Plans",
      description: "AI creates adaptive learning paths based on individual goals, learning speed, and knowledge assessment.",
      stats: "34% average improvement • 87% completion rate",
      badge: "Adaptive",
      gradient: "bg-gradient-primary",
      action: "Create Plan"
    }
  ];

  const additionalFeatures = [
    {
      icon: Upload,
      title: "Multi-Format Processing",
      description: "Support for PDFs, presentations, videos, and audio files with intelligent content extraction.",
      badge: "Universal"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Study groups, peer assessments, and knowledge sharing in real-time collaborative environments.",
      badge: "Team Mode"
    },
    {
      icon: BookOpen,
      title: "Knowledge Library",
      description: "Organized repository of processed materials with advanced search and tagging capabilities.",
      badge: "Smart Search"
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Real-time performance feedback and adaptive difficulty adjustment during learning sessions.",
      badge: "Real-time"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <DashboardNavigation />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 mb-8 text-primary-foreground">
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-primary-foreground border-white/30">
                <Sparkles className="w-3 h-3 mr-1" />
                Next-Gen Learning Platform
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Transform Learning with 
                <span className="block bg-white/20 px-3 py-1 rounded-lg mt-2 inline-block">
                  Adaptive Intelligence
                </span>
              </h1>
              <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">
                Revolutionary AI-powered platform that processes documents, generates assessments, 
                and provides personalized learning experiences for maximum knowledge retention.
              </p>
              <div className="flex items-center space-x-4">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Upload className="w-4 h-4 mr-2" />
                  Start Learning Now
                </Button>
                <Button size="lg" variant="ghost" className="text-primary-foreground hover:bg-white/10">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Adaptive Learning Dashboard" 
                className="rounded-xl shadow-strong w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl" />
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <StatsOverview />

        {/* Main Features Grid */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Platform Features</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive tools designed to revolutionize your learning experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {mainFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        {/* AI Recommendations and Analytics */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ProgressAnalytics />
            </div>
            <div>
              <AIRecommendations />
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-3">Advanced Capabilities</h2>
            <p className="text-muted-foreground">
              Cutting-edge features that set us apart from traditional learning platforms
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
                <Award className="w-6 h-6 text-yellow-600" />
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning?</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Join thousands of learners who have accelerated their knowledge acquisition 
              with our AI-powered adaptive learning platform.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                <Brain className="w-4 h-4 mr-2" />
                Get Started Free
              </Button>
              <Button size="lg" variant="outline">
                <BookOpen className="w-4 h-4 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
