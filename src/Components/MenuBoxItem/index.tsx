import React from 'react';

import { Container } from './styles';



type Props = {
  children?:JSX.Element|JSX.Element[] | any[];
}
const MenuBoxItem: React.FC<Props> = ({
  children
}) => {
  return (
    <Container> 
      {children}
    </Container>
  );
}

export default MenuBoxItem;