import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 1px solid red;
    }

    html {
        scroll-behavior: smooth;
        width: 100%;
        height: 100%;
        -webkit-text-size-adjust: 100%;
    }

    body {
        font-family: 'DM Sans', sans-serif;
        margin: 0;
    }

    h1 {
        color: #dc2428;
        font-weight: 700;
        font-size: 3rem;
    }

    h2 {
        font-size: 2.25rem;
        font-weight: 700;
        color: #dc2428;
        margin-bottom: 20px;
    }

    p {
        font-size: 20px;
        font-weight: 400;
        color: #2e2e2e;
    }

    a {
        color: #644b2c;
        text-decoration: none;
        cursor: pointer;
        &:hover {
            color: #dc2428;
        }
    }

    button {
        cursor: pointer;
    }
`;
