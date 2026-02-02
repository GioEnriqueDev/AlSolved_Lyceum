"use client";

import { SpotlightCard } from "../reactbits/SpotlightCard";
import { Activity, Clock, ShieldCheck, BarChart3, Pill, Dna, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Smart Booking",
        description: "AI-driven scheduling that eliminates waiting times.",
        icon: Clock,
        colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
        bg: "bg-gradient-to-br from-primary/20 to-transparent",
        glow: "group-hover:shadow-[0_0_50px_-10px_rgba(139,92,246,0.3)]"
    },
    {
        title: "No-Show Protection",
        description: "Automated reminders reduce missed appointments by 80%.",
        icon: ShieldCheck,
        colSpan: "col-span-1",
        bg: "",
        glow: "group-hover:shadow-[0_0_50px_-10px_rgba(45,212,191,0.2)]"
    },
    {
        title: "Real-time Analytics",
        description: "Track your health metrics with clinical precision.",
        icon: BarChart3,
        colSpan: "col-span-1",
        bg: "",
        glow: ""
    },
    {
        title: "Precision Pharma",
        description: "Personalized medication plans based on DNA.",
        icon: Pill,
        colSpan: "col-span-1 md:col-span-2",
        bg: "bg-gradient-to-bl from-secondary/10 to-transparent",
        glow: "group-hover:shadow-[0_0_50px_-10px_rgba(45,212,191,0.3)]"
    },
];

export const ServicesBento = () => {
    return (
        <section className="py-32 px-4 bg-darkblue-900 relative">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20 text-center">
                    <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Ecosystem</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Integrated Care <br /> Architecture</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
                    {features.map((feature, index) => (
                        <SpotlightCard
                            key={index}
                            className={`${feature.colSpan} ${feature.bg} border-white/5 bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-between group transition-all duration-500 hover:border-white/20 ${feature.glow}`}
                            spotlightColor="rgba(255, 255, 255, 0.1)"
                        >
                            <div className="flex justify-between items-start">
                                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <ArrowUpRight className="text-slate-500 w-5 h-5 group-hover:text-white transition-colors" />
                            </div>

                            <div className="mt-8">
                                <h3 className="font-bold text-2xl text-white mb-3 tracking-tight">{feature.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed font-light">{feature.description}</p>
                            </div>
                        </SpotlightCard>
                    ))}

                    {/* Visual Filler Card */}
                    <SpotlightCard className="col-span-1 md:col-span-2 lg:col-span-2 border-white/5 bg-white/5 p-0 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-darkblue-900 via-transparent to-transparent z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                            alt="Data Center"
                            className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                        />
                        <div className="absolute bottom-8 left-8 z-20">
                            <h3 className="font-bold text-xl text-white mb-1">Infrastructure</h3>
                            <p className="text-xs text-slate-400">Secure. Private. Fast.</p>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
};
