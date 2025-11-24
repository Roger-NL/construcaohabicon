import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-mobile.jpg';

export function HeroMobile() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <img
          src={heroImage}
          alt="Construção moderna Habicon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            className="text-display font-black text-foreground mb-3 tracking-tight leading-none"
            style={{
              textShadow: '0 4px 20px hsl(var(--primary) / 0.3)',
            }}
          >
            Habicon<sup className="text-primary text-3xl font-bold">®</sup>
          </motion.h1>

          <motion.p
            className="text-2xl font-bold text-primary mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            construção
          </motion.p>

          <p className="text-body text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
            O seu Projecto, a Nossa Missão
          </p>
        </motion.div>

        <motion.button
          onClick={scrollToNext}
          className="relative tap-target px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg overflow-hidden group"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileTap={{ scale: 0.95 }}
          style={{
            boxShadow: '0 10px 40px hsl(var(--primary) / 0.5)',
          }}
        >
          <span className="relative z-10 flex items-center gap-2 justify-center">
            Veja o que fazemos
            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </span>
          <motion.div
            className="absolute inset-0 bg-primary/80"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-primary" size={32} />
        </motion.div>
      </div>
    </section>
  );
}
