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

    .booked-day {
        background-color: ${(props) => props.theme.colors.primaryColor};
        color: white;
        border-radius: 100%;
    }   

    .daypicker {
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 10px;
    }

    @media (min-width: 768px) { 
        flex-direction: row;
    }

    @media (min-width: 1024px) {
	    width: 950px;
        gap: 0;
    }
`

export const Container = styled.div`
    width: 100%;
    margin-top: 20px;
    gap: 40px;
    height: 100%;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .titleContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    &.first {
        order: 1; 

        @media (min-width: 768px) {
            order: 2;

            span {
                h1 {
                    font-weight: 800;
                }
            }
        }

        @media (min-width: 1024px) {
            height: 100%;
        }
    }

    &.second {
        order: 2; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        @media (min-width: 768px) {
            order: 1; 
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .titleContainer {
                width: 85%;
                display: flex;
                justify-content: start;

                h1 {
                    font-weight: 800;
                }
            }
        }

        @media (min-width: 1024px) {
            .titleContainer {
                width: 100%;
                padding-left: 75px;
            }
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

    @media (min-width: 1024px) {
        .container-items {
            width: 350px;
        }
    }
`
