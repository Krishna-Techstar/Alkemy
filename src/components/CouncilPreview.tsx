import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NeonButton from './NeonButton';

const councilMembers = [
  {
    name: 'Alex Rivera',
    role: 'General Secretary',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Sarah Chen',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Marcus Johnson',
    role: 'Cultural Head',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Priya Sharma',
    role: 'Sports Captain',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
  },
];

const CouncilPreview = () => {
  return (
    <motion.section
      className="relative py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.span 
          className="font-retro text-xs text-electric-purple tracking-widest block mb-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          THE TEAM BEHIND THE MADNESS
        </motion.span>
        <motion.h2 
          className="font-heading text-4xl md:text-5xl neon-text-purple"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          STUDENT COUNCIL
        </motion.h2>
        <div className="flex justify-center mt-4">
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-electric-purple to-transparent shadow-glow-purple" />
        </div>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {councilMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="relative group text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Avatar Container */}
            <motion.div
              className="relative mx-auto w-24 h-24 md:w-32 md:h-32 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {/* Neon Ring */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--electric-purple)), hsl(var(--neon-magenta)))',
                  padding: '3px',
                }}
                animate={{
                  boxShadow: [
                    '0 0 20px hsla(265, 75%, 67%, 0.5)',
                    '0 0 30px hsla(265, 75%, 67%, 0.7)',
                    '0 0 20px hsla(265, 75%, 67%, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-full h-full rounded-lg bg-deep-space" />
              </motion.div>
              
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
            
            {/* Name */}
            <h3 className="font-display text-sm md:text-base text-foreground group-hover:neon-text-purple transition-all duration-300">
              {member.name}
            </h3>
            
            {/* Role */}
            <p className="font-retro text-xs text-muted-foreground mt-1">
              {member.role}
            </p>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <Link to="/council">
          <NeonButton variant="outline" size="md">
            <span className="flex items-center gap-2">
              VIEW FULL COUNCIL
              <ArrowRight size={16} />
            </span>
          </NeonButton>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default CouncilPreview;
