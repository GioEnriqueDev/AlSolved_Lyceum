"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MessageCircle, Send } from "lucide-react";
import { MagneticButton } from "../reactbits/MagneticButton";

export const WhatsAppBooking = () => {
    const [date, setDate] = useState("");
    const [service, setService] = useState("Fisioterapia");

    const handleBooking = () => {
        const message = `Salve, vorrei prenotare una seduta di ${service} per il giorno ${date}.`;
        const encodedMessage = encodeURIComponent(message);
        // Replace with actual number
        window.open(`https://wa.me/393330000000?text=${encodedMessage}`, '_blank');
    };

    return (
        <section id="booking" className="py-24 px-4 bg-slate-950 relative">
            <div className="max-w-4xl mx-auto">
                <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden border border-white/10 shadow-2xl">
                    {/* Decorative Gradients */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prenota Facile.</h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Seleziona la data e il servizio. Ti reindirizzeremo su WhatsApp per confermare l'appuntamento con la nostra segreteria.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center text-slate-300">
                                    <MessageCircle className="w-5 h-5 mr-3 text-secondary" />
                                    <span>Conferma immediata</span>
                                </div>
                                <div className="flex items-center text-slate-300">
                                    <Clock className="w-5 h-5 mr-3 text-secondary" />
                                    <span>Risposta h24</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Servizio</label>
                                <select
                                    value={service}
                                    onChange={(e) => setService(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-secondary/50 transition-colors"
                                >
                                    <option value="Fisioterapia" className="bg-slate-950">Fisioterapia</option>
                                    <option value="Ortopedia" className="bg-slate-950">Ortopedia</option>
                                    <option value="Ginnastica Posturale" className="bg-slate-950">Ginnastica Posturale</option>
                                    <option value="Massoterapia" className="bg-slate-950">Massoterapia</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Data Preferita</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-secondary/50 transition-colors appearance-none"
                                    />
                                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none w-5 h-5" />
                                </div>
                            </div>

                            <div onClick={handleBooking}>
                                <MagneticButton className="w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                                    <span>Invia su WhatsApp</span>
                                    <Send className="w-4 h-4" />
                                </MagneticButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
