import { createContext, useContext, useState, ReactNode } from 'react';

interface VideoOverlayContextType {
  isVideoOpen: boolean;
  openVideo: () => void;
  closeVideo: () => void;
}

const VideoOverlayContext = createContext<VideoOverlayContextType | undefined>(undefined);

export const useVideoOverlay = () => {
  const context = useContext(VideoOverlayContext);
  if (context === undefined) {
    throw new Error('useVideoOverlay must be used within a VideoOverlayProvider');
  }
  return context;
};

interface VideoOverlayProviderProps {
  children: ReactNode;
}

export const VideoOverlayProvider: React.FC<VideoOverlayProviderProps> = ({ children }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <VideoOverlayContext.Provider value={{ isVideoOpen, openVideo, closeVideo }}>
      {children}
    </VideoOverlayContext.Provider>
  );
};
