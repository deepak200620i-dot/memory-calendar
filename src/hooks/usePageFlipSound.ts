import { useCallback, useRef, useEffect } from 'react';

export const usePageFlipSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Initialize audio context on first user interaction
    const initAudio = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      document.removeEventListener('click', initAudio);
    };
    document.addEventListener('click', initAudio);
    return () => document.removeEventListener('click', initAudio);
  }, []);

  const playFlipSound = useCallback(() => {
    const ctx = audioContextRef.current;
    if (!ctx) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    const audioContext = audioContextRef.current!;
    
    // Resume context if suspended
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    // Create a page flip sound using synthesis
    const now = audioContext.currentTime;
    
    // Noise for paper rustle
    const bufferSize = audioContext.sampleRate * 0.15;
    const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      // Filtered noise that sounds like paper
      noiseData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
    }
    
    const noiseSource = audioContext.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    
    // Filter to make it sound more like paper
    const filter = audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 3000;
    filter.Q.value = 0.5;
    
    // Gain envelope
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0.3, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    
    noiseSource.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    noiseSource.start(now);
    noiseSource.stop(now + 0.15);
    
    // Add a subtle "thump" for the page landing
    setTimeout(() => {
      const thumpOsc = audioContext.createOscillator();
      const thumpGain = audioContext.createGain();
      
      thumpOsc.type = 'sine';
      thumpOsc.frequency.setValueAtTime(80, audioContext.currentTime);
      thumpOsc.frequency.exponentialRampToValueAtTime(40, audioContext.currentTime + 0.05);
      
      thumpGain.gain.setValueAtTime(0.15, audioContext.currentTime);
      thumpGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
      
      thumpOsc.connect(thumpGain);
      thumpGain.connect(audioContext.destination);
      
      thumpOsc.start(audioContext.currentTime);
      thumpOsc.stop(audioContext.currentTime + 0.05);
    }, 100);
  }, []);

  return { playFlipSound };
};
