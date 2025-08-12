import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Download, PlayCircle } from "lucide-react";
import { Badge } from "../ui/badge";


  const impactStories = [
  {
    title: "Breaking Barriers in Abuja",
    description:
      "Lois Auta, first woman with a disability to run for Nigeria’s House of Representatives, gained national visibility and inspired women with disabilities through Ready To Run support.",
    impact:
      "Media coverage, increased representation, challenged gender and disability stereotypes",
    pdfUrl: "/pdfs/R2R-quotes-banner.pdf"
  },
  {
    title: "Amplifying Women’s Voices in Politics",
    description:
      "Tari Oba Oliver and Grace Ese Obakina leveraged Ready To Run’s training to contest in multiple elections, strengthen grassroots advocacy, and gain political leadership roles.",
    impact:
      "Expanded political networks, boosted self-confidence, inspired more women to run",
    pdfUrl: "/pdfs/beneficiaries-stories-for-R2R.pdf"
  }
];
  
const ImpactStoriesPrev = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Impact Stories
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Real Change, Real Leaders
            </h3>
            <div className="space-y-6">
              {impactStories.map((story, index) => (
                <Card key={index} className="shadow-accent">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {story.title}
                    </h4>
                    <p className="text-muted-foreground mb-3">
                      {story.description}
                    </p>
                    <Badge variant="secondary" className="text-xs mb-4">
                      {story.impact}
                    </Badge>
                    <div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(story.pdfUrl, "_blank")}
                      >
                        <Download className="h-4 w-4 mr-2" /> Download PDF
                      </Button>
                    </div>
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
                  <p className="text-lg font-medium text-primary">
                    Success Story Videos
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Watch young leaders share their journeys
                  </p>
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