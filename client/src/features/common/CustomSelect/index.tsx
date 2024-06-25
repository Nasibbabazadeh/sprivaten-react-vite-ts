interface CustomSelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
  error: string;
  touched: boolean;
  placeholder: string;
  disabledOption: string;
}

export default function CustomSelect({
  label,
  name,
  options,
  onChange,
  disabledOption,
}: Partial<CustomSelectProps>) {
  return (
    <div className="flex flex-col gap-[12px]">
      <label
        htmlFor={name}
        className="text-xs  text-text-color font-semibold tracking-[0.2px]"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        onChange={onChange}
        className="py-[15px] px-[21px] rounded-[5px]  border-muted-color bg-input-bg text-second-text-color text-sm tracking-[0.2px] "
      >
        <option value="select option" disabled selected>
          {disabledOption}
        </option>
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
