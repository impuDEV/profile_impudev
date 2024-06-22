import { ButtonHTMLAttributes, memo } from 'react'
import ThemeIcon from '@/shared/assets/icons/sun-and-moon.svg?react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
	const { className } = props
	const { theme, toggleTheme } = useTheme()
	return (
		<Button
			variant={ButtonTheme.GHOST_INVERTED}
			className={classNames('', {}, [className])}
			onClick={toggleTheme}
		>
			<ThemeIcon />
		</Button>
	)
})
