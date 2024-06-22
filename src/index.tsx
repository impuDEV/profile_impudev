import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '@/app/App'
import '@/app/styles/index.scss'
import './shared/config/i18n/i18n'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'

const container = document.getElementById('root')

if (!container) {
	throw new Error(
		'Контейнер root не найден. Не удалось вмонтировать реакт приложение',
	)
}
const root = createRoot(container)

root.render(
	<BrowserRouter>
		<StoreProvider>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</StoreProvider>
	</BrowserRouter>,
)
export { Theme } from '@/shared/const/theme'