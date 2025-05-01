
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SocialsSection = () => {
  const socialLinks = [
    { name: "Twitter", icon: "twitter.svg", url: "#", description: "Follow for the latest updates and announcements" },
    { name: "Discord", icon: "discord.svg", url: "#", description: "Join our active community and chat with the team" },
    { name: "Telegram", icon: "telegram.svg", url: "#", description: "Get instant notifications and updates" },
    { name: "Medium", icon: "medium.svg", url: "#", description: "Read our in-depth articles and development updates" }
  ];

  return (
    <section id="socials" className="section-container">
      <h2 className="section-heading">Connect With Us</h2>
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xl mb-6 text-gray-300">
          Join our growing community and be part of the ScrollVerse journey.
        </p>
        <p className="text-gray-400">
          Stay updated with the latest news, participate in exclusive events, and 
          contribute to the development of our ecosystem.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {socialLinks.map((social, index) => (
          <a 
            key={index} 
            href={social.url} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card hover:bg-card/80 transition-colors duration-300 border border-pink-500/50 rounded-lg p-6 text-center group"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-black/30 rounded-full flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
              <span className="text-2xl">{social.name.charAt(0)}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{social.name}</h3>
            <p className="text-sm text-gray-400">{social.description}</p>
            <div className="mt-4 text-pink-400 group-hover:text-pink-300 transition-colors">
              Join Now →
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-24 text-center">
        <h3 className="text-2xl font-bold mb-8">Subscribe to Our Newsletter</h3>
        <div className="max-w-md mx-auto">
          <div className="flex">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 bg-secondary/50 border border-pink-500/50 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <Button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-r-lg transition-colors">
              Subscribe
            </Button>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            We respect your privacy and will never share your email address.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
