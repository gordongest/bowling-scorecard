import React from 'react';
import BowlingProvider from "./client/contexts/Bowling.Context";
import Scorecard from './client/components/Scorecard';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <BowlingProvider>
            <Scorecard />
        </BowlingProvider>
    </div>
  );
}

export default App;
