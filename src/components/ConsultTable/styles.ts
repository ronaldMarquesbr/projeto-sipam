import styled from "styled-components";

interface StatusFieldProps {
    status: "andamento" | "vigor"
}

export const Table = styled.table`
    
    border-collapse: collapse;

    tbody{
        height: 2rem;
        vertical-align: baseline;
    }

    th{
        text-align: left;
        width: 200px;
    }

    td, th{
        padding: .7rem .5rem;
    }

    td{
        color: var(--text);
    }

    tbody{
        tr{
            border-top: solid 1px #d9d9d9;
        }
    }
`;

export const StatusField = styled.span<StatusFieldProps>`
    display: flex;
    align-items: center;

    width: fit-content;
    height: fit-content;
    padding: .2rem .4rem;
    
    background-color: ${({status}) => (status === "andamento") ? "var(--blue-200)" : "var(--warning-light)"};
    border-radius: 0.2rem;

    svg{
        font-size: .4rem;
        margin-right: .3rem;
        color: ${({status}) => (status === "andamento") ? "var(--blue-700)" : "var(--warning)"};
    }

`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    background-color: var(--shapes);
    
    min-height: 300px;
    max-width: fit-content;

    margin: 2rem auto;
    padding: 1rem;

    border-radius: .5rem;
    box-shadow: 0 0 3rem .5rem rgba(0,0,0,.05);
    background-color: #FFFF;

    h2 {
        font-weight: 500;
    }

    & > div:first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        margin: .8rem 0 1.2rem 0;
    }

    .table-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`;

export const SearchButton = styled.input`
    background-color: #F2F2F2;
    border: none;
    outline: 0;
    border-radius: 0.5rem;

    text-indent: 0.5rem;

    height: 2rem;
`;

export const Pagination = styled.div`
    color: var(--text-light);
    font-size: .9rem;
    font-weight: 400;

    margin: 1rem;

    span {
        background-color: var(--blue-700);
        color: var(--shapes);

        padding: 0.25rem .75rem;
        margin: 0 .5rem;

        border-radius: 0.5rem;
    }
`;

export const PrintButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0.6rem 1rem;

    background-color: transparent;
    color: var(--blue-700);
    font-weight: 400;
    font-size: .8rem;
    border-radius: 0.8rem;
    border: solid .12rem var(--blue-700);
    font-family: "Poppins", sans-serif;

    transition: all .25s;

    &:hover {
        background-color: var(--blue-700);
        color: var(--shapes);
    }

    svg{
        margin-left: .3rem;
        font-size: 1rem;
    }
`;