import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2027-02-20T00:00:00').getTime(); // Approximate election date

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    // <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        {/* <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Time Until 2027 Elections
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Every second counts. Start preparing for your political journey now.
          </p> */}
          
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                  {timeLeft.days}
                </div>
                <div className="text-sm opacity-90">Days</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                  {timeLeft.hours}
                </div>
                <div className="text-sm opacity-90">Hours</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm opacity-90">Minutes</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm opacity-90">Seconds</div>
              </CardContent>
            </Card>
          </div> */}

        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-primary">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center justify-center">
                <Calendar className="h-6 w-6 mr-2" />
                2025 Local Elections Countdown
              </h3>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-primary text-primary-foreground p-4 rounded-lg">
                  <div className="text-3xl font-bold">{timeLeft.days}</div>
                  <div className="text-sm opacity-80">Days</div>
                </div>
                <div className="bg-gradient-accent text-primary p-4 rounded-lg">
                  <div className="text-3xl font-bold">{timeLeft.hours}</div>
                  <div className="text-sm opacity-80">Hours</div>
                </div>
                <div className="bg-gradient-primary text-primary-foreground p-4 rounded-lg">
                  <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm opacity-80">Minutes</div>
                </div>
                <div className="bg-gradient-accent text-primary p-4 rounded-lg">
                  <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-sm opacity-80">Seconds</div>
                </div>
              </div>
              <p className="text-muted-foreground">Time to prepare is now. Start your political journey today.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Countdown;
