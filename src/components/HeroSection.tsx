import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import alkemyLogo from '../assets/alkemy-logo.png';

interface Particle {
    id: number;
    left: string;
    delay: string;
    duration: string;
}

const HeroSection: React.FC = () => {
    // Simple particle generator effect
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const particleCount = 20;
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            left: Math.random() * 100 + 'vw',
            delay: Math.random() * 5 + 's',
            duration: Math.random() * 5 + 5 + 's'
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="hero-app-container">
            <div className="hero-overlay"></div>

            {/* Particles */}
            <div className="particles-container">
                {particles.map(p => (
                    <div
                        key={p.id}
                        className="particle"
                        style={{
                            left: p.left,
                            animationDelay: p.delay,
                            animationDuration: p.duration
                        }}
                    ></div>
                ))}
            </div>

            {/* Navbar removed - using global Navbar */}

            {/* Hero Content */}
            <div className="hero-content-inner">

                <div className="st-logo-container">
                    {/* Top Bar */}
                    <div className="top-bar"></div>

                    {/* Main Title */}
                    <div className="st-title">
                        <span className="st-letter large">A</span>
                        <span className="st-letter">L</span>
                        <span className="st-letter">K</span>
                        <span className="st-letter">E</span>
                        <span className="st-letter">M</span>
                        <span className="st-letter large">Y</span>
                    </div>

                    {/* Subtitle */}
                    <div className="st-subtitle-container">
                        <div className="st-line"></div>
                        <div className="st-subtitle">THE UPSIDE DOWN OF COLLEGE FESTS</div>
                        <div className="st-line"></div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="hero-buttons">
                    <Link to="/events">
                        <button className="btn-neon btn-red btn-no-border">
                            ENTER THE LAB
                            <span>(EVENTS)</span>
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="btn-neon btn-purple btn-no-border">
                            JOIN THE PARTY
                            <span>(SIGNUP)</span>
                        </button>
                    </Link>
                    <Link to="/schedule">
                        <button className="btn-neon btn-blue btn-no-border">
                            VIEW SCHEDULE
                            <span>(TAP HERE)</span>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
