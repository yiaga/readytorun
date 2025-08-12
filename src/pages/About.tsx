import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, TrendingUp, Link as LinkIcon } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "A Body of Knowledge",
      description: "Ready to Run will provide learning opportunities for young aspirants and candidates"
    },
    {
      icon: Users,
      title: "A Source of Inspiration",
      description: "Ready to Run will inspire young men and women through resources and training to run for elective offices."
    },
    {
      icon: TrendingUp,
      title: "A Guide to Success",
      description: "Opportunity must meet preparation. Ready to Run will provide young aspirants with the specialized skills and knowledge for running political campaigns and winning elections."
    },
    {
      icon: LinkIcon,
      title: "A Linkage",
      description: "Connect aspirants and candidates with mentors, peers, political parties and opportunities."
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
                About ReadyToRun
              </h1>
              <p className="text-xl lg:text-2xl opacity-90">
                A movement dedicated to inspiring young men and women to run for elective office in Nigeria
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Story</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Borne out of the Not Too Young To Run Campaign, Ready to Run is a movement dedicated to inspiring young men and women to run for elective office in Nigeria. The campaign has mobilized and supported over 400 young candidates. We want to make a statement that young people can demonstrate excellent public leadership and have the capacity to address Africa's governance challenges.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    ReadyToRun is a platform that inspires, prepares, and supports young Nigerians with the competence, character, and capacity to run for elective office in Nigeria, providing the responsive, accountable, innovative, and transformative leadership Nigeria needs.
                  </p>
                </CardContent>
              </Card>

              {/* Features Grid */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-12">Ready To Run is</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                            <Icon className="h-6 w-6 text-accent-foreground" />
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Call to Action */}
              <Card className="bg-gradient-to-br from-accent to-accent/90 text-accent-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-lg mb-6">
                    If you are a young Nigerian (under the age of 35) and seeking to contest elections in the 2027 election, register on: <strong>www.readytorunng.org</strong>
                  </p>
                  <a 
                    href="/register" 
                    className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Register Now
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;