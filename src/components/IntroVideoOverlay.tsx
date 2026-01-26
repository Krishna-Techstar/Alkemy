import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

interface IntroVideoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntroVideoOverlay = ({ isOpen, onClose }: IntroVideoOverlayProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset buttons state when opening
      setShowButtons(false);
      setShowPlayButton(false);
      
      // Attempt autoplay specifically for mobile compatibility
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay was prevented
            console.log("Autoplay prevented");
            setShowPlayButton(true);
          });
        }
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowPlayButton(false);
    }
  };

  // Show buttons after 2 seconds (only if playing)
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isOpen && !showPlayButton) {
      timeout = setTimeout(() => {
        setShowButtons(true);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [isOpen, showPlayButton]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            src="/videos/upsidedown.mp4"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            autoPlay
            muted
            playsInline
            onEnded={onClose}
          />

          {/* Dark Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

          {/* Fallback Play Button for Mobile/Autoplay Blocked */}
          {showPlayButton && (
            <motion.button
              onClick={handleManualPlay}
              className="z-50 px-8 py-4 bg-neon-red/20 border border-neon-red text-white 
                         rounded-full backdrop-blur-md font-retro text-xl tracking-widest
                         hover:bg-neon-red/40 transition-all shadow-[0_0_20px_rgba(255,43,43,0.4)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ENTER THE UPSIDE DOWN
            </motion.button>
          )}

          {/* Skip Button - Always Visible */}
          <motion.button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 
                       bg-black/30 backdrop-blur-md border border-white/20 rounded-full 
                       text-white/80 hover:text-white hover:bg-white/10 transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xs font-retro tracking-widest">SKIP</span>
            <X size={14} className="group-hover:rotate-90 transition-transform duration-300" />
          </motion.button>

          {/* Bottom Action Buttons */}
          <AnimatePresence>
            {showButtons && (
              <motion.div
                className="absolute bottom-12 left-0 right-0 z-50 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                <motion.button
                  onClick={() => {
                    onClose();
                    navigate('/signup');
                  }}
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-electric-purple/50 
                             bg-electric-purple/20 hover:bg-electric-purple/40 backdrop-blur-sm
                             text-white font-retro text-sm tracking-widest shadow-[0_0_15px_rgba(139,92,246,0.3)]
                             hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  JOIN THE PARTY
                </motion.button>

                <motion.button
                  onClick={() => {
                    onClose();
                    navigate('/schedule');
                  }}
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-neon-red/50 
                             bg-neon-red/20 hover:bg-neon-red/40 backdrop-blur-sm
                             text-white font-retro text-sm tracking-widest shadow-[0_0_15px_rgba(255,43,43,0.3)]
                             hover:shadow-[0_0_25px_rgba(255,43,43,0.5)] transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  VIEW SCHEDULE
                </motion.button>

                <motion.button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/schedule.pdf';
                    link.download = 'alkemy-schedule.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 
                             bg-white/5 hover:bg-white/10 backdrop-blur-sm
                             text-white/80 hover:text-white font-retro text-sm tracking-widest transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  DOWNLOAD SCHEDULE
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Focus Trap (Simplified) */}
          <div tabIndex={0} onFocus={() => videoRef.current?.focus()} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroVideoOverlay;
