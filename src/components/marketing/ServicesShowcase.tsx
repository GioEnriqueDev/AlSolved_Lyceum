"use client";

import { SpotlightCard } from "../reactbits/SpotlightCard";
import { Activity, PersonStanding, Bone, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
    {
        title: "FisioKinesi Terapia",
        description: "Riabilitazione motoria avanzata per il recupero funzionale completo.",
        icon: Activity,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
        title: "Ortopedia",
        description: "Specialisti nella diagnosi e cura dell'apparato muscolo-scheletrico.",
        icon: Bone,
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2832&auto=format&fit=crop",
        colSpan: "col-span-1",
    },
    {
        title: "Ginnastica Medica",
        description: "Percorsi personalizzati per il benessere posturale e preventivo.",
        icon: PersonStanding,
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2670&auto=format&fit=crop",
        colSpan: "col-span-1 md:col-span-3 lg:col-span-3",
    },
];

export const ServicesShowcase = () => {
    return (
        <section className="py-32 px-4 bg-slate-950 relative overflow-hidden" id="servizi">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6"
                >
                    <div>
                        <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Eccellenza Medica</span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                            I Nostri <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Servizi</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
                        Un approccio integrato che combina le migliori tecnologie diagnostiche con la terapia manuale specializzata.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[400px]">
                    {services.map((service, index) => (
                        <SpotlightCard
                            key={index}
                            className={`${service.colSpan} border-white/5 bg-white/5 backdrop-blur-sm p-0 flex flex-col justify-end group transition-all duration-700 hover:border-white/20 overflow-hidden relative`}
                            spotlightColor="rgba(255, 255, 255, 0.15)"
                        >
                            {/* Background Image with Zoom Effect */}
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-20 p-8 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <service.icon className="w-6 h-6" />
                                </div>

                                <h3 className="font-bold text-3xl text-white mb-2 tracking-tight">{service.title}</h3>
                                <p className="text-slate-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-secondary text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                    <span>Scopri di più</span>
                                    <ChevronRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
