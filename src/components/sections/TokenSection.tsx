
import { Button } from "@/components/ui/button";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  Tooltip, Legend 
} from "recharts";

const TokenSection = () => {
  const tokenData = [
    { name: "Community Rewards", value: 30, color: "#8b5cf6" },
    { name: "Team & Advisors", value: 20, color: "#6366f1" },
    { name: "Treasury", value: 20, color: "#3b82f6" },
    { name: "Liquidity", value: 15, color: "#2dd4bf" },
    { name: "Ecosystem Growth", value: 10, color: "#10b981" },
    { name: "Private Sale", value: 5, color: "#a855f7" }
  ];

  const tokenFeatures = [
    {
      title: "Governance",
      description: "Vote on key platform decisions and shape the future of ScrollVerse."
    },
    {
      title: "Staking",
      description: "Lock tokens to earn rewards and boost your NFT benefits."
    },
    {
      title: "Access",
      description: "Unlock premium features and exclusive platform capabilities."
    },
    {
      title: "Rewards",
      description: "Earn tokens through active participation in the ecosystem."
    }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card p-3 border border-purple-900/50 rounded-lg shadow-lg">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-purple-400">{`${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="token" className="section-container">
      <h2 className="section-heading">Token</h2>
      
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-2/5">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">$SCROLL Token</h3>
            <p className="text-gray-300 mb-6">
              The $SCROLL token powers the entire ScrollVerse ecosystem, providing 
              governance rights, staking rewards, and access to exclusive features.
            </p>
            <p className="text-gray-400 mb-6">
              Our token model is designed for long-term sustainability, with deflationary 
              mechanics and clear value accrual pathways for holders.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tokenFeatures.map((feature, index) => (
                <div key={index} className="bg-card p-4 rounded-lg border border-purple-900/50">
                  <h4 className="text-lg font-medium mb-2 gradient-text">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold mb-4">Token Launch Coming Soon</h4>
            <p className="mb-6">
              Join our community to stay updated on the token launch details and get early access.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Join Waitlist
            </Button>
          </div>
        </div>
        
        <div className="w-full lg:w-3/5">
          <div className="bg-card rounded-lg border border-purple-900/50 p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">Token Allocation</h3>
            
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    innerRadius={60}
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {tokenData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">1B</div>
                <div className="text-sm text-gray-400">Total Supply</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">4 Years</div>
                <div className="text-sm text-gray-400">Vesting Period</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2%</div>
                <div className="text-sm text-gray-400">Tx Fee Burn</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
