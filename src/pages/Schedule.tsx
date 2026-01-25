import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import GlitchText from '@/components/GlitchText';
import Footer from '@/components/Footer';
import { Calendar, Clock, MapPin } from 'lucide-react';

const scheduleData = [
  {
    day: 'DAY 1',
    date: 'MARCH 15, 2025',
    events: [
      { time: '09:00 AM', title: 'Opening Ceremony', location: 'Main Arena', type: 'ceremony' },
      { time: '10:30 AM', title: 'Hackathon Kickoff', location: 'Tech Hub', type: 'technical' },
      { time: '12:00 PM', title: 'Dance Battle Prelims', location: 'Cultural Stage', type: 'cultural' },
      { time: '02:00 PM', title: 'Valorant Tournament', location: 'Gaming Zone', type: 'esports' },
      { time: '05:00 PM', title: 'Live Band Performance', location: 'Main Arena', type: 'cultural' },
      { time: '08:00 PM', title: 'DJ Night', location: 'Open Ground', type: 'cultural' },
    ],
  },
  {
    day: 'DAY 2',
    date: 'MARCH 16, 2025',
    events: [
      { time: '09:00 AM', title: 'Robotics Challenge', location: 'Tech Hub', type: 'technical' },
      { time: '11:00 AM', title: 'Fashion Show', location: 'Main Arena', type: 'cultural' },
      { time: '01:00 PM', title: 'Basketball Finals', location: 'Sports Complex', type: 'sports' },
      { time: '03:00 PM', title: 'Hackathon Presentations', location: 'Tech Hub', type: 'technical' },
      { time: '06:00 PM', title: 'Stand-up Comedy', location: 'Cultural Stage', type: 'cultural' },
      { time: '09:00 PM', title: 'Closing Ceremony', location: 'Main Arena', type: 'ceremony' },
    ],
  },
];

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  technical: { bg: 'bg-neon-red/10', text: 'text-neon-red', border: 'border-neon-red/30' },
  cultural: { bg: 'bg-electric-purple/10', text: 'text-electric-purple', border: 'border-electric-purple/30' },
  esports: { bg: 'bg-cyber-blue/10', text: 'text-cyber-blue', border: 'border-cyber-blue/30' },
  sports: { bg: 'bg-neon-magenta/10', text: 'text-neon-magenta', border: 'border-neon-magenta/30' },
  ceremony: { bg: 'bg-foreground/10', text: 'text-foreground', border: 'border-foreground/30' },
};

const Schedule = () => {
  return (
    <div className="relative min-h-screen bg-deep-space">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-midnight-navy to-deep-space" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(0,100%,56%,0.05)_0%,_transparent_70%)]" />
      </div>

      <ParticleBackground />
      <div className="fixed inset-0 z-20 pointer-events-none scanlines opacity-20" />
      <Navbar />

      <main className="relative z-10 pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Page Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlitchText text="SCHEDULE" className="text-5xl md:text-7xl lg:text-8xl" />
            <div className="flex justify-center mt-4">
              <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-neon-red to-transparent shadow-glow-red" />
            </div>
            <p className="font-retro text-sm text-muted-foreground mt-4 tracking-widest">
              [ MISSION TIMELINE ACTIVATED ]
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-red via-electric-purple to-cyber-blue" />

            {scheduleData.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                className="mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: dayIndex * 0.2 }}
              >
                {/* Day Header */}
                <motion.div
                  className="relative flex items-center mb-8 pl-12 md:pl-0 md:justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-neon-red shadow-glow-red" />
                  
                  <div className="glass-panel px-8 py-4 border border-neon-red/30">
                    <h2 className="font-heading text-2xl md:text-3xl neon-text-red">{day.day}</h2>
                    <p className="font-retro text-xs text-muted-foreground flex items-center gap-2 mt-1">
                      <Calendar size={12} />
                      {day.date}
                    </p>
                  </div>
                </motion.div>

                {/* Events */}
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => {
                    const colors = typeColors[event.type];
                    const isLeft = eventIndex % 2 === 0;
                    
                    return (
                      <motion.div
                        key={event.title}
                        className={`relative flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
                        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: eventIndex * 0.1 }}
                      >
                        {/* Timeline Node */}
                        <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-4 w-3 h-3 rounded-full border-2 border-border bg-deep-space" />
                        
                        {/* Content */}
                        <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                          <motion.div
                            className={`glass-panel p-4 border ${colors.border} hover:scale-[1.02] transition-transform duration-300`}
                            whileHover={{ y: -2 }}
                          >
                            {/* Time */}
                            <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                              <Clock size={14} className={colors.text} />
                              <span className={`font-retro text-sm ${colors.text}`}>{event.time}</span>
                            </div>
                            
                            {/* Title */}
                            <h3 className="font-display text-lg text-foreground">{event.title}</h3>
                            
                            {/* Location */}
                            <div className={`flex items-center gap-2 mt-2 ${isLeft ? 'md:justify-end' : ''}`}>
                              <MapPin size={12} className="text-muted-foreground" />
                              <span className="font-body text-xs text-muted-foreground">{event.location}</span>
                            </div>
                            
                            {/* Type Badge */}
                            <div className={`inline-block mt-3 px-2 py-1 rounded-sm ${colors.bg}`}>
                              <span className={`font-retro text-xs ${colors.text} uppercase`}>{event.type}</span>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Schedule;
