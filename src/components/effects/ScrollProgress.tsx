import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { ChevronDown } from 'lucide-react';

export function ScrollProgress() {
  const { scrollProgress } = useScrollProgress();
  
  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />
      
      {/* Scroll to top button */}
      {scrollProgress > 20 && (
        <motion.button
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-primary text-primary-foreground shadow-lg backdrop-blur-sm tap-target"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ChevronDown className="rotate-180" size={20} />
        </motion.button>
      )}
    </>
  );
}
