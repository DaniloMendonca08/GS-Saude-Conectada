import { StyledButton } from "./Button.style"

interface ButtonProps {
    texto: string,
    color: string,
    bordercolor: string,
    textcolor: string,
    onClick?: () => void,
    disabled?: boolean
}

const Button = ({ texto, color, bordercolor, textcolor, onClick, disabled }: ButtonProps) => {
    return (
        <StyledButton color = {color} bordercolor = {bordercolor}  textcolor = {textcolor} onClick={onClick} disabled={disabled}>{texto}</StyledButton>
    )
}

export default Button