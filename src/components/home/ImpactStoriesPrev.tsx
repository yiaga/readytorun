import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Badge } from "../ui/badge";


  const impactStories = [
    {
      title: "Breaking Barriers in Lagos",
      description: "How Adaora became the youngest woman elected to Lagos State Assembly",
      impact: "3 bills passed, 15% youth unemployment reduction"
    },
    {
      title: "Digital Transformation in Kano",
      description: "Ibrahim's tech-driven approach revolutionized local government",
      impact: "200,000 residents served, 60% process efficiency gain"
    }
  ];
  
const ImpactStoriesPrev = () => {
  return (

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Impact Stories</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Real Change, Real Leaders</h3>
              <div className="space-y-6">
                {impactStories.map((story, index) => (
                  <Card key={index} className="shadow-accent">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-primary mb-2">{story.title}</h4>
                      <p className="text-muted-foreground mb-3">{story.description}</p>
                      <Badge variant="secondary" className="text-xs">{story.impact}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button asChild variant="default" className="mt-6">
                <Link to="/impact-stories">
                    Read More Stories
                    <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
                </Button>
            </div>

            {/* Video Placeholder */}
            <Card className="shadow-primary">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <PlayCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
                    <p className="text-lg font-medium text-primary">Success Story Videos</p>
                    <p className="text-sm text-muted-foreground">Watch young leaders share their journeys</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
       );
};

export default ImpactStoriesPrev;