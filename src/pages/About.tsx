import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Terminal, MapPin, Phone, Mail, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import GlitchText from '@/components/GlitchText';
import Footer from '@/components/Footer';
import NeonButton from '@/components/NeonButton';

const About = () => {
  const [activeSection, setActiveSection] = useState<'about' | 'contact' | null>('about');
  const [expandedYear, setExpandedYear] = useState<number | null>(null);

  // Terminal boot sequence
  const bootSequences = [
    { label: 'SYSTEM INITIALIZATION', time: 100 },
    { label: 'PROTOCOL_INIT.exe', time: 200 },
    { label: 'ACCESSING HAWKINS_LAB DATABASE...', time: 300 },
    { label: 'CONNECTION ESTABLISHED', time: 400 },
  ];

  // Past years data
  const pastYears = [
    {
      year: 2024,
      title: 'ALKEMY FEST 2024',
      description: 'The inaugural chaos. Where it all began. A convergence of 500+ students, 50+ events, and unlimited potential.',
      highlights: [
        'First ever Alkemy Fest held successfully',
        'Record attendance: 500+ participants',
        '50+ events across 4 categories',
        'Grand prize pool: ₹5,00,000',
      ],
      images: [
        'https://images.unsplash.com/photo-1540575467063-178f50002991?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1571107495854-93fc41976dff?w=600&h=400&fit=crop',
      ],
    },
    {
      year: 2023,
      title: 'THE GENESIS PROJECT',
      description: 'Before Alkemy. The prototype. The failed experiments. The learning phase that made everything possible.',
      highlights: [
        'Concept development and planning',
        'Infrastructure setup',
        'First council assembly',
        'Vision crystallization',
      ],
      images: [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      ],
    },
  ];

  const collegeMissions = [
    {
      title: 'TECHNICAL EXCELLENCE',
      description: 'Pushing boundaries in coding, hacking, and innovation',
      icon: '⚙️',
    },
    {
      title: 'CULTURAL DIVERSITY',
      description: 'Celebrating arts, music, and creative expression',
      icon: '🎨',
    },
    {
      title: 'COMPETITIVE SPIRIT',
      description: 'Bringing out the best through esports and athletics',
      icon: '🏆',
    },
    {
      title: 'COMMUNITY BUILDING',
      description: 'Creating connections and lasting relationships',
      icon: '🤝',
    },
  ];

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
          {/* Terminal Boot Sequence */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-panel border border-neon-red/50 p-6 font-retro text-xs">
              <div className="flex items-center gap-2 mb-4">
                <Terminal size={16} className="text-neon-red" />
                <span className="text-neon-red">[SYSTEM_BOOT_SEQ.001]</span>
              </div>
              
              {bootSequences.map((seq, idx) => (
                <motion.div
                  key={idx}
                  className="text-cyber-blue mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: seq.time / 1000 }}
                >
                  $ {seq.label}
                  <motion.span
                    className="inline-block ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    █
                  </motion.span>
                </motion.div>
              ))}

              <motion.div
                className="text-neon-red mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                ✓ SYSTEM READY
              </motion.div>
            </div>
          </motion.div>

          {/* Main Toggle Buttons */}
          <motion.div
            className="flex gap-4 justify-center mb-12 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setActiveSection(activeSection === 'about' ? null : 'about')}
              className={`px-8 py-3 font-retro text-sm tracking-wider border-2 transition-all duration-300 ${
                activeSection === 'about'
                  ? 'border-electric-purple bg-electric-purple/20 text-electric-purple shadow-glow-purple'
                  : 'border-electric-purple/30 text-electric-purple/70 hover:border-electric-purple/50 hover:text-electric-purple'
              }`}
            >
              {activeSection === 'about' ? '▼' : '▶'} ABOUT_ALKEMY.txt
            </button>

            <button
              onClick={() => setActiveSection(activeSection === 'contact' ? null : 'contact')}
              className={`px-8 py-3 font-retro text-sm tracking-wider border-2 transition-all duration-300 ${
                activeSection === 'contact'
                  ? 'border-neon-red bg-neon-red/20 text-neon-red shadow-glow-red'
                  : 'border-neon-red/30 text-neon-red/70 hover:border-neon-red/50 hover:text-neon-red'
              }`}
            >
              {activeSection === 'contact' ? '▼' : '▶'} CONTACT_US.exe
            </button>
          </motion.div>

          <AnimatePresence mode="wait">
            {/* ABOUT SECTION */}
            {activeSection === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8 mb-16"
              >
                {/* Header */}
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <GlitchText text="ABOUT ALKEMY" className="text-5xl md:text-7xl lg:text-8xl" />
                  <div className="flex justify-center mt-4">
                    <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-electric-purple to-transparent shadow-glow-purple" />
                  </div>
                </motion.div>

                {/* Mission Statement */}
                <motion.div
                  className="glass-panel border border-electric-purple/50 p-8"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="font-heading text-3xl neon-text-purple mb-4">[ ACCESS_GRANTED ]</h2>
                  <p className="text-white/90 font-body mb-6">
                    ALKEMY FEST is a convergence of imagination, innovation, and chaos. Born from the depths of Hawkins 
                    National Laboratory's experimental archives, we have created the most immersive student festival 
                    experience in the digital age.
                  </p>
                  <p className="text-white/80 font-body">
                    Our mission: To unlock the potential within every student. To provide a platform where ideas transmit, 
                    talents collide, and memories crystallize into legends.
                  </p>
                </motion.div>

                {/* Mission Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  {collegeMissions.map((mission, idx) => (
                    <motion.div
                      key={idx}
                      className="glass-panel border border-neon-red/30 p-6 hover:border-neon-red/60 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="text-4xl mb-3">{mission.icon}</div>
                      <h3 className="font-heading text-xl neon-text-red mb-2">{mission.title}</h3>
                      <p className="text-sm text-muted-foreground">{mission.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* College Details Terminal */}
                <motion.div
                  className="glass-panel border border-cyber-blue/50 p-8 font-retro text-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal size={16} className="text-cyber-blue" />
                    <span className="text-cyber-blue">[ALKEMY_DATABASE]</span>
                  </div>

                  <div className="space-y-3 text-white/80">
                    <div>
                      <span className="text-cyber-blue">$ festival_name:</span>
                      <span className="ml-2">ALKEMY FEST 2024</span>
                    </div>
                    <div>
                      <span className="text-cyber-blue">$ location:</span>
                      <span className="ml-2">Hawkins National Laboratory, Indiana</span>
                    </div>
                    <div>
                      <span className="text-cyber-blue">$ total_events:</span>
                      <span className="ml-2">50+ across Technical, Cultural, Esports, Sports</span>
                    </div>
                    <div>
                      <span className="text-cyber-blue">$ participants:</span>
                      <span className="ml-2">500+ students from various institutions</span>
                    </div>
                    <div>
                      <span className="text-cyber-blue">$ prize_pool:</span>
                      <span className="ml-2">₹5,00,000+</span>
                    </div>
                    <div>
                      <span className="text-cyber-blue">$ duration:</span>
                      <span className="ml-2">2 Days of continuous innovation and entertainment</span>
                    </div>
                  </div>
                </motion.div>

                {/* Past Years Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="font-heading text-4xl neon-text-red mb-8 text-center">[ ARCHIVE ACCESS ]</h2>

                  <div className="space-y-6">
                    {pastYears.map((yearData, idx) => (
                      <motion.div
                        key={idx}
                        className="glass-panel border border-neon-red/30 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + idx * 0.1 }}
                      >
                        {/* Expandable Header */}
                        <button
                          onClick={() => setExpandedYear(expandedYear === yearData.year ? null : yearData.year)}
                          className="w-full p-6 flex items-center justify-between hover:bg-neon-red/5 transition-colors duration-300"
                        >
                          <div className="text-left">
                            <div className="font-display text-sm text-cyber-blue tracking-widest">
                              [{yearData.year.toString().toUpperCase()}]
                            </div>
                            <h3 className="font-heading text-2xl neon-text-red mt-2">{yearData.title}</h3>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedYear === yearData.year ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown size={24} className="text-neon-red" />
                          </motion.div>
                        </button>

                        {/* Expandable Content */}
                        <AnimatePresence>
                          {expandedYear === yearData.year && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-neon-red/30 overflow-hidden"
                            >
                              <div className="p-6 space-y-6">
                                {/* Description */}
                                <p className="text-white/90 font-body">{yearData.description}</p>

                                {/* Highlights */}
                                <div>
                                  <h4 className="font-display text-lg neon-text-red mb-4">HIGHLIGHTS</h4>
                                  <ul className="space-y-2">
                                    {yearData.highlights.map((highlight, hIdx) => (
                                      <motion.li
                                        key={hIdx}
                                        className="flex items-start gap-3 text-white/80"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * hIdx }}
                                      >
                                        <span className="text-cyber-blue mt-1">▸</span>
                                        <span>{highlight}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Images Gallery */}
                                <div>
                                  <h4 className="font-display text-lg neon-text-red mb-4">MEMORY_SNAPSHOTS</h4>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {yearData.images.map((img, imgIdx) => (
                                      <motion.div
                                        key={imgIdx}
                                        className="relative h-48 border border-electric-purple/30 overflow-hidden rounded-lg group cursor-pointer"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * imgIdx }}
                                        whileHover={{ borderColor: '#9D4EDD' }}
                                      >
                                        <img
                                          src={img}
                                          alt={`${yearData.year} Event`}
                                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 scanlines opacity-20" />
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* CONTACT SECTION */}
            {activeSection === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <GlitchText text="CONTACT" className="text-5xl md:text-7xl lg:text-8xl" />
                  <div className="flex justify-center mt-4">
                    <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent shadow-glow-cyan" />
                  </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* About Section */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="glass-panel p-8 border border-border/50 h-full">
                      <h2 className="font-heading text-3xl neon-text-cyan mb-6">ABOUT ALKEMY</h2>
                      
                      <div className="space-y-6 text-muted-foreground font-body">
                        <p>
                          ALKEMY FEST is the flagship tech-cultural festival that transforms the ordinary into the extraordinary. 
                          Born from the vision of creating an immersive experience that bridges technology and creativity.
                        </p>
                        <p>
                          Our mission is to provide a platform for students to showcase their talents, compete with the best, 
                          and experience the future of entertainment and innovation.
                        </p>
                        
                        {/* Vision Cards */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                          <div className="glass-panel p-4 border border-neon-red/30">
                            <h4 className="font-display text-sm neon-text-red mb-2">VISION</h4>
                            <p className="text-xs">To be the most immersive student festival experience globally.</p>
                          </div>
                          <div className="glass-panel p-4 border border-electric-purple/30">
                            <h4 className="font-display text-sm neon-text-purple mb-2">MISSION</h4>
                            <p className="text-xs">Empowering creativity through technology and collaboration.</p>
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="mt-8 space-y-4">
                        <h3 className="font-display text-lg text-foreground">REACH OUT</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <MapPin size={18} className="text-cyber-blue" />
                            <span className="text-sm">Hawkins National Laboratory, Indiana, USA</span>
                          </div>
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <Phone size={18} className="text-cyber-blue" />
                            <span className="text-sm">+1 (555) 123-4567</span>
                          </div>
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <Mail size={18} className="text-cyber-blue" />
                            <span className="text-sm">contact@alkemyfest.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Contact Form */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="glass-panel p-8 border border-border/50">
                      <h2 className="font-heading text-3xl neon-text-red mb-6">SEND MESSAGE</h2>
                      
                      <form onSubmit={(e) => {
                        e.preventDefault();
                        console.log('Contact form submitted');
                      }} className="space-y-6">
                        {/* Name Input */}
                        <div>
                          <label className="font-retro text-xs text-muted-foreground block mb-2">
                            NAME
                          </label>
                          <input
                            type="text"
                            defaultValue=""
                            className="w-full bg-muted/50 border border-border focus:border-neon-red focus:shadow-glow-red rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 outline-none transition-all duration-300"
                            placeholder="Enter your name"
                          />
                        </div>

                        {/* Email Input */}
                        <div>
                          <label className="font-retro text-xs text-muted-foreground block mb-2">
                            EMAIL
                          </label>
                          <input
                            type="email"
                            defaultValue=""
                            className="w-full bg-muted/50 border border-border focus:border-neon-red focus:shadow-glow-red rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 outline-none transition-all duration-300"
                            placeholder="Enter your email"
                          />
                        </div>

                        {/* Subject Input */}
                        <div>
                          <label className="font-retro text-xs text-muted-foreground block mb-2">
                            SUBJECT
                          </label>
                          <input
                            type="text"
                            defaultValue=""
                            className="w-full bg-muted/50 border border-border focus:border-neon-red focus:shadow-glow-red rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 outline-none transition-all duration-300"
                            placeholder="What is this about?"
                          />
                        </div>

                        {/* Message Input */}
                        <div>
                          <label className="font-retro text-xs text-muted-foreground block mb-2">
                            MESSAGE
                          </label>
                          <textarea
                            defaultValue=""
                            rows={5}
                            className="w-full bg-muted/50 border border-border focus:border-neon-red focus:shadow-glow-red rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 outline-none transition-all duration-300 resize-none"
                            placeholder="Type your message..."
                          />
                        </div>

                        {/* Submit Button */}
                        <NeonButton type="submit" variant="outline" size="lg" className="w-full">
                          <span className="flex items-center justify-center gap-2">
                            <Send size={18} />
                            TRANSMIT MESSAGE
                          </span>
                        </NeonButton>
                      </form>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
