import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/go_barber_logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Go Barber" />

      <form>
        <h1>Faça seu Login</h1>

        <input placeholder="Email" />

        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="forgoten">Esqueci a minha senha</a>
      </form>

      <a href="SignUp">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>
    <Background />
  </Container>
);
export default SignIn;
