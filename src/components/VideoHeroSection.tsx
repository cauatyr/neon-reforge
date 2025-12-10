import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const VideoHeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      video.muted = true;
      video.play().catch(() => {});

      const unmute = () => {
        video.muted = false;
        video.volume = 1.0;
        video.play().catch(() => {});
        window.removeEventListener("touchstart", unmute);
        window.removeEventListener("scroll", unmute);
        window.removeEventListener("click", unmute);
      };

      window.addEventListener("touchstart", unmute, { once: true });
      window.addEventListener("scroll", unmute, { once: true });
      window.addEventListener("click", unmute, { once: true });

      return () => {
        window.removeEventListener("touchstart", unmute);
        window.removeEventListener("scroll", unmute);
        window.removeEventListener("click", unmute);
      };
    } else {
      video.muted = false;
      video.volume = 1.0;
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <>
      <section className="relative w-full aspect-video overflow-hidden bg-background">
        <video
          ref={videoRef}
          id="video-ppf"
          autoPlay
          playsInline
          loop
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="https://vimeo.com/1145348414?fl=ip&fe=ec" type="video/mp4" />
        </video>
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
