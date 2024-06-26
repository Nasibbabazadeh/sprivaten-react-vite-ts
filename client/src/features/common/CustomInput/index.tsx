interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error: any;
}

export default function CustomInput({ label, id, error, ...props }: Partial<InputProps>) {
  return (
    <div className="flex flex-col gap-[12px]">
      <label htmlFor={id} className="text-xs text-text-color font-semibold tracking-[0.2px]">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="py-[11px] px-[21px] rounded-[5px] border-muted-color border-[1px] bg-input-bg placeholder:text-sm placeholder:tracking-[0.2px] placeholder:text-second-text-color focus:outline-none"
      />
      {error && <span className="text-xs text-error-primary font-bold">{error}</span>}
    </div>
  );
}
