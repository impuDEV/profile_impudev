import { ButtonHTMLAttributes, memo, ReactNode } from 'react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
	GHOST = 'ghost',
	GHOST_INVERTED = 'ghostInverted',
	OUTLINE = 'outline',
	OUTLINE_RED = 'outline_red',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	/**
	 * Вариация кнопки. Отвечает за визуал (в рамке, без стилей, инвертированный цвет...)
	 */
	variant?: ButtonTheme
	/**
	 * Флаг делающий кнопку квадратной
	 */
	square?: boolean
	/**
	 * Размер кнопки в соответвии с дизайн системой
	 */
	size?: ButtonSize
	/**
	 * Флаг отключающий кнопку
	 */
	disabled?: boolean
	/**
	 * Контент кнопки
	 */
	children?: ReactNode
	/**
	 * Увеличивает кнопку на всю свободную ширину
	 */
	fullWidth?: boolean
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		variant = ButtonTheme.OUTLINE,
		square,
		disabled,
		fullWidth,
		size = ButtonSize.M,
		...otherProps
	} = props

	const mods: Mods = {
		[cls[variant]]: true,
		[cls.square]: square,
		[cls[size]]: true,
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth,
	}

	return (
		<button
			type="button"
			className={classNames(cls.Button, mods, [className])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	)
})
