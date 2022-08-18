import React from 'react';
import MenuBar from '../../Components/MenuBar';

import { Container } from './styles';

const Home: React.FC = () => {
  console.log(process.env)
  return (
    <Container>
      <header>
        
        <h1 className="welcome">
          Bem-vindo ao Dev Boost
        </h1>

      </header>
    
      <MenuBar />
    </Container>
  );
}

export default Home;