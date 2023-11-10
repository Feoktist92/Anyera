import { motion } from 'framer-motion';
import styles from './AuthBtn.module.scss';
import UserIcon from './user-icon.svg';
import MenuIcon from './menu-icon.svg';

interface AuthBtnProps {
    handleOpenAuthPopup: () => void;
}
const AuthBtn: React.FC<AuthBtnProps> = ({ handleOpenAuthPopup }) => {
    return (
        <button onClick={handleOpenAuthPopup} className={styles.root}>
            <MenuIcon className={styles.menuIcon} />
            <UserIcon className={styles.userIcon} />
        </button>
    );
};

export default AuthBtn;
