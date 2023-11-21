import styled from "styled-components";
import imgFamilia from "../../../assets/familia.jpg"

export const StyledDiv = styled.div`
    
    background-image: url(${imgFamilia.src});
    background-size: cover;
    background-position: center;
    height: 100vh;
`

export const DivText = styled.div`
    display: grid;
    grid-row-gap: 40px;
    text-align: center;
    padding-top: 20px;
`
export const DivButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    margin-top: 70vh;
    gap: 20px;

`