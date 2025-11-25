import { useEffect, useState } from "react";

const CinematicLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex items-center justify-center cinematic-loader">
      <div className="relative w-64 h-1 bg-[#1A1A1A] rounded-full overflow-hidden">
        <div className="absolute inset-0 cinematic-loader-line"></div>
      </div>
    </div>
  );
};

export default CinematicLoader;
