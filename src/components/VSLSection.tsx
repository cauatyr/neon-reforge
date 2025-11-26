import { Play } from "lucide-react";
import { useCinematicImage } from "@/hooks/useCinematicImage";
import { useRef, useState } from "react";

const VSLSection = () => {
  const { ref: sectionRef, isVisible } = useCinematicImage({ effect: 'laser-edge' });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Parallax Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="glass-card social-card p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(168,116,55,0.2)]">
          {/* Title Section */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-auto-light-sweep bg-gradient-to-r from-foreground via-automotive-bronze to-foreground bg-clip-text text-transparent">
              Veja Na Prática Como o PPF Protege Seu Carro
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-digital-flick">
              Assista a uma demonstração real do processo profissional de aplicação da Película de Proteção de Pintura (PPF).
              <br />
              <span className="text-automotive-bronze font-semibold">Qualidade premium, técnica precisa e acabamento invisível.</span>
            </p>
          </div>

          {/* Video Player */}
          <div 
            ref={sectionRef}
            className={`relative img-cinematic img-laser-edge ${
              isVisible ? 'visible' : ''
            } rounded-2xl overflow-hidden max-w-4xl mx-auto`}
          >
            {/* Neon Carbon Frame */}
            <div className="absolute inset-0 rounded-2xl border-2 border-automotive-bronze shadow-[0_0_30px_rgba(168,116,55,0.4),inset_0_0_20px_rgba(168,116,55,0.1)] pointer-events-none z-10"></div>
            
            {/* Metallic Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-automotive-bronze/10 to-transparent animate-metal-wave-sweep pointer-events-none z-10"></div>

            {/* Video Element */}
            <div className="relative aspect-video bg-black/50 backdrop-blur-sm">
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                controls={isPlaying}
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/videos/ppf-demonstration.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeo.
              </video>

              {/* Custom Play Button Overlay */}
              {!isPlaying && (
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer bg-black/30 hover:bg-black/20 transition-all duration-300"
                  aria-label="Reproduzir vídeo"
                >
                  <div className="relative">
                    {/* Pulsing Glow Ring */}
                    <div className="absolute inset-0 w-24 h-24 rounded-full bg-automotive-bronze/20 animate-engine-pulse-scale blur-xl"></div>
                    
                    {/* Play Icon Container */}
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-automotive-bronze to-automotive-bronze/70 flex items-center justify-center shadow-[0_0_40px_rgba(168,116,55,0.6)] group-hover:shadow-[0_0_60px_rgba(168,116,55,0.8)] transition-all duration-300 border-2 border-automotive-bronze/50 animate-engine-pulse-drift">
                      <Play className="w-10 h-10 text-background fill-background ml-1" />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Supporting Text */}
          <div className="mt-12 text-center space-y-4 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-automotive-bronze text-hud-drift">
              Aprenda Mesmo Sem Experiência
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              Este vídeo mostra o exato processo que você aprenderá dentro do curso.
              <br />
              Mesmo que você <span className="text-automotive-bronze font-semibold">nunca tenha aplicado PPF antes</span>, o método é fácil, prático e direto ao ponto — criado especialmente para iniciantes.
            </p>
            
            {/* Beginner-Friendly Badges */}
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <div className="benefits-badge px-6 py-3 rounded-full border-2 border-automotive-bronze/30 bg-automotive-bronze/5 backdrop-blur-sm">
                <span className="text-automotive-bronze font-semibold">✓ 100% Simplificado</span>
              </div>
              <div className="benefits-badge px-6 py-3 rounded-full border-2 border-automotive-bronze/30 bg-automotive-bronze/5 backdrop-blur-sm">
                <span className="text-automotive-bronze font-semibold">✓ Passo a Passo Detalhado</span>
              </div>
              <div className="benefits-badge px-6 py-3 rounded-full border-2 border-automotive-bronze/30 bg-automotive-bronze/5 backdrop-blur-sm">
                <span className="text-automotive-bronze font-semibold">✓ Sem Experiência Necessária</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
