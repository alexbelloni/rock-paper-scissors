import './styles.css';
import paperImg from '../assets/icon-paper.svg';
import scissorImg from '../assets/icon-scissors.svg';
import rockImg from '../assets/icon-rock.svg';

export const Option = ({ disabled, onClick, optionName }) => {
    return (
        <div className={`option ${optionName} ${disabled && 'disabled'} ${onClick && 'clickable'} ${!optionName && 'unknown'}`} onClick={()=>onClick && onClick(optionName)} >
            <img alt="" src={optionName === 'paper' ? paperImg : (optionName === 'rock' ? rockImg : (optionName === 'scissor' ? scissorImg : null))} />
        </div>
    )
}

export default Option;