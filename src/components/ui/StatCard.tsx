import { ReactNode } from "react";

type StatCardProps = {
    title: string;
    value: number;
    icon: ReactNode
};

export default function StatCard({
    title,
    value,
    icon,
}: StatCardProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-700">
                    {title}
                </h2>

                {icon}
            </div>

            <p className="mt-6 text-4xl font-bold text-slate-900">
                {value}
            </p>
        </div>
    );
}