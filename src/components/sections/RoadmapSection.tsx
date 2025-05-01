
import { Check } from "lucide-react";

const RoadmapSection = () => {
  const roadmapItems = [
    {
      quarter: "Q2 2025",
      title: "Foundation Phase",
      completed: true,
      milestones: [
        { text: "Project concept and whitepaper", completed: true },
        { text: "Team formation and initial funding", completed: true },
        { text: "Community building begins", completed: true },
        { text: "Website and social media launch", completed: true }
      ]
    },
    {
      quarter: "Q3 2025",
      title: "NFT Launch",
      completed: false,
      milestones: [
        { text: "NFT artwork completion", completed: true },
        { text: "Partnership with Magic Eden", completed: true },
        { text: "NFT whitelist and marketing campaign", completed: false },
        { text: "Public NFT mint on Magic Eden", completed: false }
      ]
    },
    {
      quarter: "Q4 2025",
      title: "Platform Development",
      completed: false,
      milestones: [
        { text: "Rewards system launch", completed: false },
        { text: "Community DAO formation", completed: false },
        { text: "Staking functionality deployment", completed: false },
        { text: "First community vote on future development", completed: false }
      ]
    },
    {
      quarter: "Q1 2026",
      title: "Ecosystem Expansion",
      completed: false,
      milestones: [
        { text: "Token launch", completed: false },
        { text: "Swap feature implementation", completed: false },
        { text: "First game prototype", completed: false },
        { text: "Major partnerships announcement", completed: false }
      ]
    },
    {
      quarter: "Q2 2026",
      title: "Full Platform Launch",
      completed: false,
      milestones: [
        { text: "Games platform launch", completed: false },
        { text: "Cross-chain integration", completed: false },
        { text: "Major marketing campaign", completed: false },
        { text: "TalentDAO launch", completed: false }
      ]
    }
  ];

  return (
    <section id="roadmap" className="section-container relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/5 to-transparent opacity-50 pointer-events-none"></div>
      
      <h2 className="section-heading relative z-10">Roadmap</h2>
      
      <div className="relative z-10">
        {/* Vertical line */}
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-600 to-purple-900/30 -translate-x-1/2"></div>
        
        <div className="relative z-10">
          {roadmapItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } mb-24 last:mb-0 relative`}
            >
              {/* Status circle indicator */}
              <div className={`absolute left-[15px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 
                ${item.completed 
                  ? "border-purple-600 bg-purple-900 shadow-lg shadow-purple-500/20"
                  : "border-purple-900/70 bg-gray-900"}
              `}>
                {item.completed && <Check className="w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-300" />}
              </div>
              
              {/* Left/Right content */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-16">
                <div className={`${index % 2 === 0 ? "md:text-right" : "md:text-left md:pl-16"}`}>
                  <div className={`inline-block px-5 py-2 bg-purple-900/30 rounded-full text-sm mb-4 border border-purple-500/30 ${
                    item.completed ? "text-purple-300" : "text-gray-300"
                  }`}>
                    {item.quarter}
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    item.completed ? "text-white" : "text-gray-300" 
                  }`}>{item.title}</h3>
                  <ul className={`space-y-3 bg-gray-900/30 rounded-lg border border-purple-900/30 p-4 ${
                    index % 2 === 0 ? "" : ""
                  }`}>
                    {item.milestones.map((milestone, i) => (
                      <li key={i} className={`flex items-start md:items-center gap-3 md:gap-2 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}>
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full ${
                          milestone.completed 
                            ? "bg-green-500/20 text-green-400 ring-1 ring-green-500/30" 
                            : "bg-gray-700/50 text-gray-500 ring-1 ring-gray-600/30"
                        } flex items-center justify-center`}>
                          {milestone.completed && <Check className="w-3 h-3" />}
                        </span>
                        <span className={`text-sm ${
                          milestone.completed ? "text-white" : "text-gray-400"
                        }`}>
                          {milestone.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Spacer for layout */}
              <div className="hidden md:block w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
