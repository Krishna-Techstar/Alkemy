import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, Zap } from 'lucide-react';

const VisitorCounter = () => {
  const [visitors, setVisitors] = useState(12847);
  const [registrations, setRegistrations] = useState(3456);
  const [liveNow, setLiveNow] = useState(234);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors(prev => prev + Math.floor(Math.random() * 3));
      if (Math.random() > 0.7) {
        setRegistrations(prev => prev + 1);
      }
      setLiveNow(prev => {
        const change = Math.floor(Math.random() * 10) - 5;
        return Math.max(100, prev + change);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { 
      label: 'TOTAL VISITORS', 
      value: visitors, 
      icon: Eye,
      color: 'neon-red' 
    },
    { 
      label: 'REGISTRATIONS', 
      value: registrations, 
      icon: Users,
      color: 'electric-purple' 
    },
    { 
      label: 'ONLINE NOW', 
      value: liveNow, 
      icon: Zap,
      color: 'cyber-blue' 
    },
  ];

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <motion.div
      className="relative py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* HUD Header */}
      <div className="text-center mb-8">
        <span className="font-retro text-xs text-muted-foreground tracking-widest">
          [ SYSTEM STATUS: ACTIVE ]
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="relative glass-panel p-6 border border-border/50 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Scanlines */}
              <div className="absolute inset-0 scanlines opacity-10" />
              
              {/* Icon */}
              <div className={`mb-4 text-${stat.color}`}>
                <Icon size={24} className="opacity-70" />
              </div>
              
              {/* Value */}
              <motion.div
                className={`font-display text-3xl md:text-4xl ${
                  stat.color === 'neon-red' ? 'neon-text-red' : 
                  stat.color === 'electric-purple' ? 'neon-text-purple' : 
                  'neon-text-cyan'
                }`}
                key={stat.value}
                initial={{ opacity: 0.5, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {formatNumber(stat.value)}
              </motion.div>
              
              {/* Label */}
              <div className="mt-2 font-retro text-xs text-muted-foreground tracking-widest">
                {stat.label}
              </div>
              
              {/* Live Indicator for Online Now */}
              {stat.label === 'ONLINE NOW' && (
                <motion.div
                  className="absolute top-4 right-4 flex items-center gap-2"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="w-2 h-2 rounded-full bg-cyber-blue shadow-glow-cyan" />
                  <span className="font-retro text-[10px] text-cyber-blue">LIVE</span>
                </motion.div>
              )}
              
              {/* Corner Decoration */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-border/30" />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default VisitorCounter;
