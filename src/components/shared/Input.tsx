interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  maxLength?: number;
  data_test_cy: string | undefined;
}

export function Input({
  label,
  onChange,
  value,
  className,
  placeholder,
  type,
  maxLength,
  data_test_cy,
}: InputProps) {
  return (
    <div className=" flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <input
        data-test-cy={data_test_cy}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`${className} p-2 border transition duration-300 border-slate-200 rounded-md focus:outline-none focus:border-slate-500`}
      />
    </div>
  );
}
