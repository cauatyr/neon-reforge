import { Button } from "@/components/ui/button";
import { useEffect, useRef, useCallback } from "react";

const VideoHeroSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hasUnmutedRef = useRef(false);

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to unmute video via Vimeo postMessage API
  const unmuteVideo = useCallback(() => {
    if (hasUnmutedRef.current) return;
    
    hasUnmutedRef.current = true;
    
    if (iframeRef.current?.contentWindow) {
      // Vimeo Player API - unmute and set volume
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ method: 'setMuted', value: false }),
        '*'
      );
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ method: 'setVolume', value: 1 }),
        '*'
      );
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ method: 'play' }),
        '*'
      );
      console.log('[VideoHeroSection] Video unmuted after user interaction');
    }
  }, []);

  useEffect(() => {
    const handleInteraction = () => {
      unmuteVideo();
      // Remove all listeners after first interaction
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };

    // Add listeners for user interaction
    document.addEventListener('click', handleInteraction, { passive: true });
    document.addEventListener('touchstart', handleInteraction, { passive: true });
    document.addEventListener('scroll', handleInteraction, { passive: true, once: true });

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, [unmuteVideo]);

  return (
    <>
      {/* Desktop: full screen | Mobile: 60vh height */}
      <section className="relative w-full h-[60vh] md:h-screen overflow-hidden bg-background">
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1145348414?autoplay=1&loop=1&muted=1&controls=0&playsinline=1&quality=auto&transparent=0"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            border: 'none',
            width: '177.78vh',
            height: '100%',
            minWidth: '100%',
            minHeight: '177.78%',
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
