import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackgroundVideo from "@/components/BackgroundVideo";
import IntroVideoOverlay from "@/components/IntroVideoOverlay";
import VideoOverlayController from "@/components/VideoOverlayController";
import { VideoOverlayProvider } from "@/contexts/VideoOverlayContext";
import Index from "./pages/Index";
import Events from "./pages/Events";
import CategoryEvents from "./pages/CategoryEvents";
import Schedule from "./pages/Schedule";
import PastEvents from "./pages/PastEvents";
import Council from "./pages/Council";
import Sponsors from "./pages/Sponsors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <VideoOverlayProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Global Background Video */}
          <BackgroundVideo />
          
          {/* Global Video Overlay */}
          <VideoOverlayController />
          
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:category" element={<CategoryEvents />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/past-events" element={<PastEvents />} />
            <Route path="/council" element={<Council />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </VideoOverlayProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;