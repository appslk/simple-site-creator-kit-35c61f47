
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Staking", path: "#", status: "coming-soon" },
    { name: "Games", path: "#", status: "coming-soon" },
    { name: "Swap", path: "#", status: "coming-soon" },
    { name: "TalentDAO", path: "#", status: "coming-soon" },
    { name: "Rewards", path: "/rewards", status: "active" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md py-2" : "py-4 bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold gradient-text mr-10">
            ScrollVerse
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`nav-link text-sm font-medium ${
                  item.status === "active" ? "text-pink-400" : ""
                }`}
              >
                {item.name}
                {item.status === "coming-soon" && (
                  <span className="ml-2 text-xs px-2 py-0.5 bg-secondary rounded-full">
                    Soon
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
        
        <Button className="hidden md:flex black-pink-gradient hover:opacity-90">
          Connect Wallet
        </Button>
        
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-pink-400 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md absolute top-full left-0 right-0 p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 pb-4">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`nav-link ${
                  item.status === "active" ? "text-pink-400" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
                {item.status === "coming-soon" && (
                  <span className="ml-2 text-xs px-2 py-0.5 bg-secondary rounded-full">
                    Soon
                  </span>
                )}
              </Link>
            ))}
            <Button className="w-full mt-2 pink-black-gradient hover:opacity-90">
              Connect Wallet
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
