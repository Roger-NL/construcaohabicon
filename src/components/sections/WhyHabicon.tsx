import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Award, Users, TrendingUp } from 'lucide-react';

const values = [
    {
        icon: Heart,
        title: 'Confiança',
        description: 'Cumprimos o que prometemos.',
    },
    {
        icon: Award,
        title: 'Qualidade',
        description: 'Trabalhos com rigor e bons materiais.',
    },
    {
        icon: Users,
        title: 'Respeito',
        description: 'Valorizamos cada cliente e cada projeto.',
    },
    {
        icon: TrendingUp,
        title: 'Experiência',
        description: 'Equipa competente, dinâmica e diligente com provas dadas em todo o tipo de trabalhos.',
    },
];

export function WhyHabicon() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section
            id="why-habicon"
            ref={ref}
            className="py-10 px-6 bg-secondary"
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
                        <span className="text-sm font-semibold text-primary">Os Nossos Valores</span>
                    </motion.div>
                    <h2 className="text-heading font-bold text-foreground mb-3">
                        Porquê escolher a Habicon?
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            className="glass-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300"
                            initial={{ y: 30, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                                    <value.icon className="text-primary w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-foreground mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-body text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
