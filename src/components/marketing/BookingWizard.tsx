"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { Activity, Bone, PersonStanding, Clock, Check, ChevronLeft, ChevronRight, Send } from "lucide-react";
import { MagneticButton } from "../reactbits/MagneticButton";

const services = [
    { id: "physio", title: "Fisioterapia", icon: Activity, duration: "45 min" },
    { id: "ortho", title: "Ortopedia", icon: Bone, duration: "30 min" },
    { id: "postural", title: "Ginnastica Posturale", icon: PersonStanding, duration: "60 min" },
];

const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"
];

// Mock randomized availability
const isSlotAvailable = (time: string, date: Date | undefined) => {
    if (!date) return false;
    // Simple mock logic: disable some slots based on day/time hash
    const day = date.getDate();
    const timeHash = time.charCodeAt(0) + time.charCodeAt(3);
    return (day + timeHash) % 3 !== 0;
};

export const BookingWizard = () => {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleBooking = () => {
        if (!selectedService || !date || !selectedTime) return;
        const formattedDate = format(date, "d MMMM yyyy", { locale: it });
        const message = `Salve, vorrei confermare l'appuntamento:\n\n📅 Data: ${formattedDate}\n🕒 Ora: ${selectedTime}\nseduta di ${selectedService.title}.\n\nAttendo conferma.`;
        window.open(`https://wa.me/393491119147?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section id="booking" className="py-32 px-4 bg-slate-950 relative">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Prenota la tua seduta</h2>
                    <p className="text-slate-400">Verifica le disponibilità in tempo reale.</p>
                </div>

                <div className="glass-panel p-8 rounded-3xl min-h-[500px] flex flex-col relative overflow-hidden">
                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
                        <motion.div
                            className="h-full bg-primary shadow-[0_0_10px_#8b5cf6]"
                            initial={{ width: 0 }}
                            animate={{ width: `${(step / 3) * 100}%` }}
                        />
                    </div>

                    <div className="flex-1 flex flex-col">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex-1"
                                >
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm text-primary border border-primary/20">1</span>
                                        Scegli il Servizio
                                    </h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        {services.map(s => (
                                            <div
                                                key={s.id}
                                                onClick={() => { setSelectedService(s); nextStep(); }}
                                                className={`p-6 rounded-xl border cursor-pointer transition-all hover:scale-105 ${selectedService?.id === s.id ? 'bg-primary/20 border-primary' : 'bg-slate-900 border-white/5 hover:border-white/20'}`}
                                            >
                                                <s.icon className="w-8 h-8 text-secondary mb-4" />
                                                <h4 className="text-white font-bold mb-1">{s.title}</h4>
                                                <div className="flex items-center text-xs text-slate-400 gap-1">
                                                    <Clock className="w-3 h-3" /> {s.duration}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex-1 flex flex-col md:flex-row gap-8"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                            <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm text-primary border border-primary/20">2</span>
                                            Seleziona Giorno
                                        </h3>
                                        <div className="flex justify-center md:justify-start">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                className="rounded-xl border border-white/10 bg-slate-900/50"
                                                fromDate={new Date()}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                            <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm text-primary border border-primary/20">3</span>
                                            Seleziona Orario
                                        </h3>
                                        {!date ? (
                                            <div className="h-full flex items-center justify-center text-slate-500 text-sm italic">
                                                Seleziona prima una data
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                                {timeSlots.map(time => {
                                                    const available = isSlotAvailable(time, date);
                                                    return (
                                                        <button
                                                            key={time}
                                                            disabled={!available}
                                                            onClick={() => setSelectedTime(time)}
                                                            className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${!available
                                                                ? 'bg-slate-900/30 text-slate-600 cursor-not-allowed line-through'
                                                                : selectedTime === time
                                                                    ? 'bg-primary text-white shadow-lg scale-105'
                                                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                                                                }`}
                                                        >
                                                            {time}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex-1 flex flex-col items-center justify-center text-center"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-500">
                                        <Check className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Tutto Pronto!</h3>
                                    <p className="text-slate-400 mb-8 max-w-sm">
                                        Stai per confermare il tuo appuntamento per il
                                        <strong className="text-white block mt-2 text-lg">
                                            {date && format(date, "d MMMM", { locale: it })} alle {selectedTime}
                                        </strong>
                                    </p>

                                    <div onClick={handleBooking} className="w-full max-w-sm">
                                        <MagneticButton className="w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                                            <span>Conferma su WhatsApp</span>
                                            <Send className="w-5 h-5" />
                                        </MagneticButton>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-white/5">
                        {step > 1 && (
                            <button
                                onClick={prevStep}
                                className="px-6 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2"
                            >
                                <ChevronLeft className="w-4 h-4" /> Indietro
                            </button>
                        )}

                        {step === 2 && selectedTime && (
                            <button
                                onClick={nextStep}
                                className="ml-auto px-8 py-2 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2"
                            >
                                Continua <ChevronRight className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
