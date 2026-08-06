type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export default function Button({
    children,
    variant = "primary",
    onClick,
}:ButtonProps){
    const styles = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-slate-200 hover:bg-slate-300 text-slate-900",
    };

    return (
        <button
            onClick={onClick}
            className={`rounded-2xl px-6 py-3 transition ${styles[variant]}`}
        >
            {children}
        </button>
    );
}