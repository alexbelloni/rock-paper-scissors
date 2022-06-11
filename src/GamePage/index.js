import './styles.css';
import Board from '../Board';
import Picked from '../Picked';
import React, { useState } from 'react';

export const GamePage = ({addPoints}) => {
    const [optionName, setOptionName] = useState();

    return (
        <div className='game-page'>
            {!optionName ? <Board onPicked={optionName=>setOptionName(optionName)}/> : <Picked optionName={optionName} addPoints={addPoints} onPlayAgainClick={()=>setOptionName()}/>}
        </div>
    )
}

export default GamePage;