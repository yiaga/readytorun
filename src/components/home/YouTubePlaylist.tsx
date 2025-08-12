import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink } from "lucide-react";

const YouTubePlaylist = () => {
  const featuredVideos = [
    {
      id: "QwWvoT-3Cho",
      title: "Youth in Politics: Breaking Barriers",
      thumbnail: `https://img.youtube.com/vi/QwWvoT-3Cho/maxresdefault.jpg`,
      duration: "15:32"
    },
    {
      id: "dQw4w9WgXcQ", // Placeholder - replace with actual video IDs
      title: "Campaign Strategy for Young Candidates",
      thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      duration: "12:45"
    },
    {
      id: "dQw4w9WgXcQ", // Placeholder - replace with actual video IDs
      title: "Building Your Political Platform",
      thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      duration: "18:20"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            ReadyToRun TV Show
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch inspiring stories, expert interviews, and practical insights for young political leaders
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <Button size="lg" className="rounded-full w-16 h-16">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">
                    {video.duration}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://www.youtube.com/playlist?list=PLl6IvhbhEqwxQTSE2amaV5PEgo7C8NE3n" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View More Episodes
              </a>
            </Button>
            <p className="text-muted-foreground mt-4">
              Subscribe to our YouTube channel for weekly episodes featuring young leaders, 
              political insights, and campaign strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubePlaylist;