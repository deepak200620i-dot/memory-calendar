import { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { diaryContent } from '@/data/diaryContent';
import { DiaryPage } from './DiaryPage';

export const Diary = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);

  const goToPage = useCallback((pageIndex: number) => {
    if (isFlipping || pageIndex === currentPage) return;
    if (pageIndex < 0 || pageIndex >= diaryContent.length) return;
    
    setFlipDirection(pageIndex > currentPage ? 'next' : 'prev');
    setIsFlipping(true);
    
    setTimeout(() => {
      setCurrentPage(pageIndex);
      setIsFlipping(false);
      setFlipDirection(null);
    }, 600);
  }, [currentPage, isFlipping]);

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  const currentMonth = diaryContent[currentPage];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8 animate-fade-in">
        <h1 className="font-script text-3xl sm:text-4xl md:text-5xl gold-text mb-2">
          Our Year Together
        </h1>
        <p className="font-serif text-foreground/60 text-sm sm:text-base flex items-center justify-center gap-2">
          A journey through 12 months of love <Heart className="w-4 h-4 text-accent fill-accent" />
        </p>
      </div>
      
      {/* Diary Container */}
      <div className="relative perspective-1000">
        {/* Diary Book */}
        <div 
          className="diary-cover rounded-lg sm:rounded-xl overflow-hidden relative"
          style={{
            width: 'min(90vw, 900px)',
            height: 'min(70vh, 600px)',
          }}
        >
          {/* Spine */}
          <div className="diary-spine absolute left-0 top-0 bottom-0 w-4 sm:w-6 z-30"></div>
          
          {/* Gold corner accents */}
          <div className="absolute top-2 left-8 w-8 h-8 border-t-2 border-l-2 border-diary-gold/50 rounded-tl-sm z-30"></div>
          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-diary-gold/50 rounded-tr-sm z-30"></div>
          <div className="absolute bottom-2 left-8 w-8 h-8 border-b-2 border-l-2 border-diary-gold/50 rounded-bl-sm z-30"></div>
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-diary-gold/50 rounded-br-sm z-30"></div>
          
          {/* Pages Container */}
          <div className="absolute inset-2 sm:inset-3 left-6 sm:left-8 overflow-hidden rounded-lg">
            {/* Current Page with flip animation */}
            <div 
              className={`absolute inset-0 preserve-3d transition-transform duration-500 ease-in-out ${
                isFlipping && flipDirection === 'next' ? 'animate-[flip-out_0.6s_ease-in-out]' : ''
              } ${
                isFlipping && flipDirection === 'prev' ? 'animate-[flip-in_0.6s_ease-in-out]' : ''
              }`}
              style={{
                transform: isFlipping 
                  ? flipDirection === 'next' 
                    ? 'rotateY(-15deg) scale(0.98)' 
                    : 'rotateY(15deg) scale(0.98)'
                  : 'rotateY(0) scale(1)',
                transformOrigin: flipDirection === 'next' ? 'left center' : 'right center',
              }}
            >
              <DiaryPage data={currentMonth} isActive={true} />
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0 || isFlipping}
            className="absolute left-8 sm:left-10 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3 rounded-full bg-diary-paper/90 text-diary-ink shadow-lg hover:bg-diary-paper hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button
            onClick={nextPage}
            disabled={currentPage === diaryContent.length - 1 || isFlipping}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3 rounded-full bg-diary-paper/90 text-diary-ink shadow-lg hover:bg-diary-paper hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Next month"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="flex items-center gap-2 mt-6 sm:mt-8">
        {diaryContent.map((month, index) => (
          <button
            key={month.month}
            onClick={() => goToPage(index)}
            className={`nav-dot ${index === currentPage ? 'active' : ''}`}
            aria-label={`Go to ${month.month}`}
            title={month.month}
          />
        ))}
      </div>
      
      {/* Current Month Label */}
      <p className="font-script text-xl sm:text-2xl gold-text mt-4">
        {currentMonth.month}
      </p>
    </div>
  );
};
