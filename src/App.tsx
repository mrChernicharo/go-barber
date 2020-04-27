import React from 'react';

import SignIn from './pages/SignIn'; // Olha esse import! NÃO é './pages/SignIn/index'
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    {/* <h1>Hello World</h1> */}
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
