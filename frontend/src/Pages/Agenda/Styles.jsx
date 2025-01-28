import styled from "styled-components";

export const section = styled.section`
    height: auto;
    margin-top: 10px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    gap: 10px;
    width: 95%;
    font-family: Poppins, serif;
    font-weight: 400;
    padding-bottom: 20px;

    @media (min-width: 768px) { 
        flex-direction: row;

        .fc {
            width: 100%;
            height: 100%;
        }
    }
`

