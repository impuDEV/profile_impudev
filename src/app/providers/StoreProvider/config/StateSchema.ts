import {
	AnyAction,
	CombinedState,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { LoginSchema } from '@/features/AuthByUsername'
import { UISchema } from '@/features/UI'
import { CounterSchema } from '@/entities/Counter'
import { UserSchema } from '@/entities/User'
import { rtkApi } from '@/shared/api/rtkApi'

export interface StateSchema {
	counter: CounterSchema
	user: UserSchema
	ui: UISchema
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

	// Async reducers
	loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
	add: (key: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void

	// true - вмонтирован, false - демонтирован
	getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ThunkExtraArg {
	api: AxiosInstance
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThunkExtraArg
	state: StateSchema
}
