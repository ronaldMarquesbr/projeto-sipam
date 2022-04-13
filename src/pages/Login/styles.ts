import styled from "styled-components";
import backgroundImg from "../../assets/background.webp";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    /* background-color: var(--blue-900); */
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
`; 

export const LoginCard = styled.div`
    width: 500px;
    padding: 1rem 2rem 5rem 2rem;

    border-radius: 1rem;
    background-color: var(--background);
    box-shadow: 0 2px .5rem .3rem rgba(0,0,0,.1);
`;

export const Form = styled.form`

    & > div {
        display: flex;
        flex-direction: column;

        & ~ div {
            margin-top: 1rem;
        }
    }

    label {
        font-weight: 500;
        margin-bottom: .2rem;
        color: var(--text-title);
    }

    input{
        width: 100%;
        height: 3rem;

        text-indent: 0.3rem;
        font-size: 1.1rem;

        border: solid 1px rgba(0,0,0,.5);
        border-radius: .3rem;
        outline: none;
        transition: all .3s;

        &:focus{
            border-color: var(--blue-700);
            box-shadow: 0 0 0 .15rem var(--blue-400);
        }
    }

    button {
        width: 100%;
        height: 3rem;

        margin-top: 1.5rem;

        border: none;
        border-radius: .3rem;
        background-color: var(--blue-700);
        color: var(--shapes);
        font-weight: 500;
        font-size: 1rem;

        transition: filter .25s;

        &:hover{
            filter: brightness(.9)
        }
    }
`;

export const Brand = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 1rem 0 2rem 0;
    

    img {
        width: 50px;
    }

    h2{
        font-size: 3rem;
        margin-left: 1rem;
    }
`;