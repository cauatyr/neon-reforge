import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const VideoHeroSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Unmute video after user interaction
  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        // Send message to Vimeo player to unmute
        if (iframeRef.current?.contentWindow) {
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ method: 'setVolume', value: 1 }),
            '*'
          );
        }
      }
    };

    // Listen for any user interaction
    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('scroll', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, [hasInteracted]);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-background">
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1145348414?autoplay=1&loop=1&muted=1&controls=0&background=1&playsinline=1&quality=auto"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            border: 'none',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="PPF Video"
        />
      </section>
      
      <section className="bg-background py-12 md:py-16">
        <div className="flex justify-center">
          <Button
            variant="crystal"
            size="lg"
            onClick={scrollToOffer}
            className="text-lg md:text-xl px-8 md:px-12 py-6 md:py-7 font-bold tracking-wide animate-engine-pulse"
          >
            QUERO APRENDER AGORA
          </Button>
        </div>
      </section>
    </>
  );
};

export default VideoHeroSection;
