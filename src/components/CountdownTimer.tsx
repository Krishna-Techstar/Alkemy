import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Set target date to 30 days from now for demo
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINS', value: timeLeft.minutes },
    { label: 'SECS', value: timeLeft.seconds },
  ];

  return (
    <motion.div 
      className="relative py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Label */}
      <div className="text-center mb-8">
        <span className="font-retro text-sm text-neon-red tracking-widest flicker">
          COUNTDOWN TO THE UPSIDE DOWN
        </span>
      </div>

      {/* Timer Display */}
      <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex items-center gap-2 sm:gap-4 md:gap-6">
            <motion.div
              className="relative"
              animate={{ scale: unit.label === 'SECS' ? [1, 1.02, 1] : 1 }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {/* Digit Container */}
              <div className="relative glass-panel px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 min-w-[70px] sm:min-w-[90px] md:min-w-[120px]">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-neon-red/10 rounded-lg blur-xl" />
                
                {/* Number */}
                <div className="relative text-center">
                  <span className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl neon-text-red tabular-nums">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Label */}
                <div className="mt-2 text-center">
                  <span className="font-retro text-[10px] sm:text-xs text-muted-foreground tracking-widest">
                    {unit.label}
                  </span>
                </div>
                
                {/* Corner Decorations */}
                <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-neon-red/50" />
                <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-neon-red/50" />
                <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-neon-red/50" />
                <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-neon-red/50" />
              </div>
            </motion.div>
            
            {/* Separator */}
            {index < timeUnits.length - 1 && (
              <motion.div
                className="flex flex-col gap-2"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <div className="w-2 h-2 rounded-full bg-neon-red shadow-glow-red" />
                <div className="w-2 h-2 rounded-full bg-neon-red shadow-glow-red" />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Decorative Lines */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-4">
          <div className="w-16 md:w-32 h-px bg-gradient-to-r from-transparent to-neon-red/50" />
          <div className="w-1 h-1 bg-neon-red rounded-full shadow-glow-red" />
          <span className="font-retro text-xs text-muted-foreground">EVENT STARTS</span>
          <div className="w-1 h-1 bg-neon-red rounded-full shadow-glow-red" />
          <div className="w-16 md:w-32 h-px bg-gradient-to-l from-transparent to-neon-red/50" />
        </div>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
