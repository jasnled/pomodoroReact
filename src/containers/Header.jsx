import React from 'react';
import '../style/header.scss';

const Header = () => {
    return (
    <div className='menu-container'>
        <nav className = "menu">
            <div className = "menu-item">
                <img src="../assets/icons/icon_menu.svg" alt="menu"/>
            </div>
            <div className = "menu-item">pomodoro</div>
        </nav>
    </div>
    );
}

export default Header;