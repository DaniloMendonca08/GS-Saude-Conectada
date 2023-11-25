import { colors } from "@/styles/colors";
import styled from "styled-components";

export const DivCadastro = styled.div`
    border: 5px solid ${colors.primary.grayStartingFooter};
    border-radius: 10px;
    padding: 50px;
    width: 20%;
    display: grid;
    gap: 5px;
    margin: 2vh auto 5vh auto;
`

export const ContainerCadastro = styled.div`
    text-align: center;
    background-color: ${colors.primary.lightBlue};
    padding: 2vh 0;
`