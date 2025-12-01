import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GardeningCarouselProps {
    images: string[];
    className?: string;
}

export function GardeningCarousel({ images, className }: GardeningCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={cn("relative h-96 overflow-hidden bg-black/5", className)}>
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Jardinagem - Imagem ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-20" />

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 hover:bg-black/40 transition-all duration-300 group z-30"
                aria-label="Imagem anterior"
            >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 hover:bg-black/40 transition-all duration-300 group z-30"
                aria-label="Próxima imagem"
            >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Image Indicators (Dots) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                            "h-1.5 rounded-full transition-all duration-300 shadow-sm",
                            index === currentIndex
                                ? "bg-white w-6"
                                : "bg-white/40 w-1.5 hover:bg-white/60"
                        )}
                        aria-label={`Ir para imagem ${index + 1}`}
                    />
                ))}
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 z-30">
                <span className="text-xs font-medium text-white">
                    {currentIndex + 1} / {images.length}
                </span>
            </div>
        </div>
    );
}
