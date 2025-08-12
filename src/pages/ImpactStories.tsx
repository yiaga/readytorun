import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";

const ImpactStories = () => {
  // 📌 Text stories from your PDFs
  const stories = [
    {
      id: 1,
      title: "Breaking Barriers in Abuja",
      candidate: "Lois Auta",
      office: "House of Representatives",
      state: "Federal Capital Territory (Abuja)",
      year: 2019,
      summary:
        "First woman with a disability to contest for Nigeria’s House of Representatives, gaining national visibility and inspiring others.",
      type: "success",
      impact: [
        "Media coverage and national awareness",
        "Inspired more women and persons with disabilities to contest elective offices"
      ],
      content: `Lois Auta, a trailblazer and disability rights advocate, contested for a seat in the House of Representatives during the 2019 general elections under the Ready To Run programme. With support from Yiaga Africa, she received media exposure, interviews, and a campaign documentary that elevated her visibility. Despite challenges such as inaccessible terrain and societal bias, Lois became the first woman with a disability among the 4,080 candidates. Her campaign shifted perceptions about women and persons with disabilities in politics, inspiring many to believe in their leadership potential.`
    },
    {
      id: 2,
      title: "Amplifying Young Women’s Political Voices",
      candidate: "Tari Oba Oliver",
      office: "Lagos State House of Assembly / Governorship (Bayelsa) / Party Presidential Ticket",
      state: "Lagos & Bayelsa",
      year: "2018–2023",
      summary:
        "From student politics to governorship and presidential ambitions, backed by Ready To Run’s capacity building and media support.",
      type: "success",
      impact: [
        "Expanded political network",
        "Became Technical Adviser to the Bayelsa Governor on Women in Agriculture",
        "Inspired women to enter politics"
      ],
      content: `Tari Oba Oliver began her political journey at age 18 while at the University of Benin. After mobilising unregistered voters, she re-entered politics in 2018 with the help of Ready To Run, which provided her with capacity building, policy drafting skills, community organising, social capital, and media exposure. She contested for the Lagos State House of Assembly, later ran for Bayelsa governorship in 2019 as the only female among 20 men, and pursued her party’s presidential ticket in 2023. Beyond elections, she now serves as Technical Adviser to the Bayelsa Governor on Women in Agriculture and holds multiple leadership roles in women’s empowerment organisations.`
    },
    {
      id: 3,
      title: "Empowering Grassroots Leaders in Edo",
      candidate: "Grace Ese Obakina",
      office: "Edo State House of Assembly",
      state: "Edo",
      year: 2019,
      summary:
        "Advocate against gender-based violence who used Ready To Run training to amplify grassroots advocacy and political ambition.",
      type: "success",
      impact: [
        "Boosted self-confidence",
        "Gained recognition among electorates",
        "Strengthened advocacy for rural communities"
      ],
      content: `Grace Ese Obakina, a social worker and gender-based violence advocate, ventured into elective politics in 2017, contesting for local government chairman in Edo State. In 2019, she joined the Ready To Run programme, receiving training that transformed her confidence, public speaking, and campaign strategy. Despite financial limitations and gender bias, she contested for a seat in the Edo State House of Assembly under the Labour Party. Her campaign elevated her profile among electorates and reinforced her commitment to grassroots development and women’s empowerment.`
    }
  ];

  // 📌 Separate set for video stories
  const videoStories = [
    {
      id: 101,
      title: "From Classroom to Council Chamber",
      candidate: "Samuel Adeyemi",
      office: "Local Government Councillor",
      state: "Oyo",
      year: 2022,
      videoUrl: "https://www.youtube.com/embed/QwWvoT-3Cho",
      description:
        "Samuel shares his journey from being a teacher to winning his first political office, focusing on education reform in his ward."
    },
    {
      id: 102,
      title: "Tech for Transparency",
      candidate: "Fatima Bello",
      office: "State Assembly Member",
      state: "Kwara",
      year: 2023,
      videoUrl: "https://www.youtube.com/embed/QwWvoT-3Cho",
      description:
        "Fatima implemented digital tracking for constituency projects, ensuring accountability and faster delivery."
    },
    {
      id: 103,
      title: "Youth Mobilisation for Change",
      candidate: "Michael Chukwudi",
      office: "Youth Leader",
      state: "Enugu",
      year: 2021,
      videoUrl: "https://www.youtube.com/embed/QwWvoT-3Cho",
      description:
        "Michael’s grassroots mobilisation brought thousands of first-time voters into the political process."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Impact Stories</h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Real stories from young leaders who are transforming Nigeria through politics
            </p>
          </div>
        </section>

        {/* Success Stories (Text Only) */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Success Stories</h2>
            <div className="space-y-12">
              {stories.map((story) => (
                <Card key={story.id} className="shadow-accent">
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
                    <p className="text-sm text-muted-foreground mb-4">{story.office}</p>
                    <p className="text-muted-foreground mb-4">{story.content}</p>
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-primary">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {story.impact.map((point, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <span className="text-secondary mr-2">•</span>
                            {point}
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

        {/* Video Stories */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Video Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoStories.map((video) => (
                <Card key={video.id} className="shadow-primary">
                  <CardContent className="p-0">
                    <iframe
                      src={video.videoUrl}
                      title={video.title}
                      className="w-full aspect-video"
                      allowFullScreen
                    ></iframe>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-primary">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">{video.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
