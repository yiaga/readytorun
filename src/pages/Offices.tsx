import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Building, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Offices = () => {
  const offices = [
    {
      level: "Federal Level",
      icon: Globe,
      color: "bg-primary",
      offices: [
        {
          title: "President",
          term: "4 years (maximum 2 terms)",
          description: "Head of State and Government of Nigeria.",
          qualifications:
            "Must be a Nigerian citizen by birth, at least 35 years old, a member of a political party, and sponsored by that party. Must have at least a School Certificate level or equivalent.",
          tenure:
            "Four-year term, renewable for one additional term (maximum 8 years).",
          responsibilities: [
            "Commander-in-Chief of the Armed Forces.",
            "Appoints ministers, ambassadors, and key officials.",
            "Executes and enforces laws passed by the National Assembly.",
            "Represents Nigeria in international relations."
          ]
        },
        {
          title: "Senator",
          term: "4 years",
          description: "Member of the Senate representing a senatorial district.",
          qualifications:
            "Nigerian citizen by birth, at least 35 years old, member of a political party, and sponsored by that party. Minimum education of School Certificate or equivalent.",
          tenure: "Four-year term, no limit on re-election.",
          responsibilities: [
            "Make laws for the federation.",
            "Represent interests of their senatorial district.",
            "Approve national budget and oversee government agencies."
          ]
        },
        {
          title: "House of Representatives Member",
          term: "4 years",
          description:
            "Represents a federal constituency in the House of Representatives.",
          qualifications:
            "Nigerian citizen by birth, at least 30 years old, member of a political party, and sponsored by that party. Minimum of School Certificate level or equivalent.",
          tenure: "Four-year term, renewable indefinitely.",
          responsibilities: [
            "Legislate for the federation.",
            "Represent their constituency at the federal level.",
            "Oversee ministries, departments, and agencies."
          ]
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
          term: "4 years (maximum 2 terms)",
          description: "Chief Executive of a state in Nigeria.",
          qualifications:
            "Nigerian citizen by birth, at least 35 years old, member of a political party, and sponsored by that party. Minimum education of School Certificate or equivalent.",
          tenure: "Four-year term, renewable for one additional term.",
          responsibilities: [
            "Head of the executive arm at state level.",
            "Implements state laws.",
            "Appoints state commissioners and officials.",
            "Oversees state security and development."
          ]
        },
        {
          title: "Deputy Governor",
          term: "4 years (maximum 2 terms)",
          description: "Deputy to the state governor.",
          qualifications: "Same qualifications as the Governor.",
          tenure: "Four-year term, renewable for one additional term.",
          responsibilities: [
            "Assists the Governor in state administration.",
            "Acts as Governor when the latter is absent."
          ]
        },
        {
          title: "State House of Assembly Member",
          term: "4 years",
          description:
            "Member of the state legislature representing a constituency.",
          qualifications:
            "Nigerian citizen by birth, at least 30 years old, member of a political party, and sponsored by that party. Minimum of School Certificate or equivalent.",
          tenure: "Four-year term, renewable indefinitely.",
          responsibilities: [
            "Make laws for the state.",
            "Represent constituents at the state level.",
            "Oversee state ministries and agencies."
          ]
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
          term: "3 years",
          description: "Chief Executive of a Local Government Area.",
          qualifications:
            "Nigerian citizen, at least 25 years old, member of a political party, sponsored by that party. Minimum education of School Certificate or equivalent.",
          tenure: "Three-year term, renewable depending on state laws.",
          responsibilities: [
            "Leads the local government council.",
            "Implements local policies and by-laws.",
            "Manages local government resources and development."
          ]
        },
        {
          title: "Vice Chairman",
          term: "3 years",
          description: "Deputy to the Local Government Chairman.",
          qualifications: "Same as Local Government Chairman.",
          tenure: "Three-year term.",
          responsibilities: [
            "Assists the Chairman in administration.",
            "Acts as Chairman in their absence."
          ]
        },
        {
          title: "Councillor",
          term: "3 years",
          description:
            "Member of the Local Government Legislative Council representing a ward.",
          qualifications: "Same as Local Government Chairman.",
          tenure: "Three-year term.",
          responsibilities: [
            "Make by-laws for the local government.",
            "Represent the ward in council meetings."
          ]
        }
      ]
    }
  ];

  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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
                Explore leadership positions and understand the qualifications,
              tenure, and responsibilities for each.              
              </p>
            </div>
            </div>
        </section>

        {/* Offices */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            {offices.map((category, i) => {
              const Icon = category.icon;
              return (
                <div key={i} className="mb-12">
                  <div className="flex items-center mb-8">
                    <div
                      className={`w-14 h-14 ${category.color} rounded-lg flex items-center justify-center mr-4`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">{category.level}</h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {category.offices.map((office, j) => {
                      const key = `${i}-${j}`;
                      return (
                        <Card key={key} className="hover:shadow-xl transition">
                          <CardHeader>
                            <CardTitle className="text-2xl">
                              {office.title}
                            </CardTitle>
                            <Badge variant="secondary" className="text-lg">
                              {office.term}
                            </Badge>
                          </CardHeader>
                          <CardContent>
                            <p className="text-lg mb-4">
                              {office.description}
                            </p>
                            {expanded[key] && (
                              <div className="space-y-3 text-base">
                                <div>
                                  <h4 className="font-semibold text-lg">
                                    Qualifications
                                  </h4>
                                  <p className="text-muted-foreground">
                                    {office.qualifications}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-lg">
                                    Tenure
                                  </h4>
                                  <p className="text-muted-foreground">
                                    {office.tenure}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-lg">
                                    Responsibilities
                                  </h4>
                                  <ul className="list-disc pl-5 text-muted-foreground">
                                    {office.responsibilities.map((r, idx) => (
                                      <li key={idx}>{r}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                            <Button
                              variant="link"
                              className="mt-4 text-primary font-semibold text-lg"
                              onClick={() => toggleExpand(key)}
                            >
                              {expanded[key] ? "View Less" : "View More"}
                            </Button>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="pb-16 text-center">
          <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Choose Your Office?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Take the first step towards political leadership. Register with
                ReadyToRun and get the support you need to run for office.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/register">Register to Run</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-secondary text-primary hover:bg-white hover:text-primary"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Offices;
