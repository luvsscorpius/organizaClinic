import styled from 'styled-components'

export const navContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    font-family: Poppins, serif;
`

export const titleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    background-color:  ${(props) => props.theme.colors.primaryColor};
    width: 95%;
    color: #eee;
    border-radius: 10px 10px 0px 0px;
    height: 50px;

    @media (min-width: 768px) {
        h1 {
            font-size: 22px;
        }
    }

    @media (min-width: 1024px) {
        width: 950px;
    }
`

export const Nav = styled.nav`
    width: 95%;
    height: 70px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        margin: 0 auto;
        font-size: 14px;
        font-weight: 500;
        padding: 8px 12px;
        gap: 10px;
        
        span {
            width: 90%;
            padding: 3px;
            height: 50px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5px;
            transition: all 0.3s ease-in-out;
        }

        .active {
            color: #eee;
            background-color: ${(props) => props.theme.colors.primaryColor};
        }

        li {
            list-style: none;
        }
    }

    @media (min-width: 768px) {
        padding: 10px;

        ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            margin: 0;
            gap: 3px;
            font-size: 15px;
            width: 950px !important;
            font-weight: 500;
        
        span {
            width: 20%;
            height: 35px;
            border-radius: 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }
    }
}

    @media (min-width: 1024px) {
	    width: 950px;

        ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            margin: 0;
            gap: 3px;
            font-size: 15px;
            width: 950px !important;
            font-weight: 500;
        
        span {
            width: 20%;
            height: 35px;
            border-radius: 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }

        span:hover {
            cursor: pointer;
            opacity: 0.7;
            transition: 0.3s ease-in-out;
            color:${(props) => props.theme.colors.primaryColor};
        }
    }
}
`