"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { Activity, Bone, PersonStanding, Clock, Check, ChevronLeft, ChevronRight, Send, Sparkles, CalendarDays, Timer } from "lucide-react";
import { MagneticButton } from "../reactbits/MagneticButton";

const services = [
    { id: "physio", title: "Fisioterapia", icon: Activity, duration: "45 min", color: "from-violet-500 to-purple-600" },
    { id: "ortho", title: "Ortopedia", icon: Bone, duration: "30 min", color: "from-teal-500 to-emerald-600" },
    { id: "postural", title: "Ginnastica Posturale", icon: PersonStanding, duration: "60 min", color: "from-primary-500 to-violet-600" },
];

const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"
];

// Mock availability
const isSlotAvailable = (time: string, date: Date | undefined) => {
    if (!date) return false;
    const day = date.getDate();
    const timeHash = time.charCodeAt(0) + time.charCodeAt(3);
    return (day + timeHash) % 3 !== 0;
};

// ─── Confetti Effect ───
const Confetti = () => {
    const colors = ["#8B5CF6", "#A855F7", "#14B8A6", "#10B981", "#F59E0B", "#EC4899"];

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                    }}
                    initial={{ scale: 0, y: 0 }}
                    animate={{
                        scale: [0, 1, 1, 0],
                        y: [-20, -100 - Math.random() * 100],
                        x: (Math.random() - 0.5) * 200,
                        rotate: Math.random() * 720,
                    }}
                    transition={{
                        duration: 1.5,
                        delay: Math.random() * 0.3,
                        ease: "easeOut",
                    }}
                />
            ))}
        </div>
    );
};

// ─── Step Indicator ───
const StepIndicator = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => (
    <div className="flex items-center justify-center gap-3 mb-8">
        {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} className="flex items-center">
                <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${i + 1 < currentStep
                            ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-glow"
                            : i + 1 === currentStep
                                ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-glow"
                                : "bg-gray-100 text-gray-400"
                        }`}
                    initial={false}
                    animate={i + 1 === currentStep ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                >
                    {i + 1 < currentStep ? (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500 }}
                        >
                            <Check className="w-5 h-5" />
                        </motion.div>
                    ) : (
                        i + 1
                    )}
                </motion.div>
                {i < totalSteps - 1 && (
                    <div className={`w-12 h-0.5 mx-2 transition-colors duration-300 ${i + 1 < currentStep ? "bg-primary-500" : "bg-gray-200"
                        }`} />
                )}
            </div>
        ))}
    </div>
);

export const BookingWizard = () => {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [showConfetti, setShowConfetti] = useState(false);

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleBooking = () => {
        setShowConfetti(true);
        setTimeout(() => {
            if (!selectedService || !date || !selectedTime) return;
            const formattedDate = format(date, "d MMMM yyyy", { locale: it });
            const message = `Salve, vorrei confermare l'appuntamento:\n\n📅 Data: ${formattedDate}\n🕒 Ora: ${selectedTime}\nSeduta di ${selectedService.title}.\n\nAttendo conferma.`;
            window.open(`https://wa.me/393491119147?text=${encodeURIComponent(message)}`, '_blank');
        }, 1000);
    };

    return (
        <section id="booking" className="py-32 px-4 bg-gradient-to-b from-white via-primary-50/20 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] translate-x-1/2" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-purple mb-6">
                        <CalendarDays className="w-4 h-4 text-primary-600" />
                        <span className="text-xs font-bold text-primary-700 uppercase tracking-widest">
                            Prenotazione Rapida
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Prenota la tua <span className="text-gradient-purple-teal">seduta</span>
                    </h2>
                    <p className="text-gray-500 max-w-md mx-auto">
                        Verifica le disponibilità in tempo reale e prenota in pochi click.
                    </p>
                </motion.div>

                {/* Wizard Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 p-8 md:p-12 min-h-[550px] flex flex-col relative overflow-hidden"
                >
                    {showConfetti && <Confetti />}

                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-primary-500 via-primary-400 to-secondary"
                            initial={{ width: 0 }}
                            animate={{ width: `${(step / 3) * 100}%` }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        />
                    </div>

                    <StepIndicator currentStep={step} totalSteps={3} />

                    <div className="flex-1 flex flex-col">
                        <AnimatePresence mode="wait">
                            {/* ─── Step 1: Service Selection ─── */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                    className="flex-1"
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <Sparkles className="w-5 h-5 text-primary-500" />
                                        Scegli il Servizio
                                    </h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        {services.map((s, i) => (
                                            <motion.div
                                                key={s.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                onClick={() => { setSelectedService(s); nextStep(); }}
                                                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 group hover:shadow-lg ${selectedService?.id === s.id
                                                        ? 'border-primary-500 bg-primary-50'
                                                        : 'border-gray-100 hover:border-primary-200 bg-white'
                                                    }`}
                                            >
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                                    <s.icon className="w-6 h-6" />
                                                </div>
                                                <h4 className="text-gray-900 font-bold text-lg mb-2">{s.title}</h4>
                                                <div className="flex items-center text-sm text-gray-500 gap-1">
                                                    <Timer className="w-4 h-4" />
                                                    {s.duration}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* ─── Step 2: Date & Time Selection ─── */}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                    className="flex-1 flex flex-col md:flex-row gap-8"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <CalendarDays className="w-5 h-5 text-primary-500" />
                                            Seleziona Giorno
                                        </h3>
                                        <div className="flex justify-center md:justify-start">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                className="rounded-xl border border-gray-200 bg-white shadow-sm"
                                                fromDate={new Date()}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <Timer className="w-5 h-5 text-primary-500" />
                                            Seleziona Orario
                                        </h3>
                                        {!date ? (
                                            <div className="h-[300px] flex items-center justify-center text-gray-400 text-sm italic bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                                                Seleziona prima una data
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-y-auto pr-2">
                                                {timeSlots.map((time, i) => {
                                                    const available = isSlotAvailable(time, date);
                                                    return (
                                                        <motion.button
                                                            key={time}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: i * 0.02 }}
                                                            disabled={!available}
                                                            onClick={() => setSelectedTime(time)}
                                                            className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all ${!available
                                                                    ? 'bg-gray-100 text-gray-300 cursor-not-allowed line-through'
                                                                    : selectedTime === time
                                                                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-glow scale-105'
                                                                        : 'bg-gray-50 text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                                                                }`}
                                                        >
                                                            {time}
                                                        </motion.button>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}

                            {/* ─── Step 3: Confirmation ─── */}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                    className="flex-1 flex flex-col items-center justify-center text-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                                        className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30"
                                    >
                                        <Check className="w-10 h-10 text-white" />
                                    </motion.div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Tutto Pronto!</h3>
                                    <p className="text-gray-500 mb-2">
                                        Stai per confermare il tuo appuntamento:
                                    </p>

                                    <div className="bg-gray-50 rounded-2xl p-6 mb-8 w-full max-w-sm">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedService?.color} flex items-center justify-center text-white`}>
                                                {selectedService && <selectedService.icon className="w-5 h-5" />}
                                            </div>
                                            <span className="font-bold text-gray-900">{selectedService?.title}</span>
                                        </div>
                                        <div className="text-lg font-bold text-primary-600">
                                            {date && format(date, "EEEE d MMMM", { locale: it })}
                                            <span className="text-gray-400 mx-2">•</span>
                                            {selectedTime}
                                        </div>
                                    </div>

                                    <div onClick={handleBooking} className="w-full max-w-sm">
                                        <MagneticButton className="w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/30 hover:shadow-xl transition-all">
                                            <span>Conferma su WhatsApp</span>
                                            <Send className="w-5 h-5" />
                                        </MagneticButton>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                        {step > 1 ? (
                            <button
                                onClick={prevStep}
                                className="px-6 py-3 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors flex items-center gap-2 font-medium"
                            >
                                <ChevronLeft className="w-4 h-4" /> Indietro
                            </button>
                        ) : <div />}

                        {step === 2 && selectedTime && (
                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                onClick={nextStep}
                                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-xl hover:shadow-glow transition-all flex items-center gap-2"
                            >
                                Continua <ChevronRight className="w-4 h-4" />
                            </motion.button>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
