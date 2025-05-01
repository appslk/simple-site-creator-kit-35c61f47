
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Award, 
  Info, 
  Image, 
  MapPin, 
  Coins, 
  Users, 
  Share2 
} from "lucide-react";

interface Section {
  id: string;
  label: string;
}

interface ScrollIndicatorProps {
  sections: Section[];
}

const ScrollIndicator = ({ sections }: ScrollIndicatorProps) => {
  const [activeSection, setActiveSection] = useState("");
  const isMobile = useIsMobile();

  // Get the appropriate icon for each section
  const getIconForSection = (sectionId: string) => {
    switch (sectionId) {
      case "rewards":
        return <Award className="w-5 h-5 md:w-6 md:h-6" />;
      case "about":
        return <Info className="w-5 h-5 md:w-6 md:h-6" />;
      case "nfts":
        return <Image className="w-5 h-5 md:w-6 md:h-6" />;
      case "roadmap":
        return <MapPin className="w-5 h-5 md:w-6 md:h-6" />;
      case "token":
        return <Coins className="w-5 h-5 md:w-6 md:h-6" />;
      case "team":
        return <Users className="w-5 h-5 md:w-6 md:h-6" />;
      case "socials":
        return <Share2 className="w-5 h-5 md:w-6 md:h-6" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      className={`fixed z-50 ${
        isMobile 
          ? "bottom-6 left-0 right-0 flex flex-row justify-center items-center gap-4" 
          : "right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4"
      }`}
    >
      <div className={`p-4 rounded-xl bg-gray-900/70 backdrop-blur-md border border-purple-500/30 shadow-lg shadow-purple-500/10 ${
        isMobile ? "flex flex-row gap-4" : "flex flex-col gap-4"
      }`}>
        {sections.map((section) => (
          <div key={section.id} className="relative group">
            <button
              onClick={() => scrollToSection(section.id)}
              className={`scroll-indicator-item flex items-center justify-center transition-all duration-300 ${
                activeSection === section.id ? "active" : ""
              }`}
              aria-label={`Scroll to ${section.label} section`}
            >
              <span className={activeSection === section.id ? "text-white" : "text-gray-400/80"}>
                {getIconForSection(section.id)}
              </span>
            </button>
            
            <span className={`
              bg-gray-800 text-xs font-medium rounded-md whitespace-nowrap transition-opacity duration-300 px-3 py-2
              absolute opacity-0 group-hover:opacity-100 z-10
              ${isMobile 
                ? "left-1/2 -translate-x-1/2 bottom-full -translate-y-2 mb-2" 
                : "right-full -translate-x-2 top-1/2 -translate-y-1/2 mr-2"}
            `}>
              {section.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
