import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImage from '../../assets/sign-in-background.png';

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
  justify-content: center;
`;
const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    margin: 80px 0; /**margem superior/inferior */
    width: 340px; /**diminui os inputs */
    text-align: center; /*e agora sim centralizou essa joça*/

    animation: ${appearFromRight} 1s;

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
  background: url(${signInBackgroundImage}) no-repeat center;
  background-size: cover;
`;
