import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  color: 'red' | 'orange' | 'yellow';
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 8 + Math.random() * 12,
          size: 2 + Math.random() * 4,
          color: ['red', 'orange', 'yellow'][Math.floor(Math.random() * 3)] as 'red' | 'orange' | 'yellow',
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const getColorClass = (color: 'red' | 'orange' | 'yellow') => {
    switch (color) {
      case 'red':
        return 'bg-neon-red shadow-glow-red';
      case 'orange':
        return 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]';
      case 'yellow':
        return 'bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]';
    }
  };

  return (
    <div className="particle-container">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${getColorClass(particle.color)}`}
          style={{
            left: `${particle.x}%`,
            bottom: '-20px',
            width: particle.size,
            height: particle.size,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 1, 1, 0],
            rotate: [0, 720],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
