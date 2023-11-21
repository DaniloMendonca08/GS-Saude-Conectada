import { colors } from "@/styles/colors"
import styled from "styled-components"

export const StyledFooter = styled.footer`
    display: flex;
    gap: 20px;
    background: linear-gradient(to right, ${colors.primary.grayStartingFooter}, ${colors.primary.grayEndingFooter});
    padding: 4vh;
`

export const FooterCard = styled.div`
    text-align: center;
    width: 20%;
    padding: 1vh 0;
    border: 2px solid ${colors.primary.blueEndingHeader};
    border-radius: 10px;
    background: #ABB2CC;

`