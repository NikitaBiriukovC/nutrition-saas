type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
    children,
    variant = "primary",
}:ButtonProps){
    const styles = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-slate-400 hover:bg-slate-300 text-slate-900",
    };

    return (
        <button className={`mt-10 rounded-2xl px-6 py-3 transition ${styles[variant]}`}>
            {children}
        </button>
    );
}