import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Building, Globe, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Offices = () => {
  const offices = [
    {
      level: "Federal Level",
      icon: Globe,
      color: "bg-primary",
      offices: [
        {
          title: "President",
          description: "Head of State and Government of Nigeria",
          requirements: "Minimum age: 35 years",
          term: "4 years (maximum 2 terms)"
        },
        {
          title: "Senator",
          description: "Member of the Senate representing a senatorial district",
          requirements: "Minimum age: 35 years",
          term: "4 years"
        },
        {
          title: "House of Representatives Member",
          description: "Member of the House of Representatives representing a federal constituency",
          requirements: "Minimum age: 30 years",
          term: "4 years"
        }
      ]
    },
    {
      level: "State Level",
      icon: Building,
      color: "bg-accent",
      offices: [
        {
          title: "Governor",
          description: "Chief Executive of a state in Nigeria",
          requirements: "Minimum age: 35 years",
          term: "4 years (maximum 2 terms)"
        },
        {
          title: "Deputy Governor",
          description: "Deputy to the state governor",
          requirements: "Minimum age: 35 years",
          term: "4 years (maximum 2 terms)"
        },
        {
          title: "State House of Assembly Member",
          description: "Member of the state legislature representing a state constituency",
          requirements: "Minimum age: 30 years",
          term: "4 years"
        }
      ]
    },
    {
      level: "Local Government Level",
      icon: MapPin,
      color: "bg-secondary",
      offices: [
        {
          title: "Local Government Chairman",
          description: "Chief Executive of a Local Government Area",
          requirements: "Minimum age: 25 years",
          term: "3 years"
        },
        {
          title: "Vice Chairman",
          description: "Deputy to the Local Government Chairman",
          requirements: "Minimum age: 25 years",
          term: "3 years"
        },
        {
          title: "Councillor",
          description: "Member of the Local Government Legislative Council representing a ward",
          requirements: "Minimum age: 25 years",
          term: "3 years"
        }
      ]
    },
    {
      level: "Special Positions",
      icon: Users,
      color: "bg-muted",
      offices: [
        {
          title: "Area Council Chairman (FCT)",
          description: "Chairman of Area Council in Federal Capital Territory",
          requirements: "Minimum age: 25 years",
          term: "4 years"
        },
        {
          title: "Area Council Councillor (FCT)",
          description: "Councillor in Federal Capital Territory Area Council",
          requirements: "Minimum age: 25 years",
          term: "4 years"
        }
      ]
    }
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
                Elective Offices in Nigeria
              </h1>
              <p className="text-xl lg:text-2xl opacity-90">
                Explore the various leadership positions you can aspire to in Nigerian politics
              </p>
            </div>
          </div>
        </section>

        {/* Offices Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Choose Your Path to Leadership</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Nigeria's democratic system offers multiple levels of governance where young leaders can make a difference. 
                  Find the office that aligns with your vision and community impact goals.
                </p>
              </div>

              <div className="space-y-12">
                {offices.map((category, categoryIndex) => {
                  const Icon = category.icon;
                  return (
                    <div key={categoryIndex}>
                      <div className="flex items-center mb-8">
                        <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">{category.level}</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {category.offices.map((office, index) => (
                          <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                              <CardTitle className="text-xl">{office.title}</CardTitle>
                              <Badge variant="secondary" className="w-fit">
                                {office.term}
                              </Badge>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground mb-4">
                                {office.description}
                              </p>
                              <div className="space-y-2">
                                <p className="text-sm font-medium">Requirements:</p>
                                <p className="text-sm text-muted-foreground">
                                  {office.requirements}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Call to Action */}
              <div className="mt-16 text-center">
                <Card className="bg-gradient-to-br from-accent to-accent/90 text-accent-foreground">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Ready to Choose Your Office?</h3>
                    <p className="text-lg mb-6 opacity-90">
                      Take the first step towards political leadership. Register with ReadyToRun and 
                      get the support you need to run for the office of your choice.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="secondary" size="lg" asChild>
                        <Link to="/register">Register to Run</Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                        <Link to="/about">Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Offices;