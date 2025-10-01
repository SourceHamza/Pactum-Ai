import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Upload, Brain, Shield, Search, CheckCircle, ArrowRight } from "lucide-react";
import heroIllustration from "../assets/hero-illustration.png";
import Navbar from '../components/Navbar';  
import Footer from "../components/Footer";

const Home = () => {
  const features = [
    {
      icon: Upload,
      title: "Upload Contract",
      description: "Simply upload your contract documents in any format. Our system supports PDF, Word, and text files.",
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced AI algorithms scan through every clause to identify potential issues and opportunities.",
    },
    {
      icon: Search,
      title: "Clear Actionable Insights",
      description: "Get detailed reports highlighting loopholes, risks, and suggested improvements in plain language.",
    },
    {
      icon: Shield,
      title: "Manage Reviews",
      description: "Track all your contract analyses, compare versions, and maintain a secure history of reviews.",
    },
  ];

  const benefits = [
    "Identify contract loopholes before they become problems",
    "Reduce legal risks with AI-powered analysis",
    "Save time and money on contract reviews",
    "Protect your business with smarter deals",
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">Pactum AI</span>
                <br />
                <span className="text-foreground">Smarter Contracts.</span>
                <br />
                <span className="text-foreground">Safer Deals.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Upload your contracts and let AI uncover loopholes, mistakes, and improvements 
                to keep your work protected.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/signup">
                  <Button className="btn-hero group">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="lg" className="px-8 py-4">
                    Login
                  </Button>
                </Link>
              </div>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full"></div>
              <img
                src={heroIllustration}
                alt="AI analyzing contracts"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How Pactum AI Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform makes contract analysis simple, fast, and reliable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Analyze Your Contracts?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of freelancers and businesses who trust Pactum AI 
            to protect their contracts and deals.
          </p>
          <Link to="/signup">
            <Button className="btn-hero group">
              Start Free Analysis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;