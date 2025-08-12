import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Clock, MapPin } from "lucide-react";

const ImpactStories = () => {
  const stories = [
    {
      id: 1,
      title: "From Student Leader to State Representative",
      candidate: "Adaora Okafor",
      office: "House of Assembly",
      state: "Anambra",
      year: "2023",
      type: "success",
      summary: "How university student union experience translated to effective legislative representation",
      videoId: "QwWvoT-3Cho",
      content: "Adaora's journey from organizing campus protests to drafting state legislation shows how youth leadership skills transfer to formal politics. Her bill on youth entrepreneurship support has already passed first reading.",
      impact: [
        "3 bills sponsored in first year",
        "Youth unemployment reduced by 15% in constituency",
        "Established 5 skill acquisition centers"
      ]
    },
    {
      id: 2,
      title: "Building Bridges: A Young Mayor's Vision",
      candidate: "Ibrahim Musa",
      office: "Local Government Chairman",
      state: "Kano",
      year: "2022",
      type: "success",
      summary: "Transforming local governance through technology and community engagement",
      videoId: "QwWvoT-3Cho",
      content: "At 28, Ibrahim became the youngest LGA chairman in Kano state. His tech-driven approach to governance has revolutionized service delivery and community participation in his local government area.",
      impact: [
        "Digital service platform serving 200,000 residents",
        "Reduced bureaucratic processes by 60%",
        "Improved internally generated revenue by 200%"
      ]
    },
    {
      id: 3,
      title: "Breaking Barriers: A Woman's Journey to the Senate",
      candidate: "Dr. Fatima Abdullahi",
      office: "Senator",
      state: "Kaduna",
      year: "2023",
      type: "success",
      summary: "Overcoming gender stereotypes to champion education reform in the National Assembly",
      videoId: "QwWvoT-3Cho",
      content: "Dr. Fatima's victory as the youngest female senator represents a breakthrough for women in Nigerian politics. Her focus on education reform and girl-child empowerment is already yielding results.",
      impact: [
        "Education amendment bill passed",
        "1000+ girl scholarships facilitated",
        "Women's participation in politics increased by 25% in her state"
      ]
    },
    {
      id: 4,
      title: "The Power of Persistence: A Second-Time Winner",
      candidate: "Chinedu Okeke",
      office: "House of Representatives",
      state: "Imo",
      year: "2023",
      type: "success",
      summary: "Learning from defeat to achieve victory in federal elections",
      videoId: "QwWvoT-3Cho",
      content: "After losing his first election bid in 2019, Chinedu spent four years building grassroots support and refining his message. His perseverance paid off with a decisive victory in 2023.",
      impact: [
        "Won with 65% of votes in 2023",
        "Built network of 500+ youth volunteers",
        "Infrastructure projects worth ₦2 billion secured"
      ]
    }
  ];

  const challenges = [
    {
      title: "Overcoming Financial Constraints",
      description: "Young candidates share strategies for fundraising and resource mobilization",
      lessons: ["Community fundraising", "Digital campaigns", "Volunteer networks"]
    },
    {
      title: "Building Political Networks",
      description: "How newcomers navigate established political structures",
      lessons: ["Mentorship programs", "Cross-party collaboration", "Grassroots organizing"]
    },
    {
      title: "Connecting with Voters",
      description: "Effective communication strategies for young politicians",
      lessons: ["Social media engagement", "Town halls", "Door-to-door campaigns"]
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

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Success Stories</h2>
          
          <div className="space-y-12">
            {stories.map((story, index) => (
              <div key={story.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Video/Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Card className="shadow-primary overflow-hidden">
                    <div className="relative aspect-video bg-muted flex items-center justify-center">
                      <div className="text-center">
                        <PlayCircle className="h-16 w-16 text-secondary mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Video Story</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="shadow-accent h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{story.type.toUpperCase()}</Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          {story.state}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {story.year}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-primary mb-2">{story.title}</h3>
                      <p className="text-lg font-medium text-secondary mb-1">{story.candidate}</p>
                      <p className="text-sm text-muted-foreground mb-4">{story.office}, {story.state} State</p>
                      
                      <p className="text-muted-foreground mb-4">{story.content}</p>
                      
                      <div className="space-y-2 mb-4">
                        <h4 className="font-semibold text-primary">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {story.impact.map((impact, i) => (
                            <li key={i} className="flex items-start text-sm text-muted-foreground">
                              <span className="text-secondary mr-2">•</span>
                              {impact}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Lessons Learned</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="shadow-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">{challenge.title}</h3>
                  <p className="text-muted-foreground mb-4">{challenge.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary">Key Strategies:</h4>
                    <ul className="space-y-1">
                      {challenge.lessons.map((lesson, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <span className="text-secondary mr-2">•</span>
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     
      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="shadow-lg max-w-4xl mx-auto text-white" style={{ backgroundColor: "#094c66" }}>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Your Story Could Be Next</h3>
              <p className="text-lg mb-6 opacity-90">
                These young leaders started where you are today. With the right preparation and support, you can create your own impact story.
              </p>
              <div className="space-x-4">
                <Button asChild className="bg-secondary text-primary hover:bg-gray-200" size="lg">
                  <a href="/register">Start Your Journey</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-secondary text-primary hover:bg-white hover:text-primary">
                  <a href="/get-involved">Get Support</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default ImpactStories;