import { useCinematicImage } from "@/hooks/useCinematicImage";
import ppf1 from "@/assets/ppf-1.jpg";
import ppf2 from "@/assets/ppf-2.jpg";
import ppf3 from "@/assets/ppf-3.jpg";
import ppf4 from "@/assets/ppf-4.jpg";
import ppf5 from "@/assets/ppf-5.jpg";
import ppf6 from "@/assets/ppf-6.jpg";

const images = [
  { src: ppf1, alt: "Aplicação de PPF - proteção de maçaneta" },
  { src: ppf2, alt: "Aplicação de PPF - técnica com espátula" },
  { src: ppf3, alt: "Aplicação de PPF - uso de ferramentas profissionais" },
  { src: ppf4, alt: "Aplicação de PPF - proteção de bordas" },
  { src: ppf5, alt: "Aplicação de PPF - trabalho em superfície interior" },
  { src: ppf6, alt: "Aplicação de PPF - detalhamento com espátula rosa" },
];

const CinematicGalleryImage = ({ image, idx }: { image: typeof images[0]; idx: number }) => {
  // Use gallery-specific cinematic animation (BLOCK 2)
  const { ref, isVisible } = useCinematicImage({ effect: 'spotlight' });
  
  return (
    <div
      ref={ref}
      className={`relative aspect-square overflow-hidden rounded-lg border-2 img-cinematic-gallery ${
        isVisible ? 'visible' : ''
      } border-automotive-bronze/40 group hover:scale-[1.02] hover:border-automotive-bronze transition-all duration-300`}
      style={{ transitionDelay: `${idx * 40}ms` }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {/* Subtle bottom glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-automotive-bronze/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

const GallerySection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-ignition">
          Veja na Prática o Que Você Vai <span className="text-automotive-bronze text-glow-bronze animate-power-pulse">Dominar</span>
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
