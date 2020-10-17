import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      page: string;
      letter: string;
      letterStrong: string;
    }
  }
}
