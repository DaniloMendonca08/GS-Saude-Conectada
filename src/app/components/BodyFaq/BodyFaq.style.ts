import { colors } from "@/styles/colors";
import styled from "styled-components";

export const DivContainer = styled.div`
    background-color: ${colors.primary.cream};
    text-align: center;
    padding: 2vh 0;
`

export const CardFaq = styled.div`
    margin: 0 auto;
    padding: 2vh;
    width: 25%;
    background-color: #B4BDFF;
    border-radius: 20px;
    margin-top: 2vh;
`

export const H2Title = styled.h2`
    margin-bottom: 20px;
    font-weight: 700;
    text-shadow: 2px 2px 4px ${colors.primary.blueEndingHeader};
`

export const StyledLink = styled.a`
    font-size: 20px;
    font-weight: 700;
`