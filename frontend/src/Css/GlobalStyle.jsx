import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #f2f2f2;
    height: 100vh;
  }

  @media (max-width: 768px) {
     .toast-container {
        .Toastify__toast {
            width: 90%;
            margin: 0 auto;
            border-radius: 5px;
            margin-top: 5px;
        }
    }
`;
