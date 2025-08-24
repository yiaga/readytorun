import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              About ReadyToRun
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Inspiring young Nigerians to run for elective office and transform governance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Borne out of the Not Too Young To Run Campaign, Ready to Run is a movement dedicated to inspiring young men and women to run for elective office in Nigeria. The campaign has mobilized and supported over 400 young candidates.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We want to make a statement that young people can demonstrate excellent public leadership and have the capacity to address Africa's governance challenges.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/about" className="inline-flex items-center">
                  Read More <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>

            <Card className="bg-gradient-to-br from-primary to-primary/90 text-accent-foreground">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl text-white font-bold mb-2">400+</div>
                    <div className="text-sm text-white opacity-90">Young Candidates Supported</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white font-bold mb-2">2027</div>
                    <div className="text-sm text-white opacity-90">Target Election Cycle</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white font-bold mb-2">36</div>
                    <div className="text-sm text-white opacity-90">States Reached</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white font-bold mb-2">100%</div>
                    <div className="text-sm text-white opacity-90">Committed to Change</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;