import React from 'react'

interface ButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    handleClick: (event: React.MouseEvent<HTMLElement>) => void
}

export default function CustomButton({ handleClick, children, ...restProps }: Partial<ButtonProps>) {
    return (
        <button onClick={handleClick} {...restProps}>
            {children}
        </button>
    )
}
