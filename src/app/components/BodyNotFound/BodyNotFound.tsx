import Link from "next/link"
import Paragraph from "../Paragraph/Paragraph"
import { StyledA } from "../TagA/TagA.style"
import Title from "../Title/Title"
import { DivError } from "./BodyNotFound.style"



const NotFound = () => {
    return (
        <DivError>
        <Title texto={"Ocorreu um problema."} color={""} />
        <Paragraph texto={"Não conseguimos encontrar o que estava procurando."} color={""} />
        <StyledA>
            <Link href="/">Voltar para home</Link>
        </StyledA>
        </DivError>
    )
}

export default NotFound