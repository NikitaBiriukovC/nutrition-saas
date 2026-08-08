"use client";

import { useState } from "react";
import { Patient } from "@/types/patient";
import Button from "../ui/Button";

type PatientFormProps = {
    onSave: (patient: Patient) => void;
    onCancel: () => void;
};

export default function PatientForm({
    onSave,
    onCancel,
}: PatientFormProps) {
    const [patient, setPatient] = useState({
        name: "",
        age: 0,
        goal: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        age: "",
        goal: "",
    });

    const handleChange = (field: string, value: string | number) => {
        setPatient({
            ...patient,
            [field]: value,
        });
    };

    const validatePatient = () => {
        const newErrors = {
            name: "",
            age: "",
            goal: "",
        };

        if (patient.name.trim() === "") {
            newErrors.name = "El nombre es obligatorio";
        }

        if (patient.age <= 0) {
            newErrors.age = "La edad debe ser mayor que 0";
        }

        if (patient.goal.trim() === "") {
            newErrors.goal = "El objetivo es obligatorio";
        }

        return newErrors;
    };

    const handleSubmit = () => {
        const newErrors = validatePatient();

        setErrors(newErrors);

        if (newErrors.name || newErrors.age || newErrors.goal) {
            return;
        }

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
                        handleChange("name", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 p-3"
                />

                {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.name}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-1 block font-medium">
                    Edad
                </label>

                <input
                    type="number"
                    value={patient.age}
                    onChange={(e) =>
                        handleChange("age", Number(e.target.value))
                    }
                    className="w-full rounded-xl border border-slate-300 p-3"
                />

                {errors.age && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.age}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-1 block font-medium">
                    Objetivo
                </label>

                <input
                    type="text"
                    value={patient.goal}
                    onChange={(e) =>
                        handleChange("goal", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 p-3"
                />

                {errors.goal && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.goal}
                    </p>
                )}
            </div>

            <div className="mt-6 flex justify-end gap-3">
                <Button variant="secondary" onClick={onCancel}>
                    Cancelar
                </Button>

                <Button onClick={handleSubmit}>
                    Guardar
                </Button>
            </div>

        </form>
    );
}