"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { MagneticButton } from "../reactbits/MagneticButton";

export const LocationSection = () => {
    return (
        <section id="dove-siamo" className="relative w-full h-[600px] bg-slate-950 overflow-hidden flex items-center justify-center">

            {/* 1. Innovative Dark Map (CSS Filter Hack) */}
            <div className="absolute inset-0 z-0 opacity-60">
                <iframe
                    src="https://maps.google.com/maps?q=Via+Torri+in+Sabina+20,+00199+Roma&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(100%) invert(100%) contrast(1.2) hue-rotate(200deg) brightness(0.8)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            {/* 2. Scanning Effect Overlay */}
            <motion.div
                className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"
                animate={{ top: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ height: "20%", opacity: 0.3 }}
            >
                <div className="w-full h-[1px] bg-primary shadow-[0_0_20px_#8b5cf6]" />
            </motion.div>

            {/* Gradient Mask to Blend with Footer */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />

            {/* 3. Floating Holographic Info Card */}
            <div className="relative z-20 container mx-auto px-4 flex justify-start md:justify-end">
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-2xl max-w-md w-full border-l-4 border-l-primary shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                            <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">Dove Siamo</h3>
                            <p className="text-xs text-primary font-mono uppercase tracking-widest">Lyceum HQ</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="group">
                            <p className="text-slate-400 text-sm mb-1 ml-8">Indirizzo</p>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-white transition-colors" />
                                </div>
                                <p className="text-slate-200 font-medium group-hover:text-white transition-colors">
                                    Via Torri in Sabina 20,<br /> 00199 Roma (RM)
                                </p>
                            </div>
                        </div>

                        <div className="group">
                            <p className="text-slate-400 text-sm mb-1 ml-8">Orari</p>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                                <p className="text-slate-200 font-medium whitespace-nowrap">
                                    Lun - Ven: <span className="text-white">09:00 - 19:00</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex gap-4">
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Via+Torri+in+Sabina+20+Roma"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                        >
                            <MagneticButton className="w-full py-3 bg-white text-slate-950 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors">
                                <Navigation className="w-4 h-4" /> Naviga
                            </MagneticButton>
                        </a>
                        <a href="tel:+393491119147" className="flex-1">
                            <MagneticButton className="w-full py-3 bg-slate-800 text-white border border-white/10 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors">
                                <Phone className="w-4 h-4" /> Chiama
                            </MagneticButton>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
