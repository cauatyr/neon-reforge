import { useEffect, useRef, useState } from 'react';

interface CinematicImageOptions {
  effect?: 'slide' | 'parallax' | 'edge-light' | 'dual-axis' | 'spotlight' | 'laser-edge' | 'none';
  threshold?: number;
}

export const useCinematicImage = (options: CinematicImageOptions = {}) => {
  const {
    effect = 'none',
    threshold = 0.2
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Subtle haptic feedback
          if ('vibrate' in navigator) {
            navigator.vibrate(10);
          }
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // Clean parallax effect (only if enabled)
  useEffect(() => {
    if (effect !== 'parallax' || !isVisible) return;

    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrollPercent = 1 - (rect.top + rect.height / 2) / window.innerHeight;
      const translateY = Math.max(-3, Math.min(3, scrollPercent * 6 - 3));
      
      if (ref.current.querySelector('img')) {
        const img = ref.current.querySelector('img') as HTMLElement;
        img.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [effect, isVisible]);

  return { ref, isVisible, effect };
};
