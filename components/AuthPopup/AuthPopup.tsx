import { useEffect, useState } from 'react';
import CloseIcon from './close-icon.svg';
import styles from './AuthPopup.module.scss';

interface AuthPopupProps {
    isOpen: boolean;
    onClose: () => void;
}
const AuthPopup: React.FC<AuthPopupProps> = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleLogin = () => {
        if (!username || !password) {
            alert('Please enter a username and password');
            return;
        }
    };

    return (
        <div
            className={`${styles.overlay} ${styles.animated} ${
                isOpen ? `${styles.show}` : ''
            } ${isOpen ? '' : styles.closing}`}
        >
            <div className={styles.wrap}>
                <div className={styles.modal}>
                    <CloseIcon className={styles.close} onClick={onClose} />
                    <div className={styles.form}>
                        <h2 className={styles.title}>Вход</h2>
                        <input
                            className={styles.login}
                            type='text'
                            placeholder='Введите e-mail или телефон'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            className={styles.password}
                            type='password'
                            placeholder='Введите пароль'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className={styles.remember}>
                            <label>
                                <input
                                    type='checkbox'
                                    checked={remember}
                                    onChange={() => setRemember(!remember)}
                                />
                                Запомнить меня
                            </label>
                            <a href='#'>Забыли пароль?</a>
                        </div>
                        <button className={styles.btn} onClick={handleLogin}>
                            Войти
                        </button>
                        <p className={styles.register}>
                            Нет аккаунта? <a href='#'>Регистрация</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPopup;
