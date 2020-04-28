import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImage from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh; /**100% do viewport height */
  display: flex;
  align-items: stretch; /* tanto o Content quanto o Background terão 100% do viewport */
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  form {
    margin: 80px 0; /**margem superior/inferior */
    width: 340px; /**diminui os inputs */
    text-align: center; /*e agora sim centralizou essa joça*/

    h1 {
      margin-bottom: 24px;
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
    color: #f4ede8;
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
      color: ${shade(0.3, '#f4ede8')};
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImage}) no-repeat center;
  background-size: cover;
`;
