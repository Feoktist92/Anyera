import { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'DRIVERAVE',
    description: 'Аренда жилья и автомобилей от владельцев',
    icons: {
        icon: {
            url: './favicon.ico',
        },
        shortcut: {
            url: '../public/favicon.svg',
        },
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'GiyDA7tYajhcN5A2OsSLFIa_cHbhYhkeH9cMvTwaih8',
    },
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ru'>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
