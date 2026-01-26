import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ArcadeEventCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  time: string;
  location: string;
  fee: string;
  prizePool: string;
  teamSize?: string;
  description: string;
  glowColor: string;
  neonColor: string;
  icon: React.ReactNode;
}

const ArcadeEventCard = ({
  id,
  title,
  category,
  image,
  date,
  time,
  location,
  fee,
  prizePool,
  teamSize,
  description,
  glowColor,
  neonColor,
  icon,
}: ArcadeEventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate(`/event-details/${id}`);
  };

  return (
    <motion.div
      className="relative w-full max-w-xs mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-60 -z-10 transition-all duration-300"
        style={{ backgroundColor: glowColor }}
        animate={{ scale: isHovered ? 1.1 : 1 }}
      />

      {/* Main Arcade Cabinet Container */}
      <div className="relative w-96 mx-auto">
        {/* Layer 1: Arcade Cabinet Background Image */}
        <div 
          className="relative w-full aspect-square"
          style={{
            backgroundImage: 'url(/images/ArcadeCard-BG.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Layer 2: Event Image - Positioned as arcade screen */}
          <div className="absolute top-[21.25%] left-[31.5%] w-[39%] h-[27%] overflow-hidden rounded-lg" style={{
            boxShadow: `0 0 40px ${glowColor}, inset 0 0 20px ${glowColor}`,
            border: `2px solid ${neonColor}`,
          }}>
            {/* Event Image */}
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />

            {/* Scanlines Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20 z-10"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 3px)',
              }}
            />

            {/* Dark Overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black/20"
              animate={{ opacity: isHovered ? 0.05 : 0.2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-white/60"
                animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {icon}
              </motion.div>
            </motion.div>

            {/* Glitch Line Animation */}
            <motion.div
              className="absolute left-0 w-full h-[2px] z-20"
              style={{ backgroundColor: neonColor, opacity: 0.8 }}
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Register Button - On Arcade */}
          <motion.button
            onClick={handleRegister}
            className="absolute top-[88%] left-1/2 transform -translate-x-1/2 w-50 py-2.5 px-3 font-retro text-xs tracking-widest uppercase font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 z-30"
            style={{
              backgroundColor: neonColor,
              color: '#000',
              border: `2px solid ${neonColor}`,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 15px ${glowColor}`,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Register</span>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight size={16} />
            </motion.div>
          </motion.button>

          {/* Top Section - Title and Category (on top of arcade) */}
          <div className="absolute top-3 left-0 right-0 px-3 text-center z-30">
            <motion.h3
              className="text-center font-retro text-sm tracking-widest uppercase font-bold mb-0.5"
              style={{ color: neonColor }}
            >
              {title}
            </motion.h3>
            <div className="text-center text-xs tracking-widest uppercase text-gray-400">
              {category}
            </div>
          </div>

          {/* Bottom Section - Time Display (on top of arcade) */}
          <div className="absolute bottom-24 left-3 z-30">
            <motion.div
              className="font-retro text-xs"
              style={{ color: glowColor }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {time}
            </motion.div>
          </div>

          {/* Arcade Control Lights (on top of arcade) */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: [neonColor, '#FFD700', '#00F5D4', '#9B5DE5'][i] }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Glitch Effect on Hover */}
      {isHovered && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-1 h-1/3 z-30"
            style={{ backgroundColor: neonColor, opacity: 0.3 }}
            animate={{
              left: [0, 4, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: 2,
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-1 h-1/3 z-30"
            style={{ backgroundColor: neonColor, opacity: 0.3 }}
            animate={{
              right: [0, 4, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: 2,
            }}
          />
        </>
      )}
    </motion.div>
  );
};

export default ArcadeEventCard;
