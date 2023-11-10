'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Search from '../Search/Search';
import styles from './Main.module.scss';
import Link from 'next/link';

const Main = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }, [controls]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <main className={styles.root}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.title}
                        initial={{ opacity: 0, y: -50 }}
                        animate={controls}
                    >
                        <div className={styles.top}>
                            Ut enim ad minim veniam
                        </div>
                        <Link href='/about'>
                            <h1 className={styles.h1}>
                                Duis aute irure dolor in reprehenderit
                            </h1>
                        </Link>

                        <div className={styles.bottom}>
                            Duis aute irure dolor in reprehenderit
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.search}
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                    >
                        <Search />
                    </motion.div>
                </div>
            </main>
        </motion.div>
    );
};

export default Main;
