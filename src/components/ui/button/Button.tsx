import classNames from 'classnames'
import React, { ReactNode } from 'react'
import './styles.css'

interface IButton {
	children: React.ReactElement | ReactNode
	variant?: 'primary' | 'secondary' | 'icon'
	sx?: string
	onClick?: () => void
}

export const Button = ({
	children,
	variant = 'primary',
	sx,
	onClick,
}: IButton) => {
	const className = classNames('btn', {
		'btn-primary': variant === 'primary',
		'btn-secondary': variant === 'secondary',
		'btn-icon': variant === 'icon',
		[sx || '']: !!sx,
	})

	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	)
}
