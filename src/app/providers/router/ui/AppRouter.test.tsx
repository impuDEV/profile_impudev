import { screen } from '@testing-library/react'
import AppRouter from './AppRouter'
import { getRouteAbout, getRouteAdminPanel } from '@/shared/const/router'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { UserRole } from '@/entities/User'

describe('app/router/AppRouter', () => {
	test('Страница должна отрендериться', async () => {
		componentRender(<AppRouter />, {
			route: getRouteAbout(),
		})

		const page = await screen.findByTestId('AboutPage')
		expect(page).toBeInTheDocument()
	})

	test('Страница не найдена', async () => {
		componentRender(<AppRouter />, {
			route: '/asdfgas',
		})

		const page = await screen.findByTestId('NotFoundPage')
		expect(page).toBeInTheDocument()
	})

	test('Редирект неавторизованного пользователя', async () => {
		componentRender(<AppRouter />, {
			route: getRouteAdminPanel(),
		})

		const page = await screen.findByTestId('MainPage')
		expect(page).toBeInTheDocument()
	})

	test('Доступ запрещён (отсутствует роль)', async () => {
		componentRender(<AppRouter />, {
			route: getRouteAdminPanel(),
			initialState: {
				user: { _inited: true, authData: {} },
			},
		})

		const page = await screen.findByTestId('ForbiddenPage')
		expect(page).toBeInTheDocument()
	})

	test('Доступ разрешён (присутствует роль)', async () => {
		componentRender(<AppRouter />, {
			route: getRouteAdminPanel(),
			initialState: {
				user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
			},
		})

		const page = await screen.findByTestId('AdminPanelPage')
		expect(page).toBeInTheDocument()
	})
})
