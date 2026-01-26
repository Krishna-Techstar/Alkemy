import { useVideoOverlay } from '@/contexts/VideoOverlayContext';
import IntroVideoOverlay from './IntroVideoOverlay';

const VideoOverlayController = () => {
  const { isVideoOpen, closeVideo } = useVideoOverlay();

  return <IntroVideoOverlay isOpen={isVideoOpen} onClose={closeVideo} />;
};

export default VideoOverlayController;
