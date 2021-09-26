import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

  html {
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    background: ${({ theme }) => theme.primaryDark};
    //overflow: hidden;
  }

  section {
    padding: 1rem;
    width: 100vw;
    min-height: calc(100vh - 50px);
    overflow: hidden;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  }

  h2 {
    font-size: 2rem;
    color: ${({theme}) => theme.colorTitle};
    text-align: center;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;
