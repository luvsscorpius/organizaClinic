import styled from "styled-components";

export const ButtonContainer = styled.div`
    width: 100%;
    font-family: Poppins, serif;
    background-color: ${(props) => props.theme.colors.primaryColor};
    color: #eee;
    border-radius: 10px 10px 0 0;

    span {
        display: flex;
        align-items: center;
        padding: 20px;
    }

    span:hover {
        cursor: pointer;
        transition: 0.9s ease-in-out;
        opacity: 0.8;
    }
`

export const formContainer = styled.div`
    width: 100%;
    height: 100%;

    form {
        height: 100%;
    }
`

export const titleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
    
    h1 {
        font-size: 22px;
    }
`

export const inputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    button {
        width: 95%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${(props) => props.theme.colors.primaryColor};
        border-radius: 5px;
        color: #fff;
        height: 35px;
        margin-bottom: 10px;
    }

    .inputContainerItem {
        padding: 10px;
        display: flex;
        gap: 10px;
        width: 100%;

        input {
            border: 1px solid #ddd;
            width: 100%;
            height: 40px;
            padding: 10px;
        }
    }

    @media (min-width: 768px) {
        button {
            width: 97.5%;
        }
    }

    
    @media (min-width: 1024px) {
        button {
            width: 98%;
        }
    }
`