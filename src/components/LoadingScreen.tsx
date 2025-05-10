
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Create a smoother, continuous progress animation
    let startTime: number;
    let animationId: number;
    
    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      // Calculate progress over 3.5 seconds (3500ms)
      const elapsed = timestamp - startTime;
      const duration = 3500; 
      
      // Use easeOutQuad for smoother end of animation
      const easeOutQuad = (t: number) => t * (2 - t);
      
      if (elapsed < duration) {
        const rawProgress = Math.min((elapsed / duration), 0.99);
        const smoothProgress = Math.floor(easeOutQuad(rawProgress) * 100);
        setProgress(smoothProgress);
        animationId = requestAnimationFrame(animateProgress);
      } else {
        // Final step to 100%
        setProgress(100);
        setTimeout(onLoadingComplete, 500); // Small delay before transition
      }
    };
    
    animationId = requestAnimationFrame(animateProgress);
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [onLoadingComplete]);
  
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500">
      <div className="relative w-56 h-56 mb-4"> {/* Increased from w-48 h-48 */}
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
