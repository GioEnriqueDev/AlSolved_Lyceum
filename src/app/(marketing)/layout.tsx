"use client";

import { Inter } from "next/font/google";
import "../globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { MagneticButton } from "@/components/reactbits/MagneticButton";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#servizi", label: "Servizi" },
    { href: "/dove-siamo", label: "Dove Siamo" },
    { href: "/chi-siamo", label: "Chi Siamo" },
];

// ─── Mobile Menu ───
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 md:hidden shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>

                        <div className="flex flex-col h-full pt-20 px-6">
                            <nav className="flex flex-col gap-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={onClose}
                                        className="py-3 px-4 rounded-lg text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-colors font-medium"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-auto mb-8">
                                <Link href="/#booking" onClick={onClose}>
                                    <div className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-bold text-center text-sm">
                                        Prenota Ora
                                    </div>
                                </Link>
                            </div>
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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileMenuOpen]);

    return (
        <html lang="it">
            <body className={inter.className}>
                <SmoothScroll>
                    {/* ─── Header ─── */}
                    <header
                        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                                ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
                                : "bg-transparent"
                            }`}
                    >
                        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-18 flex justify-between items-center">
                            {/* Logo */}
                            <Link href="/" className="flex items-center">
                                <div className="relative w-32 h-10 sm:w-40 sm:h-12">
                                    <Image
                                        src="/AlSolved_Lyceum/logo-transparent.png"
                                        alt="Lyceum Fisioterapia"
                                        fill
                                        className="object-contain object-left"
                                        priority
                                    />
                                </div>
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`text-sm font-medium transition-colors ${scrolled ? "text-gray-600 hover:text-primary-600" : "text-gray-700 hover:text-primary-600"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            {/* CTA + Mobile Toggle */}
                            <div className="flex items-center gap-3">
                                <Link href="/#booking" className="hidden md:block">
                                    <MagneticButton className="px-5 py-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow">
                                        Contattaci
                                    </MagneticButton>
                                </Link>

                                <button
                                    onClick={() => setMobileMenuOpen(true)}
                                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <Menu className="w-5 h-5 text-gray-700" />
                                </button>
                            </div>
                        </div>
                    </header>

                    <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

                    {/* ─── Main Content ─── */}
                    <main className="min-h-screen bg-white text-gray-900">
                        {children}
                    </main>

                    {/* ─── Footer ─── */}
                    <footer className="py-16 bg-gray-50 border-t border-gray-100">
                        <div className="container mx-auto px-4 sm:px-6">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                                {/* Brand */}
                                <div className="sm:col-span-2 lg:col-span-1">
                                    <div className="relative w-32 h-10 mb-4">
                                        <Image
                                            src="/AlSolved_Lyceum/logo-transparent.png"
                                            alt="Lyceum"
                                            fill
                                            className="object-contain object-left"
                                        />
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                        Riabilitazione avanzata e cura della persona dal 1998.
                                    </p>
                                </div>

                                {/* Links */}
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 mb-4">Link Rapidi</h4>
                                    <ul className="space-y-2">
                                        {navLinks.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Contact */}
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 mb-4">Contatti</h4>
                                    <ul className="space-y-2 text-sm text-gray-500">
                                        <li>Via Torri in Sabina 20</li>
                                        <li>00199 Roma (RM)</li>
                                        <li className="pt-1">
                                            <a href="tel:+393491119147" className="hover:text-primary-600 transition-colors">
                                                +39 349 111 9147
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Hours */}
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 mb-4">Orari</h4>
                                    <ul className="space-y-2 text-sm text-gray-500">
                                        <li>Lun - Ven: 09:00 - 19:00</li>
                                        <li>Sab - Dom: Chiuso</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Bottom */}
                            <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <p className="text-xs text-gray-400">
                                    © 2026 Lyceum Fisioterapia. Tutti i diritti riservati.
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="text-xs text-gray-400 hover:text-primary-600 transition-colors">
                                        Privacy Policy
                                    </a>
                                    <a href="#" className="text-xs text-gray-400 hover:text-primary-600 transition-colors">
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
