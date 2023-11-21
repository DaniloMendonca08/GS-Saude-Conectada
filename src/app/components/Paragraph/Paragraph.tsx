import { StyledP } from "./Paragraph.style"

interface ParagraphProps {
    texto: string,
    color: string
}

const Paragraph = ({ texto, color }: ParagraphProps) => {
    return(
        <StyledP color={color}>{texto}</StyledP>
    )
}

export default Paragraph