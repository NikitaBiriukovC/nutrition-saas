type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
    children,
    variant = "primary",
    onClick,
    type = "button",
}:ButtonProps){
    const styles = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-slate-200 hover:bg-slate-300 text-slate-900",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`rounded-2xl px-6 py-3 transition ${styles[variant]}`}
        >
            {children}
        </button>
    );
}