import styled from "styled-components";

export const buttonContainer = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    gap: 10px;
    font-family: Poppins, serif;

    .buttonSpan {
        width: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding: 5px;
        background-color: #15babc;
        border-radius: 5px;
        color: #fff;
        margin-right: 10px;
        height: 35px;
    }

    .searchSpan {
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        height: 35px;
        margin-left: 10px;

        input[type=search] {
            border: 1px solid #ccc;
            width: 100%;
            padding-left: 23px;
            border-radius: 5px;
            height: 100%;

            &:focus {
                outline: none;
            }
        }

        svg {
            position: absolute;
            left: 5px;
            color: #aaa;
        }
    }

    span:hover {
        cursor: pointer;
    }

    .buttonSpan:active {
        transform: scale(0.95)
    }
`

export const tableContainer = styled.div`
    border: 1px solid red;
    width: 100%;
    height: 100%;
    padding: 10px;
    overflow-x: auto;

   .tdIcons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5px;

    a {
        border: 1px solid #ddd;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border-radius: 5px;
    }
   }
`