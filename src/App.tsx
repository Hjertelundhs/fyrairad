import './App.css';
import GameBoard from 'src/components/GameBoard';
import React from 'react';

const App: React.FunctionComponent = ():JSX.Element => {

  return (
    <div>
      <h1>Fyra i rad</h1>
      <GameBoard/>
    </div>
  );
}

export default App;
