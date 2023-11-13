import './globals.css';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Head from 'next/head';

type Metadata = {
    title: string;
    description: string;
    googlesiteVerification: string;
    icon: string;
};

export const metadata: Metadata = {
    title: 'DRIVERAVE',
    description: 'Аренда жилья и автомобилей от владельцев',
    googlesiteVerification: 'GiyDA7tYajhcN5A2OsSLFIa_cHbhYhkeH9cMvTwaih8',
    icon: '../public/favicon.ico',
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
