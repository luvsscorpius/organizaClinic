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

    .fc {
        width: 100%;
        height: 100%;
    }

    .fc-toolbar.fc-header-toolbar {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .fc-toolbar-chunk {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .fc-toolbar.fc-header-toolbar .fc-left {
        order: 3;
    }
    .fc-toolbar.fc-header-toolbar .fc-center {
        order: 1;
    }
    .fc-toolbar.fc-header-toolbar .fc-right {
        order: 2;
    }

    @media (min-width: 768px) { 
        flex-direction: row;

        .fc {
            width: 100%;
            height: 100%;
        }

        .fc-toolbar.fc-header-toolbar {
            display: flex;
            flex-direction: row;
        }
    }

    @media (min-width: 1024px) {
        width: 950px;

        .fc {
            width: 100%;
            height: 100%;
        }

        .fc-toolbar.fc-header-toolbar {
            display: flex;
            flex-direction: row;
            width: 100%;
        }
    }
`

