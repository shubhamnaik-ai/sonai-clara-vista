
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Start with initial progress
    setProgress(10);
    
    // Simulate resource loading
    const timer1 = setTimeout(() => setProgress(25), 500);
    const timer2 = setTimeout(() => setProgress(40), 1000);
    const timer3 = setTimeout(() => setProgress(60), 1500);
    const timer4 = setTimeout(() => setProgress(75), 2000);
    const timer5 = setTimeout(() => setProgress(90), 2500);
    
    // Final loading complete
    const timer6 = setTimeout(() => {
      setProgress(100);
      setTimeout(onLoadingComplete, 500); // Small delay before transition
    }, 3000);
    
    return () => {
      // Clear all timers on unmount
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, [onLoadingComplete]);
  
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500">
      <div className="relative w-48 h-48 mb-8">
        <img 
          src="/lovable-uploads/b069e163-9f57-41f8-82e1-550ae81c592a.png" 
          alt="Sonai Realty Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="absolute bottom-8 right-8">
        <div className="w-16 h-16 relative">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="transparent"
              stroke="#e6e6e6"
              strokeWidth="8"
            />
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="transparent"
              stroke="#1A9E96"
              strokeWidth="8"
              strokeDasharray="282.7"
              strokeDashoffset={282.7 - (282.7 * progress) / 100}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-charcoal font-medium text-lg">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
