import styled from 'styled-components'

export const navContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
`

export const titleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
`

export const Nav = styled.nav`
    width: 95%;
    height: 70px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        margin: 0;
        padding: 0;
        gap: 5px;
        padding: 5px;
        
        span {
            width: 100%;
            height: 35px;
            border-radius: 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }

        .active {
            color: #15babc;
            background-color: #eee;
        }

        li {
            list-style: none;
        }

        span:hover {
            cursor: pointer;
            opacity: 0.7;
            transition: 0.3s ease-in-out;
            color: #15babc;
        }
    }
`