import React from 'react';
import { MainMenu } from './components/MainMenu';
import { Home } from './components/Home';
import { Bg } from './components/Bg';
import { FreeConsult } from './components/FreeConsult';

function App() {
  return (
    <>
      <MainMenu />
      <Home />
      <Bg />
    <FreeConsult/>
    </>
  );
}

export default App;
