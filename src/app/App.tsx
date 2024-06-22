import { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getUserInited, userActions } from '@/entities/User'
import { AppRouter } from './providers/router'
import { NavBar } from '@/widgets/NavBar'

function App() {
	const { theme } = useTheme()
	const dispatch = useAppDispatch()
	const inited = useSelector(getUserInited)

	useEffect(() => {
		dispatch(userActions.initAuthData())
	}, [dispatch])

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<NavBar />
				<div className="content-page">{inited && <AppRouter />}</div>
			</Suspense>
		</div>
	)
}

export default App
