import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'DRIVERAVE',
    description: 'Аренда жилья и автомобилей от владельцев',
    icons: {
        icon: '../app/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ru'>
            <Head>
                <link rel='icon' type='image/ico' href='/favicon.ico' />
            </Head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
