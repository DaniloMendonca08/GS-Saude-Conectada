import { StyledTitle } from "./Title.style"

interface TitleProps {
    texto: string,
    color: string
}

const Title = ({ texto, color }: TitleProps) => {
    return(
        <StyledTitle color = {color}>{texto}</StyledTitle>
    )
}

export default Title