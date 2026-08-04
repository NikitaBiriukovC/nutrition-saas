"use client";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import { patients } from "@/data/patients";
import SearchInput from "@/components/ui/SearchInput";
import { useState } from "react";

export default function PatientsPage() {
    const [search, setSearch] = useState("");
    const filteredPatients = patients.filter((patient) => {
        return patient.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
        <MainLayout>
            <PageHeader
                title="Pacientes"
                description="Gestiona todos tus pacientes."
            />

            <div className="mb-6">
                <SearchInput 
                placeholder="Buscar paciente..." 
                value={search}
                onChange={setSearch}
                />
            </div>

            <div className="space-y-4">
                {filteredPatients.length == 0 && (
                    <p className="mb-4 text-center text-slate-500">
                        No se han encontrado pacientes.
                    </p>
                )}  

                {filteredPatients.map((patient) =>(
                    <div
                    key={patient.id} 
                    className="rounded-xl border bg-white p-4 shadow-sm"
                    >
                        <h2 className="text-lg font-semibold">
                            {patient.name}
                        </h2>

                        <p className="text-slate-600">
                            Edad: {patient.age}
                        </p>

                        <p className="text-slate-600">
                            Objetivo: {patient.goal}
                        </p>
                    </div>
                ))}
            </div>
        </MainLayout>
    )
}