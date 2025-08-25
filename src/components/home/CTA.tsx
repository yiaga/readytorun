import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  UserPlus,
  Heart,
  MessageSquare,
  ArrowRight,
  Users,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import Heading from "../headers/Heading";

const CTA = () => {
  return (
    <>
      <section className="relative py-20 bg-white">
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Heading
              variant="h2"
              bold={false}
              className=" mb-4 tracking-tight text-primary"
            >
              Ready to Transform Nigeria?
            </Heading>
            <p className="text-lg mb-12 text-muted-foreground">
              Join hundreds of young Nigerians already shaping the future of our
              democracy.
            </p>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: UserPlus,
                  title: "Register to Run",
                  desc: "Start your political journey today",
                },
                {
                  icon: Users,
                  title: "Volunteer",
                  desc: "Support other young candidates",
                },

              ].map((item, i) => (
                <article
                  key={i}
                  className="bg-white rounded-2xl shadow-[0_0_40px_0_#0000000D] hover:scale-105 py-8"
                >
                  {/* <CardContent className="p-8 text-center"> */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 rounded-full bg-[#feca07]/20">
                      <item.icon className="h-8 w-8 text-[#feca07]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  {/* </CardContent> */}
                </article>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#feca07] text-[#094c66] hover:bg-[#ffdf47] font-semibold px-8"
              >
                <Link to="/register">
                  Register Now <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#feca07] text-[#094c66] hover:bg-[#feca07] hover:text-[#094c66]"
              >
                <Link to="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
