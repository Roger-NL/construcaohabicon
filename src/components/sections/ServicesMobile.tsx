import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, Grid3x3, Droplet, Paintbrush, Boxes, Leaf } from 'lucide-react';
import teamImage from '@/assets/team-mobile.jpg';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { ImageCarousel } from '@/components/ui/ImageCarousel';

// Import before/after images
import casadbanhoAntes from '@/assets/casadbanho-antes.jpg';
import casadbanhoDep from '@/assets/casadbanho-depois.jpg';
import corredorAntes from '@/assets/corredor-antes.jpeg';
import corredorDepois from '@/assets/corredor-depois.jpg';
import alvenariaAntes from '@/assets/alvenaria-antes-wide.png';
import alvenariaDepois from '@/assets/alvenaria-depois-wide.png';
import pinturaAntes from '@/assets/pintura-antes.png';
import pinturaDepois from '@/assets/pintura-depois.jpg';
import chaveAntes from '@/assets/chave-antes.jpg';
import chaveDepois from '@/assets/chave-depois.png';
import gardeningImage from '@/assets/gardening-mobile.jpg';
import gardeningBefore from '@/assets/gardening-before-wide.png';
import gardeningAfter from '@/assets/gardening-after-wide.png';
import ladrilhamentoMaquina from '@/assets/ladrilhamento-maquina.jpg';
import ladrilhamentoBanheiro from '@/assets/ladrilhamento-banheiro.jpg';
import microcimento1 from '@/assets/microcimento-1.jpg';
import microcimento2 from '@/assets/microcimento-2.jpg';
import microcimento3 from '@/assets/microcimento-3.jpg';
import chaveAntesNew from '@/assets/chave-antes-new.jpg';
import chaveDepoisNew from '@/assets/chave-depois-new.jpg';

const services = [
  {
    title: 'Projecto Chave na Mão',
    icon: Home,
    description: 'Propomos soluções completas que integram todas as etapas de um projeto, desde a concepção até a entrega final.',
    beforeAfter: {
      before: chaveAntesNew,
      after: chaveDepoisNew,
    },
    fullDescription: 'Responsabilizamo-nos pela gestão dos diferentes fornecedores, contratação de mão-de-obra, integração das várias especialidades, controlo de prazos e burocracias enquanto o cliente pode manter o foco no que realmente lhe importa: a idealização. Esta é a forma mais prática e cómoda de concretizar um projeto permitindo que o cliente disfrute do serviço já pronto.',
  },
  {
    title: 'Ladrilhamento',
    icon: Grid3x3,
    description: 'Aplicação de cerâmicas e outros materiais de revestimento em pavimentos e paredes, garantindo um acabamento de primeira qualidade.',
    beforeAfter: {
      before: ladrilhamentoMaquina,
      after: ladrilhamentoBanheiro,
      beforeLabel: '',
      afterLabel: '',
    },
    fullDescription: 'Acabamento de primeira qualidade e estereotomias adequadas, com recurso a máquina de corte a água. • Experiência: Apoio na escolha de soluções técnicas e estéticas. • Preparação de superfícies: Reboco, nivelamento e isolamento antes do revestimento. • Fachadas: Revestimento exterior com cerâmica, pedra ou similares. • Ladrilho hidráulico: Aplicação decorativa em interiores e exteriores.',
  },
  {
    title: 'Microcimento',
    icon: Droplet,
    description: 'Revestimento contínuo, sem juntas, feito à base de cimento, resinas, aditivos e pigmentos, aplicado em camadas finas.',
    carousel: [
      microcimento1,
      microcimento2,
      microcimento3,
    ],
    fullDescription: 'O microcimento é aplicado em camadas finas sobre diversos tipos de superfícies, tanto em ambientes internos como externos. Oferece um acabamento estético moderno e elegante, com alta resistência e durabilidade, além de ser versátil e personalizável com uma vasta gama de cores e texturas.',
  },
  {
    title: 'Pintura Profissional',
    icon: Paintbrush,
    description: 'Pinturas interiores e exteriores, passando pela proteção de recheio, isolamento de pavimentos ou via pública.',
    beforeAfter: {
      before: pinturaAntes,
      after: pinturaDepois,
    },
    fullDescription: 'Limpeza e preparação dos suportes a pintar, sejam em pladur, argamassa, madeira ou metal. Asseguramos um trabalho rápido com resultado uniforme e durável. • Fachadas: Trabalhos em altura e em segurança. • Lavagem: Lavagem de superfícies com jato de água de alta pressão. • Descontaminantes: Aplicação de algicida e fungicida. • Aplicação de selantes: Tratamento de fissuras, juntas e pontos críticos.',
  },
  {
    title: 'Alvenaria, Barramento, Pladur e Capoto',
    icon: Boxes,
    description: 'Executamos estruturas em alvenaria, mas também em pladur assente em diferentes tipo de perfis, incluindo isolamento acústico e térmico.',
    beforeAfter: {
      before: alvenariaAntes,
      after: alvenariaDepois,
    },
    fullDescription: 'Entregamos um acabamento de excelência passando por reboco, barramento (armado ou não), estuque ou capoto.',
  },
  {
    title: 'Jardinagem',
    icon: Leaf,
    description: 'Mantemos o seu jardim sempre bonito. Corte de relva, poda, arranjos... Deixamos tudo a brilhar.',
    beforeAfter: {
      before: gardeningBefore,
      after: gardeningAfter,
    },
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
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      style={{
        boxShadow: '0 10px 40px hsl(var(--background) / 0.5)',
      }}
    >
      {/* Image or Before/After Slider */}
      <div className="relative overflow-hidden">
        {service.beforeAfter ? (
          <BeforeAfterSlider
            beforeImage={service.beforeAfter.before}
            afterImage={service.beforeAfter.after}
            beforeLabel={(service.beforeAfter as any).beforeLabel}
            afterLabel={(service.beforeAfter as any).afterLabel}
          />
        ) : (service as any).carousel ? (
          <ImageCarousel
            images={(service as any).carousel}
            title={service.title}
          />
        ) : (
          <div className="relative h-64">
            {(service as any).image && (
              <>
                <motion.img
                  src={(service as any).image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              </>
            )}
          </div>
        )}

        {/* Icon with gear background - only show if no before/after or carousel */}
        {!service.beforeAfter && !(service as any).carousel && (
          <motion.div
            className="absolute bottom-4 left-4 p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <service.icon className="text-primary w-8 h-8" />
          </motion.div>
        )}

        {/* Hover overlay - only if no before/after or carousel */}
        {!service.beforeAfter && !(service as any).carousel && (
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
          <service.icon className="text-primary w-6 h-6" />
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
      className="py-10 md:py-32 px-6 bg-background"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-20"
      >
        <motion.div
          className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-sm font-semibold text-primary">Serviços</span>
        </motion.div>
        <h2 className="text-heading font-bold text-foreground mb-3 md:text-5xl">
          O Que Fazemos
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
        <p className="text-body text-muted-foreground max-w-md mx-auto md:text-xl md:max-w-2xl">
          Soluções completas para o seu projecto
        </p>
      </motion.div>

      <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
