
import { lato } from "@/styles/globalStyles"
import styled from "styled-components"

export const StyledTitle = styled.h1`
    font-family: ${lato.style.fontFamily};
    color: ${props => props.color}
`   