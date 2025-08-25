import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

import image1 from "../assets/images/stories_1.jpg";
import image2 from "../assets/images/stories_2.jpg"
// import image2 from "../assets/images/stories_2.jpg";
import image3 from "../assets/images/stories_3.jpg";
import PageBanner from "@/components/banners/PageBanner";

const ImpactStories = () => {
  const stories = [
    {
      id: 1,
      title: "Breaking Barriers in Abuja",
      candidate: "Lois Auta",
      office: "House of Representatives",
      state: "FCT (Abuja)",
      year: 2019,
      image: image1,
      impact: [
        "First woman with a disability to contest House of Reps",
        "Inspired more women & persons with disabilities",
        "National media coverage",
      ],
    },
    {
      id: 2,
      title: "Amplifying Young Women’s Voices",
      candidate: "Tari Oba Oliver",
      office: "State Assembly / Governorship / Presidential Ticket",
      state: "Lagos & Bayelsa",
      year: "2018–2023",
      image: image2,
      impact: [
        "Expanded political network",
        "Became Technical Adviser to Bayelsa Governor",
        "Contested multiple offices including Governorship",
      ],
    },
    {
      id: 3,
      title: "Empowering Grassroots Leaders in Edo",
      candidate: "Grace Ese Obakina",
      office: "Edo State House of Assembly",
      state: "Edo",
      year: 2019,
      image: image3,
      impact: [
        "Boosted self-confidence",
        "Gained recognition among electorates",
        "Strengthened grassroots advocacy",
      ],
    },
  ];

  const videoStories = [
    {
      id: 101,
      title: "From Classroom to Council Chamber",
      candidate: "Samuel Adeyemi",
      videoUrl: "https://www.youtube.com/embed/QwWvoT-3Cho",
    },
    {
      id: 102,
      title: "Tech for Transparency",
      candidate: "Fatima Bello",
      videoUrl: "https://www.youtube.com/embed/QwWvoT-3Cho",
    },
    {
      id: 103,
      title: "Youth Mobilisation for Change",
      candidate: "Michael Chukwudi",
      videoUrl: "https://www.youtube.com/embed/QwWvoT-3Cho",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PageBanner
          heading=" Impact Stories"
          description="Real stories from young leaders transforming Nigeria through
              politics."
        />

        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4 space-y-16">
            {stories.map((story, i) => (
              <div
                key={story.id}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <img
                    src={story.image}
                    alt={story.candidate}
                    className="rounded-2xl shadow-lg w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary">{story.year}</Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {story.state}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-1">
                    {story.title}
                  </h3>
                  <p className="text-lg font-medium text-secondary mb-4">
                    {story.candidate}
                  </p>
                  <ul className="space-y-2">
                    {story.impact.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-muted-foreground"
                      >
                        <span className="text-secondary mr-2">✔</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Stories */}
        {/* <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Video Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoStories.map((video) => (
                <Card key={video.id} className="overflow-hidden rounded-xl">
                  <CardContent className="p-0">
                    <iframe
                      src={video.videoUrl}
                      title={video.title}
                      className="w-full aspect-video"
                      allowFullScreen
                    ></iframe>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-primary">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {video.candidate}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground max-w-4xl mx-auto">
              <CardContent className="p-10 text-center">
                <h3 className="text-3xl font-bold mb-4">
                  Your Story Could Be Next
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  These young leaders started where you are today. With the
                  right support, your journey could inspire the next generation.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <a href="/register">Start Your Journey</a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-secondary  hover:bg-white hover:text-primary"
                  >
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
