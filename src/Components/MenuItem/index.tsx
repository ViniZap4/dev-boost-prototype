import React, { useEffect, useRef, useState } from 'react';

import { Container } from './styles';

type Props ={
  title?: string,
  icon?: string,
}

const MenuItem: React.FC<Props> = ({
  title,
  icon
}) => {

  return (
    <Container >
      <button  data-title={title} className="taskButton">
        <div className="iconBox">
          <img src={icon} alt="icon" />
        </div>
        <span className='title'> {title} </span>
      </button>
    </Container>
  );
}

export default MenuItem;