import { Lato } from "next/font/google";
import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle }
export const lato = Lato({subsets: ["latin"], weight: "300"})

const GlobalStyles = styled.createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
}
`

export default GlobalStyles