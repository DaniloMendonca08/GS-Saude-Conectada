import { colors } from "@/styles/colors"
import Button from "../Button/Button"
import Paragraph from "../Paragraph/Paragraph"
import Title from "../Title/Title"
import { DivButtons, DivText, StyledDiv } from "./BodyPagPrincipal.style"

const BodyPagPrincipal = () => {
    return (
        <StyledDiv>
            <DivText>
                <Title texto={"Plataforma"} color={""} />
                <Paragraph texto={"Com o Saúde Conectada, visamos criar uma plataforma abrangente que capacite os usuários a gerenciar proativamente sua saúde e a saúde de seus filhos, aproveitando as vantagens da tecnologia para criar uma comunidade de apoio e aprendizado mútuo."} color={""} />
            </DivText>
            <DivButtons>
                <Button texto={"Cadastro"} color={colors.primary.blueEndingHeader} borderColor={colors.primary.grayBlue} textColor={colors.primary.grayBlue}  />
                <Button texto={"Login"} color={colors.primary.grayStartingFooter} borderColor={colors.primary.blueEndingHeader} textColor={colors.primary.blueEndingHeader}  />
            </DivButtons>
        </StyledDiv>

    )
}

export default BodyPagPrincipal
