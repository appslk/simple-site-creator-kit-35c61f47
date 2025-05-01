
import { useEffect, useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import RewardsSection from "@/components/sections/RewardsSection";
import AboutSection from "@/components/sections/AboutSection";
import NFTsSection from "@/components/sections/NFTsSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import TokenSection from "@/components/sections/TokenSection";
import TeamSection from "@/components/sections/TeamSection";
import SocialsSection from "@/components/sections/SocialsSection";
import ScrollIndicator from "@/components/ScrollIndicator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronUp } from "lucide-react";

const HomePage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const sections = [
    { id: "rewards", label: "Rewards" },
    { id: "about", label: "About" },
    { id: "nfts", label: "NFTs" },
    { id: "roadmap", label: "Roadmap" },
    { id: "token", label: "Token" },
    { id: "team", label: "Team" },
    { id: "socials", label: "Socials" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <HeroSection />
      <RewardsSection />
      <AboutSection />
      <NFTsSection />
      <RoadmapSection />
      <TokenSection />
      <TeamSection />
      <SocialsSection />
      
      <ScrollIndicator sections={sections} />
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full pink-black-gradient hover:opacity-90 flex items-center justify-center transition-all shadow-lg shadow-pink-500/30"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
      
      <Footer />
    </div>
  );
};

export default HomePage;
