"use client"

import { colors } from "@/styles/colors"
import Button from "../Button/Button"
import Paragraph from "../Paragraph/Paragraph"
import Title from "../Title/Title"
import { DivButtons, DivText, StyledDiv } from "./BodyPagPrincipal.style"
import { useRouter } from "next/navigation"

const BodyPagPrincipal = () => {

    const router = useRouter()

    const handleRegister = () => {
        router.push("/cadastro")
    }

    const handleLogin = () => {
        router.push("/login")
    }

    return (
        <StyledDiv>
            <DivText>
                <Title texto={"Plataforma"} color={""} />
                <Paragraph texto={"Com o Saúde Conectada, visamos criar uma plataforma abrangente que capacite os usuários a gerenciar proativamente sua saúde e a saúde de seus filhos, aproveitando as vantagens da tecnologia para criar uma comunidade de apoio e aprendizado mútuo."} color={""} />
            </DivText>
            <DivButtons>
                <Button texto={"Cadastro"} color={colors.primary.blueEndingHeader} bordercolor={colors.primary.grayBlue} textcolor={colors.primary.grayBlue}  onClick={handleRegister}/>
                <Button texto={"Login"} color={colors.primary.grayStartingFooter} bordercolor={colors.primary.blueEndingHeader} textcolor={colors.primary.blueEndingHeader}  onClick={handleLogin}/>
            </DivButtons>
        </StyledDiv>

    )
}

export default BodyPagPrincipal
