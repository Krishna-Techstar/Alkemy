import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import GlitchText from '@/components/GlitchText';
import NeonButton from '@/components/NeonButton';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', formData);
  };

  return (
    <div className="relative min-h-screen bg-deep-space flex items-center justify-center">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-midnight-navy to-deep-space" />
      </div>
      <ParticleBackground />
      <div className="fixed inset-0 z-20 pointer-events-none scanlines opacity-20" />
      <Navbar />

      <main className="relative z-10 w-full max-w-md px-4 pt-24 pb-8">
        <motion.div
          className="glass-panel p-8 border border-electric-purple/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 border border-electric-purple/50 bg-electric-purple/10 rounded-sm mb-4">
              <span className="font-retro text-xs text-electric-purple tracking-widest">SECURE ACCESS</span>
            </div>
            <GlitchText text="LOGIN" className="text-4xl" />
            <p className="font-retro text-xs text-muted-foreground mt-2">[ ENTER CREDENTIALS ]</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-muted/50 border border-border focus:border-electric-purple rounded-sm pl-10 pr-4 py-3 text-foreground outline-none transition-all"
              />
            </div>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-muted/50 border border-border focus:border-electric-purple rounded-sm pl-10 pr-10 py-3 text-foreground outline-none transition-all"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <NeonButton type="submit" variant="secondary" size="lg" className="w-full">
              ACCESS SYSTEM
            </NeonButton>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            New agent? <Link to="/signup" className="text-electric-purple hover:underline">Create Profile</Link>
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Login;
