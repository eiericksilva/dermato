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
        overflow-x: hidden;
        background-color: blue;
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
