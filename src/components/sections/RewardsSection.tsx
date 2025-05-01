
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const RewardsSection = () => {
  return (
    <section id="rewards" className="section-container">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="section-heading">Rewards</h2>
          <p className="text-xl mb-6 text-gray-300">
            Join our reward system to earn points, climb the leaderboard, and unlock exclusive benefits within the ScrollVerse ecosystem.
          </p>
          
          <div className="bg-secondary/50 p-6 rounded-lg mb-8 border border-pink-500/50">
            <h3 className="text-xl font-semibold mb-4 text-pink-300">How It Works</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center mr-3">1</span>
                <span>Participate in community events and activities</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center mr-3">2</span>
                <span>Earn points for your contributions</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center mr-3">3</span>
                <span>Climb the leaderboard rankings</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center mr-3">4</span>
                <span>Unlock exclusive rewards and benefits</span>
              </li>
            </ul>
          </div>
          
          <Link to="/rewards">
            <Button size="lg" className="group">
              View Full Rewards Page
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="flex-1 relative">
          <div className="relative z-10 bg-card p-6 rounded-lg border border-pink-500/50">
            <h3 className="text-xl font-semibold mb-4">Top Rewards Earners</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-pink-800 flex items-center justify-center mr-3">
                      {i}
                    </span>
                    <span className="font-medium">User{i}_{Math.floor(Math.random() * 1000)}</span>
                  </div>
                  <span className="font-bold text-pink-400">{(6-i) * 1000 + Math.floor(Math.random() * 500)} pts</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link to="/rewards" className="text-pink-400 hover:text-pink-300 transition-colors">
                View complete leaderboard →
              </Link>
            </div>
          </div>
          
          <div className="absolute -top-4 -left-4 w-full h-full bg-pink-600/20 rounded-lg -z-10 blur-sm"></div>
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-pink-600/10 rounded-lg -z-10 blur-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
