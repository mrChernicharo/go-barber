import React from 'react';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { Container, Header, HeaderContent, Profile } from './styles';
import logoImg from '../../assets/go_barber_logo.svg';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src="https://avatars0.githubusercontent.com/u/52944886?s=400&u=848be9ef8d675be4453d7254cdeae48bfcfe848a&v=4"
              alt="Felipe Chernicharo"
            />
            <div>
              <span>Bem-vindo</span>
              <strong>Felipe Chernicharo</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
