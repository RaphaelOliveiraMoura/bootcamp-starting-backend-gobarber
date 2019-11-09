import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logoPurple from '~/assets/logo-purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logoPurple} alt="GoBarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Raphael de Oliveira</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Raphael de Oliveira"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
