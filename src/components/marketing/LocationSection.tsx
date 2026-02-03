"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "../reactbits/MagneticButton";

export const LocationSection = () => {
    return (
        <section id="dove-siamo" className="relative w-full min-h-[600px] bg-gradient-to-b from-white to-gray-50 overflow-hidden flex items-center">

            {/* ─── Decorative Background ─── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float-delayed" />
            </div>

            {/* ─── Map Container (Light Style) ─── */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50 z-10" />
                <iframe
                    src="https://maps.google.com/maps?q=Via+Torri+in+Sabina+20,+00199+Roma&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(30%) brightness(1.05)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="opacity-70"
                />
            </div>

            {/* ─── Info Card ─── */}
            <div className="relative z-20 container mx-auto px-4 py-20">
                <div className="flex justify-start md:justify-end">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="glass-panel-solid p-8 rounded-3xl max-w-md w-full border-l-4 border-l-primary-500 shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <motion.div
                                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-glow"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <MapPin className="w-7 h-7 text-white" />
                            </motion.div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Dove Siamo</h3>
                                <p className="text-xs text-primary-600 font-bold uppercase tracking-widest">Lyceum HQ</p>
                            </div>
                        </div>

                        {/* Info Items */}
                        <div className="space-y-6">
                            {/* Address */}
                            <div className="group">
                                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Indirizzo</p>
                                <p className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors leading-relaxed">
                                    Via Torri in Sabina 20,<br />
                                    00199 Roma (RM)
                                </p>
                            </div>

                            {/* Hours */}
                            <div className="group flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-50 transition-colors">
                                    <Clock className="w-5 h-5 text-gray-500 group-hover:text-primary-600 transition-colors" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Orari</p>
                                    <p className="text-gray-700 font-medium">
                                        Lun - Ven: <span className="text-gray-900 font-bold">09:00 - 19:00</span>
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="group flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-50 transition-colors">
                                    <Phone className="w-5 h-5 text-gray-500 group-hover:text-primary-600 transition-colors" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Telefono</p>
                                    <a
                                        href="tel:+393491119147"
                                        className="text-gray-900 font-bold hover:text-primary-600 transition-colors"
                                    >
                                        +39 349 111 9147
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 pt-6 border-t border-gray-100 flex gap-3">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Via+Torri+in+Sabina+20+Roma"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                            >
                                <MagneticButton className="w-full py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-glow hover:shadow-glow-lg transition-all">
                                    <Navigation className="w-4 h-4" />
                                    Naviga
                                </MagneticButton>
                            </a>
                            <a href="tel:+393491119147" className="flex-1">
                                <MagneticButton className="w-full py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                                    <Phone className="w-4 h-4" />
                                    Chiama
                                </MagneticButton>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ─── Bottom Decorative Line ─── */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
            />
        </section>
    );
};
