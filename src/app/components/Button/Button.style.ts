import { lato } from "@/styles/globalStyles"
import styled, { keyframes } from "styled-components"

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;
interface ButtonProps {
  bordercolor: string,
  textcolor: string
}

export const StyledButton = styled.button<ButtonProps>`
    font-family: ${lato.style.fontFamily};
    background-color: ${props => props.color};
    border: 2px solid ${props => props.bordercolor};
    border-radius: 5px;
    color: ${props => props.textcolor};
    font-size: 18px;
    padding: 5px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
    animation: ${scaleAnimation} 0.8s ease-in-out;
  }

`