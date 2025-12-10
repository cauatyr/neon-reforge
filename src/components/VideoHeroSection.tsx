import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState, useCallback } from "react";
import { Volume2 } from "lucide-react";

const VideoHeroSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hasUnmutedRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSoundButton, setShowSoundButton] = useState(false);

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
    setShowSoundButton(false);
  }, []);

  useEffect(() => {
    const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(mobile);

    if (mobile) {
      // Show sound button on mobile after a short delay
      const timer = setTimeout(() => setShowSoundButton(true), 1500);
      return () => clearTimeout(timer);
    } else {
      // Desktop: unmute after short delay
      const timer = setTimeout(() => unmuteVideo(), 1000);
      return () => clearTimeout(timer);
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
        
        {/* Mobile Sound Button */}
        {isMobile && showSoundButton && (
          <button
            onClick={unmuteVideo}
            className="absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2.5 
                       bg-[#0D0D0D]/70 backdrop-blur-sm border border-[#D4A056]/40 
                       rounded-lg text-white text-sm font-medium
                       animate-fade-in transition-all duration-300 hover:bg-[#0D0D0D]/90 
                       hover:border-[#D4A056]/70 z-10"
            style={{
              animation: 'fade-in 0.5s ease-out, slideUp 0.5s ease-out',
            }}
          >
            <Volume2 className="w-4 h-4 text-[#D4A056]" />
            Ativar Som
          </button>
        )}
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
