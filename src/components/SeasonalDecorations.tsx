import { useMemo } from 'react';

interface SeasonalDecorationsProps {
  season: 'winter' | 'spring' | 'summer' | 'fall';
}

const Snowflake = ({ style }: { style: React.CSSProperties }) => (
  <div className="snowflake absolute text-winter-accent pointer-events-none" style={style}>
    ❄
  </div>
);

const Leaf = ({ style, type }: { style: React.CSSProperties; type: 'maple' | 'oak' }) => (
  <div className="leaf absolute pointer-events-none" style={style}>
    {type === 'maple' ? '🍁' : '🍂'}
  </div>
);

const Flower = ({ style }: { style: React.CSSProperties }) => (
  <div className="flower absolute pointer-events-none" style={style}>
    🌸
  </div>
);

const Sunray = ({ style }: { style: React.CSSProperties }) => (
  <div 
    className="sunray absolute w-1 bg-gradient-to-b from-summer-primary/40 to-transparent pointer-events-none rounded-full" 
    style={style}
  />
);

export const SeasonalDecorations = ({ season }: SeasonalDecorationsProps) => {
  const decorations = useMemo(() => {
    const items: React.ReactNode[] = [];
    
    if (season === 'winter') {
      for (let i = 0; i < 15; i++) {
        items.push(
          <Snowflake 
            key={`snow-${i}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 20}%`,
              fontSize: `${12 + Math.random() * 12}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          />
        );
      }
    } else if (season === 'spring') {
      for (let i = 0; i < 12; i++) {
        items.push(
          <Flower 
            key={`flower-${i}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 30}%`,
              fontSize: `${14 + Math.random() * 10}px`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        );
      }
    } else if (season === 'summer') {
      for (let i = 0; i < 8; i++) {
        items.push(
          <Sunray 
            key={`sun-${i}`}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: '0',
              height: `${50 + Math.random() * 100}px`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        );
      }
    } else if (season === 'fall') {
      for (let i = 0; i < 12; i++) {
        items.push(
          <Leaf 
            key={`leaf-${i}`}
            type={Math.random() > 0.5 ? 'maple' : 'oak'}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 25}%`,
              fontSize: `${14 + Math.random() * 12}px`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        );
      }
    }
    
    return items;
  }, [season]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {decorations}
    </div>
  );
};
