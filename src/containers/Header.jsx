import React,{useContext} from 'react';
import '../style/header.scss';
import AppContext from '../context/AppContext';

const Header = () => {
    const { handleToggle } = useContext(AppContext);

    return (
    <div className='menu-container'>
        <nav className = "menu">
            <div className = "menu-item">
                pomodoro
            </div>
            <div className = "menu-item report" onClick={handleToggle}>report</div>
        </nav>
    </div>
    );
}

export default Header;