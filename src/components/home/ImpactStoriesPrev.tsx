import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Heading from "../headers/Heading";
import SectionSpacing from "../Spacing/SectionSpacing";

import image1 from "../../assets/images/persons_1.jpg";
import image2 from "../../assets/images/persons_2.jpg";
import image3 from "../../assets/images/persons_3.jpg";

const impactStories = [
  {
    title: "Breaking Barriers in Abuja",
    description:
      "Lois Auta, first woman with a disability to run for Nigeria’s House of Representatives, gained national visibility and inspired women with disabilities.",
    impact: "Challenged gender & disability stereotypes",
    pdfUrl: "/pdfs/R2R-quotes-banner.pdf",
  },
  {
    title: "Amplifying Women’s Voices in Politics",
    description:
      "Tari Oba Oliver and Grace Ese Obakina leveraged Ready To Run training to contest elections and gain leadership roles.",
    impact: "Expanded networks & boosted confidence",
    pdfUrl: "/pdfs/beneficiaries-stories-for-R2R.pdf",
  },
];

const ImpactStoriesPrev = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <Heading
          variant="h2"
          bold={false}
          className="text-center text-primary "
        >
          Impact Stories
        </Heading>
        <SectionSpacing />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Compact story cards */}
          <div>
            <Heading variant="h3" bold={false} className=" mb-8">
              Real Change, Real Leaders
            </Heading>
            <div className="space-y-5">
              {impactStories.map((story, index) => (
                <Card
                  key={index}
                  className="rounded-xl border shadow-sm hover:shadow-md transition"
                >
                  <CardContent className="p-5">
                    <h4 className="text-base font-semibold text-primary mb-1">
                      {story.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {story.description}
                    </p>
                    {/* <Badge
                      variant="secondary"
                      className="text-xs px-2 py-0.5 mb-3"
                    >
                      {story.impact}
                    </Badge> */}
                    <div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(story.pdfUrl, "_blank")}
                      >
                        <Download className="h-4 w-4 mr-1" /> PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button asChild variant="default" className="mt-6">
              <Link to="/stories">
                More Stories
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>

          <Card className="rounded-xl border  overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full aspect-video">
                {/* Image Gallery */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <img
                      src={image1}
                      alt="Young leaders campaign"
                      className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <img
                    src={image2}
                    alt="Campaign rally"
                    className="w-full h-40 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={image3}
                    alt="Leadership workshop"
                    className="w-full h-40 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
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
