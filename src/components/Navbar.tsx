import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import alkemyLogo from '../assets/alkemy-logo.png';
import { useVideoOverlay } from '@/contexts/VideoOverlayContext';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'EVENTS', path: '/events' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SPONSORS', path: '/sponsors' },
  { name: 'CONTACT', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openVideo } = useVideoOverlay();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 hero-navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 lg:px-8 h-full flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="hero-nav-brand">
          <img src={alkemyLogo} alt="Alkemy Fest" className="nav-logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 hero-nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hero-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Flip Toggle & Auth */}
        <div className="hidden lg:flex items-center gap-6 hero-nav-right">
          <div className="hero-nav-toggle">
            <span>FLIP TO UPSIDE DOWN</span>
            <label className="switch">
              <input type="checkbox" onChange={(e) => {
                if (e.target.checked) {
                  openVideo();
                  // Reset toggle after short delay so it doesn't stay stuck if video closes?
                  // Or let the video closing logic handle it?
                  // For now basic trigger.
                  setTimeout(() => { e.target.checked = false; }, 500);
                }
              }} />
              <span className="slider"></span>
            </label>
          </div>


          <Link to="/signup" className="hero-nav-btn">SIGN UP</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-neon-red/30 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block hero-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-white/10 pt-4 mt-2 flex flex-col gap-4">
                <div className="hero-nav-toggle justify-start">
                  <span>UPSIDE DOWN</span>
                  <label className="switch">
                    <input type="checkbox" onChange={(e) => {
                      if (e.target.checked) {
                        openVideo();
                        setIsOpen(false);
                        setTimeout(() => { e.target.checked = false; }, 500);
                      }
                    }} />
                    <span className="slider"></span>
                  </label>
                </div>
                <Link to="/signup" className="hero-nav-btn justify-center" onClick={() => setIsOpen(false)}>SIGN UP</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
