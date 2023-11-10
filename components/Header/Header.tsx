'use client';

import styles from './Header.module.scss';
import LogoIcon from './logo.svg';
import AuthBtn from '../AuthBtn/AuthBtn';
import AuthPopup from '../AuthPopup/AuthPopup';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);

    const handleOpenAuthPopup = () => {
        setIsAuthPopupOpen(true);
    };

    const handleCloseAuthPopup = () => {
        setIsAuthPopupOpen(false);
    };

    return (
        <header>
            <div className={styles.container}>
                <LogoIcon />
                <AuthBtn handleOpenAuthPopup={handleOpenAuthPopup} />
                <AuthPopup
                    isOpen={isAuthPopupOpen}
                    onClose={handleCloseAuthPopup}
                />
            </div>
        </header>
    );
};

export default Header;
