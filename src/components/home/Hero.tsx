import { useEffect, useState } from "react";
import Heading from "../headers/Heading";
import { Link } from "react-router-dom";


export default function Hero() {

 type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(): TimeLeft {
 
  const difference = +new Date("2027-05-29") - +new Date();

  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="text-center">
      <Heading className="text-4xl" variant={"h2"} bold={false}>
        Your Voice, Your Leadership
      </Heading>
      <p className="mt-4 font-light text-xl">
        Join over 400 young candidates who have taken the step towards political
        leadership
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <Link
        to="/register"
        className="bg-[#48484a] text-white p-2.5 rounded-tl-lg rounded-br-lg"
      >
        Register Now
      </Link>

      <Link
        to="/about"
        className="border border-[#48484a] p-2.5 rounded-tl-lg rounded-br-lg"
      >
        Learn More
      </Link>
      </div>

      {/* Countdown */}
      <div className="flex justify-center gap-8 mt-10 ">
        <div>
          <Heading variant="h1">{timeLeft.days || "00"}</Heading>
          <span className="block font-light">Days</span>
        </div>
        <div>
          <Heading variant="h1">{timeLeft.hours || "00"}</Heading>
          <span className="block font-light">Hours</span>
        </div>
        <div>
          <Heading variant="h1">{timeLeft.minutes || "00"}</Heading>
          <span className="block font-light">Minutes</span>
        </div>
        <div>
          <Heading variant="h1">{timeLeft.seconds || "00"}</Heading>
          <span className="block font-light">Seconds</span>
        </div>
      </div>
    </section>
  );
}
