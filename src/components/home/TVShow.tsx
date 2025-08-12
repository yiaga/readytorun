import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";

const TVShow = () => {
  return (
      <section className="py-16" style={{ backgroundColor: "#094c66", color: "#ffffff" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#feca07" }}>ReadyToRun TV Show</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Video Placeholder */}
            <Card className="shadow-lg" style={{ backgroundColor: "#073c50", borderColor: "#feca07", borderWidth: "2px" }}>
              <CardContent className="p-0">
                <div className="relative aspect-video flex items-center justify-center" style={{ backgroundColor: "#063242" }}>
                  <div className="text-center">
                    <PlayCircle className="h-16 w-16 mx-auto mb-4" style={{ color: "#feca07" }} />
                    <p className="text-lg font-medium" style={{ color: "#ffffff" }}>ReadyToRun TV Show</p>
                    <p className="text-sm" style={{ color: "#a0c0cb" }}>Watch inspiring stories and training content</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#ffffff" }}>Learn from the Best</h3>
              <p className="text-lg mb-6" style={{ color: "#a0c0cb" }}>
                Our TV show features successful young politicians, expert trainers, and inspiring stories 
                from across Nigeria. Get insights into campaign strategies, leadership skills, and the 
                political landscape.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#feca07" }}></div>
                  <div>
                    <h4 className="font-semibold" style={{ color: "#ffffff" }}>Expert Interviews</h4>
                    <p className="text-sm" style={{ color: "#a0c0cb" }}>Learn from seasoned politicians and campaign experts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#feca07" }}></div>
                  <div>
                    <h4 className="font-semibold" style={{ color: "#ffffff" }}>Success Stories</h4>
                    <p className="text-sm" style={{ color: "#a0c0cb" }}>Hear from young leaders who won their elections</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#feca07" }}></div>
                  <div>
                    <h4 className="font-semibold" style={{ color: "#ffffff" }}>Training Sessions</h4>
                    <p className="text-sm" style={{ color: "#a0c0cb" }}>Practical campaign and leadership training</p>
                  </div>
                </div>
              </div>

              <Button size="lg" style={{ backgroundColor: "#feca07", color: "#094c66" }}>
                Watch Full Playlist
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default TVShow;