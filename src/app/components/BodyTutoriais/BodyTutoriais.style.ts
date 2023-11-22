import { colors } from "@/styles/colors";
import styled from "styled-components";

export const DivImgContent = styled.div`
    display: flex;
    margin-right: 10px;
`

export const DivCard = styled.div`
    display: grid;
    margin: 0 auto;
`

export const CardContent = styled.div`
    height: 90%;
    margin: 5px 0;
    padding: 12px;
    border: 2px solid ${colors.primary.grayEndingFooter};
`

export const DivLinks = styled.div`
    display: grid;
    gap: 5px;
`

export const TextContainer = styled.div`
    display: grid;
    gap: 10px;
    margin-bottom: 20px;
`