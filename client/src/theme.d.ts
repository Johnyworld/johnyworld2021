import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      page: string;
      letter: string;
      letterStrong: string;
    },
    size: {
      tiny: number;
      small: number;
      regular: number;
      medium: number;
      large: number;
      big: number;
      huge: number;
    },
  }
}
