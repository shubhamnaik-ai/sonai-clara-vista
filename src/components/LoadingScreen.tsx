
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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-deepblue transition-opacity duration-500">
      <div className="relative w-40 h-40 mb-8">
        <img 
          src="/lovable-uploads/f0aac734-d8e4-4e38-bb99-be6a38340274.png" 
          alt="Building" 
          className="w-full h-full object-contain animate-pulse"
        />
      </div>
      
      <h2 className="text-3xl font-playfair text-gold mb-8">Sonai Clara</h2>
      
      <div className="absolute bottom-8 right-8 w-48">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-white/80">Loading</span>
          <span className="text-sm text-gold">{progress}%</span>
        </div>
        <Progress value={progress} className="h-1.5 bg-white/20" />
      </div>
    </div>
  );
};

export default LoadingScreen;
