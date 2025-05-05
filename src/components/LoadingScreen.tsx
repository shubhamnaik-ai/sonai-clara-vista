
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
    
    // Simulate resource loading with more gradual progression
    const timer1 = setTimeout(() => setProgress(25), 500);
    const timer2 = setTimeout(() => setProgress(40), 1000);
    const timer3 = setTimeout(() => setProgress(55), 1500);
    const timer4 = setTimeout(() => setProgress(70), 2000);
    const timer5 = setTimeout(() => setProgress(85), 2500);
    const timer6 = setTimeout(() => setProgress(95), 3000);
    
    // Final loading complete
    const timer7 = setTimeout(() => {
      setProgress(100);
      setTimeout(onLoadingComplete, 500); // Small delay before transition
    }, 3500);
    
    return () => {
      // Clear all timers on unmount
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }, [onLoadingComplete]);
  
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500">
      <div className="relative w-48 h-48 mb-4">
        {/* Logo with transparent overlay */}
        <img 
          src="/lovable-uploads/b069e163-9f57-41f8-82e1-550ae81c592a.png" 
          alt="Sonai Realty Logo" 
          className="w-full h-full object-contain"
        />
        
        {/* Transparent overlay that disappears from bottom to top */}
        <div 
          className="absolute inset-0 bg-white/50" 
          style={{ 
            clipPath: `inset(0 0 ${Math.min(progress, 99)}% 0)`,
            transition: 'clip-path 0.5s ease-out'
          }}
        ></div>
      </div>
      
      {/* Percentage below the logo */}
      <div className="text-charcoal font-medium text-2xl mt-4">
        {progress}%
      </div>
    </div>
  );
};

export default LoadingScreen;
