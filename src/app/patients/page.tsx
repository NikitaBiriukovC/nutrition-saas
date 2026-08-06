"use client";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import { patients } from "@/data/patients";
import SearchInput from "@/components/ui/SearchInput";
import { useState } from "react";
import PatientCard from "@/components/patients/PatientCard";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import PatientForm from "@/components/patients/PatientForm";
import { Patient } from "@/types/patient";

export default function PatientsPage() {
    const [search, setSearch] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleSavePatient = (patient: Patient) => {
        console.log(patient);
        setIsModalOpen(false);
    };
    const filteredPatients = patients.filter((patient) => {
        return patient.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
        <MainLayout>
            <PageHeader
                title="Pacientes"
                description="Gestiona todos tus pacientes"
            >
                <Button onClick={() => setIsModalOpen(true)}>
                    Nuevo paciente
                </Button>
            </PageHeader>

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

                {filteredPatients.map((patient) => (
                <PatientCard
                    key={patient.id}
                    patient={patient}
                />
                ))}
            </div>

            <Modal
                isOpen={isModalOpen}
                title="Nuevo paciente"
                onClose={() => setIsModalOpen(false)}
            >
                <PatientForm onSave={handleSavePatient}/>
            </Modal>
        </MainLayout>
    )
}