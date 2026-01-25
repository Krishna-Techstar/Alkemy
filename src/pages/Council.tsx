import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import GlitchText from '@/components/GlitchText';
import Footer from '@/components/Footer';

const councilSections = [
  {
    title: 'GENERAL SECRETARY',
    members: [
      {
        name: 'Alex Rivera',
        role: 'General Secretary',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      },
    ],
  },
  {
    title: 'TECHNICAL COUNCIL',
    members: [
      {
        name: 'Sarah Chen',
        role: 'Technical Lead',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
      },
      {
        name: 'David Kim',
        role: 'Hackathon Coordinator',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      },
      {
        name: 'Emily Zhang',
        role: 'Robotics Head',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
      },
    ],
  },
  {
    title: 'CULTURAL COUNCIL',
    members: [
      {
        name: 'Marcus Johnson',
        role: 'Cultural Head',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
      },
      {
        name: 'Jessica Williams',
        role: 'Dance Coordinator',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face',
      },
      {
        name: 'Ryan Patel',
        role: 'Music Director',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face',
      },
    ],
  },
  {
    title: 'SPORTS COUNCIL',
    members: [
      {
        name: 'Priya Sharma',
        role: 'Sports Captain',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      },
      {
        name: 'James Wilson',
        role: 'Athletics Head',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face',
      },
    ],
  },
  {
    title: 'PR & MEDIA',
    members: [
      {
        name: 'Olivia Brown',
        role: 'PR Head',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
      },
      {
        name: 'Michael Torres',
        role: 'Social Media Manager',
        image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face',
      },
      {
        name: 'Sophie Anderson',
        role: 'Content Creator',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face',
      },
    ],
  },
];

const Council = () => {
  return (
    <div className="relative min-h-screen bg-deep-space">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-midnight-navy to-deep-space" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(265,75%,67%,0.08)_0%,_transparent_70%)]" />
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
            <GlitchText text="STUDENT COUNCIL" className="text-5xl md:text-7xl lg:text-8xl" />
            <div className="flex justify-center mt-4">
              <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-electric-purple to-transparent shadow-glow-purple" />
            </div>
            <p className="font-retro text-sm text-muted-foreground mt-4 tracking-widest">
              [ THE ARCHITECTS OF CHAOS ]
            </p>
          </motion.div>

          {/* Council Sections */}
          {councilSections.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              {/* Section Title */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-xl md:text-2xl text-electric-purple tracking-widest">
                  {section.title}
                </h2>
                <div className="w-24 h-px bg-electric-purple/50 mx-auto mt-2" />
              </motion.div>

              {/* Members Grid */}
              <div className={`grid gap-6 ${
                section.members.length === 1 ? 'grid-cols-1 max-w-xs mx-auto' :
                section.members.length === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto' :
                'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {section.members.map((member, memberIndex) => (
                  <motion.div
                    key={member.name}
                    className="relative group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: memberIndex * 0.1 }}
                  >
                    <motion.div
                      className="glass-panel p-6 border border-border/50 text-center hover:border-electric-purple/50 transition-all duration-500"
                      whileHover={{ scale: 1.03, y: -5 }}
                    >
                      {/* Avatar */}
                      <div className="relative mx-auto w-28 h-28 md:w-36 md:h-36 mb-4">
                        {/* Neon Ring */}
                        <motion.div
                          className="absolute inset-0 rounded-lg"
                          style={{
                            background: 'linear-gradient(135deg, hsl(var(--electric-purple)), hsl(var(--neon-magenta)))',
                            padding: '3px',
                          }}
                          animate={{
                            boxShadow: [
                              '0 0 15px hsla(265, 75%, 67%, 0.4)',
                              '0 0 25px hsla(265, 75%, 67%, 0.6)',
                              '0 0 15px hsla(265, 75%, 67%, 0.4)',
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="w-full h-full rounded-lg bg-deep-space" />
                        </motion.div>
                        
                        {/* Image */}
                        <img
                          src={member.image}
                          alt={member.name}
                          className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      
                      {/* Name */}
                      <h3 className="font-display text-lg md:text-xl text-foreground group-hover:neon-text-purple transition-all duration-300">
                        {member.name}
                      </h3>
                      
                      {/* Role */}
                      <p className="font-retro text-xs text-muted-foreground mt-1 tracking-widest">
                        {member.role}
                      </p>
                      
                      {/* Decorative corners */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-electric-purple/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-electric-purple/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-electric-purple/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-electric-purple/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Council;
