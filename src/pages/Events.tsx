import { motion } from 'framer-motion';
import { useState } from 'react';
import { Brain, Code, Laptop, Gamepad2, Music, Palette, ChevronRight, Search, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import ArcadeCard from '@/components/ArcadeCard';
import GlitchText from '@/components/GlitchText';

const events = [
  {
    title: 'CODE DEMOGORGON',
    category: 'HACKATHON',
    icon: <Code size={64} strokeWidth={1.5} />,
  },
  {
    title: 'MIND FLAYER\'S QUIZ',
    category: 'QUIZ',
    icon: <Brain size={64} strokeWidth={1.5} />,
  },
  {
    title: 'HAWKINS AV CLUB',
    category: 'ROBOTICS',
    icon: <Laptop size={64} strokeWidth={1.5} />,
  },
  {
    title: 'ARCADE MADNESS',
    category: 'GAMING',
    icon: <Gamepad2 size={64} strokeWidth={1.5} />,
  },
  {
    title: 'UPSIDE DOWN BEATS',
    category: 'MUSIC',
    icon: <Music size={64} strokeWidth={1.5} />,
  },
  {
    title: 'STRANGER ARTS',
    category: 'ART & DESIGN',
    icon: <Palette size={64} strokeWidth={1.5} />,
  },
];

const filterTabs = ['ALL', 'TECHNICAL', 'CULTURAL', 'GAMING'];

const categories = [
  {
    id: 'technical',
    title: 'TECHNICAL',
    description: 'Hackathons, coding battles, and robotics challenges await the brightest minds.',
    icon: <Code size={64} strokeWidth={1.5} />,
    color: 'from-neon-red to-crimson-glow',
    borderColor: 'border-neon-red',
    bgGradient: 'bg-gradient-to-br from-neon-red/20 via-transparent to-transparent',
    imageUrl: 'linear-gradient(135deg, rgba(255, 43, 43, 0.15) 0%, rgba(0, 0, 0, 0.3) 100%)',
    shortDesc: 'Coding & Tech'
  },
  {
    id: 'cultural',
    title: 'CULTURAL',
    description: 'Music, dance, drama, and art performances that ignite the soul.',
    icon: <Music size={64} strokeWidth={1.5} />,
    color: 'from-electric-purple to-neon-magenta',
    borderColor: 'border-electric-purple',
    bgGradient: 'bg-gradient-to-br from-electric-purple/20 via-transparent to-transparent',
    imageUrl: 'linear-gradient(135deg, rgba(167, 51, 255, 0.15) 0%, rgba(0, 0, 0, 0.3) 100%)',
    shortDesc: 'Arts & Music'
  },
  {
    id: 'esports',
    title: 'ESPORTS',
    description: 'Gaming tournaments featuring the hottest titles and fiercest competition.',
    icon: <Gamepad2 size={64} strokeWidth={1.5} />,
    color: 'from-cyber-blue to-cyan-500',
    borderColor: 'border-cyber-blue',
    bgGradient: 'bg-gradient-to-br from-cyber-blue/20 via-transparent to-transparent',
    imageUrl: 'linear-gradient(135deg, rgba(0, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.3) 100%)',
    shortDesc: 'Gaming'
  },
  {
    id: 'sports',
    title: 'SPORTS',
    description: 'Athletic events that push limits and celebrate physical excellence.',
    icon: <Palette size={64} strokeWidth={1.5} />,
    color: 'from-neon-magenta to-pink-500',
    borderColor: 'border-neon-magenta',
    bgGradient: 'bg-gradient-to-br from-neon-magenta/20 via-transparent to-transparent',
    imageUrl: 'linear-gradient(135deg, rgba(255, 0, 255, 0.15) 0%, rgba(0, 0, 0, 0.3) 100%)',
    shortDesc: 'Sports'
  },
];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter categories based on search
  const filteredCategories = categories.filter(cat =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter events based on search
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="relative min-h-screen bg-deep-space">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-midnight-navy to-deep-space" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(265,75%,67%,0.1)_0%,_transparent_70%)]" />
      </div>

      {/* Floating Particles */}
      <ParticleBackground />

      {/* Scanlines */}
      <div className="fixed inset-0 z-20 pointer-events-none scanlines opacity-20" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Page Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs md:text-sm text-neon-red tracking-[0.3em] uppercase mb-4 font-retro">
              CHOOSE YOUR PATH
            </p>
            
            <GlitchText
              text="EVENT CATEGORIES"
              className="text-4xl md:text-6xl lg:text-7xl mb-4"
            />
            
            {/* Decorative lines */}
            <div className="flex flex-col items-center gap-2 mb-8">
              <div className="w-32 md:w-48 h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent shadow-glow-red" />
            </div>

            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Explore a diverse range of events tailored to your interests. Find your perfect match and join the action.
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
              {/* Search Container */}
              <div className="relative group">
                {/* Glowing Border Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-red via-electric-purple to-neon-red rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                {/* Actual Input */}
                <div className="relative flex items-center bg-black/40 backdrop-blur-md border border-neon-red/30 rounded-lg px-6 py-4 focus-within:border-neon-red focus-within:shadow-glow-red transition-all duration-300">
                  {/* Search Icon */}
                  <Search className="text-neon-red mr-4 flex-shrink-0" size={24} />

                  {/* Input Field */}
                  <input
                    type="text"
                    placeholder="Search events, categories, or types..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none font-body"
                  />

                  {/* Clear Button */}
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

              {/* Search Results Info */}
              {searchQuery && (
                <motion.div
                  className="mt-4 text-center text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Found {filteredCategories.length} categories and {filteredEvents.length} events
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {filterTabs.map((tab, index) => (
              <motion.button
                key={tab}
                className={`px-5 py-2 font-display text-xs md:text-sm tracking-widest border rounded-sm transition-all duration-300 ${
                  index === 0
                    ? 'border-neon-red bg-neon-red/10 text-neon-red shadow-glow-red'
                    : 'border-border bg-transparent text-muted-foreground hover:border-electric-purple hover:text-electric-purple'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>

          {/* Categories Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                onHoverStart={() => setActiveCategory(category.id)}
                onHoverEnd={() => setActiveCategory(null)}
              >
                <motion.div
                  className={`group relative overflow-hidden rounded-xl border ${category.borderColor} transition-all duration-500 cursor-pointer h-80`}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Background Image with Gradient Overlay */}
                  <div
                    className="absolute inset-0 z-0"
                    style={{
                      backgroundImage: category.imageUrl,
                    }}
                  />

                  {/* Animated Pattern Overlay */}
                  <motion.div
                    className="absolute inset-0 z-1 opacity-20"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 10px,
                        rgba(255, 255, 255, 0.03) 10px,
                        rgba(255, 255, 255, 0.03) 20px
                      )`,
                    }}
                  />

                  {/* Glass Effect Background */}
                  <div className="absolute inset-0 z-2 bg-black/40 backdrop-blur-sm group-hover:bg-black/30 transition-all duration-500" />

                  {/* Dark gradient on hover */}
                  <motion.div
                    className={`absolute inset-0 z-3 ${category.bgGradient} group-hover:opacity-100 transition-all duration-500`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeCategory === category.id ? 0.5 : 0 }}
                  />

                  {/* Content Container */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                    {/* Top Section with Icon */}
                    <div>
                      {/* Icon Box */}
                      <motion.div
                        className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${category.color} mb-6 group-hover:shadow-lg transition-all duration-300`}
                        style={{
                          boxShadow: activeCategory === category.id ? `0 0 30px ${category.color.split(' ')[1]}` : 'none',
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <div className="text-white">
                          {category.id === 'technical' && <Code size={40} strokeWidth={1.5} />}
                          {category.id === 'cultural' && <Music size={40} strokeWidth={1.5} />}
                          {category.id === 'esports' && <Gamepad2 size={40} strokeWidth={1.5} />}
                          {category.id === 'sports' && <Palette size={40} strokeWidth={1.5} />}
                        </div>
                      </motion.div>

                      {/* Title and Description */}
                      <h3 className={`font-heading text-3xl md:text-4xl mb-3 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.title}
                      </h3>

                      <p className="text-sm md:text-base text-gray-200 leading-relaxed line-clamp-3">
                        {category.description}
                      </p>
                    </div>

                    {/* Bottom Section with CTA */}
                    <motion.div
                      className="flex items-center justify-between"
                      animate={{
                        x: activeCategory === category.id ? 5 : 0,
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`h-1 w-8 bg-gradient-to-r ${category.color}`} />
                        <span className={`text-xs md:text-sm font-display tracking-widest bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          EXPLORE
                        </span>
                      </div>

                      <motion.div
                        className={`p-2 rounded-full border bg-gradient-to-r ${category.color} bg-clip-border`}
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <ChevronRight size={20} className="text-white" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Border Glow on Hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl border ${category.borderColor} pointer-events-none`}
                    animate={{
                      boxShadow: activeCategory === category.id 
                        ? `0 0 20px ${category.color}` 
                        : 'none',
                    }}
                  />
                </motion.div>
              </motion.div>
            ))
            ) : (
              <motion.div
                className="col-span-1 md:col-span-2 flex flex-col items-center justify-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Search size={64} className="text-muted-foreground/30 mb-4" />
                <h3 className="text-2xl font-heading text-muted-foreground mb-2">No Results Found</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  We couldn't find any events matching "{searchQuery}". Try adjusting your search or browse all events.
                </p>
                <motion.button
                  onClick={() => setSearchQuery('')}
                  className="mt-6 px-6 py-2 border border-neon-red text-neon-red hover:bg-neon-red hover:text-black transition-all rounded-lg font-display text-sm tracking-widest"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  CLEAR SEARCH
                </motion.button>
              </motion.div>
            )}
          </div>

          {/* Section Divider */}
          <motion.div
            className="my-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-electric-purple" />
              <div className="w-2 h-2 bg-electric-purple rounded-full shadow-glow-purple" />
              <div className="font-retro text-xs text-muted-foreground">
                ALL FEATURED EVENTS
              </div>
              <div className="w-2 h-2 bg-electric-purple rounded-full shadow-glow-purple" />
              <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-electric-purple" />
            </div>
          </motion.div>

          {/* Featured Events Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <ArcadeCard
                  key={event.title}
                  title={event.title}
                  category={event.category}
                  icon={event.icon}
                  index={index}
                />
              ))
            ) : searchQuery ? (
              <motion.div
                className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center justify-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Gamepad2 size={64} className="text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground text-center">
                  No events found for "{searchQuery}". Try a different search term.
                </p>
              </motion.div>
            ) : (
              events.map((event, index) => (
                <ArcadeCard
                  key={event.title}
                  title={event.title}
                  category={event.category}
                  icon={event.icon}
                  index={index}
                />
              ))
            )}
          </motion.div>
        </div>
      </main>

      {/* Corner Star */}
      <motion.div
        className="fixed bottom-4 right-4 z-20"
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="w-8 h-8 text-foreground/50">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Events;
