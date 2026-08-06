"use client";
import { useState } from "react";
import { Patient } from "@/types/patient";

type PatientFormProps = {
    onSave: (patient: Patient) => void;
};

export default function PatientForm({
    onSave,
}: PatientFormProps) {
    const [patient, setPatient] = useState<Patient>({
        name: "",
        age: "",
        goal: "",
    });

    const handleChange = (field: string, value: string) => {
        setPatient({
            ...patient,
            [field]: value,
        });
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

            <p className="text-sm text-slate-500">
  Nombre: {patient.name}
</p>

<p className="text-sm text-slate-500">
  Edad: {patient.age}
</p>

<p className="text-sm text-slate-500">
  Objetivo: {patient.goal}
</p>
        </form>
    );
}