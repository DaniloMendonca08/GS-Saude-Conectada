"use client"

import { DivError } from "@/app/components/BodyNotFound/BodyNotFound.style"
import Paragraph from "@/app/components/Paragraph/Paragraph"
import TagA from "@/app/components/TagA/TagA"
import Title from "@/app/components/Title/Title"

const Erro500 = () => {
    return (
    <DivError>
        <Title texto={"Erro 500"} color={""} />
        <Paragraph texto={"Encontramos algum problema em nosso servidor, aguarde um pouco que voltará em breve."} color={""} />
        <TagA texto={"Volte para a home"} fonte={"/"} />
    </DivError>
    )
}

export default Erro500