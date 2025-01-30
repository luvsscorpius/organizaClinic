import styled from "styled-components";

export const ButtonContainer = styled.div`
    width: 100%;
    font-family: Poppins, serif;

    span {
        display: flex;
        align-items: center;
        padding: 20px;
    }

    span:hover {
        cursor: pointer;
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
        background-color: #15babc;
        border-radius: 5px;
        color: #fff;
        height: 35px;
        margin-bottom: 10px;
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


`