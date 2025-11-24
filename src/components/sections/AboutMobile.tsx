import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import constructionImage from '@/assets/construction-site.jpg';
import { Award, Users, Shield, Zap } from 'lucide-react';

export function AboutMobile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    { icon: Award, label: 'Excelência' },
    { icon: Users, label: 'Equipa Qualificada' },
    { icon: Shield, label: 'Segurança' },
    { icon: Zap, label: 'Eficiência' },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 px-6 bg-secondary"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-8">
          <motion.div
            className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-sm font-semibold text-primary">Sobre Nós</span>
          </motion.div>
          <h2 className="text-heading font-bold text-foreground mb-3">
            Quem Somos
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <motion.div
          className="relative rounded-2xl overflow-hidden mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={constructionImage}
            alt="Equipa Habicon"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </motion.div>

        <motion.p
          className="text-body text-muted-foreground mb-8 leading-relaxed text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          Começámos pequenos, com reformas e pequenas obras. Hoje já realizamos
          projetos de todos os tamanhos. O nosso segredo? Tratar cada obra como se
          fosse a nossa própria casa. Somos uma equipa portuguesa com experiência
          de verdade - aquela que só se ganha com anos no terreno.
        </motion.p>

        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              className="glass-card p-4 rounded-xl text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <feature.icon className="text-primary w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground">
                {feature.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
