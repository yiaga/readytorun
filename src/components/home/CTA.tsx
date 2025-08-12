import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Heart, MessageSquare, ArrowRight, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
      <section className="py-16 text-white" style={{ backgroundColor: "#094c66" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Nigeria?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of young Nigerians who are taking charge of their political future
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                  <UserPlus className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Register to Run</h3>
                <p className="text-sm opacity-80">Start your political journey today</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Volunteer</h3>
                <p className="text-sm opacity-80">Support other young candidates</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Spread the Word</h3>
                <p className="text-sm opacity-80">Help expand our movement</p>
              </div>
            </div>

            <div className="space-x-4">
              <Button asChild className="bg-[#feca07] text-[#094c66] hover:bg-[#ffdf47]" size="lg">
                <Link to="/register">Register Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#feca07] text-[#094c66] hover:bg-[#feca07] hover:text-[#094c66]">
                <Link to="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
        );
};

export default CTA;