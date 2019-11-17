import React from 'react';

// import { Container } from './styles';

import Background from '~/components/Background';

import Input from '~/components/Input';
import Button from '~/components/Button';

export default function SIgnIn() {
  return (
    <Background>
      <Input />
      <Button>Entrar</Button>
    </Background>
  );
}
