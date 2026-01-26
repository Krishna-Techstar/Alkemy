import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ArcadeMachineCategory from '@/components/ArcadeMachineCategory';
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
      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {eventCategories.map((category, index) => (
                <ArcadeMachineCategory
                  key={category.title}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  color={category.color as any}
                  imageUrl={category.image}
                  onClick={() => {/* Navigation logic */ }}
                />
              ))}
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
