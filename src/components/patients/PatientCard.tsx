import { Patient } from "@/types/patient";

type PatientCardProps = {
    patient: Patient;
};

export default function PatientCard({
  patient,
}: PatientCardProps) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
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
  );
}