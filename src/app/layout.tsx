import type { Metadata } from 'next';

import { Poppins as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import './globals.css';

export const fontSans = FontSans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: 'WiSchool',
	description: 'The Best Online School',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={cn('h-screen font-sans', fontSans.variable)}>
				<Navbar />
				<main className='min-h-full relative'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
