import styled from "styled-components";

interface MenuItemProps {
    isSelected?: "true" | "false";
}

export const Container = styled.div`
    width: 300px;
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    margin: 0;
    float: left;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    background-color: var(--blue);
`;

export const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;

    margin-bottom: 2rem;

    img {
        width: 40px;
    }

    h2 {
        color: var(--dark);
        font-size: 1.5rem;
        font-weight: 500;
    }
`;

export const Menu = styled.ul`
    width: 100%;
    list-style-type: none;

   
`
export const MenuItem = styled.li<MenuItemProps>`

    height: 3.5rem;
    line-height: 3.5rem;
    padding: 0 .5rem;

    border-radius: .6rem;

    background-color: ${ ({ isSelected }) =>  (isSelected === "true") ? "var(--blue-100)" : "none"};

    a{
        color: ${ ({ isSelected }) =>  (isSelected === "true") ? "var(--blue-900)" : "var(--text-light)"};
        font-weight: 400;
        font-size: 1.1rem;

        display: flex;
        align-items: center;

        transition: color .25s;

        &:hover{
            color: #000;

        }
    }

    svg{
        font-size: 2rem;
        margin-right: 1rem;
        width: 22px;
        
    }
`;
;