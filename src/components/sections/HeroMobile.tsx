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
        <motion.img
          src={heroImage}
          alt="Construção moderna Habicon"
          className="w-full h-full object-cover"
          animate={{ scale: [1, 1.1] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            className="text-display font-black text-foreground mb-3 tracking-tight leading-none md:text-8xl"
            style={{
              textShadow: '0 4px 20px hsl(var(--primary) / 0.3)',
            }}
          >
            Habicon<sup className="text-primary text-3xl font-bold md:text-5xl">®</sup>
          </motion.h1>

          <motion.p
            className="text-2xl font-bold text-primary mb-4 md:text-4xl md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            construção
          </motion.p>

          <p className="text-body text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed md:text-xl md:max-w-2xl">
            O seu Projecto, a Nossa Missão
          </p>
        </motion.div>

        <motion.button
          onClick={scrollToNext}
          className="relative tap-target px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg overflow-hidden group mb-20 md:mb-0"
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

        {/* Footer Pillars */}
        <motion.div
          className="grid grid-cols-3 gap-2 md:gap-12 mt-8 md:mt-16 max-w-5xl w-full border-t border-white/10 pt-6 md:pt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { title: "Construção", desc: "Residencial e Comercial" },
            { title: "Remodelação", desc: "Renovação Completa" },
            { title: "Chave na Mão", desc: "Gestão Integral" }
          ].map((item, i) => (
            <div key={i} className="text-center group cursor-default">
              <h3 className="text-xs md:text-xl font-bold text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground leading-tight">{item.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
