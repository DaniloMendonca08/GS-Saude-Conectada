import { StyledH2 } from "./H2Title.style"

interface H2TitleProps {
    texto: string
}

const H2Title = ({ texto }: H2TitleProps) => {
    return (
        <StyledH2>{texto}</StyledH2>
    )
}

export default H2Title