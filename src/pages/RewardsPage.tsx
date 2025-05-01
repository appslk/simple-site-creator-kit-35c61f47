import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RewardsPage = () => {
  // Dummy data for leaderboard - sorted by points (highest first)
  const generateLeaderboardData = () => {
    return Array.from({ length: 100 }, (_, i) => ({
      rank: i + 1,
      username: `User${i + 1}_${Math.floor(Math.random() * 1000)}`,
      points: Math.floor(Math.random() * 5000) + 5000 - (i * 50),
      level: Math.floor(Math.random() * 10) + 1,
    })).sort((a, b) => b.points - a.points)
      .map((item, index) => ({
        ...item,
        rank: index + 1 // Reassign ranks after sorting
      }));
  };
  
  const [leaderboardData] = useState(generateLeaderboardData());
  
  // Dummy data for gallery
  const galleryItems = [
    {
      id: 1,
      title: "Community Event",
      image: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3",
      description: "Highlights from our recent community meetup in Tokyo."
    },
    {
      id: 2,
      title: "NFT Preview",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3",
      description: "Exclusive preview of our upcoming NFT collection."
    },
    {
      id: 3,
      title: "Platform Update",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3",
      description: "New features coming to the ScrollVerse platform."
    },
    {
      id: 4,
      title: "Community Showcase",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3",
      description: "Amazing artwork created by our community members."
    },
    {
      id: 5,
      title: "Event Announcement",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3",
      description: "Join us for our upcoming virtual conference."
    },
    {
      id: 6,
      title: "Development Update",
      image: "https://images.unsplash.com/photo-1641893844274-d70a25c89ac1?ixlib=rb-4.0.3",
      description: "See what our developers have been working on."
    }
  ];
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredLeaderboard = leaderboardData.filter(entry => 
    entry.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-background"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Rewards System</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Participate in our ecosystem, earn points, climb the leaderboard, and unlock exclusive rewards.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-card border border-purple-900/50 rounded-lg p-6 mb-16">
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-secondary/50 p-6 rounded-lg border border-purple-900/50">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-900/30 rounded-full mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Participate</h3>
                <p className="text-gray-400">
                  Engage with our community, join events, complete tasks, and contribute to the ecosystem.
                </p>
              </div>
              
              <div className="bg-secondary/50 p-6 rounded-lg border border-purple-900/50">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-900/30 rounded-full mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Earn Points</h3>
                <p className="text-gray-400">
                  Receive points for your actions and contributions, with bonus multipliers for active participants.
                </p>
              </div>
              
              <div className="bg-secondary/50 p-6 rounded-lg border border-purple-900/50">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-900/30 rounded-full mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Claim Rewards</h3>
                <p className="text-gray-400">
                  Redeem your points for exclusive NFTs, token allocations, and special access to platform features.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Connect Wallet to Start
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="leaderboard" className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search username..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-4 py-2 bg-secondary/50 border border-purple-900/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
                />
              </div>
            </div>
            
            <TabsContent value="leaderboard">
              <div className="bg-card border border-purple-900/50 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-purple-900/50 bg-secondary/50">
                        <th className="px-6 py-3 text-left text-sm font-medium">Rank</th>
                        <th className="px-6 py-3 text-left text-sm font-medium">Username</th>
                        <th className="px-6 py-3 text-left text-sm font-medium">Level</th>
                        <th className="px-6 py-3 text-left text-sm font-medium">Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLeaderboard.map((entry) => (
                        <tr 
                          key={entry.rank} 
                          className="border-b border-purple-900/30 hover:bg-secondary/20 transition-colors"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {entry.rank <= 3 ? (
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                                  entry.rank === 1 ? 'bg-yellow-500' :
                                  entry.rank === 2 ? 'bg-gray-300' : 'bg-amber-700'
                                }`}>
                                  {entry.rank}
                                </span>
                              ) : (
                                <span className="w-6 text-center mr-2">{entry.rank}</span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {entry.username}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-purple-900 flex items-center justify-center mr-2">
                                {entry.level}
                              </div>
                              <div className="h-2 bg-secondary/50 rounded-full w-24">
                                <div
                                  className="h-full bg-purple-600 rounded-full"
                                  style={{ width: `${(entry.level % 10) * 10}%` }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap font-semibold text-purple-400">
                            {entry.points.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {filteredLeaderboard.length === 0 && (
                  <div className="p-10 text-center text-gray-400">
                    No results found for "{searchTerm}"
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="gallery">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-card border border-purple-900/50 rounded-lg overflow-hidden group"
                  >
                    <div className="relative h-64">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Ready to Start Earning?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Connect your wallet and start participating in our ecosystem to earn rewards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Connect Wallet
              </Button>
              <Button variant="outline">
                Learn More About Rewards
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RewardsPage;
