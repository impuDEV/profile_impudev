import { Story } from '@storybook/react'
import { loginReducer } from '@/features/AuthByUsername/testing'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
}

export const StoreDecorator =
	(state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
	(StoryComponent: Story) =>
		(
			<StoreProvider
				initialSate={state}
				asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
			>
				<StoryComponent />
			</StoreProvider>
		)
