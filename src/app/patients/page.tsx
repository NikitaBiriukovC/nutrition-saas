import MainLayout from "@/components/layout/MainLayout";

export default function PatientsPage() {
    return (
        <MainLayout>
            <h1 className="text-4xl font-bold">
                Pacientes
            </h1>

            <p className="mt-4 text-slate-600">
                Aqui aparecera la lista de pacientes.
            </p>
        </MainLayout>
    )
}