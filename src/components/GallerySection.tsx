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
  // Distribute effects: edge-light for first few, then slide, parallax, none
  const effects = ['edge-light', 'edge-light', 'slide', 'parallax', 'none'] as const;
  const effect = effects[idx % effects.length];
  
  const { ref, isVisible } = useCinematicImage({ effect });
  
  const effectClasses = {
    slide: 'img-slide',
    'edge-light': 'img-edge-light',
    parallax: 'img-parallax',
    none: ''
  };
  
  return (
    <div
      ref={ref}
      className={`relative aspect-square overflow-hidden rounded-lg border-2 img-cinematic ${effectClasses[effect]} ${
        isVisible ? 'visible' : ''
      } border-automotive-bronze/40 group hover:scale-[1.02] hover:border-automotive-red transition-all duration-300`}
      style={{ transitionDelay: `${idx * 40}ms` }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {/* Subtle bottom glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-automotive-red/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
