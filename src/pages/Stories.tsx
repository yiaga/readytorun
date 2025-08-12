import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Quote, Calendar, MapPin } from "lucide-react";

const Stories = () => {
  const videoStories = [
    {
      id: 1,
      title: "From Student Leader to State Assembly",
      speaker: "Adaora Okafor",
      office: "House of Assembly Member, Anambra State",
      thumbnail: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=300&fit=crop",
      duration: "12:34",
      description: "Watch how a former student union president successfully transitioned to state politics with ReadyToRun's support."
    },
    {
      id: 2,
      title: "Winning Against All Odds",
      speaker: "Ibrahim Suleiman",
      office: "Local Government Chairman, Kaduna",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
      duration: "15:22",
      description: "A young entrepreneur shares his journey from business to politics and how he won his first election at age 28."
    },
    {
      id: 3,
      title: "Breaking Barriers as a Young Woman in Politics",
      speaker: "Folake Adebayo",
      office: "Federal House of Representatives",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      duration: "18:45",
      description: "Inspiring story of how mentorship and strategic planning helped overcome gender and age challenges in politics."
    }
  ];

  const textStories = [
    {
      id: 1,
      title: "The Power of Youth Voices in Governance",
      author: "Chidi Okwu",
      office: "Councillor, Lagos State",
      date: "January 2024",
      location: "Lagos",
      excerpt: "When I decided to run for office at 26, many people told me I was too young. Today, I've implemented three major youth programs in my ward, proving that age is just a number when it comes to effective leadership.",
      fullStory: "My journey into politics wasn't planned. As a software developer, I was frustrated by the lack of digital infrastructure in my community. Instead of complaining, I decided to be part of the solution. ReadyToRun provided me with the training and confidence I needed to present my vision to the voters. Today, my ward has free Wi-Fi zones and digital literacy programs for over 500 residents."
    },
    {
      id: 2,
      title: "From Classroom to Campaign Trail",
      author: "Amina Hassan",
      office: "State House of Assembly, Kano",
      date: "December 2023",
      location: "Kano",
      excerpt: "Teaching gave me the skills to communicate with people from all walks of life. Those same skills helped me connect with voters and win a seat in the state assembly, where I now champion education reform.",
      fullStory: "As a secondary school teacher for five years, I saw firsthand the challenges facing our education system. When ReadyToRun reached out to me, I realized I could make a bigger impact from the inside. The campaign training they provided helped me articulate my education policies clearly. Now, I'm working on a bill to improve teacher welfare and student infrastructure across Kano State."
    },
    {
      id: 3,
      title: "Innovation in Local Government",
      author: "Emeka Nwankwo",
      office: "Local Government Chairman, Enugu",
      date: "November 2023",
      location: "Enugu",
      excerpt: "Technology and traditional governance can work together. In my first year as chairman, we've digitized our revenue collection and improved transparency through online reporting systems.",
      fullStory: "Coming from a tech background, I brought innovation to local government administration. ReadyToRun's mentorship program connected me with experienced politicians who taught me how to balance innovation with community needs. Our digital initiatives have increased revenue by 40% while making government services more accessible to residents."
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
                Impact Stories
              </h1>
              <p className="text-xl lg:text-2xl opacity-90">
                Real stories from young leaders who are transforming Nigeria through politics
              </p>
            </div>
          </div>
        </section>

        {/* Video Stories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Video Stories</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {videoStories.map((story) => (
                  <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={story.thumbnail} 
                        alt={story.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                        <Button size="lg" className="rounded-full w-16 h-16">
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                      <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">
                        {story.duration}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{story.title}</CardTitle>
                      <div className="space-y-1">
                        <p className="font-medium text-accent">{story.speaker}</p>
                        <p className="text-sm text-muted-foreground">{story.office}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{story.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Text Stories Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Written Stories</h2>
              
              <div className="space-y-8">
                {textStories.map((story) => (
                  <Card key={story.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl mb-2">{story.title}</CardTitle>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="font-medium text-accent">{story.author}</span>
                            <span>{story.office}</span>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {story.date}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {story.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start mb-4">
                        <Quote className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                        <p className="text-lg italic text-muted-foreground">{story.excerpt}</p>
                      </div>
                      <p className="text-foreground leading-relaxed">{story.fullStory}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-16 text-center">
                <Card className="bg-gradient-to-br from-accent to-accent/90 text-accent-foreground">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Share Your Story</h3>
                    <p className="text-lg mb-6 opacity-90">
                      Have you been supported by ReadyToRun? We'd love to hear about your journey 
                      and share it to inspire others.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="secondary" size="lg">
                        Submit Your Story
                      </Button>
                      <Button variant="outline" size="lg" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                        Contact Us
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

export default Stories;