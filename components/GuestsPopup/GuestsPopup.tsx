import React from 'react';
import styles from './GuestsPopup.module.scss';

interface GuestsPopupProps {
    isOpen: boolean;
    guests: { adults: number; children: number };
    setGuests: (guests: { adults: number; children: number }) => void;
    guestsText: string;
    setGuestsText: (guestsText: string) => void;
}

const GuestsPopup: React.FC<GuestsPopupProps> = ({
    isOpen,
    guests,
    setGuests,
    guestsText,
    setGuestsText,
}) => {
    const decreaseAdults = () => {
        if (guests.adults > 0) {
            const newGuests = { ...guests, adults: guests.adults - 1 };
            setGuestsText(
                `${newGuests.adults} взрослых, ${newGuests.children} детей`
            );
            setGuests(newGuests);
        }
    };

    const increaseAdults = () => {
        const newGuests = { ...guests, adults: guests.adults + 1 };
        setGuestsText(
            `${newGuests.adults} взрослых, ${newGuests.children} детей`
        );

        setGuests(newGuests);
    };

    const decreaseChildren = () => {
        if (guests.children > 0) {
            const newGuests = { ...guests, children: guests.children - 1 };
            setGuestsText(
                `${newGuests.adults} взрослых, ${newGuests.children} детей`
            );
            setGuests(newGuests);
        }
    };

    const increaseChildren = () => {
        const newGuests = { ...guests, children: guests.children + 1 };
        setGuestsText(
            `${newGuests.adults} взрослых, ${newGuests.children} детей`
        );
        setGuests(newGuests);
    };

    return (
        <div className={`${styles.popup} ${isOpen ? styles.open : ''}`}>
            <div className={styles.content}>
                <div className={styles.item}>
                    <p>Взрослые</p>
                    <div className={styles.counter}>
                        <button onClick={decreaseAdults}>-</button>
                        {guests.adults}
                        <button onClick={increaseAdults}>+</button>
                    </div>
                </div>
                <div className={styles.item}>
                    <p>Дети</p>
                    <div className={styles.counter}>
                        <button onClick={decreaseChildren}>-</button>
                        {guests.children}
                        <button onClick={increaseChildren}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GuestsPopup;
