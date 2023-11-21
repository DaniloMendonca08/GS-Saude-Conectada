import { StyledButton } from "./Button.style"

interface ButtonProps {
    texto: string,
    color: string,
    borderColor: string,
    textColor: string,
}

const Button = ({ texto, color, borderColor, textColor }: ButtonProps) => {
    return (
        <StyledButton color = {color} borderColor = {borderColor}  textColor = {textColor}>{texto}</StyledButton>
    )
}

export default Button