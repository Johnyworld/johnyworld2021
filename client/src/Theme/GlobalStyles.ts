import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html, body, div, p {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--color__page);
  }

  :root {
    --color__primary: ${props=> props.theme.color.primary};
    --color__page: ${props=> props.theme.color.page};
  }

`;

export default GlobalStyles;