import { colors } from "@/styles/colors";
import styled from "styled-components";

export const ContainerLogin = styled.div`
    background-color: ${colors.primary.lightBlue};
    text-align: center;
    height: 76vh;
    padding: 2vh;
`

export const DivLogin = styled.div`
    border: 5px solid ${colors.primary.grayStartingFooter};
    border-radius: 10px;
    padding: 50px;
    width: 20%;
    display: grid;
    gap: 5px;
    margin: 7vh auto 5vh auto;
`

export const StyledLabel = styled.label`
    color: ${colors.primary.blueEndingHeader};
    font-size: 18px;
    font-weight: 700;
    margin-top: 20px;
`

export const StyledInput = styled.input`
   border: 2px solid ${colors.primary.grayStartingFooter};
`

export const DivAttLogin = styled.div`
    margin-top: 4vh;
`