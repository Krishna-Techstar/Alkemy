import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import GlitchText from '@/components/GlitchText';
import NeonButton from '@/components/NeonButton';
import Footer from '@/components/Footer';

const sponsors = [
  {
    tier: 'PLATINUM',
    companies: [
      { name: 'TechCorp', logo: 'https://via.placeholder.com/200x80/1a1a2e/9B5DE5?text=TechCorp' },
      { name: 'InnovateLabs', logo: 'https://via.placeholder.com/200x80/1a1a2e/9B5DE5?text=InnovateLabs' },
    ],
  },
  {
    tier: 'GOLD',
    companies: [
      { name: 'FutureTech', logo: 'https://via.placeholder.com/180x70/1a1a2e/FF2B2B?text=FutureTech' },
      { name: 'CyberNet', logo: 'https://via.placeholder.com/180x70/1a1a2e/FF2B2B?text=CyberNet' },
      { name: 'QuantumAI', logo: 'https://via.placeholder.com/180x70/1a1a2e/FF2B2B?text=QuantumAI' },
    ],
  },
  {
    tier: 'SILVER',
    companies: [
      { name: 'DevHub', logo: 'https://via.placeholder.com/160x60/1a1a2e/00F5D4?text=DevHub' },
      { name: 'CodeBase', logo: 'https://via.placeholder.com/160x60/1a1a2e/00F5D4?text=CodeBase' },
      { name: 'ByteWorks', logo: 'https://via.placeholder.com/160x60/1a1a2e/00F5D4?text=ByteWorks' },
      { name: 'DataFlow', logo: 'https://via.placeholder.com/160x60/1a1a2e/00F5D4?text=DataFlow' },
    ],
  },
];

const tierColors: Record<string, { text: string; border: string; glow: string }> = {
  PLATINUM: { text: 'text-electric-purple', border: 'border-electric-purple', glow: 'shadow-glow-purple' },
  GOLD: { text: 'text-neon-red', border: 'border-neon-red', glow: 'shadow-glow-red' },
  SILVER: { text: 'text-cyber-blue', border: 'border-cyber-blue', glow: 'shadow-glow-cyan' },
};

const Sponsors = () => {
  return (
    <div className="relative min-h-screen bg-deep-space">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-midnight-navy to-deep-space" />
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
                className="mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: tierIndex * 0.1 }}
              >
                {/* Tier Title */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className={`font-display text-2xl md:text-3xl ${colors.text} tracking-widest`}>
                    {tier.tier} SPONSORS
                  </h2>
                  <div className={`w-32 h-px ${colors.border.replace('border-', 'bg-')}/50 mx-auto mt-2`} />
                </motion.div>

                {/* Logos Carousel/Grid */}
                <div className="relative overflow-hidden py-8">
                  <motion.div
                    className="flex gap-8 justify-center flex-wrap"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    {tier.companies.map((company, companyIndex) => (
                      <motion.div
                        key={company.name}
                        className={`glass-panel p-6 border ${colors.border}/30 hover:${colors.border} transition-all duration-500 group`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: companyIndex * 0.1 }}
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: tier.tier === 'PLATINUM' 
                            ? '0 0 30px hsla(265, 75%, 67%, 0.5)' 
                            : tier.tier === 'GOLD'
                            ? '0 0 30px hsla(0, 100%, 56%, 0.5)'
                            : '0 0 30px hsla(168, 100%, 48%, 0.5)'
                        }}
                      >
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="h-12 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.section>
            );
          })}

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

export default Sponsors;
