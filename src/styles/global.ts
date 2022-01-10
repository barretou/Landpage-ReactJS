import { createGlobalStyle } from "styled-components";
import backgroundBodyImg from "../assets/body-bg.png";

export const GlobalStyle = createGlobalStyle`

    :root{
        --shape-color: #ffffff;
        --gold-color: #CB8F55;
        --brow-color: #7B573F;
        --black-color: #161616;
        --container: 
    }

    @font-face {
    font-family: 'Gilroy Extra';
    src: url('../fonts/Gilroy-ExtraBold.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    }

    @font-face {
    font-family:'Gilroy Light';
    src: url('../fonts/Gilroy-Light.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    p{
        padding: 0;
        margin: 0;
        letter-spacing: 1px;
    }

    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }       
    }

    body{
        margin: 0;
        padding: 0;
        background-image: url(${backgroundBodyImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        -webkit-font-smoothing: antialiased;
        background-color: #161616;
        width: 100vw;
        overflow-x: hidden;
    }
    body, input, textarea, button{
        font-family: 'Gilroy Light', sans-serif;
        font-weight: 400;
    }

    body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
    }

    body::-webkit-scrollbar-track {
    background: #000000;        /* color of the tracking area */
    }

    body::-webkit-scrollbar-thumb {
    background-color: var(--gold-color);    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    /* border: 3px solid var(--gold-color);  creates padding around scroll thumb */
    }

    h1,h2,h3,h4,h5,h6,strong{
        font-family: 'Gilroy Extra', sans-serif;
        color: var(--shape-color);
        font-weight: 600;
    }


    button{ 
        cursor: pointer;

    }
    [disable]{
        opacity: 0.6;
        cursor: not-allowed;
    }

`;
