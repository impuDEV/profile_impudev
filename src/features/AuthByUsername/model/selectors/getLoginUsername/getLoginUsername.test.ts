import { StateSchema } from '@/app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername.test', () => {
	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: 'qwerasd',
			},
		}
		expect(getLoginUsername(state as StateSchema)).toEqual('qwerasd')
	})
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getLoginUsername(state as StateSchema)).toEqual('')
	})
})
