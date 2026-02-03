"use client";

import { SpotlightCard } from "../reactbits/SpotlightCard";
import { Activity, PersonStanding, Bone, ChevronRight, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";

const services = [
    {
        title: "FisioKinesi Terapia",
        description: "Riabilitazione motoria avanzata per il recupero funzionale completo. Tecniche innovative per tornare in forma.",
        icon: Activity,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
        gradient: "from-violet-500 to-purple-600",
    },
    {
        title: "Ortopedia",
        description: "Specialisti nella diagnosi e cura dell'apparato muscolo-scheletrico con approccio personalizzato.",
        icon: Bone,
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2832&auto=format&fit=crop",
        colSpan: "col-span-1",
        gradient: "from-teal-500 to-emerald-600",
    },
    {
        title: "Ginnastica Medica",
        description: "Percorsi personalizzati per il benessere posturale e preventivo. Esercizi specifici per ogni esigenza.",
        icon: PersonStanding,
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2670&auto=format&fit=crop",
        colSpan: "col-span-1 md:col-span-3 lg:col-span-3",
        gradient: "from-primary-500 to-violet-600",
    },
];

// ─── Section Header ───
const SectionHeader = () => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
    >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-purple mb-6"
                >
                    <Sparkles className="w-4 h-4 text-primary-600" />
                    <span className="text-xs font-bold text-primary-700 uppercase tracking-widest">
                        Eccellenza Medica
                    </span>
                </motion.div>

                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                    I Nostri{" "}
                    <span className="text-gradient-purple-teal">Servizi</span>
                </h2>
            </div>

            <p className="text-gray-500 max-w-sm text-base leading-relaxed">
                Un approccio integrato che combina le migliori tecnologie diagnostiche
                con la terapia manuale specializzata.
            </p>
        </div>
    </motion.div>
);

// ─── Service Card Content ───
const ServiceCardContent = ({ service, index }: { service: typeof services[0]; index: number }) => (
    <div className="relative h-full flex flex-col">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10`} />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
            <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
            />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col h-full p-8">
            {/* Icon */}
            <motion.div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
            >
                <service.icon className="w-7 h-7" />
            </motion.div>

            {/* Title & Description */}
            <div className="mt-auto">
                <h3 className="font-bold text-2xl md:text-3xl text-gray-900 group-hover:text-white mb-3 tracking-tight transition-colors duration-500">
                    {service.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/90 mb-6 transition-colors duration-500 line-clamp-2">
                    {service.description}
                </p>

                {/* CTA Link */}
                <div className="flex items-center text-primary-600 group-hover:text-white text-sm font-bold uppercase tracking-widest transition-colors duration-500">
                    <span>Scopri di più</span>
                    <motion.div
                        className="ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                    >
                        <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                </div>
            </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className={`absolute top-6 right-6 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center`}>
                <ChevronRight className="w-4 h-4 text-white" />
            </div>
        </div>
    </div>
);

export const ServicesShowcase = () => {
    return (
        <section className="py-32 px-4 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden" id="servizi">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader />

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[420px]">
                    {services.map((service, index) => (
                        <FadeIn key={index} delay={index * 0.15}>
                            <SpotlightCard
                                className={`${service.colSpan} h-full group cursor-pointer`}
                                spotlightColor="rgba(139, 92, 246, 0.15)"
                            >
                                <ServiceCardContent service={service} index={index} />
                            </SpotlightCard>
                        </FadeIn>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="#booking"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-bold text-sm uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    >
                        <span>Prenota una Consulenza</span>
                        <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ArrowUpRight className="w-5 h-5" />
                        </motion.div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
