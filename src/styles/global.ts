import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue-900: #1d3557;
        --blue-700: #457b9d;
        --blue-400: #a8dadc;
        --blue-200: rgba(168,218,220, .3);
        --blue-100: rgba(168, 218, 220, .2);

        --dark: #191923;

        -warning: #e63946; 
        --background: #EAF1F5;
        --shapes: #FFFFFF;
        --text-title: #3D3D4D;
        --text: #1C1C29;
        --text-light: #666;
    }
  
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 
  
    body {
        background-color: var(--shapes);
        font: 16px "Poppins", Arial, sans-serif;
        color: #121214;

        min-height: 100vh;
    }
  
    input, textarea {
        font-family: "Poppins";
    }
  
    button, .checkmark {
        cursor: pointer;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    .app-container{
        display: flex;
        width: 100vw;
        height: 100vh;
        padding: 1rem .5rem;
    }

    .content-container{
        width: 1200px;
        height: 100%;
        align-self: center;

        border-radius: 1.8rem;
        background-color: var(--blue-200);
    }
`;