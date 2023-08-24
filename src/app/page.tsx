import { Curious, Hero, Inspiring } from './(home)/sections'
import { BrandsCarousel, SpinnerSticker, Ticker } from './components'

export default function Home() {
	return (
		<div className='h-[2000vh] bg-[var(--black)] '>
			<Hero />
			<main className='w-full mx-auto'>
				<Ticker />
				<SpinnerSticker />
				<BrandsCarousel />
				{/* Sections */}
				<Curious />
				<Inspiring />
			</main>
		</div>
	)
}
