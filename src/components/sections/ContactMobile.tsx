import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactMobile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contacts = [
    {
      icon: Phone,
      label: 'Telefone',
      value: '927 194 802',
      subtext: 'João Rangel',
      href: 'tel:+351927194802',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'metrica.resiliente@outlook.com',
      subtext: 'Resposta rápida',
      href: 'mailto:metrica.resiliente@outlook.com',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-20 px-6 bg-secondary flex flex-col justify-center"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <motion.div
            className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-sm font-semibold text-primary">Contacto</span>
          </motion.div>
          <h2 className="text-heading font-bold text-foreground mb-3">
            Fale Connosco
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-body text-muted-foreground max-w-md mx-auto">
            Pronto para começar o seu projeto? Entre em contacto
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              className="relative backdrop-blur-xl bg-card/60 p-6 rounded-2xl flex items-center gap-4 tap-target border border-border/50 hover:border-primary/50 transition-all overflow-hidden group"
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              style={{
                boxShadow: '0 8px 32px hsl(var(--background) / 0.5)',
              }}
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

              <motion.div
                className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-gear-secondary/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-primary/30"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <contact.icon className="text-primary" size={24} />
              </motion.div>

              <div className="relative">
                <p className="text-sm text-muted-foreground font-medium mb-1">{contact.label}</p>
                <p className="text-lg font-bold text-foreground">{contact.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{contact.subtext}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground mb-2">
            © 2024 Habicon® Construção
          </p>
          <p className="text-xs text-muted-foreground">
            O seu Projecto, a Nossa Missão
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
