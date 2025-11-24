import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, Grid3x3, Droplet, Paintbrush, Boxes, Leaf } from 'lucide-react';
import teamImage from '@/assets/team-mobile.jpg';
import tilingImage from '@/assets/tiling-mobile.jpg';
import microcementImage from '@/assets/microcement-mobile.jpg';
import paintingImage from '@/assets/painting-mobile.jpg';
import masonryImage from '@/assets/masonry-mobile.jpg';
import gardeningImage from '@/assets/gardening-mobile.jpg';

const services = [
  {
    title: 'Chave na Mão',
    icon: Home,
    description: 'Cuidamos de tudo - desde o projeto inicial até a entrega das chaves. Sem stress, sem surpresas.',
    image: teamImage,
  },
  {
    title: 'Ladrilhamento',
    icon: Grid3x3,
    description: 'Colocamos azulejos e ladrilhos com aquele acabamento que faz a diferença. Cada junta no sítio certo.',
    image: tilingImage,
  },
  {
    title: 'Microcimento',
    icon: Droplet,
    description: 'Aquele revestimento moderno e contínuo que está na moda. Ideal para quem quer algo diferente e sofisticado.',
    image: microcementImage,
  },
  {
    title: 'Pintura',
    icon: Paintbrush,
    description: 'Pintamos paredes, tetos, fachadas... o que precisar. Sempre com cuidado para não sujar nada.',
    image: paintingImage,
  },
  {
    title: 'Alvenaria',
    icon: Boxes,
    description: 'Levantamos paredes, montamos divisórias em pladur. Estruturas sólidas feitas para durar.',
    image: masonryImage,
  },
  {
    title: 'Jardinagem',
    icon: Leaf,
    description: 'Mantemos o seu jardim sempre bonito. Corte de relva, poda, arranjos... Deixamos tudo a brilhar.',
    image: gardeningImage,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden backdrop-blur-sm bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
      initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      style={{
        boxShadow: '0 10px 40px hsl(var(--background) / 0.5)',
      }}
    >
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

        {/* Icon with gear background */}
        <motion.div
          className="absolute bottom-4 left-4 p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          <service.icon className="text-primary w-8 h-8" />
        </motion.div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
          {service.title}
          <motion.span
            className="inline-block w-2 h-2 rounded-full bg-primary"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </h3>
        <p className="text-body text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="h-1 bg-gradient-to-r from-primary via-gear-secondary to-primary"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  );
}

export function ServicesMobile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="services"
      ref={ref}
      className="min-h-screen py-20 px-6 bg-background"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <motion.div
          className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-sm font-semibold text-primary">Serviços</span>
        </motion.div>
        <h2 className="text-heading font-bold text-foreground mb-3">
          O Que Fazemos
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
        <p className="text-body text-muted-foreground max-w-md mx-auto">
          Tudo o que você precisa para a sua obra
        </p>
      </motion.div>

      <div className="space-y-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
