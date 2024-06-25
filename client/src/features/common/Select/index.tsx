import { SelectContainer, SelectLabel, SelectStyle } from './index.styled'

interface CustomSelectProps
    extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    label: string
    name: string
    options: string[]
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void
    error: string
    touched: boolean
    placeholder: string
    disabledOption: string
}

export default function CustomSelect({ label, name, options, onChange, disabledOption }: Partial<CustomSelectProps>) {
    return (
        <SelectContainer>
            <SelectLabel htmlFor={name}>{label}</SelectLabel>
            <SelectStyle id={name} name={name} onChange={onChange}>
                <option value="select option" disabled selected>
                    {disabledOption}
                </option>
                {options?.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </SelectStyle>
        </SelectContainer>
    )
}
