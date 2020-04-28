import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129; /**nos adiantando pra borda vermelha de erro */
  padding: 16px;
  width: 100%;

  color: #666360; /**deixar os ícones com a mesma cor do placeholder */
  display: flex; /**centralizar icone e input na mesma altura */
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1; /**input estica, ocupando toda a área disponível */
    background: transparent; /**input deixa de ser branco */
    border: 0; /**input perde a borda */
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px; /**descola ícone do texto*/
    /** caso não tenha ícone no input, não teremos margem */
  }
`;
