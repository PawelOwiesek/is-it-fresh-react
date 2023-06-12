import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
  box-sizing: border-box;
}

*,
::after::before {
  box-sizing: inherit;
}

body {
  max-width: 1000px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  margin-top: 25px;
  font-family: "Lato", "sans-serif";
}

@media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
  body {
    flex-basis: 80%;
    word-wrap: break-word;
  }
}

`;
