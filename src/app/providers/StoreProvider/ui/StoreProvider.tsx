import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { createReduxStore } from '../config/store'
import { StateSchema } from '../config/StateSchema'

interface StoreProviderProps {
	children?: ReactNode
	initialSate?: DeepPartial<StateSchema>
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
	const { children, initialSate, asyncReducers } = props

	const store = createReduxStore(
		initialSate as StateSchema,
		asyncReducers as ReducersMapObject<StateSchema>,
	)

	// console.log('RENDER')

	return <Provider store={store}>{children}</Provider>
}
