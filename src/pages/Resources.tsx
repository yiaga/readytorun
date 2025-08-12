import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Youth Candidacy Report",
      description: "Comprehensive analysis of youth participation in Nigerian elections and strategies for increasing young candidate success rates.",
      type: "PDF Report",
      link: "https://drive.google.com/file/d/1GKXTob2De2Nw2HqwzZ13r92D8y0bdYbM/view?usp=drive_link",
      category: "Research"
    },
    {
      title: "Youth Representation Report",
      description: "In-depth study on youth representation in governance structures across Nigeria, highlighting gaps and opportunities.",
      type: "PDF Collection",
      link: "https://drive.google.com/drive/folders/1AJsodO32K3NKw_UmmZbxDKWDeAmfk2AK?usp=drive_link",
      category: "Research"
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
                Resources
              </h1>
              <p className="text-xl lg:text-2xl opacity-90">
                Access research reports, guides, and tools to support your political journey
              </p>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Available Resources</h2>
                <p className="text-lg text-muted-foreground">
                  Download and access key research documents and reports that inform our work
                </p>
              </div>

              <div className="grid gap-8">
                {resources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                            <FileText className="h-6 w-6 text-accent-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                                {resource.category}
                              </span>
                              <span>•</span>
                              <span>{resource.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild>
                          <a 
                            href={resource.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Document
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a 
                            href={resource.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Resources Coming Soon */}
              <Card className="mt-12 bg-muted/50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">More Resources Coming Soon</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    We're continuously developing new resources to support young political leaders. 
                    Check back regularly for updates.
                  </p>
                  <Button variant="outline">
                    Subscribe for Updates
                  </Button>
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

export default Resources;