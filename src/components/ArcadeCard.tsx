import { motion } from 'framer-motion';
import { useState } from 'react';
import NeonButton from './NeonButton';

interface ArcadeCardProps {
  title: string;
  category: string;
  icon: React.ReactNode;
  index: number;
}

const ArcadeCard = ({ title, category, icon, index }: ArcadeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Arcade Frame */}
      <motion.div
        className="relative bg-card rounded-arcade overflow-hidden shadow-arcade"
        whileHover={{ 
          scale: 1.02,
          rotateY: 4,
          rotateX: -2,
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Neon Frame Border */}
        <div className="absolute inset-0 rounded-arcade">
          {/* Left border - cyan */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyber-blue via-cyber-blue to-transparent shadow-glow-cyan" />
          {/* Right border - magenta */}
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-magenta via-neon-magenta to-transparent shadow-glow-purple" />
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-blue via-electric-purple to-neon-magenta" />
        </div>

        {/* Title Header */}
        <div className="relative px-4 py-3 border-b border-border/30">
          <h3 className="font-heading text-lg text-center neon-text-red tracking-wider leading-tight">
            {title}
          </h3>
          <p className="font-retro text-xs text-muted-foreground text-center mt-1">
            {category}
          </p>
        </div>

        {/* Screen Area */}
        <div className="relative px-4 py-6 min-h-[160px] flex items-center justify-center">
          {/* Scanlines */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]" />
          
          {/* Screen glow */}
          <div className="absolute inset-4 rounded-lg bg-midnight-navy border border-border/50 overflow-hidden">
            {/* CRT curve effect */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30" />
            
            {/* Icon display */}
            <motion.div
              className="relative z-10 w-full h-full flex items-center justify-center p-4"
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-electric-purple">
                {icon}
              </div>
            </motion.div>

            {/* Timestamp overlay */}
            <div className="absolute bottom-2 left-2 font-retro text-xs text-cyber-blue/70">
              1:40:03.4:00:00
            </div>
          </div>
        </div>

        {/* Joystick Controls */}
        <div className="relative px-4 py-3 flex items-center justify-center gap-6">
          <div className="flex gap-2">
            <div className="w-3 h-6 bg-neon-red rounded-sm shadow-glow-red" />
            <div className="w-3 h-6 bg-neon-red rounded-sm shadow-glow-red" />
          </div>
          <div className="flex gap-2">
            {['yellow', 'cyan', 'purple', 'green'].map((color, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  color === 'yellow' ? 'bg-yellow-400' :
                  color === 'cyan' ? 'bg-cyber-blue' :
                  color === 'purple' ? 'bg-electric-purple' :
                  'bg-green-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Register Button */}
        <div className="px-4 pb-4">
          <NeonButton variant="outline" size="sm" className="w-full">
            REGISTER
          </NeonButton>
        </div>

        {/* Floating particles on hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-neon-red"
                initial={{ 
                  x: Math.random() * 100 + '%', 
                  y: '100%',
                  opacity: 0 
                }}
                animate={{ 
                  y: '-20%',
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ArcadeCard;
