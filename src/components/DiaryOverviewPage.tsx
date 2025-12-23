import { Heart, Book, Sun, Snowflake, Leaf, Flower2 } from 'lucide-react';

interface DiaryOverviewPageProps {
  isActive: boolean;
}

export const DiaryOverviewPage = ({ isActive }: DiaryOverviewPageProps) => {
  const seasonHighlights = [
    { icon: Snowflake, label: 'Winter', months: 'Dec - Feb', color: 'text-blue-500' },
    { icon: Flower2, label: 'Spring', months: 'Mar - May', color: 'text-emerald-500' },
    { icon: Sun, label: 'Summer', months: 'Jun - Aug', color: 'text-amber-500' },
    { icon: Leaf, label: 'Fall', months: 'Sep - Nov', color: 'text-orange-500' },
  ];

  return (
    <div className="flex w-full h-full bg-diary-paper">
      {/* Left Page - Title & Introduction */}
      <div className="w-1/2 paper-left relative p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col border-r border-diary-ink/10 overflow-y-auto">
        <div className="relative z-20 flex-1 flex flex-col">
          {/* Decorative header */}
          <div className="text-center mb-4 sm:mb-6">
            <Book className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-diary-gold mb-2" />
            <h1 className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-diary-ink mb-2">
              Our Year Together
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-8 sm:w-12 bg-diary-gold/50"></div>
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-accent" />
              <div className="h-px w-8 sm:w-12 bg-diary-gold/50"></div>
            </div>
          </div>
          
          {/* Introduction text */}
          <div className="bg-amber-50/50 rounded-lg p-3 sm:p-4 md:p-5 mb-4 sm:mb-6">
            <p className="font-serif text-diary-ink/80 text-xs sm:text-sm md:text-base leading-relaxed first-letter:text-xl first-letter:sm:text-2xl first-letter:md:text-3xl first-letter:font-script first-letter:float-left first-letter:mr-1 first-letter:text-diary-gold">
              This diary holds the story of us — every laugh, every adventure, every quiet moment that made this year unforgettable. Flip through these pages and relive the memories we created together, month by month, season by season.
            </p>
          </div>
          
          {/* Dedication */}
          <div className="text-center mt-auto">
            <p className="font-script text-lg sm:text-xl md:text-2xl text-diary-ink/70 italic">
              "To us, and the beautiful journey we share"
            </p>
          </div>
        </div>
        
        {/* Page label */}
        <div className="text-center text-diary-ink/40 text-[8px] sm:text-[10px] md:text-xs font-serif mt-2">
          INTRODUCTION
        </div>
      </div>
      
      {/* Right Page - Seasons Overview */}
      <div className="w-1/2 paper-right relative p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col overflow-y-auto">
        <div className="relative z-20 flex-1 flex flex-col">
          <h2 className="font-serif text-diary-ink/80 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 md:mb-6 text-center">
            Four Seasons of Love
          </h2>
          
          {/* Season cards */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 flex-1">
            {seasonHighlights.map((season) => (
              <div 
                key={season.label}
                className="bg-white/50 rounded-lg p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center text-center border border-diary-ink/5 hover:border-diary-gold/30 transition-colors"
              >
                <season.icon className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${season.color} mb-1 sm:mb-2`} />
                <h3 className="font-script text-sm sm:text-base md:text-lg text-diary-ink">
                  {season.label}
                </h3>
                <p className="text-[8px] sm:text-[10px] md:text-xs text-diary-ink/60 font-serif">
                  {season.months}
                </p>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-3 sm:mt-4 md:mt-6">
            <p className="text-[10px] sm:text-xs md:text-sm text-diary-ink/60 font-serif">
              Swipe or click to begin our journey →
            </p>
          </div>
        </div>
        
        {/* Decorative corners */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-t-2 border-r-2 border-diary-gold/30 opacity-50"></div>
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-b-2 border-l-2 border-diary-gold/30 opacity-50"></div>
        
        {/* Page label */}
        <div className="text-center text-diary-ink/40 text-[8px] sm:text-[10px] md:text-xs font-serif mt-2">
          OVERVIEW
        </div>
      </div>
    </div>
  );
};
