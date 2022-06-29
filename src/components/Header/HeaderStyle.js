import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigacija = styled.nav `
    background-color: red;
`;

export const Lista = styled.ul `
    list-style: none;
    display: flex;
`;

export const ListaItem = styled.li `
    padding: 2%;
`;

export const Linka = styled(Link)`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: white;
    text-decoration: none;
`;

