import { motion } from 'framer-motion';
import LogoIcon from './img/footer-logo.svg';
import WhatsappIcon from './img/Whatsapp.svg';
import VKIcon from './img/VK.svg';
import TelegramIcon from './img/Telegram.svg';
import EmailIcon from './img/Email.svg';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <LogoIcon />
                    <p className={styles.text}>
                        Аренда жилья и автомобилей от владельцев
                    </p>
                </div>
                <div className={styles.social}>
                    <div className={styles.links}>
                        <a href='#' target='_blank' rel='noreferrer'>
                            <WhatsappIcon />
                        </a>
                        <a href='#' target='_blank' rel='noreferrer'>
                            <VKIcon />
                        </a>
                        <a href='#' target='_blank' rel='noreferrer'>
                            <TelegramIcon />
                        </a>
                        <a href='#' target='_blank' rel='noreferrer'>
                            <EmailIcon />
                        </a>
                    </div>
                    <a
                        className={styles.politics}
                        href='#'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Политика конфеденциальности
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
