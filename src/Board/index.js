import './styles.css';
import paperImg from '../assets/icon-paper.svg';
import scissorImg from '../assets/icon-scissors.svg';
import rockImg from '../assets/icon-rock.svg';
import Option from '../Option';

export const Board = ({ forRules, onPicked }) => {
    return (
        <div className='board-container'>
            <div className='triangle'>
                <Option optionName='paper' onClick={onPicked} disabled={forRules} />

                <Option optionName='scissor' onClick={onPicked} disabled={forRules} />
 
                <Option optionName='rock' onClick={onPicked} disabled={forRules} />

                <div className={`direction scissor ${!forRules && 'hidden'}`}>
                    <span className='beats'>BEATS</span><br />
                    <div className='divarrow'>
                        <span className='arrow'></span>
                    </div>
                </div>

                <div className={`direction paper ${!forRules && 'hidden'}`}>
                    <span className='beats'>BEATS</span><br />
                    <div className='divarrow'>
                        <span className='arrow'></span>
                    </div>
                </div>
                
                <div className={`direction rock ${!forRules && 'hidden'}`}>
                    <div className='divarrow'>
                        <span className='arrow'></span>
                    </div>
                    <span className='beats'>BEATS</span>
                </div>
            </div>
        </div>


    )
}

export default Board;