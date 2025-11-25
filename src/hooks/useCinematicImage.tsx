import { useEffect, useRef, useState } from 'react';

interface CinematicImageOptions {
  enableParallax?: boolean;
  enableExit?: boolean;
  threshold?: number;
}

export const useCinematicImage = (options: CinematicImageOptions = {}) => {
  const {
    enableParallax = true,
    enableExit = true,
    threshold = 0.2
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsExiting(false);
          // Haptic feedback when image appears
          if ('vibrate' in navigator) {
            navigator.vibrate(15);
          }
        } else if (enableExit && isVisible) {
          setIsExiting(true);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
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
  }, [threshold, enableExit, isVisible]);

  // Parallax scroll effect
  useEffect(() => {
    if (!enableParallax || !isVisible) return;

    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrollPercent = 1 - (rect.top + rect.height / 2) / window.innerHeight;
      const translateY = Math.max(-4, Math.min(4, scrollPercent * 8 - 4));
      
      if (ref.current.querySelector('img')) {
        const img = ref.current.querySelector('img') as HTMLElement;
        img.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableParallax, isVisible]);

  return { ref, isVisible, isExiting };
};
