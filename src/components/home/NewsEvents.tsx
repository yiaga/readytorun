import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "ReadyToRun 2027 Registration Opens",
    description: "Young Nigerians can now register for comprehensive support in the 2027 election cycle.",
    date: "2024-01-15",
    time: "2 weeks ago",
    category: "Registration"
  },
  {
    id: 2,
    title: "400+ Young Candidates Supported",
    description: "ReadyToRun celebrates a milestone of supporting over 400 young political aspirants.",
    date: "2024-01-10",
    time: "3 weeks ago",
    category: "Milestone"
  },
  {
    id: 3,
    title: "Political Leadership Training Workshop",
    description: "Join our next intensive workshop on campaign strategy and political leadership.",
    date: "2024-01-20",
    time: "Upcoming",
    category: "Training"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Youth Leadership Summit 2024",
    date: "March 15, 2024",
    location: "Abuja",
    description: "Annual gathering of young political leaders and aspirants"
  },
  {
    id: 2,
    title: "Campaign Strategy Masterclass",
    date: "March 22, 2024",
    location: "Lagos",
    description: "Intensive training on modern campaign techniques"
  },
  {
    id: 3,
    title: "Women in Politics Forum",
    date: "April 5, 2024",
    location: "Port Harcourt",
    description: "Empowering young women to take political leadership"
  }
];

const NewsEvents = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Latest News */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Latest News</h2>
            <div className="space-y-6">
              {newsItems.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm bg-accent/10 text-accent px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {item.time}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {item.description}
                    </CardDescription>
                    <Button variant="ghost" className="p-0 h-auto">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link to="/news">View All News</Link>
              </Button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Events</h2>
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center text-accent text-sm mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date} • {event.location}
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {event.description}
                    </CardDescription>
                    <Button variant="ghost" className="p-0 h-auto">
                      Learn More <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link to="/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;