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
  }

  section {
    padding: 1rem;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      padding: 2rem;
    }
  }

  a {
    text-decoration: none;
  }
`;
