import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft color="#fff" size={36} />
        </button>
        <strong>31 de maio</strong>
        <button type="button">
          <MdChevronRight color="#fff" size={36} />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Raphael de Oliveira</span>
        </Time>
        <Time>
          <strong>09:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time available>
          <strong>10:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Em aberto</span>
        </Time>
      </ul>
    </Container>
  );
}
