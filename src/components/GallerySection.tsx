import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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

const GalleryImage = ({ image, idx }: { image: typeof images[0]; idx: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  return (
    <div
      ref={ref}
      className={`gallery-image-container ${isVisible ? 'gallery-image-visible' : ''}`}
      style={{ transitionDelay: `${idx * 50}ms` }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="gallery-image"
        loading="lazy"
      />
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

        <div className="gallery-grid">
          {images.map((image, idx) => (
            <GalleryImage key={idx} image={image} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
