import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ImpactStoriesPreview = () => {
  const stories = [
    {
      id: 1,
      title: "From Student Leader to State Assembly",
      speaker: "Adaora Okafor",
      office: "House of Assembly Member, Anambra State",
      thumbnail: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=300&fit=crop",
      duration: "12:34",
      type: "video"
    },
    {
      id: 2,
      title: "Winning Against All Odds",
      speaker: "Ibrahim Suleiman",
      office: "Local Government Chairman, Kaduna",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
      duration: "15:22",
      type: "video"
    },
    {
      id: 3,
      title: "Breaking Barriers as a Young Woman",
      speaker: "Folake Adebayo",
      office: "Federal House of Representatives",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      excerpt: "When I decided to run for office at 26, many people told me I was too young...",
      type: "text"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Impact Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from young leaders who are transforming Nigeria through politics
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={story.thumbnail} 
                    alt={story.title}
                    className="w-full h-48 object-cover"
                  />
                  {story.type === 'video' && (
                    <>
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                        <Button size="lg" className="rounded-full w-16 h-16">
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                      <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">
                        {story.duration}
                      </Badge>
                    </>
                  )}
                  <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
                    {story.type === 'video' ? 'Video' : 'Article'}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{story.title}</CardTitle>
                  <div className="space-y-1">
                    <p className="font-medium text-accent">{story.speaker}</p>
                    <p className="text-sm text-muted-foreground">{story.office}</p>
                  </div>
                </CardHeader>
                {story.excerpt && (
                  <CardContent>
                    <p className="text-muted-foreground">{story.excerpt}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/stories" className="inline-flex items-center">
                View All Stories <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStoriesPreview;