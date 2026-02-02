"use client";

import { SpotlightCard } from "../reactbits/SpotlightCard";
import { Activity, Heart, Stethoscope, Microscope, Brain, Dna } from "lucide-react";

const services = [
    {
        title: "Check-up Completo",
        description: "Analisi dettagliata per una prevenzione mirata e personalizzata.",
        icon: Activity,
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        title: "Cardiologia",
        description: "Tecnologie avanzate per la salute del tuo cuore.",
        icon: Heart,
        colSpan: "col-span-1",
    },
    {
        title: "Medicina Generale",
        description: "Il tuo punto di riferimento quotidiano per ogni esigenza.",
        icon: Stethoscope,
        colSpan: "col-span-1",
    },
    {
        title: "Laboratorio Analisi",
        description: "Risultati rapidi e precisi direttamente in sede.",
        icon: Microscope,
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        title: "Neurologia",
        description: "Specialisti esperti per il benessere del sistema nervoso.",
        icon: Brain,
        colSpan: "col-span-1",
    },
    {
        title: "Genetica Medica",
        description: "Scopri il tuo profilo genetico per cure su misura.",
        icon: Dna,
        colSpan: "col-span-1 md:col-span-1 lg:col-span-3",
    },
];

export const ServicesGrid = () => {
    return (
        <section className="py-24 px-4 bg-slate-50">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Le Nostre Eccellenze</h2>
                    <p className="mt-4 text-lg text-slate-600">Tecnologia all'avanguardia al servizio della tua salute</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
                    {services.map((service, index) => (
                        <SpotlightCard key={index} className={`${service.colSpan} p-6 flex flex-col justify-between hover:border-primary/50 transition-colors group`}>
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                <service.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-slate-900 mb-2">{service.title}</h3>
                                <p className="text-sm text-slate-500">{service.description}</p>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
