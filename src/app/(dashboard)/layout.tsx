import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { User, Calendar, Home, LogOut } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Lyceum - Dashboard",
    description: "Area Riservata Professionisti",
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="it">
            <body className={`${inter.className} flex h-screen overflow-hidden bg-gray-50/50`}>
                {/* Sidebar */}
                <aside className="w-64 bg-white border-r hidden md:flex flex-col">
                    <div className="p-6 border-b flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">L</div>
                        <h2 className="text-xl font-bold text-primary">Lyceum <span className="text-secondary font-light">Pro</span></h2>
                    </div>
                    <nav className="flex-1 p-4 space-y-2">
                        <a href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary border border-primary/20">
                            <Home className="w-4 h-4" />
                            Panoramica
                        </a>
                        <a href="/prenotazioni" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                            <Calendar className="w-4 h-4" />
                            Prenotazioni
                        </a>
                    </nav>
                    <div className="p-4 border-t">
                        <a href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-red-50 text-muted-foreground hover:text-red-600 transition-colors">
                            <LogOut className="w-4 h-4" />
                            Disconnetti
                        </a>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 flex flex-col overflow-y-auto w-full">
                    <header className="h-16 border-b bg-white flex items-center justify-between px-6 sticky top-0 z-10">
                        <h1 className="text-lg font-semibold text-foreground">Benvenuto, Dottore</h1>
                        <div className="flex items-center gap-4">
                            <span className="text-xs text-muted-foreground bg-slate-100 px-2 py-1 rounded">v1.0.0</span>
                            <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shadow-sm ring-2 ring-white">
                                <User className="w-4 h-4" />
                            </div>
                        </div>
                    </header>
                    <div className="p-6 max-w-6xl mx-auto w-full">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
