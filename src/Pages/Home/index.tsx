import React from 'react';

import { Container } from './styles';

const Home: React.FC = () => {
  console.log(process.env)
  return (
    <Container>
      Bem vindo ao Dev boost!
    </Container>
  );
}

export default Home;