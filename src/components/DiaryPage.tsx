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
      <div className="w-1/2 paper-left relative p-4 sm:p-6 md:p-8 flex flex-col border-r border-diary-ink/10">
        <SeasonalDecorations season={data.season} />
        
        <div className="relative z-20">
          <h2 className={`font-script text-2xl sm:text-3xl md:text-4xl ${colors.title} mb-2`}>
            {data.month}
          </h2>
          <div className={`h-0.5 w-16 ${colors.bg} mb-4 sm:mb-6`}></div>
          
          <h3 className="font-serif text-diary-ink/80 text-sm uppercase tracking-widest mb-3 sm:mb-4">
            Memories
          </h3>
          
          <ul className="space-y-2 mb-6">
            {data.memories.map((memory, i) => (
              <li 
                key={i}
                className="flex items-center gap-2 text-diary-ink/70 text-sm font-serif"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${colors.bg}`}></span>
                {memory}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Photo Grid */}
        <div className="flex-1 flex flex-wrap gap-3 sm:gap-4 items-center justify-center relative z-20 mt-2">
          {Array.from({ length: data.photoPlaceholders }).map((_, i) => (
            <PhotoMemory 
              key={i} 
              index={i} 
              season={data.season}
              rotation={Math.random() * 6 - 3}
            />
          ))}
        </div>
        
        {/* Page number */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-diary-ink/40 text-xs font-serif">
          {data.month.substring(0, 3).toUpperCase()}
        </div>
      </div>
      
      {/* Right Page - Story */}
      <div className="w-1/2 paper-right relative p-4 sm:p-6 md:p-8 flex flex-col">
        <SeasonalDecorations season={data.season} />
        
        <div className="relative z-20">
          <div className={`text-5xl sm:text-6xl font-script ${colors.title} opacity-20 absolute -top-2 -left-2`}>
            "
          </div>
          
          <h3 className="font-serif text-diary-ink/80 text-sm uppercase tracking-widest mb-4 sm:mb-6 pt-6">
            Our Story
          </h3>
          
          <div className={`${colors.bg} rounded-lg p-4 sm:p-6`}>
            <p className="font-serif text-diary-ink leading-relaxed text-sm sm:text-base md:text-lg first-letter:text-2xl first-letter:font-script first-letter:float-left first-letter:mr-2">
              {data.story}
            </p>
          </div>
          
          <div className={`text-5xl sm:text-6xl font-script ${colors.title} opacity-20 absolute bottom-16 right-4 rotate-180`}>
            "
          </div>
        </div>
        
        {/* Decorative corner */}
        <div className={`absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 ${colors.accent} opacity-50`}></div>
        <div className={`absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 ${colors.accent} opacity-50`}></div>
        
        {/* Page number */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-diary-ink/40 text-xs font-serif">
          {data.month.substring(0, 3).toUpperCase()}
        </div>
      </div>
    </div>
  );
};
