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
          className="text-body text-muted-foreground mb-8 leading-relaxed text-justify max-w-2xl mx-auto space-y-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <p className="relative">
            <span className="float-left text-6xl font-bold text-primary mr-3 mt-[-8px] leading-[0.8]">S</span>
            omos uma empresa de construção civil que actua em obras de pequena e grande dimensão,
            tanto no setor residencial como comercial e industrial.
          </p>
          <p>
            Prestamos um serviço completo, incluindo soluções chave na mão, desde o projecto até à entrega final.
          </p>
          <p>
            Trabalhamos com materiais certificados e de primeira qualidade, para entregar resultados de
            excelência em cada projeto.
          </p>
          <p>
            O nosso compromisso é a competência, dedicação, estima pelo cliente e pela sua visão.
          </p>
        </motion.div>

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
