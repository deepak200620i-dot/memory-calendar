import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Hand, ArrowDown, X } from 'lucide-react';

interface OnboardingTutorialProps {
  onComplete: () => void;
}

export const OnboardingTutorial = ({ onComplete }: OnboardingTutorialProps) => {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const steps = [
    {
      icon: <Hand className="w-12 h-12 sm:w-16 sm:h-16 text-diary-gold animate-pulse" />,
      title: "Tap to Open",
      description: "Tap on the diary cover to open it and begin your journey"
    },
    {
      icon: (
        <div className="flex items-center gap-2">
          <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 text-diary-gold animate-bounce-left" />
          <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 text-diary-gold animate-bounce-right" />
        </div>
      ),
      title: "Swipe to Flip Pages",
      description: "Swipe left or right to turn the pages and explore each month"
    },
    {
      icon: <ArrowDown className="w-12 h-12 sm:w-16 sm:h-16 text-diary-gold animate-bounce" />,
      title: "Scroll to See More",
      description: "Scroll down on each page to see all the memories and photos"
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }
  };

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <button
        onClick={handleSkip}
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Skip tutorial"
      >
        <X className="w-6 h-6" />
      </button>
      
      <div className="text-center px-6 max-w-md">
        {/* Step indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === step ? 'bg-diary-gold w-6' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          {steps[step].icon}
        </div>
        
        {/* Title */}
        <h2 className="font-script text-2xl sm:text-3xl text-diary-gold mb-3">
          {steps[step].title}
        </h2>
        
        {/* Description */}
        <p className="font-serif text-white/80 text-sm sm:text-base mb-8">
          {steps[step].description}
        </p>
        
        {/* Action button */}
        <button
          onClick={handleNext}
          className="px-8 py-3 bg-diary-gold/20 border border-diary-gold text-diary-gold rounded-full font-serif hover:bg-diary-gold/30 transition-all"
        >
          {step < steps.length - 1 ? 'Next' : "Let's Begin"}
        </button>
        
        {/* Skip link */}
        <button
          onClick={handleSkip}
          className="block mx-auto mt-4 text-white/50 text-sm hover:text-white/70 transition-colors"
        >
          Skip tutorial
        </button>
      </div>
    </div>
  );
};
