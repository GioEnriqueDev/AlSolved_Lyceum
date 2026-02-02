import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { MagneticButton } from "@/components/reactbits/MagneticButton";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Lyceum - Centro di Fisioterapia",
    description: "Riabilitazione e Ortopedia d'Eccellenza",
};

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="it">
            <body className={inter.className}>
                <SmoothScroll>
                    <header className="fixed top-0 w-full z-50 transition-all duration-300 glass-panel border-b-0 rounded-none bg-slate-950/80 backdrop-blur-md">
                        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
                            <Link href="/" className="flex items-center">
                                {/* Marketing Mindset: Larger, clearer logo establishing immediate authority */}
                                <div className="relative w-40 h-12 md:w-48 md:h-16 filter drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src="/AlSolved_Lyceum/logo-transparent.png"
                                        alt="Lyceum Fisioterapia"
                                        fill
                                        className="object-contain object-left md:object-center"
                                        priority
                                    />
                                </div>
                            </Link>
                            <nav className="space-x-8 hidden md:flex">
                                <Link href="/" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors hover:text-glow">Home</Link>
                                <Link href="/#servizi" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors hover:text-glow">I Nostri Servizi</Link>
                                <Link href="/dove-siamo" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors hover:text-glow">Dove Siamo</Link>
                                <Link href="/amministrazione" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors hover:text-glow">Amministrazione</Link>
                            </nav>
                            <Link href="/#booking">
                                <MagneticButton className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all text-[10px] font-bold uppercase tracking-widest backdrop-blur-md hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                    Contattaci
                                </MagneticButton>
                            </Link>
                        </div>
                    </header>
                    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-secondary selection:text-slate-950">
                        {children}
                    </main>
                    <footer className="py-12 bg-slate-950 border-t border-white/5 text-center text-xs text-slate-600">
                        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="uppercase tracking-widest">© 2026 Lyceum Fisioterapia</div>
                            <div className="flex gap-6">
                                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                            </div>
                        </div>
                    </footer>
                </SmoothScroll>
            </body>
        </html>
    );
}
