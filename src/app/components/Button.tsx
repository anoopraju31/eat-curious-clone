'use client'
import Link from 'next/link'
import { marquee } from '@/utils/animations'
import { motion, useAnimation } from 'framer-motion'

type Props = {
	title: string
	link: string
	isSmall?: boolean
}

const Button = ({ title, link, isSmall }: Props) => {
	const controls = useAnimation()
	const handleMouseEnterControls = () => {
		controls.start('animate')
	}

	const handleMouseLeaveControls = () => {
		controls.start('initial')
	}

	return (
		<Link
			onMouseEnter={handleMouseEnterControls}
			onMouseLeave={handleMouseLeaveControls}
			href={link}
			className={`relative group font-heading-narrow font-extrabold text-center ${
				isSmall ? 'text-base md:text-lg' : 'text-xl md:text-2xl'
			} bg-[var(--pink)] text-[var(--black)] px-[0.7em] pt-[0.2em] pb-[0.2em] tracking-[0.01em] uppercase rounded`}>
			<span className='opacity-0'> {title} </span>
			<span className='absolute top-0 left-0 bottom-0 w-full overflow-hidden pointer-events-none whitespace-nowrap'>
				<motion.span
					variants={marquee}
					initial='initial'
					animate={controls}
					className={`inline-block text-center px-[0.7em] pt-[0.2em] pb-[0.6em] ${
						isSmall ? 'text-base md:text-lg' : 'text-[20px] md:text-[24px]'
					}`}>
					{' '}
					{title}{' '}
				</motion.span>
				<motion.span
					variants={marquee}
					initial='initial'
					animate={controls}
					className={`inline-block text-center px-[0.7em] pt-[0.2em] pb-[0.6em] ${
						isSmall ? 'text-base md:text-lg' : 'text-[20px] md:text-[24px]'
					}`}>
					{' '}
					{title}{' '}
				</motion.span>
			</span>
		</Link>
	)
}

export default Button
