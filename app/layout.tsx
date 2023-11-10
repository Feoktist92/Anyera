import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
    title: 'DRIVERAVE',
    description: 'Аренда жилья и автомобилей от владельцев',
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
