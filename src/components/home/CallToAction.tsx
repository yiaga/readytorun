import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Heart, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Join the movement that's transforming Nigerian politics. Whether you're ready to run 
            for office or want to support the cause, there's a place for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Register to Run */}
          <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <UserPlus className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Register to Run</h3>
              <p className="text-lg opacity-90 mb-6">
                Are you under 35 and passionate about leadership? Register now to receive 
                comprehensive support for the 2027 elections.
              </p>
              <Button variant="secondary" size="lg" asChild className="w-full">
                <Link to="/register">
                  Start Your Journey <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Volunteer */}
          <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Volunteer</h3>
              <p className="text-lg opacity-90 mb-6">
                Support the movement by volunteering your time, skills, and expertise 
                to help young leaders succeed in politics.
              </p>
              <Button variant="outline" size="lg" asChild className="w-full border-white text-white hover:bg-white hover:text-primary">
                <Link to="/get-involved">
                  Get Involved <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Spread the Word */}
          <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Spread the Word</h3>
              <p className="text-lg opacity-90 mb-6">
                Help us reach more young Nigerians by sharing our mission on social media 
                and in your networks.
              </p>
              <Button variant="outline" size="lg" asChild className="w-full border-white text-white hover:bg-white hover:text-primary">
                <Link to="/get-involved">
                  Share Now <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-accent mb-2">400+</div>
            <div className="text-lg opacity-90">Young Candidates Supported</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">2027</div>
            <div className="text-lg opacity-90">Target Election Cycle</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-lg opacity-90">Committed to Change</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;