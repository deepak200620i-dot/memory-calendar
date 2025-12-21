import { Heart } from 'lucide-react';

interface DiaryBackCoverProps {
  isVisible: boolean;
}

export const DiaryBackCover = ({ isVisible }: DiaryBackCoverProps) => {
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      <div className="w-full h-full diary-cover rounded-lg sm:rounded-xl flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 relative">
        {/* Spine */}
        <div className="diary-spine absolute right-0 top-0 bottom-0 w-3 sm:w-4 md:w-6"></div>
        
        {/* Gold corner accents - mirrored for back */}
        <div className="absolute top-2 left-2 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-diary-gold/50 rounded-tl-sm"></div>
        <div className="absolute top-2 right-6 sm:right-8 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-diary-gold/50 rounded-tr-sm"></div>
        <div className="absolute bottom-2 left-2 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-diary-gold/50 rounded-bl-sm"></div>
        <div className="absolute bottom-2 right-6 sm:right-8 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-diary-gold/50 rounded-br-sm"></div>
        
        {/* Back cover content area */}
        <div className="bg-diary-paper/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 max-w-md w-full mx-4 text-center border border-diary-gold/20">
          <Heart className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4 text-diary-gold fill-diary-gold/30" />
          
          <h3 className="font-script text-xl sm:text-2xl md:text-3xl gold-text mb-3 sm:mb-4">
            A Note for You
          </h3>
          
          <div className="space-y-3 sm:space-y-4 font-serif text-diary-paper/90 text-sm sm:text-base leading-relaxed">
            <p>
              This diary is a small collection of our journey through the year — every laugh, every adventure, every quiet moment.
            </p>
            <p>
              You are my favorite chapter in life's story, and I can't wait to write many more with you.
            </p>
            <p className="font-script text-lg sm:text-xl md:text-2xl gold-text pt-2 sm:pt-4">
              With all my love,
            </p>
            <p className="font-script text-base sm:text-lg text-diary-paper/80">
              Forever yours ❤️
            </p>
          </div>
        </div>
        
        {/* Hint to close */}
        <p className="absolute bottom-4 text-diary-paper/50 text-xs sm:text-sm font-serif">
          Swipe right to go back
        </p>
      </div>
    </div>
  );
};
