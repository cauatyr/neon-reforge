const VideoHeroSection = () => {
  return (
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
  );
};

export default VideoHeroSection;
