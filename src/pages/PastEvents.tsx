import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import GlitchText from '@/components/GlitchText';
import Footer from '@/components/Footer';

const pastEventsData = [
  {
    id: 1,
    title: 'Hackathon 2024',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Dance Battle Finals',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Esports Championship',
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Fashion Show',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Robotics Exhibition',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Live Concert',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop',
  },
  {
    id: 7,
    title: 'Basketball Tournament',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop',
  },
  {
    id: 8,
    title: 'DJ Night 2024',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&h=400&fit=crop',
  },
];

const PastEvents = () => {
  const [selectedImage, setSelectedImage] = useState<typeof pastEventsData[0] | null>(null);

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
        <div className="container mx-auto max-w-7xl">
          {/* Page Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlitchText text="PAST EVENTS" className="text-5xl md:text-7xl lg:text-8xl" />
            <div className="flex justify-center mt-4">
              <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-electric-purple to-transparent shadow-glow-purple" />
            </div>
            <p className="font-retro text-sm text-muted-foreground mt-4 tracking-widest">
              [ MEMORY ARCHIVE: LOADED ]
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {pastEventsData.map((event, index) => (
              <motion.div
                key={event.id}
                className="break-inside-avoid"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="relative group cursor-pointer overflow-hidden rounded-lg border border-border/30"
                  onClick={() => setSelectedImage(event)}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Glow Border */}
                  <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-electric-purple opacity-0 group-hover:opacity-100 shadow-glow-purple"
                    initial={false}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-retro text-xs text-electric-purple">{event.category}</span>
                    <h3 className="font-display text-lg text-foreground">{event.title}</h3>
                  </div>
                  
                  {/* Scanlines */}
                  <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-deep-space/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] m-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute -top-12 right-0 p-2 text-foreground hover:text-neon-red transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              
              {/* Image */}
              <div className="relative rounded-lg overflow-hidden border-2 border-electric-purple shadow-glow-purple">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-deep-space to-transparent">
                  <span className="font-retro text-xs text-electric-purple">{selectedImage.category}</span>
                  <h3 className="font-heading text-2xl text-foreground">{selectedImage.title}</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default PastEvents;
