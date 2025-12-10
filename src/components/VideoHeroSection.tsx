import { Button } from "@/components/ui/button";
import { useEffect, useRef, useCallback } from "react";

const VideoHeroSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hasUnmutedRef = useRef(false);

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const unmuteVideo = useCallback(() => {
    if (hasUnmutedRef.current) return;
    hasUnmutedRef.current = true;
    
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ method: 'setMuted', value: false }),
        '*'
      );
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ method: 'setVolume', value: 1 }),
        '*'
      );
    }
  }, []);

  useEffect(() => {
    // Check if desktop (non-touch device)
    const isDesktop = !('ontouchstart' in window) && !navigator.maxTouchPoints;
    
    if (isDesktop) {
      // Desktop: try to unmute after a short delay (after video loads)
      const timer = setTimeout(() => {
        unmuteVideo();
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Mobile: unmute on first user interaction
      const handleInteraction = () => {
        unmuteVideo();
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('scroll', handleInteraction);
      };

      document.addEventListener('click', handleInteraction, { passive: true });
      document.addEventListener('touchstart', handleInteraction, { passive: true });
      document.addEventListener('scroll', handleInteraction, { passive: true, once: true });

      return () => {
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('scroll', handleInteraction);
      };
    }
  }, [unmuteVideo]);

  return (
    <>
      <section className="relative w-full aspect-video overflow-hidden bg-background">
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1145348414?autoplay=1&loop=1&muted=1&controls=0&playsinline=1&quality=auto"
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
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
