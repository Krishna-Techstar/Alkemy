import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NeonButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const NeonButton = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: NeonButtonProps) => {
  const baseStyles = 'relative font-heading uppercase tracking-widest overflow-hidden transition-all duration-300 cursor-pointer';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const variantStyles = {
    primary: `
      bg-gradient-to-r from-neon-red to-crimson-glow
      border-2 border-neon-red
      text-primary-foreground
      shadow-glow-red
      hover:shadow-glow-red-intense
      hover:scale-105
    `,
    secondary: `
      bg-transparent
      border-2 border-electric-purple
      text-electric-purple
      hover:bg-electric-purple/20
      shadow-glow-purple
      hover:shadow-glow-purple-intense
      hover:border-electric-purple
    `,
    outline: `
      bg-transparent
      border-2 border-neon-red
      text-neon-red
      hover:bg-neon-red/20
      shadow-glow-red
      hover:shadow-glow-red-intense
      hover:border-neon-red
    `,
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Scanline effect */}
      <span className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Glow pulse animation */}
      <motion.span
        className="absolute inset-0 rounded-inherit"
        animate={{
          boxShadow: [
            '0 0 20px hsla(0, 100%, 56%, 0.4)',
            '0 0 40px hsla(0, 100%, 56%, 0.6)',
            '0 0 20px hsla(0, 100%, 56%, 0.4)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.button>
  );
};

export default NeonButton;
