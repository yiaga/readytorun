import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Heart, Users, Lightbulb, DollarSign, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  const ways = [
    {
      icon: UserPlus,
      title: "Register to Run",
      description: "Are you under 35 and ready to lead? Register to receive comprehensive support for your political journey.",
      action: "Register Now",
      link: "/register",
      variant: "default" as const
    },
    {
      icon: Heart,
      title: "Volunteer",
      description: "Support young candidates by volunteering your time during campaigns and community events.",
      action: "Become a Volunteer",
      link: "/contact",
      variant: "secondary" as const
    },    
    {
      icon: MessageSquare,
      title: "Spread the Word",
      description: "Help us reach more young Nigerians by sharing our mission on social media and in your networks.",
      action: "Share Now",
      link: "/contact",
      variant: "outline" as const
    }
  ];

  const benefits = [
    "Access to exclusive training programs",
    "Networking with like-minded young leaders",
    "Mentorship from experienced politicians",
    "Campaign support and resources",
    "Media training and public speaking coaching",
    "Policy development workshops",
    "Access to funding opportunities",
    "Legal guidance and compliance support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Get Involved
              </h1>
              <p className="text-xl lg:text-2xl opacity-90">
                Join the movement transforming Nigerian politics. Every contribution makes a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Ways to Get Involved</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Whether you want to run for office or support others who do, there's a place for you in the ReadyToRun movement.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ways.slice(0, 3).map((way, index) => {
                  const Icon = way.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                      <CardHeader>
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-8 w-8 text-accent-foreground" />
                        </div>
                        <CardTitle className="text-xl">{way.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-6">{way.description}</p>
                        <Button variant={way.variant} asChild className="w-full">
                          <Link to={way.link}>{way.action}</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">What You Get</h2>
                <p className="text-lg text-muted-foreground">
                  When you join ReadyToRun, you become part of a comprehensive support system designed to help you succeed.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Join Our Success Stories</h2>
                <p className="text-lg text-muted-foreground">
                  See how ReadyToRun has helped young Nigerians achieve their political aspirations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-accent">400+</div>
                  <div className="text-lg">Young Candidates Supported</div>
                  <p className="text-muted-foreground">Across all levels of government</p>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-accent">150+</div>
                  <div className="text-lg">Elections Won</div>
                  <p className="text-muted-foreground">By ReadyToRun alumni</p>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-accent">36</div>
                  <div className="text-lg">States Reached</div>
                  <p className="text-muted-foreground">Nationwide impact</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/stories">Read More Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-accent to-accent/90 text-accent-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Don't wait for change - be the change. Join ReadyToRun today and start making a difference in Nigerian politics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/register">Register to Run</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetInvolved;