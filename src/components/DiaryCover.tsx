import { Heart } from 'lucide-react';

interface DiaryCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const DiaryCover = ({ isOpen, onOpen }: DiaryCoverProps) => {
  return (
    <div 
      className={`absolute inset-0 z-50 cursor-pointer transition-all duration-1000 ease-in-out preserve-3d ${
        isOpen ? 'pointer-events-none' : ''
      }`}
      style={{
        transformOrigin: 'left center',
        transform: isOpen ? 'rotateY(-160deg)' : 'rotateY(0deg)',
      }}
      onClick={!isOpen ? onOpen : undefined}
    >
      {/* Front Cover */}
      <div 
        className="absolute inset-0 backface-hidden diary-cover rounded-lg sm:rounded-xl overflow-hidden"
        style={{ backfaceVisibility: 'hidden' }}
      >
        {/* Leather texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-diary-leather via-diary-leather-dark to-diary-leather opacity-100"></div>
        
        {/* Spine */}
        <div className="diary-spine absolute left-0 top-0 bottom-0 w-6 sm:w-8 z-30"></div>
        
        {/* Gold corner accents */}
        <div className="absolute top-4 left-10 w-12 h-12 border-t-2 border-l-2 border-diary-gold rounded-tl-sm"></div>
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-diary-gold rounded-tr-sm"></div>
        <div className="absolute bottom-4 left-10 w-12 h-12 border-b-2 border-l-2 border-diary-gold rounded-bl-sm"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-diary-gold rounded-br-sm"></div>
        
        {/* Center decoration */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <div className="w-24 h-0.5 bg-diary-gold/60 mb-6"></div>
          <Heart className="w-10 h-10 text-diary-gold mb-4 fill-diary-gold/30" />
          <h1 className="font-script text-3xl sm:text-4xl md:text-5xl gold-text mb-3">
            Our Year Together
          </h1>
          <p className="font-serif text-diary-gold/70 text-sm sm:text-base mb-2">
            2024
          </p>
          <div className="w-24 h-0.5 bg-diary-gold/60 mt-6"></div>
          
          <p className="font-serif text-diary-gold/50 text-xs mt-8 animate-pulse">
            Click to open
          </p>
        </div>
        
        {/* Embossed pattern */}
        <div className="absolute inset-8 border border-diary-gold/20 rounded-lg pointer-events-none"></div>
      </div>
      
      {/* Back of cover (visible when opening) */}
      <div 
        className="absolute inset-0 bg-diary-paper rounded-l-lg"
        style={{ 
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)'
        }}
      >
        <div className="absolute inset-0 paper-texture opacity-50"></div>
      </div>
    </div>
  );
};
