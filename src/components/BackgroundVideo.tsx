import { useEffect, useRef, useState } from 'react';

const BackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle mobile detection and hydration
  useEffect(() => {
    setIsMounted(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Handle video playback and visibility changes
  useEffect(() => {
    if (!isMounted || isMobile || !videoRef.current) return;

    const video = videoRef.current;

    // Ensure video plays
    const playVideo = async () => {
      try {
        // Reset video to start if it ended (for seamless looping)
        if (video.ended) {
          video.currentTime = 0;
        }
        await video.play();
      } catch (error) {
        console.warn('Video autoplay failed:', error);
      }
    };

    playVideo();

    // Pause when tab is inactive, resume when active
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        playVideo();
      }
    };

    // Handle video errors gracefully
    const handleError = () => {
      console.warn('Background video failed to load');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    video.addEventListener('error', handleError);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      video.removeEventListener('error', handleError);
    };
  }, [isMounted, isMobile]);

  // Don't render until mounted to prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-[1] pointer-events-none" aria-hidden="true">
      {isMobile ? (
        // Fallback image for mobile
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/background-fallback.jpg)',
            backgroundColor: 'hsl(var(--deep-space))', // Fallback color if image fails
          }}
        >
          {/* Dark overlay for mobile fallback */}
          <div className="absolute inset-0 bg-gradient-to-b from-deep-space/90 via-deep-space/95 to-deep-space/90" />
        </div>
      ) : (
        // Video for desktop
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(1.5) contrast(1.1) saturate(1.2)',
            }}
            preload="auto"
            aria-hidden="true"
          >
            <source src="/videos/background.mp4" type="video/mp4" />
          </video>
          
          {/* Very subtle dark overlay for text readability - minimal opacity */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, hsla(228, 60%, 4%, 0.2), hsla(0, 0%, 0%, 0.3))',
            }}
          />
          
          {/* Minimal depth gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-deep-space/20" />
          
          {/* Additional radial vignette for Stranger Things effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.2)_60%,_rgba(0,0,0,0.5)_100%)]" />
        </>
      )}
    </div>
  );
};

export default BackgroundVideo;