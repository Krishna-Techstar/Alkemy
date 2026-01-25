import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: 'mailto:contact@alkemyfest.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Events', path: '/events' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Council', path: '/council' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative mt-16 border-t border-border/30">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent pointer-events-none" />
      
      <div className="relative glass-panel border-0 rounded-none">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="inline-block mb-4">
                <h3 className="font-heading text-3xl neon-text-red flicker">
                  ALKEMY
                  <span className="block text-sm tracking-[0.3em] text-foreground/80 -mt-1">
                    FEST
                  </span>
                </h3>
              </Link>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                The Upside Down of College Fests. Experience the most immersive tech-cultural event.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-display text-sm tracking-widest text-foreground mb-4">
                QUICK LINKS
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="font-body text-sm text-muted-foreground hover:text-neon-red transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-display text-sm tracking-widest text-foreground mb-4">
                CONTACT
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin size={16} className="mt-0.5 text-neon-red shrink-0" />
                  <span className="font-body text-sm">
                    Hawkins National Laboratory<br />
                    Indiana, USA
                  </span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone size={16} className="text-neon-red shrink-0" />
                  <span className="font-body text-sm">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail size={16} className="text-neon-red shrink-0" />
                  <span className="font-body text-sm">contact@alkemyfest.com</span>
                </li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-display text-sm tracking-widest text-foreground mb-4">
                CONNECT
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="p-2 glass-panel border border-border/50 text-muted-foreground hover:text-neon-red hover:border-neon-red/50 hover:shadow-glow-red transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
              
              {/* Newsletter hint */}
              <p className="font-retro text-xs text-muted-foreground mt-6">
                [ SUBSCRIBE FOR UPDATES ]
              </p>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="font-retro text-xs text-muted-foreground">
              © 2025 ALKEMY FEST. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-4">
              <span className="font-retro text-xs text-muted-foreground">SYSTEM STATUS:</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse shadow-glow-cyan" />
                <span className="font-retro text-xs text-cyber-blue">OPERATIONAL</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
