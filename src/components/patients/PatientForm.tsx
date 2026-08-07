"use client";
import { useState } from "react";
import { Patient } from "@/types/patient";
import Button from "../ui/Button";

type PatientFormProps = {
    onSave: (patient: Patient) => void;
};

export default function PatientForm({
    onSave,
}: PatientFormProps) {
    const [patient, setPatient] = useState<Patient>({
        name: "",
        age: 0,
        goal: "",
    });

    const handleChange = (field: string, value: string) => {
        setPatient({
            ...patient,
            [field]: value,
        });
    };

    const handleSubmit = () => {
        onSave(patient);
    };

    return (
        <form className="space-y-4">
            
            <div>
                <label className="mb-1 block font-medium">
                    Nombre
                </label>

                <input 
                    type="text" 
                    value={patient.name}
                    onChange={(e) => 
                        handleChange("name",e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 p-3" 
                />
            </div>

            <div>
                <label className="mb-1 block font-medium">
                    Edad
                </label>

                <input 
                    type="text" 
                    value={patient.age}
                    onChange={(e) => 
                        handleChange("age",e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 p-3"
                />
            </div>

            <div>
                <label className="mb-1 block font-medium">
                    Objetivo
                </label>

                <input 
                    type="text" 
                    value={patient.goal}
                    onChange={(e) => 
                        handleChange("goal",e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 p-3"    
                />
            </div>

            <div className="mt-6 flex justify-end gat-3">
                    <Button variant="secondary">
                        Cancelar
                    </Button>

                    <Button onClick={handleSubmit}>
                        Guardar
                    </Button>
            </div>
        </form>
    );
}