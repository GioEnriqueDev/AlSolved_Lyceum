"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Sparkles, Heart, Activity, Users, ArrowRight, Quote } from "lucide-react";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";

// ─── Text Reveal Animation ───
const TextReveal = ({ children, delay = 0 }: { children: string; delay?: number }) => {
    const words = children.split(" ");
    return (
        <motion.span className="inline-flex flex-wrap gap-x-2">
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: delay + i * 0.05,
                        ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

const stats = [
    { value: "1998", label: "Anno di Fondazione" },
    { value: "25k+", label: "Pazienti Curati" },
    { value: "15+", label: "Specialisti" },
    { value: "100%", label: "Dedizione" },
];

const values = [
    {
        title: "Ascolto Attivo",
        description: "Ogni percorso inizia con l'ascolto. Comprendere la persona prima di trattare il sintomo è la nostra priorità assoluta.",
        icon: Heart,
        color: "text-rose-500",
        bg: "bg-rose-50",
    },
    {
        title: "Tecnologia & Innovazione",
        description: "Investiamo costantemente nelle migliori tecnologie riabilitative per garantire recuperi più veloci ed efficaci.",
        icon: Activity,
        color: "text-primary-500",
        bg: "bg-primary-50",
    },
    {
        title: "Approccio Umano",
        description: "Non siamo solo clinici, siamo partner nel tuo percorso di salute. Empatia e supporto sono parte della cura.",
        icon: Users,
        color: "text-teal-500",
        bg: "bg-teal-50",
    },
];

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ─── Hero Section ─── */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-purple mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-primary-600" />
                            <span className="text-xs font-bold text-primary-700 uppercase tracking-widest">
                                La Nostra Storia
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                            <TextReveal>Eccellenza medica</TextReveal> <br className="hidden md:block" />
                            <span className="text-gradient-purple-teal">
                                <TextReveal delay={0.3}>al servizio della persona.</TextReveal>
                            </span>
                        </h1>

                        <FadeIn delay={0.6}>
                            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                                Da oltre 25 anni, il Lyceum è punto di riferimento per la fisioterapia e la riabilitazione.
                                Uniamo competenza scientifica e calore umano.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Hero Image */}
                    <FadeIn delay={0.8} className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/10 aspect-[21/9]">
                        <Image
                            src="/chi-siamo-hero.png"
                            alt="Lyceum Team e Struttura"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-8 md:p-12">
                            <div className="text-white">
                                <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">La nostra sede</p>
                                <p className="text-2xl md:text-3xl font-bold">Via Torri in Sabina, Roma</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ─── Stats Section ─── */}
            <section className="py-12 border-y border-gray-100 bg-gray-50/50">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</p>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Mission & Values ─── */}
            <section className="py-32 px-4 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        {/* Mission Text */}
                        <div className="flex-1">
                            <FadeIn>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                                    Non curiamo solo patologie.<br />
                                    <span className="text-primary-600">Ci prendiamo cura delle persone.</span>
                                </h2>
                                <div className="prose prose-lg text-gray-500 leading-relaxed space-y-6">
                                    <p>
                                        Il Lyceum nasce nel 1998 con una visione chiara: superare il concetto tradizionale di ambulatorio
                                        per creare uno spazio di cura dove il paziente è al centro di tutto.
                                    </p>
                                    <p>
                                        Crediamo che la guarigione passi attraverso l'ascolto e la comprensione profonda delle esigenze
                                        di chi si affida a noi. Ogni terapia è un percorso condiviso, ogni traguardo è una vittoria comune.
                                    </p>
                                    <div className="pl-6 border-l-4 border-primary-500 mt-8 italic text-gray-700 bg-primary-50/50 py-4 pr-4 rounded-r-xl">
                                        "La nostra soddisfazione più grande non è solo risolvere un problema clinico,
                                        ma vedere i nostri pazienti riprendere in mano la propria vita con fiducia."
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Values Grid */}
                        <div className="flex-1 flex flex-col gap-6">
                            {values.map((val, i) => (
                                <FadeIn key={i} delay={0.2 + i * 0.15}>
                                    <SpotlightCard className="p-8 rounded-2xl border border-gray-100 bg-white hover:border-primary-200 transition-colors shadow-lg shadow-gray-100 group">
                                        <div className={`w-12 h-12 rounded-xl ${val.bg} ${val.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                            <val.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                                        <p className="text-gray-500 leading-relaxed">{val.description}</p>
                                    </SpotlightCard>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CTA Section ─── */}
            <section className="py-24 px-4 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/30 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto a iniziare il tuo percorso?</h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Siamo qui per ascoltarti e definire insieme il miglior piano terapeutico per le tue esigenze.
                        </p>
                        <a
                            href="/#booking"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl transition-all hover:scale-105"
                        >
                            <span>Prenota una Visita</span>
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
