type SearchInputProps = {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
};

export default function SearchInput({
    placeholder,
    value,
    onChange,
}: SearchInputProps) {
    return (
        <input type="text" 
        placeholder={placeholder} 
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
    );
}