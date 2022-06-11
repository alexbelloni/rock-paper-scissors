import './App.css';
import GamePage from './GamePage';
import RulesPage from './RulesPage';
import ScoreArea from './ScoreArea';
import React, { useState } from 'react';

function App() {
  const [isOpenRules, setIsOpenRules] = useState(false);
  const [points, setPoints] = useState(0);

  return (
    <div className="App">
      {!isOpenRules ? <>
        <ScoreArea points={points} />
        <GamePage addPoints={p => points + p >= 0 && setPoints(points + p)} />
        <div className='btn-rules'>
          <span onClick={() => setIsOpenRules(true)}>RULES</span>
        </div>
      </> : <RulesPage onClose={() => setIsOpenRules(false)} />}
      <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://alexandrebelloni.com">Alexandre Alves</a>.
    </div>
    </div>
  );
}

export default App;
