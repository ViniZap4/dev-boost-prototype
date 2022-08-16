import React from 'react';

//imporring Global Styles
import GlobalStyle from '../Styles/global';
import AnimationsStyles from '../Styles/animations';

import AppRouter from '../Router'

const App: React.FC = () => {
  return (<>
      <AnimationsStyles /> 
      <GlobalStyle />
      <AppRouter />
    </>);
}

export default App;