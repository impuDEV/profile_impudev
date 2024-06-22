import { lazy } from 'react'

export const AdminPanelPageAsync = lazy(() => import('./AdminPanelPage'))

// import { lazy } from 'react'
//
// export const AdminPanelPageAsync = lazy(() => new Promise((resolve) => {
// eslint-disable-next-line no-tabs
// 	// @ts-ignore
// eslint-disable-next-line no-tabs
// 	setTimeout(() => resolve(import('./AdminPanelPage')), 1500)
// }))
