import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  *::before,
  *::after,
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 10px;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    box-sizing: border-box;
    min-height: 100vh;
    flex-direction: column;
    height: 100%;
    line-height: 1.4rem;
    font-size: ${(props) => props.theme.appSize};
  }


  .MainApp{
    flex-grow: 1 auto;
  }

    h1,h2{
    }

    p {
      margin-bottom: 1.25rem;
    }

    ul,li{
      list-style: none;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.primary};
    }

    h1{
      font-size: 5rem;
    }

    h2{
      font-size: 4.4rem;
    }

    h3{
      font-size: 4rem;
    }

    h4{
      font-size: 3.3rem;
    }

    h5{
      font-size: 2.8rem;
    }

`;
