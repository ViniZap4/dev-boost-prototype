import React from 'react';

//imporring Global Styles
import GlobalStyle from '../Styles/global';

import AppRouter from '../Router'

const App: React.FC = () => {
  return (<>
      <GlobalStyle />
      <AppRouter />
    </>);
}

export default App;