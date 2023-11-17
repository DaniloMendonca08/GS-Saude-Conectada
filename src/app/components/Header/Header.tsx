"use client"

import logo from "../../../assets/logoSaude.png"
import Image from "next/image"
import Menu from "../Menu/Menu"
import Title from "../Title/Title"
import { ContainerHeader, DivTitleLogo, StyledHeader } from "./Header.style"
import { colors } from "@/styles/colors"

export const Header = () => {
    return (
        <StyledHeader>
            <ContainerHeader>
                <Menu />
                <DivTitleLogo>
                    <Title texto="Saúde Conectada" color={colors.primary.grayBlue}/>
                    <Image src={logo} alt="Logo da Saúde Conectada"/>
                </DivTitleLogo>
            </ContainerHeader>
        </StyledHeader>
    )
}