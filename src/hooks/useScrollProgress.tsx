import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTimestamp = Date.now();
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTimestamp = Date.now();
      
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / scrollHeight) * 100;
      
      const timeDiff = currentTimestamp - lastTimestamp;
      const scrollDiff = currentScrollY - lastScrollY;
      const velocity = timeDiff > 0 ? scrollDiff / timeDiff : 0;
      
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
      setScrollVelocity(velocity);
      
      lastScrollY = currentScrollY;
      lastTimestamp = currentTimestamp;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return { scrollProgress, scrollVelocity };
}
