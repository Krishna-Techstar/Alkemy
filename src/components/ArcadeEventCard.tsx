import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ArcadeEventCard.css';

interface ArcadeCardProps {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  image: string;
  date: string;
  time: string;
  location: string;
  fee: string;
  prizePool: string;
  description: string;
  glowColor: string;
  neonColor: string;
}

const ArcadeEventCard: React.FC<ArcadeCardProps> = ({
  id,
  title,
  category,
  icon,
  image,
  date,
  time,
  location,
  fee,
  prizePool,
  description,
  glowColor,
  neonColor,
}) => {
  const navigate = useNavigate();
  const [rotate, setRotate] = React.useState({ x: 10, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * -15;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 10, y: 0 });
  };

  const handleRegistration = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/event-registration', { state: { eventId: id, eventTitle: title } });
  };

  const handleCardClick = () => {
    navigate(`/event/${id}`);
  };

  return (
    <div className="event-card-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <div className="exterior-title" style={{ '--neon-color': neonColor } as any}>
        {title}
      </div>

      <div
        className="event-arcade-cabinet"
        style={{
          '--neon-color': neonColor,
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: rotate.x === 10 && rotate.y === 0 ? 'transform 0.5s ease' : 'none'
        } as any}
      >
        <div className="side-panel-l"></div>
        <div className="side-panel-r"></div>

        {/* Marquee */}
        <div className="cabinet-marquee">
          <div className="marquee-text">{category}</div>
        </div>

        {/* Screen Area */}
        <div className="cabinet-screen-mount">
          <div className="cabinet-screen">
            <div className="glass-reflection"></div>
            <img src={image} alt={title} className="screen-bg-image" />
            <div className="screen-overlay"></div>
            <div className="screen-gradient"></div>
            <div className="crt-effect"></div>

            <div className="screen-content">
              <div className="brain-icon-container">
                {icon}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="cabinet-controls">
          <div className="joystick">
            <div className="joystick-knob"></div>
          </div>
          <div className="control-buttons">
            <div className="button red"></div>
            <div className="button green"></div>
            <div className="button blue"></div>
          </div>
        </div>

        {/* Dashboard Bar / Kickplate */}
        <div className="cabinet-base">
          <div className="coin-door">
            <div className="coin-slot-row">
              <div className="coin-door-light amber"></div>
              <div className="coin-door-light cyan"></div>
            </div>
            <div className="coin-slot-row">
              <div className="coin-door-light cyan"></div>
              <div className="coin-door-light amber"></div>
            </div>
          </div>
        </div>

        {/* Master Register Button */}
        <button
          className="master-register-btn"
          onClick={handleRegistration}
        >
          INSERT COIN
        </button>

        {/* Dynamic Glow */}
        <div className="card-glow-layer"></div>
      </div>
    </div>
  );
};

export default ArcadeEventCard;
