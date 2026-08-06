import { ReactNode } from "react";

type PageHeaderProps = {
    title: string,
    description: string;
    children?: ReactNode;
};

export default function PageHeader({
    title,
    description,
    children,   
}: PageHeaderProps) {
    return (
        <div className="mb-8 flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold">
                    {title}
                </h1>

                <p className="mt-2 text-slate-600">
                    {description}
                </p>
            </div>

            {children}
        </div>
    );
}