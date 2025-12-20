import { RotateCw } from 'lucide-react';

export const OrientationPrompt = () => {
  return (
    <div className="fixed inset-0 z-50 bg-diary-leather flex flex-col items-center justify-center p-8 text-center md:hidden landscape:hidden">
      <div className="animate-bounce mb-6">
        <RotateCw className="w-16 h-16 text-diary-gold" />
      </div>
      <h2 className="font-script text-2xl text-diary-gold mb-4">
        Rotate Your Phone
      </h2>
      <p className="font-serif text-diary-paper/80 text-sm max-w-xs">
        Please turn your phone sideways for the best experience viewing our memory diary
      </p>
      <div className="mt-8 flex items-center gap-3">
        <div className="w-8 h-12 border-2 border-diary-gold/50 rounded-md relative">
          <div className="absolute inset-1 bg-diary-gold/20 rounded-sm"></div>
        </div>
        <span className="text-diary-gold">→</span>
        <div className="w-12 h-8 border-2 border-diary-gold rounded-md relative">
          <div className="absolute inset-1 bg-diary-gold/30 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};
