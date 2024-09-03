'use client';

import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<title>Colóquio 2023</title>
				<link
					rel='icon'
					href='/bee.svg'
					sizes='any'
				/>
			</head>
			<body className={inter.className}>
				<SessionProvider>{children}</SessionProvider>
			</body>
		</html>
	);
}
