import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import CountdownTimer from "@/components/home/CountdownTimer";
// import Countdown from "@/components/home/Countdown";
// import YouTubePlaylist from "@/components/home/YouTubePlaylist";
// import ImpactStoriesPreview from "@/components/home/ImpactStoriesPreview";
// import NewsEvents from "@/components/home/NewsEvents";
// import CallToAction from "@/components/home/CallToAction";CallToAction
import TVShow from "@/components/home/TVShow";
import ImpactStoriesPrev from "@/components/home/ImpactStoriesPrev";
import NewsAndEvents from "@/components/home/NewsAndEvents";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSlider />
        {/* <Countdown /> */}
        <CountdownTimer />
        <AboutSection />
        {/* <YouTubePlaylist /> */}
        <TVShow />
        <ImpactStoriesPrev/>
        {/* <ImpactStoriesPreview /> */}
        {/* <NewsEvents /> */}
        <NewsAndEvents />
        {/* <CallToAction /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
