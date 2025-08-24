import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, TrendingUp, Link as LinkIcon } from "lucide-react";

import image1 from "../assets/images/persons_1.jpg";
import image2 from "../assets/images/persons_2.jpg";
import image3 from "../assets/images/persons_3.jpg";
import image4 from "../assets/images/persons_4.jpg";
import image5 from "../assets/images/persons_5.jpg";

import Heading from "@/components/headers/Heading";
import PageBanner from "@/components/banners/PageBanner";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "A Body of Knowledge",
      description:
        "Ready to Run provides learning opportunities for young aspirants.",
      image: image1,
    },
    {
      icon: Users,
      title: "A Source of Inspiration",
      description:
        "Training and resources to inspire young men and women to run.",
      image: image2,
    },
    {
      icon: TrendingUp,
      title: "A Guide to Success",
      description:
        "We prepare aspirants with skills for running campaigns and winning elections.",
      image: image3,
    },
    {
      icon: LinkIcon,
      title: "A Linkage",
      description:
        "Connecting aspirants with mentors, peers, political parties and opportunities.",
      image: image4,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PageBanner
          heading="About ReadyToRun"
          description="A movement dedicated to inspiring young Nigerians to run for
              elective office."
        />

        <section className="py-16">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={image5}
              alt="Leadership training"
              className="rounded-2xl shadow-lg object-cover w-full h-80"
            />
            <div>
              <Heading variant="h3" className=" mb-4">
                Our Story
              </Heading>
              <p className="text-lg text-muted-foreground mb-4">
                Borne out of the Not Too Young To Run Campaign, Ready to Run is
                a movement dedicated to inspiring young men and women to run for
                elective office in Nigeria. The campaign has mobilized and
                supported over 400 young candidates.
              </p>
              <p className="text-lg text-muted-foreground">
                ReadyToRun is a platform that inspires, prepares, and supports
                young Nigerians with the competence, character, and capacity to
                run for elective office.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid with Visuals */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <Heading variant="h2" bold={false} className="text-center mb-12">
              Ready To Run is...
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="overflow-hidden group hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-48">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery / Impact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Heading variant="h2" bold={false} className="text-center mb-12">
              Our Impact
            </Heading>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[image1, image2, image3, image4, image5, image2].map(
                (img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Campaign Impact"
                    className="rounded-xl object-cover w-full h-56 hover:scale-105 transition-transform shadow-md"
                  />
                )
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-20 text-white">
          <img
            src="/images/cta-bg.jpg"
            alt="Youth gathering"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              If you are a young Nigerian (under the age of 35) and seeking to
              contest elections in 2027, register on:{" "}
              <strong>www.readytorunng.org</strong>
            </p>
            <a
              href="/register"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Register Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
