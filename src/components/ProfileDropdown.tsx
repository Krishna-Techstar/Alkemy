import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, User, BarChart3, Settings } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface ProfileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  onLogout: () => void;
}

const ProfileDropdown = ({ isOpen, onClose, userName, onLogout }: ProfileDropdownProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    onClose();
    navigate('/');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute top-full right-0 mt-2 w-56 glass-panel border border-electric-purple/50 rounded-lg overflow-hidden z-50"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="p-4 border-b border-electric-purple/30 bg-electric-purple/5">
            <p className="text-xs text-muted-foreground tracking-widest">LOGGED IN AS</p>
            <p className="text-sm font-heading text-white mt-1 truncate">{userName}</p>
          </div>

          {/* Menu Items */}
          <div className="p-2 space-y-1">
            {/* Profile */}
            <button
              onClick={() => handleNavigation('/profile')}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-electric-purple/20 rounded transition-colors"
            >
              <User size={18} className="text-electric-purple" />
              <span className="font-retro tracking-wider">PROFILE</span>
            </button>

            {/* My Events */}
            <button
              onClick={() => handleNavigation('/profile#events')}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-electric-purple/20 rounded transition-colors"
            >
              <BarChart3 size={18} className="text-neon-red" />
              <span className="font-retro tracking-wider">MY EVENTS</span>
            </button>

            {/* Settings */}
            <button
              onClick={() => handleNavigation('/profile#settings')}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-electric-purple/20 rounded transition-colors"
            >
              <Settings size={18} className="text-cyber-blue" />
              <span className="font-retro tracking-wider">SETTINGS</span>
            </button>
          </div>

          {/* Logout */}
          <div className="p-2 border-t border-electric-purple/30">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-neon-red hover:bg-neon-red/20 rounded transition-colors font-retro tracking-wider"
            >
              <LogOut size={18} />
              <span>LOGOUT</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileDropdown;
