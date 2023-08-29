import './globals.css'
import type { Metadata } from 'next'
import { Footer, Navbar, SpinnerSticker } from './components'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<head>
				<link rel='stylesheet' href='https://use.typekit.net/sqg3ceb.css' />
			</head>
			<body className='bg-[var(--white)] leading-[1.6em] font-light font-text-font text-lg'>
				<Navbar />
				<SpinnerSticker />
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	)
}
