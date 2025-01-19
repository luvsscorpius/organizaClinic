import styled from "styled-components";

export const section = styled.section`
    height: 100vh;
    margin-top: 10px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const Container = styled.div`
    width: 100%;
    margin-top: 10px;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

       &.first {
        order: 1; /* Ordem padrão para o primeiro container */

        @media (min-width: 768px) {
            order: 2; /* Muda a ordem para resoluções maiores */
        }
    }

    &.second {
        order: 2; /* Ordem padrão para o segundo container */

        @media (min-width: 768px) {
            order: 1; /* Muda a ordem para resoluções maiores */
        }
    }
`

export const infoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    margin-top: 10px;

    .container-items {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 90%;

        .container-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background-color: #F3F4F6;
            width: 100%;
            border-radius: 10px;
            gap: 10px;
            padding: 10px;
            
            span {
                display: block;
            }
        }
    }

    .iconContainer {
        padding: 8px;
        border-radius: 90%;
        background-color: white;
    }
`
