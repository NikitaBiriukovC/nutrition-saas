export default function Home(){
  return(
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900">
          Nutrition Saas
        </h1>

        <p className="mt-4 text-xl text-slate-600">
          Software profesional para nutricionistas
        </p>

        <button className="mt-10 rounded-2xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
          Comenzar
        </button>

        <p className="mt-6 text-sm text-slate-500">
          Version 0.1.0
        </p>
      </div>
    </main>
  );
}