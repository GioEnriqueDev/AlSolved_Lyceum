import { Activity, Users, FileText } from "lucide-react"

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary">Dashboard</h2>
                <p className="text-muted-foreground">Panoramica completa delle attività odierne.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Stats Cards */}
                <div className="p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-muted-foreground">Pazienti Oggi</h3>
                        <Users className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="text-3xl font-bold text-primary">12</div>
                    <p className="text-xs text-muted-foreground mt-1">+2 rispetto a ieri</p>
                </div>

                <div className="p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-muted-foreground">Appuntamenti Pendenti</h3>
                        <Activity className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="text-3xl font-bold text-primary">4</div>
                    <p className="text-xs text-muted-foreground mt-1">Richiedono azione immediata</p>
                </div>

                <div className="p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-muted-foreground">Referti da Firmare</h3>
                        <FileText className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="text-3xl font-bold text-primary">7</div>
                    <p className="text-xs text-muted-foreground mt-1">Aggiornato 10 min fa</p>
                </div>
            </div>

            {/* Recent Activity / Calendar Placeholder */}
            <div className="grid gap-6 md:grid-cols-2">
                <div className="p-6 bg-white rounded-xl border shadow-sm h-64 flex items-center justify-center text-muted-foreground">
                    [Grafico Pazienti Settimanali]
                </div>
                <div className="p-6 bg-white rounded-xl border shadow-sm h-64 flex items-center justify-center text-muted-foreground">
                    [Ultimi Appuntamenti]
                </div>
            </div>
        </div>
    );
}
