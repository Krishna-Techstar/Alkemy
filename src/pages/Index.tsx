import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import GlitchText from '@/components/GlitchText';
import NeonButton from '@/components/NeonButton';
import CountdownTimer from '@/components/CountdownTimer';
import CouncilPreview from '@/components/CouncilPreview';
import VisitorCounter from '@/components/VisitorCounter';
import Footer from '@/components/Footer';
import { Gamepad2, Music, Trophy, Dumbbell } from 'lucide-react';

const eventCategories = [
  {
    title: 'TECHNICAL',
    description: 'Hackathons, coding battles, and robotics challenges await the brightest minds.',
    icon: Gamepad2,
    color: 'red',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
  },
  {
    title: 'CULTURAL',
    description: 'Music, dance, drama, and art performances that ignite the soul.',
    icon: Music,
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=600&h=400&fit=crop',
  },
  {
    title: 'ESPORTS',
    description: 'Gaming tournaments featuring the hottest titles and fiercest competition.',
    icon: Trophy,
    color: 'cyan',
    image: 'https://images.unsplash.com/photo-1538481143235-c8f91d7a51d2?w=600&h=400&fit=crop',
  },
  {
    title: 'SPORTS',
    description: 'Athletic events that push limits and celebrate physical excellence.',
    icon: Dumbbell,
    color: 'magenta',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
  },
];

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(Math.min(scrolled, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Radial gradient vignette - darker at edges */}
      <div className="fixed inset-0 z-[0] pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_70%,_rgba(0,0,0,0.7)_100%)]" />
      
      {/* Vines on left and right edges */}
      <div className="fixed left-0 top-0 bottom-0 w-32 md:w-48 z-[1] pointer-events-none opacity-60">
        <svg className="w-full h-full" viewBox="0 0 200 800" preserveAspectRatio="xMinYMin meet">
          <path
            d="M0,0 Q50,100 30,200 T60,400 T40,600 T80,800"
            stroke="#1a0a0a"
            strokeWidth="8"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M20,50 Q70,150 50,250 T80,450 T60,650 T100,800"
            stroke="#1a0a0a"
            strokeWidth="6"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M10,100 Q60,200 40,300 T70,500 T50,700 T90,800"
            stroke="#1a0a0a"
            strokeWidth="5"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>
      
      <div className="fixed right-0 top-0 bottom-0 w-32 md:w-48 z-[1] pointer-events-none opacity-60">
        <svg className="w-full h-full" viewBox="0 0 200 800" preserveAspectRatio="xMaxYMin meet">
          <path
            d="M200,0 Q150,100 170,200 T140,400 T160,600 T120,800"
            stroke="#1a0a0a"
            strokeWidth="8"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M180,50 Q130,150 150,250 T120,450 T140,650 T100,800"
            stroke="#1a0a0a"
            strokeWidth="6"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M190,100 Q140,200 160,300 T130,500 T150,700 T110,800"
            stroke="#1a0a0a"
            strokeWidth="5"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Floating Particles */}
      <ParticleBackground />

      {/* Scanlines Overlay - more subtle */}
      <div className="absolute inset-0 z-20 pointer-events-none scanlines opacity-15" />

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Event Label */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="inline-block px-6 py-2 border-2 border-neon-red rounded-sm bg-deep-space/60 backdrop-blur-sm shadow-glow-red">
                <span className="font-retro text-sm text-white tracking-widest" style={{
                  textShadow: '0 0 5px hsl(var(--neon-red)), 0 0 10px hsl(var(--neon-red))',
                }}>
                  EVENT
                </span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.div
              className="relative mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            >
              {/* Top decorative line - extending from text */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-48 md:w-96 h-0.5 bg-gradient-to-r from-transparent via-neon-red to-transparent" style={{
                boxShadow: '0 0 10px hsl(var(--neon-red)), 0 0 20px hsl(var(--neon-red) / 0.5)',
              }} />
              
              <GlitchText
                text="ALKEMY"
                className="text-7xl md:text-9xl lg:text-[12rem] leading-none"
              />
              
              {/* Bottom decorative line - extending from text */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-64 md:w-[32rem] h-0.5 bg-gradient-to-r from-transparent via-neon-red to-transparent" style={{
                boxShadow: '0 0 10px hsl(var(--neon-red)), 0 0 20px hsl(var(--neon-red) / 0.5)',
              }} />
            </motion.div>

            {/* Subtitle - Increased letter spacing for cinematic feel */}
            <motion.p
              className="font-display text-lg md:text-2xl lg:text-3xl text-white mb-12"
              style={{
                letterSpacing: '0.5em',
                textShadow: '0 0 10px hsl(var(--neon-red) / 0.5), 0 0 20px hsl(var(--neon-red) / 0.3)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              THE UPSIDE DOWN OF COLLEGE FESTS
            </motion.p>

            {/* CTA Buttons - Stranger Things style */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Link to="/events">
                <NeonButton variant="outline" size="lg">
                  <span className="flex flex-col items-center" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                    <span className="text-xl">ENTER THE LAB</span>
                    <span className="text-xs font-retro text-neon-red/80">(EVENTS)</span>
                  </span>
                </NeonButton>
              </Link>
              
              <Link to="/signup">
                <NeonButton variant="secondary" size="lg">
                  <span className="flex flex-col items-center" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                    <span className="text-xl">JOIN THE PARTY</span>
                    <span className="text-xs font-retro text-electric-purple/80">(SIGNUP)</span>
                  </span>
                </NeonButton>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 1.5, duration: 0.5 },
              y: { delay: 2, duration: 2, repeat: Infinity }
            }}
          >
            <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-neon-red rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Countdown Section */}
        <section className="relative py-16 bg-gradient-to-b from-transparent via-deep-space/50 to-deep-space/80">
          <div className="container mx-auto px-4">
            <CountdownTimer />
          </div>
        </section>

        {/* Event Categories Section */}
        <section className="relative py-20 bg-deep-space/90">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-retro text-xs text-muted-foreground tracking-widest">
                CHOOSE YOUR PATH
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl neon-text-red mt-2">
                EVENT CATEGORIES
              </h2>
              <div className="flex justify-center mt-4">
                <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-neon-red to-transparent shadow-glow-red" />
              </div>
            </motion.div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventCategories.map((category, index) => {
                const IconComponent = category.icon;
                const colorMap: Record<string, { glow: string; border: string; text: string; bg: string }> = {
                  red: { glow: 'shadow-glow-red', border: 'border-neon-red', text: 'neon-text-red', bg: 'from-neon-red/20' },
                  purple: { glow: 'shadow-glow-purple', border: 'border-electric-purple', text: 'neon-text-purple', bg: 'from-electric-purple/20' },
                  cyan: { glow: 'shadow-glow-cyan', border: 'border-cyber-blue', text: 'text-cyber-blue', bg: 'from-cyber-blue/20' },
                  magenta: { glow: 'shadow-glow-magenta', border: 'border-neon-magenta', text: 'text-neon-magenta', bg: 'from-neon-magenta/20' },
                };
                const colors = colorMap[category.color] || colorMap.red;

                return (
                  <motion.div
                    key={category.title}
                    className="relative group h-96 rounded-xl overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${colors.bg} via-deep-space/80 to-deep-space/40`} />
                    </div>

                    {/* Arcade Cabinet Border Effect */}
                    <div className={`absolute inset-0 border-2 ${colors.border} rounded-xl transition-all duration-300 group-hover:${colors.glow}`} />

                    {/* Content Container */}
                    <div className="relative h-full flex flex-col justify-between p-6 text-white">
                      {/* Top Section - Icon */}
                      <motion.div
                        className={`flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${colors.bg} border ${colors.border} ${colors.glow}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent size={32} className={colors.text} />
                      </motion.div>

                      {/* Bottom Section - Title and Description */}
                      <div className="space-y-3">
                        <h3 className={`font-heading text-2xl md:text-3xl font-bold ${colors.text} transition-all duration-300`}>
                          {category.title}
                        </h3>
                        <p className="text-sm md:text-base text-white/90 line-clamp-2 group-hover:line-clamp-none transition-all">
                          {category.description}
                        </p>

                        {/* CTA Arrow */}
                        <motion.div
                          className="flex items-center gap-2 text-sm font-retro tracking-wider"
                          whileHover={{ x: 5 }}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <span>ENTER</span>
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </motion.div>
                      </div>

                      {/* Scanline Effect */}
                      <div className="absolute inset-0 pointer-events-none opacity-5">
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,_transparent,_transparent_2px,_rgba(255,255,255,0.05)_2px,_rgba(255,255,255,0.05)_4px)]" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Council Preview Section */}
        <section className="relative py-16 bg-gradient-to-b from-deep-space/90 to-midnight-navy/50">
          <div className="container mx-auto px-4">
            <CouncilPreview />
          </div>
        </section>

        {/* Visitor Counter Section */}
        <section className="relative py-16 bg-midnight-navy/50">
          <div className="container mx-auto px-4">
            <VisitorCounter />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>

      {/* CLEARANCE LEVEL Progress Bar - Bottom Right */}
      <motion.div
        className="fixed bottom-6 right-6 z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="flex flex-col items-end gap-2">
          <span className="font-retro text-xs text-white/80 tracking-widest uppercase">
            CLEARANCE {Math.round(scrollProgress)}%
          </span>
          <div className="relative w-48 h-2 bg-deep-space/80 border border-neon-red/30 rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-neon-red rounded-full shadow-glow-red"
              animate={{ width: `${scrollProgress}%` }}
              transition={{ duration: 0.2, ease: 'linear' }}
            />
            {/* Glowing white diamond at end of progress */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 shadow-[0_0_10px_white,0_0_20px_white]"
              style={{
                left: `${scrollProgress}%`,
                marginLeft: '-6px',
              }}
              animate={{
                boxShadow: [
                  '0 0 10px white, 0 0 20px white',
                  '0 0 15px white, 0 0 30px white',
                  '0 0 10px white, 0 0 20px white',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
