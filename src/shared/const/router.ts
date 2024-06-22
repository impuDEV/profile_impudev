export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	ADMIN_PANEL = 'admin_panel',
	FORBIDDEN = 'forbidden',

	// last
	NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteAdminPanel = () => '/admin'
export const getRouteForbidden = () => '/forbidden'
