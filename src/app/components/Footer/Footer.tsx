import { colors } from "@/styles/colors"
import Paragraph from "../Paragraph/Paragraph"
import { FooterCard, StyledFooter } from "./Footer.style"

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterCard>
                <Paragraph texto="Arthur Lima Nascimento" color={colors.primary.blueEndingHeader} />
                <Paragraph texto="RM: 551054" color={colors.primary.blueEndingHeader} />
                <Paragraph texto="Turma: 1TDSPX" color={colors.primary.blueEndingHeader} />
                <Paragraph texto="Cargo: Project Owner" color={colors.primary.blueEndingHeader} />
            </FooterCard>
            <FooterCard>
                <Paragraph texto="Danilo Araújo Mendonça" color={colors.primary.blueEndingHeader} />
                <Paragraph texto="RM: 99752" color={colors.primary.blueEndingHeader} />
                <Paragraph texto="Turma: 1TDSPX" color={colors.primary.blueEndingHeader} />
                <Paragraph texto="Cargo: Project Owner" color={colors.primary.blueEndingHeader} />
            </FooterCard>
            <FooterCard>
                <Paragraph texto="Guilherme Romero Nogueira" color={colors.primary.blueEndingHeader} />
                <Paragraph texto="RM: 97696" color={colors.primary.blueEndingHeader} />
                <Paragraph texto="Turma: 1TDSPX" color={colors.primary.blueEndingHeader} />
                <Paragraph texto="Cargo: Project Owner" color={colors.primary.blueEndingHeader} />
            </FooterCard>
            <FooterCard>
                <Paragraph texto="Matheus Andrade da Silva" color={colors.primary.blueEndingHeader} />
                <Paragraph texto="RM: 98398" color={colors.primary.blueEndingHeader} />
                <Paragraph texto="Turma: 1TDSPX" color={colors.primary.blueEndingHeader} />
                <Paragraph texto="Cargo: Project Owner" color={colors.primary.blueEndingHeader} />
            </FooterCard>
            <FooterCard>
                <Paragraph texto="Rodrigo Gonçalves Teixeira" color={colors.primary.blueEndingHeader} />
                <Paragraph texto="RM: 99838" color={colors.primary.blueEndingHeader} />
                <Paragraph texto="Turma: 1TDSPX" color={colors.primary.blueEndingHeader} />
                <Paragraph texto="Cargo: Project Owner" color={colors.primary.blueEndingHeader} />
            </FooterCard>
        </StyledFooter>
    )
}