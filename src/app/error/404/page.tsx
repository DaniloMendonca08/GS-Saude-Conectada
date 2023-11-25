"use client"

import { DivError } from "@/app/components/BodyNotFound/BodyNotFound.style"
import Paragraph from "@/app/components/Paragraph/Paragraph"
import TagA from "@/app/components/TagA/TagA"
import Title from "@/app/components/Title/Title"


const Erro404 = () => {
    return (
        <DivError>
            <Title texto={"Erro 404"} color={""} />
            <Paragraph texto={"Não conseguimos encontrar o recurso que você estava procurando. Tente novamente ou volte para o início caso deseje"} color={""} />
            <TagA texto={"Volte para a home"} fonte={"/"} />
        </DivError>
    )
} 

export default Erro404