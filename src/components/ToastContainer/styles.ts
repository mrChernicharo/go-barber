import styled from 'styled-components';

export const Container = styled.div`
  position: absolute; /* position:absolute + right/top: 0 => container lá no alto */
  right: 0;
  top: 0;
  padding: 30px; /* faz uma margem em relação à window */
  overflow: hidden;
`;
