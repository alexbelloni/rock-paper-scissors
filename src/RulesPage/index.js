import './styles.css';
import closeImg from '../assets/icon-close.svg';
import Board from '../Board';

export const RulesPage = ({onClose}) => {
    return (
        <div className='rules-page'>
            <span className='title'>RULES</span>
            <Board forRules />
            <div className='close'>
                <img alt="" src={closeImg} onClick={onClose}/>
            </div>
        </div>
    )
}

export default RulesPage;