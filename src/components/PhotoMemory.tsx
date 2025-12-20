import { useState } from 'react';

interface PhotoMemoryProps {
  index: number;
  season: 'winter' | 'spring' | 'summer' | 'fall';
  rotation?: number;
}

const seasonGradients = {
  winter: 'from-winter-primary/30 to-winter-secondary/30',
  spring: 'from-spring-primary/30 to-spring-accent/30',
  summer: 'from-summer-primary/30 to-summer-accent/30',
  fall: 'from-fall-primary/30 to-fall-secondary/30',
};

const seasonIcons = {
  winter: ['❄️', '☃️', '🎿', '🧣'],
  spring: ['🌸', '🌷', '🦋', '🌈'],
  summer: ['☀️', '🏖️', '🌊', '🍉'],
  fall: ['🍁', '🎃', '🍂', '🌰'],
};

export const PhotoMemory = ({ index, season, rotation = 0 }: PhotoMemoryProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const icons = seasonIcons[season];
  const icon = icons[index % icons.length];
  
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
      <div 
        className={`aspect-square w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-br ${seasonGradients[season]} flex items-center justify-center rounded-sm`}
      >
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">{icon}</span>
      </div>
      <p className="text-center text-[8px] sm:text-[10px] md:text-xs text-diary-ink/70 mt-1 sm:mt-2 font-script">
        Memory #{index + 1}
      </p>
    </div>
  );
};
