import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Check, Download, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import GlitchText from '@/components/GlitchText';
import Footer from '@/components/Footer';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { eventId, eventTitle, transactionId, amount } = location.state || {};

  return (
    <div className="relative min-h-screen bg-deep-space flex flex-col">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-midnight-navy to-deep-space" />
      </div>

      <ParticleBackground />
      <div className="fixed inset-0 z-20 pointer-events-none scanlines opacity-20" />
      <Navbar />

      <main className="relative z-10 flex-1 pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="container mx-auto max-w-2xl">
          {/* Success Animation */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Success Icon */}
            <motion.div
              className="mb-8 flex justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <div className="relative w-32 h-32">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-purple to-neon-red opacity-30 blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-full border-4 border-electric-purple bg-black/50 backdrop-blur-md">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <Check size={64} className="text-electric-purple" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <GlitchText text="REGISTRATION CONFIRMED!" className="text-4xl md:text-5xl mb-4" />
              <p className="text-electric-purple font-retro tracking-widest text-sm mb-8">
                [ PAYMENT_SUCCESSFUL ]
              </p>
            </motion.div>

            {/* Confirmation Details */}
            <motion.div
              className="glass-panel border border-electric-purple/50 p-8 mb-8 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-heading text-electric-purple mb-6">Confirmation Details</h3>

              <div className="space-y-4">
                {/* Event Name */}
                <div className="flex justify-between items-center pb-4 border-b border-border/30">
                  <span className="text-muted-foreground">Event</span>
                  <span className="text-white font-bold">{eventTitle}</span>
                </div>

                {/* Transaction ID */}
                <div className="flex justify-between items-center pb-4 border-b border-border/30">
                  <span className="text-muted-foreground">Transaction ID</span>
                  <span className="text-neon-red font-retro text-sm">{transactionId}</span>
                </div>

                {/* Amount Paid */}
                <div className="flex justify-between items-center pb-4 border-b border-border/30">
                  <span className="text-muted-foreground">Amount Paid</span>
                  <span className="text-cyber-blue font-bold text-lg">₹{amount}</span>
                </div>

                {/* Registration Status */}
                <div className="flex justify-between items-center pt-4">
                  <span className="text-muted-foreground">Status</span>
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-purple/20 border border-electric-purple/50"
                    animate={{ boxShadow: ['0 0 0 0px rgba(167, 51, 255, 0.4)', '0 0 0 10px rgba(167, 51, 255, 0)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Check size={16} className="text-electric-purple" />
                    <span className="text-electric-purple font-bold">CONFIRMED</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* QR Code Placeholder */}
            <motion.div
              className="glass-panel border border-cyber-blue/50 p-8 mb-8 max-w-xs mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-muted-foreground text-sm mb-4">Your Event Pass</p>
              <div className="bg-black p-4 rounded-lg mb-4">
                <div className="aspect-square bg-gradient-to-br from-cyber-blue/30 to-electric-purple/30 rounded flex items-center justify-center">
                  <div className="w-48 h-48 border-4 border-dashed border-cyber-blue rounded flex items-center justify-center">
                    <span className="text-cyber-blue font-retro text-xs text-center">QR PASS</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Present this pass at the event entry</p>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              className="glass-panel border border-border/30 p-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-lg font-heading text-white mb-4">Next Steps</h4>
              <ol className="space-y-3 text-left">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-purple/20 flex items-center justify-center text-electric-purple font-bold text-sm">
                    1
                  </span>
                  <span className="text-white/80">A confirmation email will be sent to your registered email address</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-purple/20 flex items-center justify-center text-electric-purple font-bold text-sm">
                    2
                  </span>
                  <span className="text-white/80">Save your Transaction ID for reference</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-purple/20 flex items-center justify-center text-electric-purple font-bold text-sm">
                    3
                  </span>
                  <span className="text-white/80">Arrive 30 minutes early on the event day</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-purple/20 flex items-center justify-center text-electric-purple font-bold text-sm">
                    4
                  </span>
                  <span className="text-white/80">Show your pass at the entry gate</span>
                </li>
              </ol>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => navigate('/profile')}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-electric-purple text-black font-bold rounded-lg hover:bg-electric-purple/80 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home size={18} />
                Go to Dashboard
              </motion.button>

              <motion.button
                onClick={() => navigate('/events')}
                className="flex items-center justify-center gap-2 px-8 py-3 border border-cyber-blue text-cyber-blue font-bold rounded-lg hover:bg-cyber-blue/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse More Events
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
