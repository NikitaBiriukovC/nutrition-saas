export default function Header(){
    return (
        <header className="flex items-center justify-between border-b bg-white px-8 py-4">
            <h1 className="text-2xl font-bold text-slate-900">
                Nutrition Saas
            </h1>

            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-300">

                    <span className="font-medium text-slate-700">
                        Nikita
                    </span>
                </div>
            </div>
        </header>
    );
}