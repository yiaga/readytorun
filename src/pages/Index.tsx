import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
// import Countdown from "@/components/home/Countdown";
// import YouTubePlaylist from "@/components/home/YouTubePlaylist";
// import ImpactStoriesPreview from "@/components/home/ImpactStoriesPreview";
// import NewsEvents from "@/components/home/NewsEvents";
// import CallToAction from "@/components/home/CallToAction";CallToAction
import CTA from "@/components/home/CTA";
import HomeBanner from "@/components/home/HomeBanner";
import ImpactStoriesPrev from "@/components/home/ImpactStoriesPrev";
import TVShow from "@/components/home/TVShow";
import SectionSpacing from "@/components/Spacing/SectionSpacing";
import AboutSection from "@/components/home/AboutSection";
import _AboutSection from "@/components/home/_AboutSection";
import Sponsors from "@/components/layout/Sponsors";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HomeBanner />
        {/* <HeroSlider /> */}
        {/* <Countdown /> */}
        {/* <CountdownTimer /> */}
        <SectionSpacing />
        {/* <_AboutSection /> */}
        <AboutSection />
        <SectionSpacing />
        {/* <YouTubePlaylist /> */}
        {/* <TVShow /> */}
        <ImpactStoriesPrev />
        {/* <ImpactStoriesPreview /> */}
        {/* <NewsEvents /> */}
        {/* <NewsAndEvents /> */}
        {/* <CallToAction /> */}
        {/* <Sponsors /> */}
        <SectionSpacing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
