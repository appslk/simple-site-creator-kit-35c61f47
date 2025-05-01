
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-heading">About ScrollVerse</h2>
      
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <p className="text-xl mb-6 text-gray-300">
            ScrollVerse is building the next generation ecosystem on Scroll, combining NFTs, 
            rewards, games, and community governance into a seamless experience.
          </p>
          <p className="mb-6 text-gray-400">
            Our mission is to create a vibrant, sustainable ecosystem that rewards participation 
            and creates long-term value for all participants. Through innovative tokenomics and 
            community-first principles, we're building a platform that will stand the test of time.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-card p-6 rounded-lg border border-pink-500/50">
              <h3 className="text-xl font-semibold mb-3 gradient-text">Community First</h3>
              <p className="text-gray-400">
                Our ecosystem is designed around our community, with governance and rewards systems 
                that ensure everyone benefits from participation.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-pink-500/50">
              <h3 className="text-xl font-semibold mb-3 gradient-text">Sustainable Growth</h3>
              <p className="text-gray-400">
                We're building for the long-term with tokenomics and economics that support 
                sustainable growth and value accrual.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-pink-500/50">
              <h3 className="text-xl font-semibold mb-3 gradient-text">Innovative Tech</h3>
              <p className="text-gray-400">
                Leveraging the speed and efficiency of Scroll, our platform offers a seamless 
                user experience with low gas fees and fast transactions.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-pink-500/50">
              <h3 className="text-xl font-semibold mb-3 gradient-text">Real Utility</h3>
              <p className="text-gray-400">
                Our NFTs and tokens have real utility within the ecosystem, from governance rights 
                to exclusive access and staking rewards.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="relative h-full overflow-hidden rounded-lg border border-pink-500/50">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 to-background z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center p-8">
                <h3 className="text-3xl font-bold mb-4 gradient-text">Join The Journey</h3>
                <p className="text-xl mb-6 max-w-sm mx-auto">
                  Be part of our community as we build the future of Web3 on Scroll.
                </p>
                <a 
                  href="#socials" 
                  className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors"
                >
                  Connect with us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative h-full w-full bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3')] bg-cover bg-center opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
