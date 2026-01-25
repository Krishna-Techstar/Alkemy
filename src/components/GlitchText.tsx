import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        fontFamily: "'Libre Baskerville', serif",
      }}
    >
      {/* Main text - Outline-only with heavy red neon glow (Stranger Things style) */}
      <span 
        className="relative z-10 text-inherit"
        style={{
          color: 'transparent',
          WebkitTextStroke: '1.5px #ff4d4d',
          textShadow: 
            '0 0 5px #ff0000, ' +
            '0 0 15px #ff0000, ' +
            '0 0 30px #800000, ' +
            '0 0 50px #800000, ' +
            '0 0 80px #800000',
        }}
      >
        {text}
      </span>
      
      {/* Subtle glitch layer 1 - Cyan offset (very subtle) */}
      <span
        className="absolute top-0 left-0 z-0 text-inherit opacity-20"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          color: 'transparent',
          WebkitTextStroke: '1px hsl(168, 100%, 48%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
          transform: 'translate(-1px, -1px)',
          textShadow: '0 0 5px hsla(168, 100%, 48%, 0.3)',
          animation: 'glitch 4s infinite',
        }}
      >
        {text}
      </span>
      
      {/* Subtle glitch layer 2 - Purple offset (very subtle) */}
      <span
        className="absolute top-0 left-0 z-0 text-inherit opacity-20"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          color: 'transparent',
          WebkitTextStroke: '1px hsl(265, 75%, 67%)',
          clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
          transform: 'translate(1px, 1px)',
          textShadow: '0 0 5px hsla(265, 75%, 67%, 0.3)',
          animation: 'glitch 4.5s infinite reverse',
        }}
      >
        {text}
      </span>
    </motion.div>
  );
};

export default GlitchText;
