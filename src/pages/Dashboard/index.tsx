import React, { useState } from 'react';
import { FiPower, FiLock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';
import logoImg from '../../assets/go_barber_logo.svg';

const Dashboard: React.FC = () => {
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>
          <NextAppointment>
            <strong>Próximo atendimento</strong>
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/52944886?s=400&u=848be9ef8d675be4453d7254cdeae48bfcfe848a&v=4"
                alt="Felipe Chernicharo"
              />
              <strong>Felipe Chernicharo</strong>
              <span>
                <FiLock />
                08:00
              </span>
            </div>
          </NextAppointment>
          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                08:00
                <FiLock />
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/52944886?s=400&u=848be9ef8d675be4453d7254cdeae48bfcfe848a&v=4"
                  alt="Felipe Chernicharo"
                />
                <strong>Felipe Chernicharo</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                08:00
                <FiLock />
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/52944886?s=400&u=848be9ef8d675be4453d7254cdeae48bfcfe848a&v=4"
                  alt="Felipe Chernicharo"
                />
                <strong>Felipe Chernicharo</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
