import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImage from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh; /**100% do viewport height */
  display: flex;
  align-items: stretch; /* tanto o Content quanto o Background terão 100% do viewport */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  /* justify-content: center;*/
  align-items: center;
  place-content: center; /** faz o mesmo que justify-content e align-items */

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0; /**margem superior/inferior */
    width: 340px; /**diminui os inputs */
    text-align: center; /*e agora sim centralizou essa joça*/

    h1 {
      margin-bottom: 24px;
    }
    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129; /**nos adiantando pra borda vermelha de erro */
      padding: 16px;
      width: 100%;
      color: #f4ede8;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }
    button {
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 2px solid #232129; /**nos adiantando pra borda vermelha de erro */
      padding: 0 16px;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.3s;

      &:hover {
        background: ${shade(0.3, '#ff9000')};
      }
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.3, '#f4ede8')};
      }
    }
  }
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.3, '#ff9000')};
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImage}) no-repeat center;
  background-size: cover;
`;
