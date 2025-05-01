
import { Button } from "@/components/ui/button";

const NFTsSection = () => {
  const nftImages = [
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3",
      alt: "NFT Image 1",
      title: "Circuit Fragment",
    },
    {
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3",
      alt: "NFT Image 2", 
      title: "Digital Matrix",
    },
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3",
      alt: "NFT Image 3",
      title: "The Collective",
    }
  ];

  return (
    <section id="nfts" className="section-container">
      <h2 className="section-heading">NFT Collection</h2>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <p className="text-xl mb-6 text-gray-300">
            A limited collection of 5000 unique NFTs with strong utility in our ecosystem.
          </p>
          <p className="mb-8 text-gray-400">
            Our NFTs are more than just digital art – they're your key to the ScrollVerse ecosystem. 
            Holders gain access to exclusive rewards, governance rights, and future airdrops as our 
            platform expands.
          </p>
          
          <div className="bg-card border border-purple-900/50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-center">NFT Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                <span>Early access to new platform features</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                <span>Enhanced rewards and earnings potential</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                <span>Governance voting rights for platform decisions</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                <span>Exclusive community events and experiences</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                <span>Future airdrops and token allocations</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Mint Information</h3>
            <p className="text-center mb-6">
              Minting will take place exclusively on Magic Eden.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-[#E42575] hover:bg-[#c01d61]">
                Mint on Magic Eden
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 h-fit">
          {nftImages.map((nft, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-lg border border-purple-900/50 ${
                index === 2 ? "md:col-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center p-4 transition-opacity z-10">
                <p className="text-lg font-medium">{nft.title}</p>
              </div>
              <img 
                src={nft.src} 
                alt={nft.alt} 
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NFTsSection;
