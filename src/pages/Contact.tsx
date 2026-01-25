import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import GlitchText from '@/components/GlitchText';
import NeonButton from '@/components/NeonButton';
import Footer from '@/components/Footer';

interface ContactProps {
  isEmbedded?: boolean;
}

const Contact = ({ isEmbedded = false }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  if (isEmbedded) {
    // Embedded version for About page (no navbar, background, or footer)
    return (
      <div className="space-y-8">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GlitchText text="CONTACT" className="text-5xl md:text-7xl lg:text-8xl" />
          <div className="flex justify-center mt-4">
            <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent shadow-glow-cyan" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-panel p-8 border border-border/50 h-full">
              <h2 className="font-heading text-3xl neon-text-cyan mb-6">ABOUT ALKEMY</h2>
              
              <div className="space-y-6 text-muted-foreground font-body">
                <p>
                  ALKEMY FEST is the flagship tech-cultural festival that transforms the ordinary into the extraordinary. 
                  Born from the vision of creating an immersive experience that bridges technology and creativity.
                </p>
                <p>
                  Our mission is to provide a platform for students to showcase their talents, compete with the best, 
                  and experience the future of entertainment and innovation.
                </p>
                
                {/* Vision Cards */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="glass-panel p-4 border border-neon-red/30">
                    <h4 className="font-display text-sm neon-text-red mb-2">VISION</h4>
                    <p className="text-xs">To be the most immersive student festival experience globally.</p>
                  </div>
                  <div className="glass-panel p-4 border border-electric-purple/30">
                    <h4 className="font-display text-sm neon-text-purple mb-2">MISSION</h4>
                    <p className="text-xs">Empowering creativity through technology and collaboration.</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-4">
                <h3 className="font-display text-lg text-foreground">REACH OUT</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin size={18} className="text-cyber-blue" />
                    <span className="text-sm">Hawkins National Laboratory, Indiana, USA</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone size={18} className="text-cyber-blue" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail size={18} className="text-cyber-blue" />
                    <span className="text-sm">contact@alkemyfest.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-panel p-8 border border-border/50">
              <h2 className="font-heading text-3xl neon-text-red mb-6">SEND MESSAGE</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="font-retro text-xs text-muted-foreground block mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-muted/50 border border-border focus:border-neon-red focus:shadow-glow-red rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 outline-none transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="font-retro text-xs text-muted-foreground block mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-muted/50 border border-border focus:border-neon-red focus:shadow-glow-red rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 outline-none transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className="font-retro text-xs text-muted-foreground block mb-2">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-muted/50 border border-border focus:border-neon-red focus:shadow-glow-red rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 outline-none transition-all duration-300"
                    placeholder="What is this about?"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="font-retro text-xs text-muted-foreground block mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-muted/50 border border-border focus:border-neon-red focus:shadow-glow-red rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 outline-none transition-all duration-300 resize-none"
                    placeholder="Type your message..."
                  />
                </div>

                {/* Submit Button */}
                <NeonButton type="submit" variant="outline" size="lg" className="w-full">
                  <span className="flex items-center justify-center gap-2">
                    <Send size={18} />
                    TRANSMIT MESSAGE
                  </span>
                </NeonButton>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-deep-space">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-midnight-navy to-deep-space" />
      </div>

      <ParticleBackground />
      <div className="fixed inset-0 z-20 pointer-events-none scanlines opacity-20" />
      <Navbar />

      <main className="relative z-10 pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Page Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlitchText text="CONTACT" className="text-5xl md:text-7xl lg:text-8xl" />
            <div className="flex justify-center mt-4">
              <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent shadow-glow-cyan" />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass-panel p-8 border border-border/50 h-full">
                <h2 className="font-heading text-3xl neon-text-cyan mb-6">ABOUT ALKEMY</h2>
                
                <div className="space-y-6 text-muted-foreground font-body">
                  <p>
                    ALKEMY FEST is the flagship tech-cultural festival that transforms the ordinary into the extraordinary. 
                    Born from the vision of creating an immersive experience that bridges technology and creativity.
                  </p>
                  <p>
                    Our mission is to provide a platform for students to showcase their talents, compete with the best, 
                    and experience the future of entertainment and innovation.
                  </p>
                  
                  {/* Vision Cards */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="glass-panel p-4 border border-neon-red/30">
                      <h4 className="font-display text-sm neon-text-red mb-2">VISION</h4>
                      <p className="text-xs">To be the most immersive student festival experience globally.</p>
                    </div>
                    <div className="glass-panel p-4 border border-electric-purple/30">
                      <h4 className="font-display text-sm neon-text-purple mb-2">MISSION</h4>
                      <p className="text-xs">Empowering creativity through technology and collaboration.</p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-8 space-y-4">
                  <h3 className="font-display text-lg text-foreground">REACH OUT</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin size={18} className="text-cyber-blue" />
                      <span className="text-sm">Hawkins National Laboratory, Indiana, USA</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone size={18} className="text-cyber-blue" />
                      <span className="text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail size={18} className="text-cyber-blue" />
                      <span className="text-sm">contact@alkemyfest.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="glass-panel p-8 border border-border/50">
                <h2 className="font-heading text-3xl neon-text-red mb-6">SEND MESSAGE</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="font-retro text-xs text-muted-foreground block mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-muted/50 border border-border focus:border-neon-red focus:shadow-glow-red rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 outline-none transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="font-retro text-xs text-muted-foreground block mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-muted/50 border border-border focus:border-neon-red focus:shadow-glow-red rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 outline-none transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="font-retro text-xs text-muted-foreground block mb-2">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-muted/50 border border-border focus:border-neon-red focus:shadow-glow-red rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 outline-none transition-all duration-300"
                      placeholder="What is this about?"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="font-retro text-xs text-muted-foreground block mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full bg-muted/50 border border-border focus:border-neon-red focus:shadow-glow-red rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 outline-none transition-all duration-300 resize-none"
                      placeholder="Type your message..."
                    />
                  </div>

                  {/* Submit Button */}
                  <NeonButton type="submit" variant="outline" size="lg" className="w-full">
                    <span className="flex items-center justify-center gap-2">
                      <Send size={18} />
                      TRANSMIT MESSAGE
                    </span>
                  </NeonButton>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-4 border border-border/50 overflow-hidden rounded-lg">
              <div className="relative h-64 md:h-80 bg-midnight-navy rounded-lg overflow-hidden">
                {/* Map Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-neon-red mx-auto mb-4 animate-pulse" />
                    <p className="font-retro text-sm text-muted-foreground">
                      [ LOCATION MAP LOADING... ]
                    </p>
                  </div>
                </div>
                {/* Scanlines */}
                <div className="absolute inset-0 scanlines opacity-30" />
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'linear-gradient(hsl(var(--neon-red) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-red) / 0.1) 1px, transparent 1px)',
                  backgroundSize: '50px 50px',
                }} />
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
