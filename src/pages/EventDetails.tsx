import { motion } from 'framer-motion';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Trophy, Users, AlertCircle, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import GlitchText from '@/components/GlitchText';
import NeonButton from '@/components/NeonButton';
import Footer from '@/components/Footer';

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);

  // Mock event data
  const eventData: Record<string, any> = {
    '1': {
      id: '1',
      title: 'CODE DEMOGORGON',
      category: 'HACKATHON',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
      date: 'Feb 15, 2026',
      time: '09:00 AM - 06:00 PM',
      location: 'Main Auditorium',
      fee: '₹500',
      prizePool: '₹1,00,000',
      teamSize: '2-4 members',
      description: 'Join the ultimate coding battle where innovation meets competition. Develop cutting-edge solutions in 8 hours.',
      rules: [
        'Teams of 2-4 members',
        'Laptop and internet required',
        'Code must be original',
        'No external frameworks allowed',
        'Final submission must be before 6 PM',
      ],
      highlights: [
        'First prize: ₹50,000',
        'Second prize: ₹30,000',
        'Third prize: ₹20,000',
      ],
      faq: [
        {
          q: 'Can I participate solo?',
          a: 'No, this is a team event. You need at least 2 members.',
        },
        {
          q: 'What if my laptop crashes?',
          a: 'We have backup systems available. Contact the organizers immediately.',
        },
        {
          q: 'Is there a registration deadline?',
          a: 'Yes, registration closes on Feb 14, 2026 at 11:59 PM.',
        },
      ],
      neonColor: '#FF2B2B',
      glowColor: 'hsla(0, 100%, 56%, 0.6)',
    },
  };

  const event = eventData[eventId || '1'];

  if (!event) {
    return (
      <div className="relative min-h-screen bg-deep-space flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle size={64} className="text-neon-red mx-auto mb-4" />
          <h2 className="text-2xl font-heading text-neon-red mb-2">Event Not Found</h2>
          <p className="text-muted-foreground mb-6">The event you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/events')}
            className="px-6 py-2 border border-neon-red text-neon-red hover:bg-neon-red hover:text-black transition-all rounded-lg"
          >
            Back to Events
          </button>
        </motion.div>
      </div>
    );
  }

  const handleRegister = () => {
    setIsRegistering(true);
    setTimeout(() => {
      navigate('/event-registration', { state: { eventId: event.id, eventTitle: event.title } });
    }, 1000);
  };

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
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/events')}
            className="flex items-center gap-2 text-neon-red hover:text-electric-purple transition-colors mb-8 font-retro text-sm"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} />
            Back to Events
          </motion.button>

          {/* Hero Section with Image */}
          <motion.div
            className="relative rounded-lg overflow-hidden mb-8 h-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            
            {/* Title Overlay */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                  style={{
                    backgroundColor: event.neonColor,
                    color: '#000',
                  }}
                >
                  {event.category}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white">
                {event.title}
              </h1>
            </motion.div>
          </motion.div>

          {/* Quick Info Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {[
              { icon: Calendar, label: 'Date', value: event.date },
              { icon: Clock, label: 'Time', value: event.time },
              { icon: MapPin, label: 'Location', value: event.location },
              { icon: Trophy, label: 'Prize', value: event.prizePool },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="glass-panel p-4 border border-border/50"
                whileHover={{ y: -5 }}
              >
                <item.icon size={20} className="text-neon-red mb-2" />
                <div className="text-xs text-muted-foreground">{item.label}</div>
                <div className="text-sm font-bold text-white">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            className="glass-panel border border-electric-purple/50 p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <h2 className="text-2xl font-heading text-electric-purple mb-4">About This Event</h2>
            <p className="text-white/80 leading-relaxed">{event.description}</p>
          </motion.div>

          {/* Rules & Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Rules */}
            <motion.div
              className="glass-panel border border-neon-red/50 p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-heading text-neon-red mb-4">Rules</h3>
              <ul className="space-y-2">
                {event.rules.map((rule: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                    <Check size={16} className="text-neon-red mt-1 flex-shrink-0" />
                    {rule}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Highlights */}
            <motion.div
              className="glass-panel border border-cyber-blue/50 p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-heading text-cyber-blue mb-4">Prize Distribution</h3>
              <ul className="space-y-3">
                {event.highlights.map((highlight: string, idx: number) => (
                  <li key={idx} className="flex items-center justify-between text-sm">
                    <span className="text-white/80">Prize {idx + 1}</span>
                    <span className="font-bold text-yellow-400">{highlight.split(': ')[1]}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Team Info */}
          <motion.div
            className="glass-panel border border-electric-purple/30 p-6 mb-8 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Users size={24} className="text-electric-purple flex-shrink-0" />
            <div>
              <h3 className="font-bold text-white">Team Size</h3>
              <p className="text-sm text-muted-foreground">{event.teamSize}</p>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-heading text-electric-purple mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {event.faq.map((item: any, idx: number) => (
                <motion.details
                  key={idx}
                  className="glass-panel border border-border/30 p-4"
                  whileHover={{ boxShadow: '0 0 20px hsla(265, 75%, 67%, 0.3)' }}
                >
                  <summary className="cursor-pointer font-bold text-white flex items-center gap-2">
                    <span className="text-electric-purple">Q:</span> {item.q}
                  </summary>
                  <p className="mt-3 text-sm text-white/70 ml-6">
                    <span className="text-cyber-blue font-bold">A:</span> {item.a}
                  </p>
                </motion.details>
              ))}
            </div>
          </motion.div>

          {/* Register CTA */}
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <NeonButton
              onClick={handleRegister}
              disabled={isRegistering}
              size="lg"
              className="text-lg px-12"
            >
              {isRegistering ? 'Processing...' : 'Register Now'}
            </NeonButton>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetails;
