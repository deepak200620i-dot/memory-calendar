import { useState } from 'react';

interface PhotoMemoryProps {
  index: number;
  season: 'winter' | 'spring' | 'summer' | 'fall';
  photoUrl: string;
  rotation?: number;
}

export const PhotoMemory = ({ index, season, photoUrl, rotation = 0 }: PhotoMemoryProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const baseRotation = (index % 2 === 0 ? -3 : 3) + rotation;
  const hoverRotation = 0;

  return (
    <div
      className="polaroid cursor-pointer"
      style={{
        transform: `rotate(${isHovered ? hoverRotation : baseRotation}deg)`,
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square w-16 sm:w-16 md:w-20 lg:w-24 rounded-sm overflow-hidden bg-gray-100">
        {!imageError ? (
          <img 
            src={photoUrl} 
            alt={`Memory ${index + 1}`}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
            Photo
          </div>
        )}
      </div>
      <p className="text-center text-[8px] sm:text-[10px] md:text-xs text-diary-ink/70 mt-1 font-script">
        Memory #{index + 1}
      </p>
    </div>
  );
};
