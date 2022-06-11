import './styles.css';
import Option from '../Option';
import React, { useState, useEffect } from 'react';

export const Picked = ({ optionName, onPlayAgainClick, addPoints }) => {
    const [houseOption, setHouseOption] = useState();
    const [message, setMessage] = useState();

    useEffect(() => {
        setMessage('')
        setTimeout(() => {
            const i = Math.floor(Math.random() * 3);
            setHouseOption(i === 0 ? 'paper' : (i === 1 ? 'rock' : 'scissor'));
        }, 2000);
    }, [])

    useEffect(() => {
        function win() {
            addPoints(1);
            setMessage('YOU WIN');
        }
        function lose() {
            addPoints(-1);
            setMessage('YOU LOSE');
        }
        if (houseOption) {
            if (houseOption === optionName) {
                setMessage('DRAW')
            } else {
                switch (optionName) {
                    case 'paper': houseOption === 'rock' ? win() : lose()
                        break;
                    case 'rock': houseOption === 'scissor' ? win() : lose()
                        break;
                    case 'scissor': houseOption === 'paper' ? win() : lose()
                        break;
                }
            }
        }

    }, [houseOption])

    return (
        <div className='picked-container'>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className='picked'>
                    <div className='p-option'>
                        <Option optionName={optionName} />
                        <span>YOU PICKED</span>
                    </div>
                    <div className='p-option'>
                        <Option optionName={houseOption} />
                        <span>THE HOUSE PICKED</span>
                    </div>
                </div>
                <div>
                    {houseOption && message && <>
                        <span className='message'>{message}</span>
                        <div className='btn-playagain'>
                            <span onClick={() => onPlayAgainClick()}>PLAY AGAIN</span>
                        </div>
                    </>}
                </div>

            </div>
        </div>
    )
}

export default Picked;