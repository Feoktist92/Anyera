'use client';

import styles from './Search.module.scss';
import SearchIcon from './search-icon.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import GuestsPopup from '../GuestsPopup/GuestsPopup';

interface CustomDatePickerProps {
    selected: Date | null;
    onChange: (date: Date) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
    selected,
    onChange,
}) => {
    return (
        <DatePicker
            selected={selected}
            onChange={onChange}
            startDate={new Date()}
            placeholderText='Когда'
            monthsShown={1}
            minDate={new Date()}
            dateFormat='dd.MM.yyyy'
        />
    );
};

const Search: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [guests, setGuests] = useState({ adults: 2, children: 0 });
    const [guestsText, setGuestsText] = useState('2 взрослых');
    const [isGuestsPopupOpen, setIsGuestsPopupOpen] = useState(false);
    const searchRef = useRef<HTMLLabelElement>(null);

    const handleOutsideClick = (e: MouseEvent) => {
        if (
            searchRef.current &&
            !searchRef.current.contains(e.target as Node)
        ) {
            setIsGuestsPopupOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('mousedown', handleOutsideClick);
        return () => {
            window.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className={styles.root}>
            <label className={styles.city}>
                <span>Город или адрес</span>
                <input type='text' placeholder='Куда едем' />
            </label>
            <label className={styles.arrive}>
                <span> Заезд</span>

                <CustomDatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                />
            </label>
            <label className={styles.depart}>
                <span> Отъезд</span>

                <CustomDatePicker
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                />
            </label>
            <label
                className={styles.popup__wrapper + ' ' + styles.guests}
                ref={searchRef}
                onClick={() => setIsGuestsPopupOpen(!isGuestsPopupOpen)}
            >
                <span>Гости</span>

                <input
                    type='text'
                    placeholder='2 взрослых'
                    defaultValue={guestsText}
                    readOnly
                />
                {isGuestsPopupOpen && (
                    <GuestsPopup
                        isOpen={isGuestsPopupOpen}
                        guests={guests}
                        setGuests={setGuests}
                        guestsText={guestsText}
                        setGuestsText={setGuestsText}
                    />
                )}
            </label>
            <button className={styles.btn}>
                <SearchIcon className={styles.icon} />
                <span>Поиск</span>
            </button>
        </div>
    );
};

export default Search;
