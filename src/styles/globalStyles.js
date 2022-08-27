import { createGlobalStyle } from "styled-components";
import { THEME } from './theme';


export const GlobalStyle = createGlobalStyle`

    *,
    *::after,
    *::before{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }

    body {
        margin: 0;
        font-family: ${THEME.fonts.body};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace;
        }


`;