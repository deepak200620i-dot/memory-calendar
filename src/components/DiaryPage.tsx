import { MonthData, getSeasonClass } from '@/data/diaryContent';
import { SeasonalDecorations } from './SeasonalDecorations';
import { PhotoMemory } from './PhotoMemory';

interface DiaryPageProps {
  data: MonthData;
  isActive: boolean;
}

const seasonColors = {
  winter: {
    title: 'text-blue-600',
    accent: 'border-blue-200',
    bg: 'bg-blue-50/30'
  },
  spring: {
    title: 'text-emerald-600',
    accent: 'border-emerald-200',
    bg: 'bg-emerald-50/30'
  },
  summer: {
    title: 'text-amber-600',
    accent: 'border-amber-200',
    bg: 'bg-amber-50/30'
  },
  fall: {
    title: 'text-orange-600',
    accent: 'border-orange-200',
    bg: 'bg-orange-50/30'
  }
};

export const DiaryPage = ({ data, isActive }: DiaryPageProps) => {
  const colors = seasonColors[data.season];
  
  return (
    <div className={`flex w-full h-full ${getSeasonClass(data.season)}`}>
      {/* Left Page - Memories & Photos */}
      <div className="w-1/2 paper-left relative p-2 sm:p-4 md:p-6 lg:p-8 flex flex-col border-r border-diary-ink/10 overflow-y-auto overflow-x-hidden">
        <SeasonalDecorations season={data.season} />
        
        <div className="relative z-20 flex-shrink-0">
          <h2 className={`font-script text-xl sm:text-2xl md:text-3xl lg:text-4xl ${colors.title} mb-1 sm:mb-2`}>
            {data.month}
          </h2>
          <div className={`h-0.5 w-12 sm:w-16 ${colors.bg} mb-2 sm:mb-4 md:mb-6`}></div>
          
          <h3 className="font-serif text-diary-ink/80 text-[10px] sm:text-xs md:text-sm uppercase tracking-widest mb-2 sm:mb-3 md:mb-4">
            Memories
          </h3>
          
          <ul className="space-y-1 sm:space-y-2 mb-2 sm:mb-4 md:mb-6">
            {data.memories.map((memory, i) => (
              <li 
                key={i}
                className="flex items-start gap-1.5 sm:gap-2 text-diary-ink/70 text-[10px] sm:text-xs md:text-sm font-serif leading-tight"
              >
                <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${colors.bg} flex-shrink-0 mt-1`}></span>
                <span className="line-clamp-2">{memory}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Photo Grid */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 items-center justify-center relative z-20 mt-1 sm:mt-2 pb-4 sm:pb-2">
          {data.photos.map((photoUrl, i) => (
            <PhotoMemory 
              key={i} 
              index={i} 
              season={data.season}
              photoUrl={photoUrl}
              rotation={Math.random() * 6 - 3}
            />
          ))}
        </div>
        
        {/* Page number */}
        <div className="text-center text-diary-ink/40 text-[8px] sm:text-[10px] md:text-xs font-serif mt-auto pt-1 sm:pt-2">
          {data.month.substring(0, 3).toUpperCase()}
        </div>
      </div>
      
      {/* Right Page - Story */}
      <div className="w-1/2 paper-right relative p-2 sm:p-4 md:p-6 lg:p-8 flex flex-col overflow-hidden">
        <SeasonalDecorations season={data.season} />
        
        <div className="relative z-20 flex-1 flex flex-col min-h-0">
          <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-script ${colors.title} opacity-20 absolute -top-1 sm:-top-2 -left-1 sm:-left-2`}>
            "
          </div>
          
          <h3 className="font-serif text-diary-ink/80 text-[10px] sm:text-xs md:text-sm uppercase tracking-widest mb-2 sm:mb-4 md:mb-6 pt-4 sm:pt-6">
            Our Story
          </h3>
          
          <div className={`${colors.bg} rounded-lg p-2 sm:p-3 md:p-4 lg:p-6 flex-1 overflow-auto`}>
            <p className="font-serif text-diary-ink leading-relaxed text-[10px] sm:text-xs md:text-sm lg:text-base first-letter:text-lg first-letter:sm:text-xl first-letter:md:text-2xl first-letter:font-script first-letter:float-left first-letter:mr-1 first-letter:sm:mr-2">
              {data.story}
            </p>
          </div>
          
          <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-script ${colors.title} opacity-20 absolute bottom-8 sm:bottom-12 md:bottom-16 right-2 sm:right-4 rotate-180`}>
            "
          </div>
        </div>
        
        {/* Decorative corner */}
        <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-t-2 border-r-2 ${colors.accent} opacity-50`}></div>
        <div className={`absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-b-2 border-l-2 ${colors.accent} opacity-50`}></div>
        
        {/* Page number */}
        <div className="absolute bottom-1 sm:bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 text-diary-ink/40 text-[8px] sm:text-[10px] md:text-xs font-serif">
          {data.month.substring(0, 3).toUpperCase()}
        </div>
      </div>
    </div>
  );
};
