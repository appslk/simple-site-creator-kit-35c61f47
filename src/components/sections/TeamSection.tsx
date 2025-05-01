
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      bio: "Web3 entrepreneur with 10+ years experience in blockchain technology and scaling startups."
    },
    {
      name: "Sophia Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      bio: "Former senior engineer at major Layer 2 projects. Expert in scalability and security."
    },
    {
      name: "Marcus Williams",
      role: "Art Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
      bio: "Award-winning digital artist with experience creating collections for major NFT platforms."
    },
    {
      name: "Elena Rodriguez",
      role: "Community Lead",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
      bio: "Community builder with extensive experience growing Web3 communities from the ground up."
    },
    {
      name: "James Lee",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      bio: "Full-stack blockchain developer specializing in smart contracts and dApp architecture."
    },
    {
      name: "Olivia Taylor",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
      bio: "Strategic marketer with expertise in crypto projects and Web3 community engagement."
    }
  ];

  const advisors = [
    {
      name: "Dr. Michael Chang",
      role: "Tokenomics Advisor",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3",
      bio: "Economics PhD with research focus on token economies and incentive mechanisms."
    },
    {
      name: "Sarah Wilson",
      role: "Legal Advisor",
      image: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3",
      bio: "Blockchain attorney specializing in regulatory compliance for Web3 projects."
    }
  ];

  return (
    <section id="team" className="section-container">
      <h2 className="section-heading">Our Team</h2>
      
      <div className="mb-16">
        <p className="text-xl mb-6 text-center max-w-3xl mx-auto text-gray-300">
          Meet the visionaries and builders creating the ScrollVerse ecosystem.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-pink-300">{member.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Advisors</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advisors.map((advisor, index) => (
            <div key={index} className="flex bg-card rounded-lg overflow-hidden border border-pink-500/50">
              <div className="w-1/3">
                <img 
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 w-2/3">
                <h4 className="text-lg font-semibold">{advisor.name}</h4>
                <p className="text-pink-300 text-sm mb-2">{advisor.role}</p>
                <p className="text-sm text-gray-400">{advisor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
