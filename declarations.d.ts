declare module '@splidejs/react-splide' {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export const Splide: any
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export const SplideSlide: any
}

declare module 'react-mouse-particles' {
	import { FC } from 'react'

	interface MouseParticlesProps {
		g?: number
		num?: number
		color?: string
		cull?: string
	}

	const MouseParticles: FC<MouseParticlesProps>
	export default MouseParticles
}
