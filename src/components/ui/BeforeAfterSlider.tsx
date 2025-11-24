import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = 'Antes',
    afterLabel = 'Depois',
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;

        setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (e.touches.length > 0) {
            handleMove(e.touches[0].clientX);
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-64 overflow-hidden rounded-2xl cursor-ew-resize select-none touch-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            onMouseLeave={handleMouseUp}
        >
            {/* After Image (background) */}
            <div className="absolute inset-0">
                <img
                    src={afterImage}
                    alt={afterLabel}
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                {/* After Label */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                    {afterLabel}
                </div>
            </div>

            {/* Before Image (overlay with clip) */}
            <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeImage}
                    alt={beforeLabel}
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                {/* Before Label */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-muted text-muted-foreground text-sm font-bold rounded-full">
                    {beforeLabel}
                </div>
            </div>

            {/* Slider Line */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
            >
                {/* Slider Handle */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center border-4 border-background"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="flex gap-1">
                        <div className="w-0.5 h-4 bg-primary-foreground"></div>
                        <div className="w-0.5 h-4 bg-primary-foreground"></div>
                    </div>
                </motion.div>
            </div>

            {/* Instruction hint */}
            {!isDragging && sliderPosition === 50 && (
                <motion.div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full text-sm text-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    ← Arraste para comparar →
                </motion.div>
            )}
        </div>
    );
}
