import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

export const Container = styled.div`
  position: absolute; /* position:absolute + right/top: 0 => container lá no alto */
  right: 0;
  top: 0;
  padding: 30px; /* faz uma margem em relação à window */
  overflow: hidden;
`;

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #3172b7;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Toast = styled.div<ToastProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }
  button {
    position: absolute; /**o absolute sozinho faz o botão ir pro canto superior esquerdo... */
    right: 16px; /* cola o botão no canto direito */
    top: 20px; /* margenzinha pro topo do container */
    opacity: 0.7;
    border: 0;
    background: transparent; /*sem isso fica um background quadradão */
    color: inherit; /*substitui a cor cinza padrão pelo color #3172b7 */
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
