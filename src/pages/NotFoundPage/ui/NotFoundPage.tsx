import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
// import { Navigate } from 'react-router-dom'
import { Page } from '@/widgets/Page'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
	className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
	const { t } = useTranslation()
	return (
		// for single page
		// <Navigate to="/" replace={true} />

		<Page
			data-testid="NotFoundPage"
			className={classNames(cls.NotFoundPage, {}, [className])}
		>
			{t('Page not found')}
		</Page>
	)
}
