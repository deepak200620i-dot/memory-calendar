import { useState, useCallback, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { diaryContent } from '@/data/diaryContent';
import { DiaryPage } from './DiaryPage';
import { DiaryCover } from './DiaryCover';
import { OrientationPrompt } from './OrientationPrompt';
import { usePageFlipSound } from '@/hooks/usePageFlipSound';

export const Diary = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);
  const [flipProgress, setFlipProgress] = useState(0);
  const { playFlipSound } = usePageFlipSound();
  
  // Swipe handling
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const openDiary = useCallback(() => {
    playFlipSound();
    setIsOpen(true);
  }, [playFlipSound]);

  const closeDiary = useCallback(() => {
    playFlipSound();
    setIsOpen(false);
    setCurrentPage(0);
  }, [playFlipSound]);

  const goToPage = useCallback((pageIndex: number) => {
    if (isFlipping || pageIndex === currentPage) return;
    if (pageIndex < 0) return;
    
    // If trying to go past the last page, close the diary
    if (pageIndex >= diaryContent.length) {
      closeDiary();
      return;
    }
    
    setFlipDirection(pageIndex > currentPage ? 'next' : 'prev');
    setIsFlipping(true);
    playFlipSound();
    
    // Animate flip progress
    let progress = 0;
    const animate = () => {
      progress += 0.05;
      setFlipProgress(Math.min(progress, 1));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
    
    setTimeout(() => {
      setCurrentPage(pageIndex);
      setIsFlipping(false);
      setFlipDirection(null);
      setFlipProgress(0);
    }, 600);
  }, [currentPage, isFlipping, closeDiary, playFlipSound]);

  const nextPage = useCallback(() => goToPage(currentPage + 1), [currentPage, goToPage]);
  const prevPage = useCallback(() => {
    if (currentPage === 0) {
      closeDiary();
    } else {
      goToPage(currentPage - 1);
    }
  }, [currentPage, goToPage, closeDiary]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isOpen || isFlipping) return;
    
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    
    if (swipeDistance > minSwipeDistance) {
      // Swiped left - next page
      nextPage();
    } else if (swipeDistance < -minSwipeDistance) {
      // Swiped right - previous page
      prevPage();
    }
  };

  const currentMonth = diaryContent[currentPage];
  const nextMonth = currentPage < diaryContent.length - 1 ? diaryContent[currentPage + 1] : null;
  const prevMonth = currentPage > 0 ? diaryContent[currentPage - 1] : null;

  return (
    <>
      <OrientationPrompt />
      
      <div className="flex flex-col items-center justify-center min-h-screen p-2 sm:p-4 md:p-8 landscape:p-2">
        {/* Title - only show when diary is closed */}
        <div className={`text-center mb-4 sm:mb-6 md:mb-8 transition-opacity duration-500 ${isOpen ? 'opacity-0 pointer-events-none absolute' : 'opacity-100'}`}>
          <p className="font-serif text-foreground/60 text-sm sm:text-base flex items-center justify-center gap-2">
            A journey through 12 months of love <Heart className="w-4 h-4 text-accent fill-accent" />
          </p>
        </div>
        
        {/* Diary Container */}
        <div className="relative perspective-2000 w-full h-full flex items-center justify-center landscape:flex-1">
          {/* Diary Book */}
          <div 
            ref={containerRef}
            className="diary-cover rounded-lg sm:rounded-xl overflow-hidden relative landscape:w-[95vw] landscape:h-[85vh] portrait:w-[90vw] portrait:h-[60vh] sm:w-[min(90vw,900px)] sm:h-[min(70vh,600px)]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Cover */}
            <DiaryCover isOpen={isOpen} onOpen={openDiary} />
            
            {/* Spine */}
            <div className="diary-spine absolute left-0 top-0 bottom-0 w-3 sm:w-4 md:w-6 z-30"></div>
            
            {/* Gold corner accents */}
            <div className="absolute top-2 left-6 sm:left-8 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-diary-gold/50 rounded-tl-sm z-30"></div>
            <div className="absolute top-2 right-2 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-diary-gold/50 rounded-tr-sm z-30"></div>
            <div className="absolute bottom-2 left-6 sm:left-8 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-diary-gold/50 rounded-bl-sm z-30"></div>
            <div className="absolute bottom-2 right-2 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-diary-gold/50 rounded-br-sm z-30"></div>
            
            {/* Pages Container */}
            <div className={`absolute inset-1.5 sm:inset-2 md:inset-3 left-4 sm:left-6 md:left-8 overflow-hidden rounded-lg transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              {/* Previous page (visible during backward flip) */}
              {prevMonth && isFlipping && flipDirection === 'prev' && (
                <div className="absolute inset-0 z-10">
                  <DiaryPage data={prevMonth} isActive={false} />
                </div>
              )}
              
              {/* Next page (visible under current during forward flip) */}
              {nextMonth && isFlipping && flipDirection === 'next' && (
                <div className="absolute inset-0 z-10">
                  <DiaryPage data={nextMonth} isActive={false} />
                </div>
              )}
              
              {/* Current Page with realistic flip animation */}
              <div 
                className={`absolute inset-0 z-20 preserve-3d`}
                style={{
                  transformOrigin: flipDirection === 'next' ? 'left center' : 'right center',
                  transform: isFlipping 
                    ? flipDirection === 'next'
                      ? `rotateY(${-flipProgress * 180}deg)`
                      : `rotateY(${flipProgress * 180}deg)`
                    : 'rotateY(0deg)',
                  transition: isFlipping ? 'none' : 'transform 0.3s ease-out',
                }}
              >
                {/* Front of page */}
                <div 
                  className="absolute inset-0 backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <DiaryPage data={currentMonth} isActive={!isFlipping} />
                </div>
                
                {/* Back of page (shows during flip) */}
                <div 
                  className="absolute inset-0 bg-diary-paper backface-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="absolute inset-0 paper-texture opacity-30"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-diary-ink/5 to-transparent"></div>
                </div>
              </div>
              
              {/* Page shadow during flip */}
              {isFlipping && (
                <div 
                  className="absolute inset-0 pointer-events-none z-30"
                  style={{
                    background: flipDirection === 'next'
                      ? `linear-gradient(to right, rgba(0,0,0,${0.2 * flipProgress}) 0%, transparent ${30 + flipProgress * 20}%)`
                      : `linear-gradient(to left, rgba(0,0,0,${0.2 * flipProgress}) 0%, transparent ${30 + flipProgress * 20}%)`,
                  }}
                />
              )}
            </div>
            
            {/* Navigation Arrows - only show when open, hide on mobile */}
            {isOpen && (
              <>
                <button
                  onClick={prevPage}
                  disabled={isFlipping}
                  className="absolute left-5 sm:left-8 md:left-10 top-1/2 -translate-y-1/2 z-40 p-1.5 sm:p-2 md:p-3 rounded-full bg-diary-paper/90 text-diary-ink shadow-lg hover:bg-diary-paper hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 hidden sm:flex"
                  aria-label="Previous month"
                  title={currentPage === 0 ? "Close diary" : "Previous month"}
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>
                
                <button
                  onClick={nextPage}
                  disabled={isFlipping}
                  className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 z-40 p-1.5 sm:p-2 md:p-3 rounded-full bg-diary-paper/90 text-diary-ink shadow-lg hover:bg-diary-paper hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 hidden sm:flex"
                  aria-label={currentPage === diaryContent.length - 1 ? "Close diary" : "Next month"}
                  title={currentPage === diaryContent.length - 1 ? "Close diary" : "Next month"}
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>
              </>
            )}
            
            {/* Swipe indicator for mobile */}
            {isOpen && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 text-diary-paper/70 text-xs sm:hidden">
                <ChevronLeft className="w-3 h-3" />
                <span className="font-serif">Swipe to flip</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            )}
          </div>
        </div>
        
        {/* Navigation Dots - only show when open */}
        {isOpen && (
          <div className="flex items-center gap-1.5 sm:gap-2 mt-3 sm:mt-6 md:mt-8 animate-fade-in">
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
        )}
        
        {/* Current Month Label - only show when open */}
        {isOpen && (
          <p className="font-script text-lg sm:text-xl md:text-2xl gold-text mt-2 sm:mt-4 animate-fade-in">
            {currentMonth.month}
          </p>
        )}
      </div>
    </>
  );
};
