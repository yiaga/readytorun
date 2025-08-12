import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Badge } from "../ui/badge";


  const newsEvents = [
    {
      title: "ReadyToRun Training Program Applications Open",
      date: "December 15, 2024",
      type: "Training",
      description: "Applications are now open for our comprehensive 6-month training program for aspiring political candidates."
    },
    {
      title: "Youth Political Summit 2025",
      date: "January 20, 2025",
      type: "Event",
      description: "Join us for a national summit bringing together young political leaders and aspirants from across Nigeria."
    },
    {
      title: "50 New Candidates Successfully Registered",
      date: "December 10, 2024",
      type: "News",
      description: "This month saw 50 young Nigerians register as potential candidates for the 2027 elections through our platform."
    }
  ];
  
const NewsAndEvents = () => {
  return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Latest News & Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsEvents.map((item, index) => (
              <Card key={index} className="shadow-primary hover:shadow-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{item.type}</Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
       );
};

export default NewsAndEvents;