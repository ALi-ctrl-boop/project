import React from 'react'

interface IModal {
	isOpen?: boolean
	children: React.ReactNode
}

export const Modal = ({ isOpen, children }: IModal) => {
	return (
		<div
			className={`fixed w-full h-full bg-black bg-opacity-80 left-0 top-0 z-20 flex items-center justify-center flex-col transition duration-300  
			${!isOpen ? '-translate-y-[100%]' : 'translate-y-[0]'}
`}
		>
			{children}
		</div>
	)
}
