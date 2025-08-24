import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Building, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageBanner from "@/components/banners/PageBanner";

import image1 from "../assets/images/persons_1.jpg";
import image2 from "../assets/images/persons_2.jpg";
import image3 from "../assets/images/persons_3.jpg";
import image4 from "../assets/images/persons_4.jpg";
import image5 from "../assets/images/persons_5.jpg";

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
            "Commander-in-Chief of the Armed Forces",
            "Appoints ministers, ambassadors, and key officials",
            "Executes and enforces laws passed by the National Assembly",
            "Represents Nigeria in international relations",
          ],
          image: image1,
        },
        {
          title: "Senator",
          term: "4 years",
          description:
            "Member of the Senate representing a senatorial district.",
          qualifications:
            "Nigerian citizen by birth, at least 35 years old, member of a political party, and sponsored by that party. Minimum education of School Certificate or equivalent.",
          tenure: "Four-year term, no limit on re-election.",
          responsibilities: [
            "Make laws for the federation",
            "Represent interests of their senatorial district",
            "Approve national budget and oversee government agencies",
          ],
          image: image5,
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
            "Legislate for the federation",
            "Represent their constituency at the federal level",
            "Oversee ministries, departments, and agencies",
          ],
          image: image2,
        },
      ],
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
            "Head of the executive arm at state level",
            "Implements state laws",
            "Appoints state commissioners and officials",
            "Oversees state security and development",
          ],
          image: image3,
        },
        {
          title: "Deputy Governor",
          term: "4 years (maximum 2 terms)",
          description: "Deputy to the state governor.",
          qualifications: "Same qualifications as the Governor.",
          tenure: "Four-year term, renewable for one additional term.",
          responsibilities: [
            "Assists the Governor in state administration",
            "Acts as Governor when the latter is absent",
          ],
          image: image4,
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
            "Make laws for the state",
            "Represent constituents at the state level",
            "Oversee state ministries and agencies",
          ],
          image: image5,
        },
      ],
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
            "Leads the local government council",
            "Implements local policies and by-laws",
            "Manages local government resources and development",
          ],
          image: image3,
        },
        {
          title: "Vice Chairman",
          term: "3 years",
          description: "Deputy to the Local Government Chairman.",
          qualifications: "Same as Local Government Chairman.",
          tenure: "Three-year term.",
          responsibilities: [
            "Assists the Chairman in administration",
            "Acts as Chairman in their absence",
          ],
          image: image1,
        },
        {
          title: "Councillor",
          term: "3 years",
          description:
            "Member of the Local Government Legislative Council representing a ward.",
          qualifications: "Same as Local Government Chairman.",
          tenure: "Three-year term.",
          responsibilities: [
            "Make by-laws for the local government",
            "Represent the ward in council meetings",
          ],
          image: image1,
        },
      ],
    },
  ];

  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <PageBanner
          heading="Elective Offices in Nigeria"
          description="Explore leadership positions and understand the qualifications,
              tenure, and responsibilities for each."
        />

        {/* Offices */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            {offices.map((category, i) => {
              const Icon = category.icon;
              return (
                <div key={i} className="mb-16">
                  <div className="flex items-center mb-10">
                    <div
                      className={`w-14 h-14 ${category.color} rounded-lg flex items-center justify-center mr-4`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">{category.level}</h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {category.offices.map((office, j) => {
                      const key = `${i}-${j}`;
                      return (
                        <Card
                          key={key}
                          className="overflow-hidden border hover:shadow-2xl transition"
                        >
                          {/* Image header */}
                          <div className="relative h-40">
                            <img
                              src={office.image}
                              alt={office.title}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <h3 className="text-xl font-bold text-white">
                                {office.title}
                              </h3>
                            </div>
                          </div>

                          <CardContent className="p-6">
                            <Badge variant="secondary" className="mb-3">
                              {office.term}
                            </Badge>
                            <p className="text-muted-foreground mb-4">
                              {office.description}
                            </p>

                            {expanded[key] && (
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold">
                                    Qualifications
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {office.qualifications}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="font-semibold">Tenure</h4>
                                  <p className="text-sm text-muted-foreground">
                                    {office.tenure}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="font-semibold">
                                    Responsibilities
                                  </h4>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {office.responsibilities.map((r, idx) => (
                                      <span
                                        key={idx}
                                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                                      >
                                        {r}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                            <Button
                              variant="link"
                              className="mt-4 text-primary font-semibold"
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
        <section className="pb-20 text-center">
          <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground max-w-4xl mx-auto shadow-xl">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Choose Your Office?
              </h3>
              <p className="text-lg mb-6 opacity-90">
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
