import React from 'react';

import {Container} from './styles';

import Background from '~/components/Background';

export default function SelectDateTime() {
  return (
    <Background>
      <Container>a</Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = {
  title: 'Selecione o horário',
};
