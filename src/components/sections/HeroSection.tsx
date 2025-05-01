
import { ArrowDown, Twitter, ThumbsUp, MessageSquare, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const HeroSection = () => {
  const scrollToRewardsSection = () => {
    const element = document.getElementById("rewards");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConnectTwitter = () => {
    toast.info("Twitter connection initiated", {
      description: "Please authorize access to continue"
    });
    // In a real app, this would trigger the Twitter OAuth flow
    setTimeout(() => {
      toast.success("Twitter account connected!", {
        description: "You've earned 50 points"
      });
    }, 1500);
  };

  const handleFollowAction = () => {
    toast.success("Page followed successfully!", {
      description: "You've earned 50 points"
    });
  };

  const handleLikeRetweet = () => {
    toast.success("Post liked and retweeted!", {
      description: "You've earned 25 points"
    });
  };

  const handleCommentAction = () => {
    toast.success("Comment posted!", {
      description: "You've earned 15 points"
    });
  };

  const handleInviteFriend = () => {
    toast.info("Invite link generated", {
      description: "Share this link with your friends to earn 100 points when they join"
    });
  };

  return (
    <section className="relative pt-24 md:pt-32 min-h-screen flex flex-col items-center justify-center p-4 section-gradient">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5MjkzZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="max-w-4xl mx-auto text-center z-10 mb-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to <span className="gradient-text">ScrollVerse</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-300">
          Explore our ecosystem of NFTs, rewards, and community-driven development on the Scroll network
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link to="/rewards">
            <Button variant="pinkGradient" size="lg">
              Explore Rewards
            </Button>
          </Link>
          <Button 
            variant="outline" 
            onClick={scrollToRewardsSection}
            className="group border-pink-500/30 hover:bg-pink-500/10"
          >
            Learn More
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      {/* Twitter Integration Section */}
      <div className="w-full max-w-5xl mx-auto card-gradient p-6 md:p-8 z-10 mb-24 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          <span className="gradient-text">Connect & Earn $GONK</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-200">
              Connect your Twitter (X) account and complete simple tasks to earn points that will be converted to $GONK tokens in the upcoming airdrop.
            </p>
            
            <div className="bg-purple-900/30 border border-pink-500/30 rounded-lg p-5">
              <h3 className="text-xl font-semibold mb-4">How It Works</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 mr-3 pink-black-gradient rounded-full flex items-center justify-center">
                    <Twitter className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Connect Your Twitter</h4>
                    <p className="text-sm text-gray-300">Link your Twitter account to start earning points</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 mr-3 pink-black-gradient rounded-full flex items-center justify-center">
                    <ThumbsUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Like & Retweet</h4>
                    <p className="text-sm text-gray-300">Engage with our content to earn points</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 mr-3 pink-black-gradient rounded-full flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Comment & Post</h4>
                    <p className="text-sm text-gray-300">Share our project with your followers</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 mr-3 pink-black-gradient rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Invite Friends</h4>
                    <p className="text-sm text-gray-300">Get bonus points when friends join through your referral</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl p-6 border border-pink-500/30">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Your Points</h3>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-xl font-bold text-yellow-500">0</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Follow our page</span>
                <button 
                  onClick={handleFollowAction}
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  +50 points
                </button>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-full pink-black-gradient rounded-full w-0"></div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Like and retweet</span>
                <button 
                  onClick={handleLikeRetweet}
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  +25 points each
                </button>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-full pink-black-gradient rounded-full w-0"></div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Comment on posts</span>
                <button 
                  onClick={handleCommentAction}
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  +15 points each
                </button>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-full pink-black-gradient rounded-full w-0"></div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Invite friends</span>
                <button 
                  onClick={handleInviteFriend}
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  +100 points each
                </button>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-full pink-black-gradient rounded-full w-0"></div>
              </div>
            </div>
            
            <Button 
              variant="pinkGradient" 
              className="w-full py-6"
              onClick={handleConnectTwitter}
            >
              <Twitter className="h-5 w-5 mr-2" />
              Connect Twitter to Start
            </Button>
            
            <p className="text-xs text-gray-500 mt-3 text-center">
              Your points will be converted to $GONK tokens during the airdrop
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-pink-400" />
      </div>
    </section>
  );
};

export default HeroSection;
