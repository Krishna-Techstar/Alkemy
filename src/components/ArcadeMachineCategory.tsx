import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import './ArcadeMachineCategory.css';

interface ArcadeMachineCategoryProps {
    title: string;
    description: string;
    icon: LucideIcon;
    color: 'red' | 'purple' | 'cyan' | 'magenta';
    imageUrl: string;
    onClick: () => void;
}

const ArcadeMachineCategory: React.FC<ArcadeMachineCategoryProps> = ({
    title,
    description,
    icon: Icon,
    color,
    imageUrl,
    onClick,
}) => {
    const [rotate, setRotate] = React.useState({ x: 12, y: 0 }); // Default facing below

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Multiplier for rotation intensity (higher = more tilt)
        const intensity = 25;

        // Calculate opposite rotation
        const rotateX = ((centerY - y) / centerY) * -intensity;
        const rotateY = ((x - centerX) / centerX) * -intensity;

        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 12, y: 0 }); // Snap back to default tilted position
    };

    return (
        <motion.div
            className="arcade-cabinet-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <div
                className={`arcade-cabinet ${color}`}
                style={{
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                    transition: rotate.x === 12 && rotate.y === 0 ? 'transform 0.5s ease' : 'none'
                } as any}
            >
                <div className="side-panel-l"></div>
                <div className="side-panel-r"></div>

                {/* Marquee */}
                <div className="arcade-marquee">
                    <div className="speaker-grille"></div>
                    <span className="marquee-text">{title}</span>
                </div>

                {/* Screen */}
                <div className="arcade-screen-mount">
                    <div className="arcade-screen">
                        <div className="glass-reflection"></div>
                        <div className="screen-bg" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                        <div className="crt-overlay"></div>
                        <div className="screen-flicker"></div>

                        <div className="screen-content">
                            <Icon size={48} />
                            <p className="mt-4 text-xs font-retro text-white/80 line-clamp-3 px-2">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Control Panel */}
                <div className="arcade-controls">
                    <div className="joystick-base">
                        <div className="joystick-stick">
                            <div className="joystick-ball"></div>
                        </div>
                    </div>

                    <div className="arcade-buttons">
                        <div className="arcade-btn"></div>
                        <div className="arcade-btn"></div>
                        <div className="arcade-btn"></div>
                        <div className="arcade-btn"></div>
                    </div>
                </div>

                {/* Coin Slots Section */}
                <div className="coin-slots">
                    <div className="coin-door">
                        <div className="coin-slot"></div>
                        <div className="coin-slot"></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ArcadeMachineCategory;
