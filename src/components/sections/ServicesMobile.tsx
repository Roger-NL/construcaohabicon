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
    title: 'Projecto Chave na Mão',
    icon: Home,
    description: 'Propomos soluções completas que integram todas as etapas de um projeto, desde a concepção até a entrega final.',
    image: teamImage,
    fullDescription: 'Responsabilizamo-nos pela gestão dos diferentes fornecedores, contratação de mão-de-obra, integração das várias especialidades, controlo de prazos e burocracias enquanto o cliente pode manter o foco no que realmente lhe importa: a idealização. Esta é a forma mais prática e cómoda de concretizar um projeto permitindo que o cliente disfrute do serviço já pronto.',
  },
  {
    title: 'Ladrilhamento',
    icon: Grid3x3,
    description: 'Aplicação de cerâmicas e outros materiais de revestimento em pavimentos e paredes, garantindo um acabamento de primeira qualidade.',
    image: tilingImage,
    fullDescription: 'Acabamento de primeira qualidade e estereotomias adequadas, com recurso a máquina de corte a água. • Experiência: Apoio na escolha de soluções técnicas e estéticas. • Preparação de superfícies: Reboco, nivelamento e isolamento antes do revestimento. • Fachadas: Revestimento exterior com cerâmica, pedra ou similares. • Ladrilho hidráulico: Aplicação decorativa em interiores e exteriores.',
  },
  {
    title: 'Microcimento',
    icon: Droplet,
    description: 'Revestimento contínuo, sem juntas, feito à base de cimento, resinas, aditivos e pigmentos, aplicado em camadas finas.',
    image: microcementImage,
    fullDescription: 'O microcimento é aplicado em camadas finas sobre diversos tipos de superfícies, tanto em ambientes internos como externos. Oferece um acabamento estético moderno e elegante, com alta resistência e durabilidade, além de ser versátil e personalizável com uma vasta gama de cores e texturas.',
  },
  {
    title: 'Pintura Profissional',
    icon: Paintbrush,
    description: 'Pinturas interiores e exteriores, passando pela proteção de recheio, isolamento de pavimentos ou via pública.',
    image: paintingImage,
    fullDescription: 'Limpeza e preparação dos suportes a pintar, sejam em pladur, argamassa, madeira ou metal. Asseguramos um trabalho rápido com resultado uniforme e durável. • Fachadas: Trabalhos em altura e em segurança. • Lavagem: Lavagem de superfícies com jato de água de alta pressão. • Descontaminantes: Aplicação de algicida e fungicida. • Aplicação de selantes: Tratamento de fissuras, juntas e pontos críticos.',
  },
  {
    title: 'Alvenaria, Barramento, Pladur e Capoto',
    icon: Boxes,
    description: 'Executamos estruturas em alvenaria, mas também em pladur assente em diferentes tipo de perfis, incluindo isolamento acústico e térmico.',
    image: masonryImage,
    fullDescription: 'Entregamos um acabamento de excelência passando por reboco, barramento (armado ou não), estuque ou capoto.',
  },
  {
    title: 'Jardinagem',
    icon: Leaf,
    description: 'Mantemos o seu jardim sempre bonito. Corte de relva, poda, arranjos... Deixamos tudo a brilhar.',
    image: gardeningImage,
    fullDescription: 'Serviço completo de manutenção e cuidado de jardins, garantindo um espaço verde sempre bem cuidado e apresentável.',
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
        <p className="text-body text-muted-foreground leading-relaxed mb-3">
          {service.description}
        </p>
        {service.fullDescription && (
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {service.fullDescription}
          </p>
        )}
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
          Soluções completas para o seu projecto
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
