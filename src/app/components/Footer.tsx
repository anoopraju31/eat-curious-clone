'use client'

import { useContext } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs'
import { context } from './Context'
import { FeedMeMore } from '.'
import { isValidProductsRoute } from '@/utils/routeCheck'

const Footer = () => {
	const pathName = usePathname()
	const values = useContext(context)
	const style = { '--color': values?.backgroundColor } as React.CSSProperties

	return (
		<footer
			id='footer'
			style={style}
			className={`w-full text-[var(--black)] pt-[30px] 600:py-[40px] pb-[40px] 600:pb-[50px] lg:py-[60px] xl:pt-[90px] z-[99] relative overflow-hidden text-center lg:flex lg:flex-col lg:justify-center before:content-[""] before:block before:absolute before:w-[150vw] before:left-1/2 before:top-0 before:h-0 before:pb-[132%] before:-translate-x-1/2 ${
				isValidProductsRoute(pathName)
					? 'before:bg-[var(--color)]'
					: 'before:bg-[var(--pink)]'
			} footer-bg-green before:rounded-t-[150%] before:z-20 `}>
			<div className='w-full mx-auto px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] relative z-20 md:flex md:flex-wrap md:flex-row text-[0.9rem] border-b-2 border-[rgba(4,47,26,0.1)] '>
				<div className='w-full h-auto lg:mb-[50px] overflow-hidden '>
					<FeedMeMore />
				</div>

				<div className='w-full py-[50px]'>
					<form action='/' className='w-full flex flex-col md:flex-row gap-4'>
						<div className='flex-1'>
							<label htmlFor='name' className='hidden'>
								{' '}
								Name{' '}
							</label>
							<input
								type='text'
								id='name'
								placeholder='Full Name'
								className='shrink-0 w-full h-auto pt-[0.7rem] pb-4 px-[1.3rem] border-none outline-none shadow-none font-semibold font-heading-narrow text-left tracking-[0.01em] uppercase bg-[var(--white)] text-[var(--black)] text-base md:text-lg leading-4 rounded'
							/>
						</div>

						<div className='flex-1'>
							<label htmlFor='email' className='hidden'>
								{' '}
								email{' '}
							</label>
							<input
								type='email'
								id='email'
								placeholder='email address'
								className='shrink-0 w-full h-auto pt-[0.7rem] pb-4 px-[1.3rem] border-none outline-none shadow-none font-semibold font-heading-narrow text-left tracking-[0.01em] uppercase bg-[var(--white)] text-[var(--black)] text-base md:text-lg leading-4 rounded'
							/>
						</div>

						<div className=''>
							<button className='min-w-[120px] w-full h-full pt-[0.2rem] pb-[0.6rem] px-[0.7rem] bg-[var(--black)] text-[var(--white)] rounded font-heading-narrow font-bold outline-none border-none cursor-pointer text-center text-xl'>
								{' '}
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>

			<div
				style={{
					backgroundColor: isValidProductsRoute(pathName)
						? values?.backgroundColor
						: '#ff73b5',
				}}
				className='w-full mx-auto px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] z-50 relative text-[var(--black)] bg-[var(--pink)] py-[30px] flex flex-col md:flex-row justify-center md:justify-between items-center  gap-[30px]'>
				<div className='flex flex-col md:flex-row justify-center items-center gap-[30px]'>
					<div className='w-full flex justify-center'>
						<ul className='flex justify-center gap-4 text-lg'>
							<li>
								<a
									href='https://www.instagram.com'
									rel='noopener'
									target='_blank'>
									<span className='sr-only'> Instagram </span>
									<BsInstagram />
								</a>
							</li>
							<li>
								<a
									href='https://wwww.facebook.com'
									rel='noopener'
									target='_blank'>
									<span className='sr-only'> Facebook </span>
									<BsFacebook />
								</a>
							</li>
							<li>
								<a
									href='https://www.linkedin.com'
									rel='noopener'
									target='_blank'>
									<span className='sr-only'> LinkedIn </span>
									<BsLinkedin />
								</a>
							</li>
						</ul>
					</div>

					<div className=''>
						<Link
							href='/privacy-policy/'
							className='text-base md:text-[18px] leading-[1.2rem] tracking-[0.01em] font-heading-narrow whitespace-nowrap uppercase'>
							Privacy Policy
						</Link>
					</div>
				</div>

				<div className='flex flex-col 600:flex-row justify-center gap-4 text-base md:text-[18px] leading-[1.2rem] tracking-[0.01em] font-heading-narrow whitespace-nowrap'>
					<p> © EAT CURIOUS 2023 </p>
					<div className='border-r-2 border-[var(--black)] hidden 600:block'></div>
					<a href='https://fiasco.design/'> DESIGNED BY FIASCO DESIGN </a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
