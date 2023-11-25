import { colors } from "@/styles/colors";
import styled from "styled-components";

export const DivHome = styled.div`
    background-color: ${colors.primary.lightBlue};
    text-align: center;
    padding: 4vh 0;
    height: 68.6vh;
`

export const DivGrid = styled.div`
    margin-top: 20px;
    display: grid;
    justify-content: center;
    gap: 20px;
`


export const StyledTagA = styled.a`
    margin-top: 60px;
    border: 2px solid ${colors.primary.grayBlue};
    border-radius: 10px;
    background-color: ${colors.primary.blueEndingHeader};
    color: ${colors.primary.grayBlue};
    width: 70%;
    padding: 12px;

`