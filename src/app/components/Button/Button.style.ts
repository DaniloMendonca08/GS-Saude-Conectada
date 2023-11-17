import { lato } from "@/styles/globalStyles"
import styled from "styled-components"

export const StyledButton = styled.button`
    font-family: ${lato.style.fontFamily};
    background-color: ${props => props.color};
    border: 2px solid ${props => props.borderColor};
    color: ${props => props.textColor};
    font-size: 18px;
    padding: 5px;
    cursor: pointer;
`