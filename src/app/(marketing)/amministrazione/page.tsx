export default function AmministrazionePage() {
    return (
        <div className="container mx-auto py-32 px-4">
            <h1 className="text-4xl font-bold text-white mb-8">Amministrazione Trasparente</h1>
            <div className="glass-panel p-8 rounded-xl space-y-4">
                <div className="border-b border-white/10 pb-4">
                    <h3 className="text-xl text-white font-bold">Bilancio 2025</h3>
                    <p className="text-slate-400 text-sm">Pubblicato il 12/01/2026</p>
                </div>
                <div className="border-b border-white/10 pb-4">
                    <h3 className="text-xl text-white font-bold">Carta dei Servizi</h3>
                    <p className="text-slate-400 text-sm">Aggiornamento Gennaio 2026</p>
                </div>
            </div>
        </div>
    );
}
