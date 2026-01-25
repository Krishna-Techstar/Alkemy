import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import GlitchText from '@/components/GlitchText';
import NeonButton from '@/components/NeonButton';
import Footer from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';

const categories = ['technology', 'gaming', 'music', 'sports', 'neon'];

const sponsors = [
  {
    tier: 'PLATINUM',
    color: '#9B5DE5',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    companies: [
      { name: 'TechCorp', category: 'technology', website: 'https://techcorp.example.com' },
      { name: 'InnovateLabs', category: 'technology', website: 'https://innovatelabs.example.com' },
    ],
  },
  {
    tier: 'GOLD',
    color: '#FF2B2B',
    glowColor: 'hsla(0, 100%, 56%, 0.6)',
    companies: [
      { name: 'FutureTech', category: 'gaming', website: 'https://futuretech.example.com' },
      { name: 'CyberNet', category: 'neon', website: 'https://cybernet.example.com' },
      { name: 'QuantumAI', category: 'technology', website: 'https://quantumai.example.com' },
    ],
  },
  {
    tier: 'SILVER',
    color: '#00F5D4',
    glowColor: 'hsla(168, 100%, 48%, 0.6)',
    companies: [
      { name: 'DevHub', category: 'music', website: 'https://devhub.example.com' },
      { name: 'CodeBase', category: 'technology', website: 'https://codebase.example.com' },
      { name: 'ByteWorks', category: 'gaming', website: 'https://byteworks.example.com' },
      { name: 'DataFlow', category: 'sports', website: 'https://dataflow.example.com' },
    ],
  },
];

const tierColors: Record<string, { text: string; border: string; glow: string }> = {
  PLATINUM: { text: 'text-electric-purple', border: 'border-electric-purple', glow: 'shadow-glow-purple' },
  GOLD: { text: 'text-neon-red', border: 'border-neon-red', glow: 'shadow-glow-red' },
  SILVER: { text: 'text-cyber-blue', border: 'border-cyber-blue', glow: 'shadow-glow-cyan' },
};

const Sponsors = () => {
  const [currentSponsorIndex, setCurrentSponsorIndex] = useState(0);

  // Flatten all sponsors
  const allSponsors = sponsors.flatMap(tier => tier.companies);

  // Auto-rotate sponsors
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSponsorIndex(prev => (prev + 1) % allSponsors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [allSponsors.length]);

  return (
    <div className="relative min-h-screen bg-deep-space">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(public/images/sponsor-bg.png)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <ParticleBackground />
      <div className="fixed inset-0 z-20 pointer-events-none scanlines opacity-20" />
      <Navbar />

      <main className="relative z-10 pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Page Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlitchText text="SPONSORS" className="text-5xl md:text-7xl lg:text-8xl" />
            <div className="flex justify-center mt-4">
              <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-neon-red to-transparent shadow-glow-red" />
            </div>
            <p className="font-retro text-sm text-muted-foreground mt-4 tracking-widest">
              [ POWERED BY THE BEST ]
            </p>
          </motion.div>

          {/* Sponsor Tiers */}
          {sponsors.map((tier, tierIndex) => {
            const colors = tierColors[tier.tier];
            return (
              <motion.section
                key={tier.tier}
                className="mb-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: tierIndex * 0.1 }}
              >
                {/* Tier Title */}
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className={`font-display text-2xl md:text-3xl ${colors.text} tracking-widest`}>
                    {tier.tier} SPONSORS
                  </h2>
                  <div className={`w-32 h-px ${colors.border.replace('border-', 'bg-')}/50 mx-auto mt-2`} />
                </motion.div>

                {/* TV Grid */}
                <div className="flex justify-center gap-12 flex-wrap">
                  {tier.companies.map((company, companyIndex) => (
                    <RetroTV 
                      key={company.name}
                      company={company}
                      color={tier.color}
                      glowColor={tier.glowColor}
                    />
                  ))}
                </div>
              </motion.section>
            );
          })}

          {/* Rolling Sponsor TV */}
          <motion.section
            className="my-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl md:text-3xl text-neon-red tracking-widest">
                FEATURED SPONSOR
              </h2>
              <div className="w-32 h-px bg-neon-red/50 mx-auto mt-2" />
            </motion.div>

            {/* Rolling TV */}
            <div className="flex justify-center">
              <motion.div
                key={currentSponsorIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <RetroTV 
                  company={allSponsors[currentSponsorIndex]}
                  color="#FF2B2B"
                  glowColor="hsla(0, 100%, 56%, 0.6)"
                />
              </motion.div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-8 md:p-12 border border-border/50 max-w-2xl mx-auto">
              <h3 className="font-heading text-3xl md:text-4xl neon-text-purple mb-4">
                BECOME A SPONSOR
              </h3>
              <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
                Partner with ALKEMY FEST and reach thousands of passionate students and tech enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton variant="outline" size="lg">
                  <span className="flex items-center gap-2">
                    <Download size={18} />
                    DOWNLOAD PROPOSAL
                  </span>
                </NeonButton>
                <NeonButton variant="secondary" size="lg">
                  <span className="flex items-center gap-2">
                    <Mail size={18} />
                    CONTACT US
                  </span>
                </NeonButton>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
const RetroTV = ({ company, color, glowColor }: { company: { name: string; category: string; website: string }; color: string; glowColor: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const unsplashUrl = `https://source.unsplash.com/600x400/?${company.category}&sig=${company.name}`;
  const fallbackUrl = `https://via.placeholder.com/600x400/0b1026/${color.slice(1)}?text=${company.name}`;

  const handleClick = () => {
    window.open(company.website, '_blank');
  };

  return (
    <motion.div
      className="relative w-[380px] mx-auto cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.08 }}
      onClick={handleClick}
    >
      {/* Glow */}
      <div
        className="absolute inset-8 rounded-2xl blur-3xl opacity-80 -z-10 transition-all duration-300 hover:blur-2xl"
        style={{ backgroundColor: glowColor }}
      />

      {/* TV Container */}
      <div className="relative flex flex-col items-center justify-center">

        {/* SCREEN CONTENT */}
        <div
          className="absolute"
          style={{
            top: "10.5%",
            left: "15%",
            width: "60%",
            height: "65%",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: `0 0 50px ${glowColor}, inset 0 0 40px ${glowColor}`,
            border: `2px solid ${color}`,
          }}
        >
          {/* Scanlines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-25 z-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 3px)",
            }}
          />

          {/* Loading */}
          {isLoading && (
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <Skeleton className="w-full h-full" />
            </div>
          )}

          {/* Image */}
          <img
            src={imageError ? fallbackUrl : unsplashUrl}
            alt={company.name}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setImageError(true);
            }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Flicker Line */}
          <motion.div
            className="absolute left-0 w-full h-[3px] z-30"
            style={{ backgroundColor: color, opacity: 0.8 }}
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* TV FRAME */}
        <img
          src="/images/TVFINAL.png"
          className="relative w-full pointer-events-none select-none"
          alt="Retro TV Frame"
        />
      </div>

      {/* Company Name */}
      <p
        className="text-center mt-6 text-base md:text-lg font-retro tracking-widest uppercase font-bold hover:text-opacity-80 transition-all"
        style={{ color }}
      >
        {company.name}
      </p>
    </motion.div>
  );
};

export default Sponsors;