import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
body {
  background: #312E38;
  color: #FFF;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  box-shadow: 0;
  transition: 0;
  transition-delay: 0;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}
button {
  cursor: pointer;
}
  input:-webkit-autofill,
  input:-webkit-box-shadow,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0px 1000px #232129 inset;
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }


`;
