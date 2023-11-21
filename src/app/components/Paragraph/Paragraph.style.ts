import { lato } from "@/styles/globalStyles";
import styled from "styled-components";

export const StyledP = styled.p`
    font-family: ${lato.style.fontFamily};
    color: ${props => props.color};
    font-size: 20px;
    font-weight: 600;
`