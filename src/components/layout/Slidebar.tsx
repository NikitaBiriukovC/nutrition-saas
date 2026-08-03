import {
    LayoutDashboard,
    Users,
    Calendar,
    Apple,
    Settings,
} from "lucide-react";

export default function Sidebar(){
    return (
        <aside className="flex h-full w-64 flex-col border-r bg-white p-6">
            <h2 className="mb-8 text-xl font-bold text-slate-900">
                Menú
            </h2>

            <nav className="flex flex-col gap-3">
                <button className="flex items-center gap-3 rounded-lg p-3 text-left hover:bg-slate-100">
                    <LayoutDashboard size={20} />
                    Dashboard
                </button>

                <button className="flex items-center gap-3 rounded-lg p-3 text-left hover:bg-slate-100">
                    <Users size={20} />
                    Pacientes
                </button>

                <button className="flex items-center gap-3 rounded-lg p-3 text-left hover:bg-slate-100">
                    <Calendar size={20} />
                    Citas
                </button>

                <button className="flex items-center gap-3 rounded-lg p-3 text-left hover:bg-slate-100">
                    <Apple size={20} />
                    Dietas
                </button>

                <button className="flex items-center gap-3 rounded-lg p-3 text-left hover:bg-slate-100">
                    <Settings size={20} />
                    Configuración
                </button>
            </nav>
        </aside>
    );
}