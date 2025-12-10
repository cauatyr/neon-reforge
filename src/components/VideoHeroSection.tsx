import { Button } from "@/components/ui/button";

const VideoHeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1145348414?autoplay=1&loop=1&muted=0&controls=0&background=1&quality=auto"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            border: 'none',
            objectFit: 'cover',
            minWidth: '100%',
            minHeight: '100%',
          }}
          allow="autoplay; fullscreen"
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
