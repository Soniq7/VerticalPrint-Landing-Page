import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        overflow-y: scroll;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        line-height: 1.5;
        font-family: 'Ubuntu', sans-serif;
        background: ${({ theme }) => theme.colors.alto};
        color: ${({ theme }) => theme.colors.black};
        overflow-wrap: anywhere;
        padding-bottom: 100px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
