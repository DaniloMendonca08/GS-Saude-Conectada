import { StyledA } from "./TagA.style"

interface TagAProps {
    texto: string,
    fonte: string
}

const TagA = ({ texto, fonte }: TagAProps) => {
    return (
        <StyledA href={fonte} target="blank">{texto}</StyledA>
    )
}

export default TagA