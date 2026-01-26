import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';
import ProfileDropdown from './ProfileDropdown';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'EVENTS', path: '/events' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SPONSORS', path: '/sponsors' },
  { name: 'CONTACT', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if user is logged in from localStorage
  const isLoggedIn = !!localStorage.getItem('authToken');
  const userName = localStorage.getItem('userName') || 'User';

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.h1
              className="font-heading text-2xl lg:text-3xl neon-text-red flicker"
              whileHover={{ scale: 1.05 }}
            >
              ALKEMY
              <span className="block text-xs lg:text-sm tracking-[0.3em] text-foreground/80 -mt-1">
                FEST
              </span>
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                {location.pathname === link.path && link.name === 'HOME' ? (
                  // HOME as red glowing pill (Stranger Things style)
                  <span
                    className="inline-block px-4 py-2 rounded-full border-2 border-neon-red bg-neon-red/10 font-display text-sm tracking-[0.1em] text-white"
                    style={{
                      textShadow: '0 0 5px hsl(var(--neon-red)), 0 0 10px hsl(var(--neon-red))',
                      boxShadow: '0 0 10px hsl(var(--neon-red) / 0.5), 0 0 20px hsl(var(--neon-red) / 0.3), inset 0 0 20px hsl(var(--neon-red) / 0.1)',
                    }}
                  >
                    {link.name}
                  </span>
                ) : (
                  <>
                    <span
                      className={`font-display text-sm tracking-[0.1em] transition-colors duration-300 ${
                        location.pathname === link.path
                          ? 'neon-text-red'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </span>
                    {/* Underline animation */}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-neon-red shadow-glow-red"
                      initial={{ width: location.pathname === link.path ? '100%' : 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </>
                )}
              </Link>
            ))}
          </div>

          {/* Flip to Upside Down Toggle + Profile Button */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="font-retro text-xs text-muted-foreground">
                FLIP TO UPSIDE DOWN
              </span>
              <motion.button
                onClick={() => setShowVideoModal(true)}
                className="w-12 h-6 rounded-full bg-muted border border-border relative overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute left-1 top-1 w-4 h-4 rounded-full bg-electric-purple shadow-glow-purple"
                  layout
                />
              </motion.button>
            </div>

            {/* Profile Button */}
            <div className="relative">
              {isLoggedIn ? (
                <motion.button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-electric-purple/50 hover:border-electric-purple text-white hover:bg-electric-purple/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <User size={18} />
                  <span className="font-retro text-xs tracking-wider">{userName}</span>
                </motion.button>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-full border-2 border-neon-red bg-neon-red/10 hover:bg-neon-red/20 text-white font-retro text-xs tracking-wider transition-all duration-300"
                >
                  LOGIN / SIGNUP
                </Link>
              )}
              
              {isLoggedIn && (
                <ProfileDropdown
                  isOpen={isProfileOpen}
                  onClose={() => setIsProfileOpen(false)}
                  userName={userName}
                  onLogout={() => {
                    localStorage.removeItem('authToken');
                    localStorage.removeItem('userName');
                    setIsProfileOpen(false);
                  }}
                />
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 glass-panel border-b border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block font-display text-lg tracking-widest py-2 ${
                      location.pathname === link.path
                        ? 'neon-text-red'
                        : 'text-foreground/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Profile Section */}
              <motion.div
                className="border-t border-border/30 pt-4 mt-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                {isLoggedIn ? (
                  <>
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="w-full flex items-center justify-between px-4 py-2 rounded border border-electric-purple/50 hover:border-electric-purple text-white hover:bg-electric-purple/10 transition-all"
                    >
                      <span className="font-retro text-sm tracking-wider">👤 {userName}</span>
                      <User size={18} />
                    </button>
                    
                    {/* Mobile Profile Dropdown */}
                    <AnimatePresence>
                      {isProfileOpen && (
                        <motion.div
                          className="mt-2 flex flex-col gap-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <Link
                            to="/profile"
                            onClick={() => {
                              setIsProfileOpen(false);
                              setIsOpen(false);
                            }}
                            className="block px-4 py-2 rounded bg-electric-purple/20 border border-electric-purple/30 text-electric-purple text-xs font-retro tracking-wider hover:bg-electric-purple/30 transition-all"
                          >
                            VIEW PROFILE
                          </Link>
                          <Link
                            to="/profile"
                            onClick={() => {
                              setIsProfileOpen(false);
                              setIsOpen(false);
                            }}
                            className="block px-4 py-2 rounded bg-electric-purple/20 border border-electric-purple/30 text-electric-purple text-xs font-retro tracking-wider hover:bg-electric-purple/30 transition-all"
                          >
                            MY EVENTS
                          </Link>
                          <Link
                            to="/profile"
                            onClick={() => {
                              setIsProfileOpen(false);
                              setIsOpen(false);
                            }}
                            className="block px-4 py-2 rounded bg-electric-purple/20 border border-electric-purple/30 text-electric-purple text-xs font-retro tracking-wider hover:bg-electric-purple/30 transition-all"
                          >
                            SETTINGS
                          </Link>
                          <button
                            onClick={() => {
                              localStorage.removeItem('authToken');
                              localStorage.removeItem('userName');
                              localStorage.removeItem('userEmail');
                              localStorage.removeItem('userCollege');
                              localStorage.removeItem('userDepartment');
                              localStorage.removeItem('userYear');
                              localStorage.removeItem('userPhone');
                              localStorage.removeItem('userPhoto');
                              setIsProfileOpen(false);
                              setIsOpen(false);
                            }}
                            className="px-4 py-2 rounded bg-neon-red/20 border border-neon-red text-neon-red text-xs font-retro tracking-wider hover:bg-neon-red/30 transition-all"
                          >
                            LOGOUT
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full block text-center px-4 py-2 rounded border-2 border-neon-red bg-neon-red/10 hover:bg-neon-red/20 text-white font-retro text-xs tracking-wider transition-all"
                  >
                    LOGIN / SIGNUP
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal - Upside Down Intro Experience */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowVideoModal(false)}
          >
            {/* Centered Modal */}
            <motion.div
              className="relative w-full max-w-2xl bg-black rounded-2xl overflow-hidden border-2 border-neon-red shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Container */}
              <div className="relative w-full aspect-video bg-black overflow-hidden group cursor-pointer">
                <video
                  src="/videos/upsidedown.mp4"
                  autoPlay
                  className="w-full h-full object-cover"
                  onEnded={() => setShowVideoModal(false)}
                  onClick={() => setShowVideoModal(false)}
                />

                {/* Skip Text on Hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-center">
                    <p className="text-white font-retro text-xl tracking-widest">CLICK TO SKIP</p>
                    <p className="text-white/60 font-retro text-xs mt-2">or wait for video to end</p>
                  </div>
                </motion.div>
              </div>

              {/* Close Button - Top Right */}
              <motion.button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-neon-red/30 hover:bg-neon-red/60 text-white transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={24} />
              </motion.button>

              {/* Bottom Action Buttons */}
              <motion.div
                className="w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent flex flex-col sm:flex-row gap-3 justify-center items-center z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
            >
              <motion.button
                onClick={() => {
                  setShowVideoModal(false);
                  navigate('/signup');
                }}
                className="px-6 py-2.5 rounded-lg border-2 border-electric-purple bg-electric-purple/20 hover:bg-electric-purple/40 text-white font-retro text-sm tracking-widest transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px hsl(var(--electric-purple))' }}
                whileTap={{ scale: 0.95 }}
              >
                JOIN THE PARTY
              </motion.button>

              <motion.button
                onClick={() => {
                  setShowVideoModal(false);
                  navigate('/schedule');
                }}
                className="px-6 py-2.5 rounded-lg border-2 border-neon-red bg-neon-red/20 hover:bg-neon-red/40 text-white font-retro text-sm tracking-widest transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px hsl(var(--neon-red))' }}
                whileTap={{ scale: 0.95 }}
              >
                VIEW SCHEDULE
              </motion.button>

              <motion.button
                onClick={() => {
                  // Download schedule PDF
                  const link = document.createElement('a');
                  link.href = '/schedule.pdf';
                  link.download = 'alkemy-schedule.pdf';
                  link.click();
                }}
                className="px-6 py-2.5 rounded-lg border-2 border-cyan-400 bg-cyan-400/20 hover:bg-cyan-400/40 text-white font-retro text-sm tracking-widest transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(34, 211, 238, 0.8)' }}
                whileTap={{ scale: 0.95 }}
              >
                DOWNLOAD SCHEDULE
              </motion.button>
            </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
