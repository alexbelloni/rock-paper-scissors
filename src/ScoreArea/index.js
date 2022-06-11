import './styles.css';
import logoImg from '../assets/logo.svg';

export const ScoreArea = ({ onClose, points }) => {
    return (
        <div className='score-area'>
            <div className='border'>
                <div className='logo'>
                    <img alt="" src={logoImg} />
                </div>
                <div className='score'>
                    <span className='title'>SCORE</span>
                    <span className='points'>{points}</span>
                </div>
            </div>

        </div>
    )
}

export default ScoreArea;