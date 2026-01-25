import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Music, Gamepad2, Trophy } from 'lucide-react';

interface EventCategoryCardProps {
  title: string;
  description: string;
  icon: 'technical' | 'cultural' | 'esports' | 'sports';
  color: 'red' | 'purple' | 'cyan' | 'magenta';
  index: number;
}

const iconMap = {
  technical: Code,
  cultural: Music,
  esports: Gamepad2,
  sports: Trophy,
};

const colorClasses = {
  red: {
    text: 'neon-text-red',
    glow: 'shadow-glow-red',
    border: 'border-neon-red/30 hover:border-neon-red',
    bg: 'bg-neon-red/10',
  },
  purple: {
    text: 'neon-text-purple',
    glow: 'shadow-glow-purple',
    border: 'border-electric-purple/30 hover:border-electric-purple',
    bg: 'bg-electric-purple/10',
  },
  cyan: {
    text: 'neon-text-cyan',
    glow: 'shadow-glow-cyan',
    border: 'border-cyber-blue/30 hover:border-cyber-blue',
    bg: 'bg-cyber-blue/10',
  },
  magenta: {
    text: 'text-neon-magenta',
    glow: 'shadow-[0_0_30px_hsla(336,85%,65%,0.8)]',
    border: 'border-neon-magenta/30 hover:border-neon-magenta',
    bg: 'bg-neon-magenta/10',
  },
};

const EventCategoryCard = ({ title, description, icon, color, index }: EventCategoryCardProps) => {
  const IconComponent = iconMap[icon];
  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <Link to={`/events?category=${icon}`}>
        <motion.div
          className={`relative group glass-panel p-6 md:p-8 border ${colors.border} transition-all duration-500 cursor-pointer overflow-hidden`}
          whileHover={{ 
            scale: 1.02, 
            rotateX: 5, 
            rotateY: -5,
            transition: { duration: 0.3 }
          }}
          style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        >
          {/* Glow Background */}
          <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          
          {/* Corner Accent */}
          <div className={`absolute top-0 right-0 w-16 h-16 ${colors.bg} blur-2xl opacity-50`} />
          
          {/* Icon */}
          <motion.div 
            className={`relative mb-4 ${colors.text}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <IconComponent size={48} strokeWidth={1.5} />
          </motion.div>
          
          {/* Title */}
          <h3 className={`font-heading text-2xl md:text-3xl mb-2 ${colors.text} transition-all duration-300`}>
            {title}
          </h3>
          
          {/* Description */}
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          
          {/* Hover Arrow */}
          <motion.div
            className={`absolute bottom-6 right-6 ${colors.text} opacity-0 group-hover:opacity-100`}
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.div>
          
          {/* Bottom Line */}
          <motion.div
            className={`absolute bottom-0 left-0 h-0.5 ${colors.bg.replace('/10', '')} ${colors.glow}`}
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default EventCategoryCard;
