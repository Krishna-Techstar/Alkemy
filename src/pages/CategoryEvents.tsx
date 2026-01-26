import { motion } from 'framer-motion';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import ArcadeCard from '@/components/ArcadeEventCard';
import GlitchText from '@/components/GlitchText';

// Import event arrays
import {
  technicalEvents,
  culturalEvents,
  esportsEvents,
  sportsEvents,
} from './Events';

const categoryInfo: Record<string, {
  title: string;
  description: string;
  color: string;
  borderColor: string;
  events: typeof technicalEvents;
}> = {
  technical: {
    title: 'TECHNICAL',
    description: 'Hackathons, coding battles, and robotics challenges await the brightest minds.',
    color: 'from-electric-purple to-neon-magenta',
    borderColor: 'border-electric-purple',
    events: technicalEvents,
  },
  cultural: {
    title: 'CULTURAL',
    description: 'Music, dance, drama, and art performances that ignite the soul.',
    color: 'from-neon-red to-crimson-glow',
    borderColor: 'border-neon-red',
    events: culturalEvents,
  },
  esports: {
    title: 'ESPORTS',
    description: 'Gaming tournaments featuring the hottest titles and fiercest competition.',
    color: 'from-cyber-blue to-cyan-500',
    borderColor: 'border-cyber-blue',
    events: esportsEvents,
  },
  sports: {
    title: 'SPORTS',
    description: 'Athletic events that push limits and celebrate physical excellence.',
    color: 'from-neon-magenta to-pink-500',
    borderColor: 'border-neon-magenta',
    events: sportsEvents,
  },
};

const CategoryEvents = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const categoryKey = category?.toLowerCase() || '';
  const info = categoryInfo[categoryKey];

  if (!info) {
    return (
      <div className="relative min-h-screen bg-deep-space flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading text-white mb-4">Category Not Found</h1>
          <button
            onClick={() => navigate('/events')}
            className="px-6 py-2 border border-neon-red text-neon-red hover:bg-neon-red hover:text-black transition-all rounded-lg"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const filteredEvents = info.events.filter(
    event =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-deep-space overflow-hidden">
      {/* Neon Glitch Background */}
      <div className="fixed inset-0 z-0">
        {/* Dark purple base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0033] via-[#2d1b4e] to-[#1a0033]" />

        {/* Neon glow based on category */}
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(${
          categoryKey === 'technical' ? '280' : categoryKey === 'cultural' ? '0' : categoryKey === 'esports' ? '168' : '280'
        },80%,50%,0.25)_0%,_transparent_60%)]`} />

        {/* Cyan horizontal lines */}
        <div className="absolute top-1/4 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent opacity-50 shadow-lg shadow-[#00F5D4]" />
        <div className="absolute top-1/3 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent opacity-35" />
        <div className="absolute top-2/3 right-0 w-1/3 h-1.5 bg-gradient-to-l from-[#00F5D4] to-transparent opacity-45" />

        {/* Magenta/Pink vertical glitch lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FF00FF] via-[#FF1493] to-transparent opacity-40 shadow-lg shadow-[#FF00FF]" />
        <div className="absolute right-1/3 top-1/4 h-1/2 w-1 bg-gradient-to-b from-transparent via-[#FF00FF] to-transparent opacity-45" />

        {/* Color-specific accent lines */}
        {categoryKey === 'cultural' && (
          <div className="absolute left-0 top-1/2 w-1/4 h-1 bg-gradient-to-r from-[#FF2B2B] to-transparent opacity-40" />
        )}
        {categoryKey === 'esports' && (
          <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1 bg-gradient-to-l from-[#00F5D4] to-transparent opacity-40" />
        )}
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 z-1 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* Scanlines */}
      <div className="fixed inset-0 z-20 pointer-events-none scanlines opacity-50" />

      <Navbar />

      <main className="relative z-10 pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/events')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-muted-foreground hover:text-neon-red transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-display tracking-widest">BACK TO EVENTS</span>
          </motion.button>

          {/* Page Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className={`text-xs md:text-sm bg-gradient-to-r ${info.color} bg-clip-text text-transparent tracking-[0.3em] uppercase mb-4 font-retro`}>
              {info.title} CATEGORY
            </p>

            <GlitchText text={`${info.title} EVENTS`} className="text-4xl md:text-6xl lg:text-7xl mb-4" />

            {/* Decorative line */}
            <div className="flex flex-col items-center gap-2 mb-8">
              <div className={`w-32 md:w-48 h-1 bg-gradient-to-r ${info.color} shadow-lg`} />
            </div>

            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              {info.description}
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <div className="relative max-w-2xl mx-auto">
              <div className="relative group">
                {/* Glowing Border Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />

                {/* Input */}
                <div className={`relative flex items-center bg-black/40 backdrop-blur-md border ${info.borderColor} rounded-lg px-6 py-4 focus-within:shadow-lg transition-all duration-300`}>
                  <Search className={`bg-gradient-to-r ${info.color} bg-clip-text text-transparent mr-4 flex-shrink-0`} size={24} />

                  <input
                    type="text"
                    placeholder="Search events by name or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none font-body"
                  />

                  {searchQuery && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={() => setSearchQuery('')}
                      className="ml-2 p-2 text-muted-foreground hover:text-neon-red transition-colors rounded-lg hover:bg-neon-red/10"
                    >
                      <X size={20} />
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Events Count */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-muted-foreground text-sm">
              Showing {filteredEvents.length} of {info.events.length} events
            </p>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16"
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <ArcadeCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  category={event.category}
                  icon={event.icon}
                  image={event.image}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  fee={event.fee}
                  prizePool={event.prizePool}
                  description=""
                  glowColor={event.glowColor}
                  neonColor={event.neonColor}
                />
              ))
            ) : (
              <motion.div
                className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center justify-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Search size={64} className="text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground text-center">
                  No events found for "{searchQuery}". Try a different search term.
                </p>
                <motion.button
                  onClick={() => setSearchQuery('')}
                  className={`mt-6 px-6 py-2 border bg-gradient-to-r ${info.color} text-white rounded-lg font-display text-sm tracking-widest`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  CLEAR SEARCH
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default CategoryEvents;
