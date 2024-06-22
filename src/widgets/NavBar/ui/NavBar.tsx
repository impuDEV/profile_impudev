import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher'

interface NavBarProps {
	className?: string
}

export const NavBar = memo((props: NavBarProps) => {
	const { className } = props
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	return (
		<header className={classNames(cls.NavBar, {}, [className])}>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} short />
			</div>
			<Button
				variant={ButtonTheme.GHOST_INVERTED}
				className={cls.links}
				onClick={onShowModal}
			>
				{t('Войти')}
			</Button>
		</header>
	)
})
