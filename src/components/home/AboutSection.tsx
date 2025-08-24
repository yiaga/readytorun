import { Link } from "react-router-dom";
import Heading from "../headers/Heading";
import BaseSpacing from "../Spacing/BaseSpacing";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="container py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div>
          <Heading variant="h2" bold={false} className=" mb-6">
            About ReadyToRun
          </Heading>
          <p className="text-lg leading-relaxed text-gray-600 mb-6">
            Borne out of the Not Too Young To Run Campaign, Ready to Run is a
            movement dedicated to inspiring young men and women to run for
            elective office in Nigeria. The campaign has mobilized and supported
            over 400 young candidates.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            We want to make a statement that young people can demonstrate
            excellent public leadership and have the capacity to address
            Africa's governance challenges.
          </p>
          <BaseSpacing />
          <Link to="/about" className="inline-flex items-center">
            <Button variant="secondary" size="lg">
              Read More
            </Button>
          </Link>
        </div>

        {/* Video embed */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/OYJVSlsZr9I"
            title="About Video"
            // frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
