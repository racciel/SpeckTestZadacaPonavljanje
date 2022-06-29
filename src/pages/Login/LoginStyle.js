import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";


export const Forma = styled(Form) `
    width: 60%;
    margin: 0 auto;
    background-color: gray;
    display: flex;
    flex-direction: column;
    padding: 2%;
    border-radius: 12px;
`;

export const FormRow = styled.div `
    margin-bottom: 2%;
    &:last-child {
        margin-bottom: 0;
    }
`;

export const Polje = styled(Field) `
    margin: 2% 0;
    width: 100%;
    border: 2px solid brown;
`;

export const Poruka = styled(ErrorMessage) `
    color: red;
`;

export const Labela = styled.label `
    color: wheat;
`;