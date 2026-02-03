"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { MagneticButton } from "@/components/reactbits/MagneticButton";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#servizi", label: "I Nostri Servizi" },
    { href: "/dove-siamo", label: "Dove Siamo" },
    { href: "/chi-siamo", label: "Chi Siamo" },
];

// ─── Scroll Progress Indicator ───
function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-primary-400 to-secondary z-[100] origin-left"
            style={{ scaleX: scrollYProgress }}
        />
    );
}

// ─── Mobile Menu ───
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                        onClick={onClose}
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 w-80 bg-white/95 backdrop-blur-xl z-50 md:hidden shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X className="w-6 h-6 text-gray-600" />
                        </button>

                        {/* Menu Content */}
                        <div className="flex flex-col h-full pt-24 px-8">
                            <nav className="flex flex-col gap-2">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={onClose}
                                            className="group flex items-center justify-between py-4 px-4 rounded-xl text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-all duration-300"
                                        >
                                            <span className="text-lg font-medium">{link.label}</span>
                                            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-auto mb-12"
                            >
                                <Link href="/#booking" onClick={onClose}>
                                    <div className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-2xl font-bold text-center shadow-glow hover:shadow-glow-lg transition-shadow">
                                        Prenota Ora
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    return (
        <html lang="it">
            <body className={inter.className}>
                <SmoothScroll>
                    {/* Scroll Progress */}
                    <ScrollProgress />

                    {/* ─── Header ─── */}
                    <motion.header
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                                ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-primary-500/5 border-b border-gray-100"
                                : "bg-transparent"
                            }`}
                    >
                        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
                            {/* Logo */}
                            <Link href="/" className="flex items-center group">
                                <motion.div
                                    className="relative w-40 h-12 md:w-48 md:h-14"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <Image
                                        src="/AlSolved_Lyceum/logo-transparent.png"
                                        alt="Lyceum Fisioterapia"
                                        fill
                                        className="object-contain object-left md:object-center drop-shadow-sm"
                                        priority
                                    />
                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 bg-primary-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </motion.div>
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center gap-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`nav-link text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${scrolled ? "text-gray-600 hover:text-primary-600" : "text-gray-700 hover:text-primary-600"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            {/* CTA Button + Mobile Menu Toggle */}
                            <div className="flex items-center gap-4">
                                <Link href="/#booking" className="hidden md:block">
                                    <MagneticButton className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-glow hover:shadow-glow-lg transition-all duration-300">
                                        Contattaci
                                    </MagneticButton>
                                </Link>

                                {/* Mobile Menu Button */}
                                <button
                                    onClick={() => setMobileMenuOpen(true)}
                                    className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
                                        }`}
                                >
                                    <Menu className={`w-6 h-6 ${scrolled ? "text-gray-700" : "text-gray-700"}`} />
                                </button>
                            </div>
                        </div>
                    </motion.header>

                    {/* Mobile Menu */}
                    <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

                    {/* ─── Main Content ─── */}
                    <main className="min-h-screen bg-background text-foreground selection:bg-primary-200 selection:text-primary-900">
                        {children}
                    </main>

                    {/* ─── Footer ─── */}
                    <footer className="relative py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />

                        {/* Floating Decorative Elements */}
                        <div className="absolute top-10 right-10 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl animate-float" />
                        <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float-delayed" />

                        <div className="container mx-auto px-6 relative z-10">
                            <div className="grid md:grid-cols-4 gap-12 mb-16">
                                {/* Brand Column */}
                                <div className="md:col-span-2">
                                    <div className="relative w-40 h-12 mb-6">
                                        <Image
                                            src="/AlSolved_Lyceum/logo-transparent.png"
                                            alt="Lyceum Fisioterapia"
                                            fill
                                            className="object-contain object-left"
                                        />
                                    </div>
                                    <p className="text-gray-500 max-w-sm leading-relaxed">
                                        Il punto di incontro tra riabilitazione avanzata e cura della persona.
                                        Benvenuti nel futuro della fisioterapia.
                                    </p>
                                </div>

                                {/* Links Column */}
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">
                                        Link Rapidi
                                    </h4>
                                    <ul className="space-y-3">
                                        {navLinks.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className="text-gray-500 hover:text-primary-600 transition-colors"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Contact Column */}
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">
                                        Contatti
                                    </h4>
                                    <ul className="space-y-3 text-gray-500">
                                        <li>Via Torri in Sabina 20</li>
                                        <li>00199 Roma (RM)</li>
                                        <li className="pt-2">
                                            <a href="tel:+393491119147" className="hover:text-primary-600 transition-colors">
                                                +39 349 111 9147
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Bottom Bar */}
                            <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                                <p className="text-xs text-gray-400 uppercase tracking-widest">
                                    © 2026 Lyceum Fisioterapia. Tutti i diritti riservati.
                                </p>
                                <div className="flex gap-6">
                                    <a href="#" className="text-xs text-gray-400 hover:text-primary-600 transition-colors uppercase tracking-wide">
                                        Privacy Policy
                                    </a>
                                    <a href="#" className="text-xs text-gray-400 hover:text-primary-600 transition-colors uppercase tracking-wide">
                                        Cookie Policy
                                    </a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </SmoothScroll>
            </body>
        </html>
    );
}
