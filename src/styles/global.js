import { createGlobalStyle } from 'styled-components';
import Roboto from '../fonts/Roboto-Regular.ttf';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format('ttf');
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  p {
    font-family: Roboto;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
