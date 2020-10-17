import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html, body, div, p {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: var(--color__letter);
    background-color: var(--color__page);
  }

  :root {
    --size__header--height: 3.5rem;
    --color__primary: ${props=> props.theme.color.primary};
    --color__page: ${props=> props.theme.color.page};
    --color__letter: ${props=> props.theme.color.letter};
    --color__letter--strong: ${props=> props.theme.color.letterStrong};
  }

`;

export default GlobalStyles;