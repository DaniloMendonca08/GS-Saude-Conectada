"use client"

import Menu from "../Menu/Menu"
import { ContainerHeader, StyledHeader } from "./Header.style"

export const Header = () => {
    return (
        <StyledHeader>
            <ContainerHeader>
                <Menu />
            </ContainerHeader>
        </StyledHeader>
    )
}