import React, { useState, useMemo } from 'react';
import format from 'date-fns/format';
import subDays from 'date-fns/subDays';
import addDays from 'date-fns/addDays';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft color="#fff" size={36} />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
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
