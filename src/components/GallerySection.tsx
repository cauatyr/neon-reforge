import { useCinematicImage } from "@/hooks/useCinematicImage";

const images = [
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%201.png", alt: "Aplicação de PPF em detalhe" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%202.png", alt: "Aplicação de PPF em concha de porta" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%203%20.png", alt: "Aplicação de PPF em multimídia" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%204.png", alt: "Aplicação de PPF em quina de porta" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%205%20.png", alt: "Aplicação de PPF em black piano" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%206.png", alt: "Kit de ferramentas para PPF" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%207.png", alt: "Aplicação de PPF em soleira" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%208.png", alt: "Detalhe de aplicação PPF" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%209.png", alt: "Aplicação de PPF em porta-malas" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%2011.png", alt: "Detalhe de proteção de quina" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%2012.png", alt: "Proteção de multimídia com PPF" },
];

const CinematicGalleryImage = ({ image, idx }: { image: typeof images[0]; idx: number }) => {
  const { ref, isVisible, isExiting } = useCinematicImage();
  
  return (
    <div
      ref={ref}
      className={`relative aspect-square overflow-hidden rounded-lg border-2 img-cinematic img-energy-border img-exit ${
        isVisible ? 'visible' : ''
      } ${isExiting ? 'exiting' : ''} border-automotive-bronze/40 group hover:scale-105 hover:border-automotive-red transition-all duration-500 shadow-[0_0_15px_rgba(139,92,46,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]`}
      style={{ animationDelay: `${idx * 0.05}s` }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-300"
        loading="lazy"
      />
      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-automotive-red/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

const GallerySection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-ignition">
          Veja na Prática o Que Você Vai <span className="text-automotive-red text-glow-red animate-power-pulse">Dominar</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, idx) => (
            <CinematicGalleryImage key={idx} image={image} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
