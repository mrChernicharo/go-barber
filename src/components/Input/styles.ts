import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129; /**borda mesma cor do input */
  padding: 16px;
  width: 100%;

  color: #666360; /**deixar os ícones com a mesma cor do placeholder */
  display: flex; /**centralizar icone e input na mesma altura */
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  /**Repare que temos centenas de props dentro de props. */
  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
